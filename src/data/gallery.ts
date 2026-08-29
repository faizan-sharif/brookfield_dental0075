export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: '1',
    title: 'Modern Dental Surgery Suite',
    category: 'Surgery',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: '3D Imaging & Digital Scanner',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Sterilization & Hygiene Station',
    category: 'Clinic',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Doctor Patient Consultation',
    category: 'Consultation',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Luxurious Patient Lounge',
    category: 'Clinic',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Zoom Whitening Treatment',
    category: 'Cosmetic',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'Implant Placement Procedure',
    category: 'Surgery',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '8',
    title: 'Dental Hygienist Care',
    category: 'Hygiene',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
  },
];
