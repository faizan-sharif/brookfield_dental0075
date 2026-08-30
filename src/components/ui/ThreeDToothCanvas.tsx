'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeDToothCanvasProps {
  className?: string;
  autoRotate?: boolean;
  showBadge?: boolean;
}

export function ThreeDToothCanvas({
  className = '',
  autoRotate = true,
  showBadge = false,
}: ThreeDToothCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.2, 5.2);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // Clean container before appending
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 4. Lighting Setup (Studio Lighting for Enamel Gloss)
    const ambientLight = new THREE.AmbientLight(0xf0f9ff, 1.2);
    scene.add(ambientLight);

    // Primary Key Light (Warm White)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(4, 6, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Fill Light (Soft Teal/Cyan)
    const fillLight = new THREE.DirectionalLight(0x06b6d4, 1.5);
    fillLight.position.set(-5, -2, 3);
    scene.add(fillLight);

    // Rim Backlight (Vibrant Cyan Backlight)
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.8);
    rimLight.position.set(0, 4, -5);
    scene.add(rimLight);

    // Bottom Bounce Light (Warm Ivory)
    const bounceLight = new THREE.DirectionalLight(0xfffbeb, 0.8);
    bounceLight.position.set(0, -6, 2);
    scene.add(bounceLight);

    // 5. Build Anatomical 3D Tooth Geometry
    const toothGroup = new THREE.Group();

    // Material: Realistic Enamel (MeshPhysicalMaterial)
    const enamelMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      emissive: 0x0f172a,
      emissiveIntensity: 0.05,
      roughness: 0.12,
      metalness: 0.02,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transmission: 0.15, // Subtle translucency
      ior: 1.48,
      reflectivity: 0.9,
      specularColor: new THREE.Color(0xffffff),
    });

    // Root Material (Slightly warmer ivory for roots)
    const rootMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfef9c3,
      roughness: 0.25,
      metalness: 0.01,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
      transmission: 0.05,
    });

    // --- Tooth Crown Geometry ---
    const crownGeo = new THREE.CylinderGeometry(1.05, 0.82, 1.2, 36, 24);
    const crownPositions = crownGeo.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < crownPositions.count; i++) {
      vertex.fromBufferAttribute(crownPositions, i);
      const angle = Math.atan2(vertex.z, vertex.x);
      const radius = Math.sqrt(vertex.x * vertex.x + vertex.z * vertex.z);

      // Top surface sculpting (cusps & grooves)
      if (vertex.y > 0.3) {
        // 4 Molar Cusps (4 peaks at 45 deg angles)
        const cuspFactor = Math.cos(2 * angle) * Math.sin(2 * angle);
        vertex.y += cuspFactor * 0.22 * (radius / 1.05);

        // Central Fovea (groove depression in middle)
        if (radius < 0.5) {
          vertex.y -= (0.5 - radius) * 0.45;
        }

        // Fissure lines
        vertex.x += Math.sin(angle * 4) * 0.03;
        vertex.z += Math.cos(angle * 4) * 0.03;
      }

      // Waist bulge
      if (vertex.y > -0.2 && vertex.y < 0.3) {
        const bulge = Math.sin(((vertex.y + 0.2) / 0.5) * Math.PI) * 0.12;
        vertex.x += (vertex.x / radius) * bulge;
        vertex.z += (vertex.z / radius) * bulge;
      }

      crownPositions.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    crownGeo.computeVertexNormals();

    const crownMesh = new THREE.Mesh(crownGeo, enamelMaterial);
    crownMesh.position.y = 0.4;
    crownMesh.castShadow = true;
    crownMesh.receiveShadow = true;
    toothGroup.add(crownMesh);

    // --- Tooth Roots Geometry (3 Root Prongs) ---
    const createRootPath = (
      start: THREE.Vector3,
      mid: THREE.Vector3,
      end: THREE.Vector3
    ) => {
      const curve = new THREE.CatmullRomCurve3([start, mid, end]);
      const tubeGeo = new THREE.TubeGeometry(curve, 20, 0.24, 16, false);
      const pos = tubeGeo.attributes.position;
      const v = new THREE.Vector3();

      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i);
        // Taper root towards tip
        const progress = (v.y - start.y) / (end.y - start.y);
        const taper = 1.0 - Math.pow(Math.max(0, progress), 1.2) * 0.75;
        v.x = start.x + (v.x - start.x) * taper;
        v.z = start.z + (v.z - start.z) * taper;
        pos.setXYZ(i, v.x, v.y, v.z);
      }
      tubeGeo.computeVertexNormals();
      return tubeGeo;
    };

    // Root 1 (Mesial Root)
    const root1Geo = createRootPath(
      new THREE.Vector3(0.35, -0.2, 0.25),
      new THREE.Vector3(0.55, -0.8, 0.3),
      new THREE.Vector3(0.4, -1.65, 0.15)
    );
    const root1Mesh = new THREE.Mesh(root1Geo, rootMaterial);
    toothGroup.add(root1Mesh);

    // Root 2 (Distal Root)
    const root2Geo = createRootPath(
      new THREE.Vector3(-0.35, -0.2, 0.25),
      new THREE.Vector3(-0.55, -0.8, 0.3),
      new THREE.Vector3(-0.4, -1.6, 0.15)
    );
    const root2Mesh = new THREE.Mesh(root2Geo, rootMaterial);
    toothGroup.add(root2Mesh);

    // Root 3 (Palatal Root)
    const root3Geo = createRootPath(
      new THREE.Vector3(0.0, -0.2, -0.35),
      new THREE.Vector3(0.0, -0.9, -0.55),
      new THREE.Vector3(0.0, -1.7, -0.45)
    );
    const root3Mesh = new THREE.Mesh(root3Geo, rootMaterial);
    toothGroup.add(root3Mesh);

    // Center tooth group
    toothGroup.position.set(0, 0.4, 0);
    toothGroup.scale.set(1.15, 1.15, 1.15);
    scene.add(toothGroup);

    // 6. Mouse Interaction & Animation Loop
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    let animFrameId: number;
    const clock = new THREE.Clock();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = x * 0.9;
      targetRotationX = -y * 0.6;
    };

    const handlePointerLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
      setIsHovered(false);
    };

    const handlePointerEnter = () => {
      setIsHovered(true);
    };

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('mouseleave', handlePointerLeave);
    container.addEventListener('mouseenter', handlePointerEnter);

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Rotation Interpolation (Damping)
      currentRotationX += (targetRotationX - currentRotationX) * 0.08;
      currentRotationY += (targetRotationY - currentRotationY) * 0.08;

      // Idle Rotation + Floating Bobbing
      if (autoRotate && !isHovered) {
        toothGroup.rotation.y = elapsedTime * 0.6 + currentRotationY;
        toothGroup.rotation.x = Math.sin(elapsedTime * 0.8) * 0.15 + currentRotationX;
        toothGroup.position.y = 0.4 + Math.sin(elapsedTime * 1.5) * 0.08;
      } else {
        toothGroup.rotation.y = currentRotationY;
        toothGroup.rotation.x = currentRotationX;
        toothGroup.position.y = 0.4 + Math.sin(elapsedTime * 2.0) * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mouseleave', handlePointerLeave);
      container.removeEventListener('mouseenter', handlePointerEnter);

      // Clean up WebGL resources
      crownGeo.dispose();
      root1Geo.dispose();
      root2Geo.dispose();
      root3Geo.dispose();
      enamelMaterial.dispose();
      rootMaterial.dispose();
      renderer.dispose();
    };
  }, [autoRotate, isHovered]);

  return (
    <div
      className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}
    >
      {/* 3D WebGL Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />

      {/* Floating Interactive Badge (Optional) */}
      {showBadge && (
        <div className="absolute bottom-2 px-3 py-1 rounded-full bg-navy-900/80 backdrop-blur-md border border-white/20 text-[10px] font-bold text-cyan-300 pointer-events-none shadow-lg flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          Interactive 3D Molar Model • Drag to Rotate
        </div>
      )}
    </div>
  );
}
