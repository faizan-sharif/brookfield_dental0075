export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'implants' | 'cosmetic' | 'orthodontics' | 'general' | 'emergency';
  icon: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export const serviceGroups = [
  { id: 'all', name: 'All Services' },
  { id: 'implants', name: 'Dental Implants' },
  { id: 'cosmetic', name: 'Cosmetic Dentistry' },
  { id: 'orthodontics', name: 'Orthodontic & Aligners' },
  { id: 'general', name: 'General & Preventive' },
  { id: 'emergency', name: 'Emergency Care' },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'single-implants',
    title: 'Single & Multi-Tooth Implants',
    description: 'Restore missing teeth with natural-looking, durable titanium implants that preserve jawbone health and provide long-lasting stability.',
    category: 'implants',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    popular: true,
    features: ['Natural look & feel', 'Preserves jawbone density', 'Permanent lifetime solution', '20% lower cost than average'],
  },
  {
    id: 'all-on-4',
    title: 'All-On-4® Full Arch Implants',
    description: 'Replace an entire arch of teeth with just 4 strategically placed implants for immediate full smile restoration in one day.',
    category: 'implants',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    popular: true,
    features: ['Same-day fixed smile', 'No denture adhesive needed', 'Maximum chewing efficiency', 'Non-removable comfort'],
  },
  {
    id: 'snap-in-dentures',
    title: 'Snap-In Implant Dentures',
    description: 'A secure, removable solution anchored by implants to eliminate slip-ups, soreness, and messy glues.',
    category: 'implants',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    features: ['Enhanced stability', 'Easy removable cleaning', 'Prevents bone erosion', 'Budget-friendly implant option'],
  },
  {
    id: 'zoom-whitening',
    title: 'Philips Zoom! Teeth Whitening',
    description: 'Professional in-office laser whitening that brightens your smile up to 8 shades lighter in just 45 minutes.',
    category: 'cosmetic',
    icon: 'Sun',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    popular: true,
    features: ['Up to 8 shades whiter', 'Safe for sensitive teeth', '$40 Phillips rebate available', 'Instant dramatic results'],
  },
  {
    id: 'lumineers-veneers',
    title: 'Lumineers & Porcelain Veneers',
    description: 'Ultra-thin custom ceramic shells crafted to fix gaps, chips, discolored teeth, and uneven alignment for a red-carpet smile.',
    category: 'cosmetic',
    icon: 'Smile',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
    features: ['Minimal tooth preparation', 'Stain-resistant porcelain', 'Custom shade matching', '15+ year longevity'],
  },
  {
    id: 'invisalign',
    title: 'ClearCorrect & Invisalign Clear Braces',
    description: 'Discreet, virtually invisible aligners that straighten your teeth comfortably without metal brackets or wires.',
    category: 'orthodontics',
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    popular: true,
    features: ['100% clear removable trays', 'No dietary restrictions', 'Faster average treatment times', '3D digital scan modeling'],
  },
  {
    id: 'crowns-bridges',
    title: 'Same-Day Dental Crowns & Bridges',
    description: 'Custom-crafted zirconia and porcelain restorations that rebuild broken teeth or bridge gaps seamlessly.',
    category: 'cosmetic',
    icon: 'Shield',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop',
    features: ['Metal-free biocompatible materials', 'Precision CAD/CAM fit', 'Restores full chewing power'],
  },
  {
    id: 'emergency-dentistry',
    title: '24/7 Urgent Emergency Dental Care',
    description: 'Immediate relief for severe toothaches, chipped teeth, knocked-out teeth, broken crowns, or dental trauma.',
    category: 'emergency',
    icon: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
    popular: true,
    features: ['Same-day emergency walk-ins', 'Pain management', 'Gentle sedation available', 'Direct hotline support'],
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning & Periodontal Care',
    description: 'Advanced scaling and root planing treatment to halt gum disease, control inflammation, and preserve tooth roots.',
    category: 'general',
    icon: 'CheckCircle2',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
    features: ['Gentle ultrasonic scaling', 'Laser periodontal therapy', 'Prevents tooth loss', 'Fresh breath restoration'],
  },
  {
    id: 'root-canal',
    title: 'Pain-Free Root Canal Treatment',
    description: 'Save infected or damaged teeth with modern, painless endodontic therapy that relieves severe pulp pain.',
    category: 'general',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    features: ['Instant pain relief', 'Saves natural tooth structure', '98% success rate', 'Gentle micro-instruments'],
  },
];

export const problemCards = [
  {
    problem: 'Missing One or More Teeth?',
    solution: 'Single & Multi-Tooth Implants offer permanent strength and natural appearance.',
    cta: 'Explore Implants',
    link: '/implants',
  },
  {
    problem: 'Stained or Yellowing Teeth?',
    solution: 'Philips Zoom! In-Office Whitening gives you a brilliant smile in 45 minutes.',
    cta: 'Claim $400 Special',
    link: '/promotions',
  },
  {
    problem: 'Crooked Teeth or Bite Issue?',
    solution: 'ClearCorrect & Invisalign clear aligners straighten discreetly with no metal.',
    cta: 'Free Consult',
    link: '/contact',
  },
  {
    problem: 'Severe Toothache or Trauma?',
    solution: 'Same-day emergency dental appointments available immediately.',
    cta: 'Call 703-913-1377',
    link: 'tel:703-913-1377',
  },
];
