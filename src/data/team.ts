export interface TeamMember {
  name: string;
  role: string;
  title: string;
  experience?: string;
  bio: string;
  specialties: string[];
  image: string;
}

export const teamData: TeamMember[] = [
  {
    name: 'Dr. Maqsood A. Chaudhry',
    role: 'Founder & CEO',
    title: 'Doctor of Dental Surgery (DDS)',
    experience: '32+ Years Experience',
    bio: 'Dr. Maqsood A. Chaudhry is a dedicated and compassionate dentist with over 32 years of clinical excellence. Committed to cutting-edge technology and gentle care, he has placed hundreds of implants and expanded dental access to underserved communities across Northern Virginia.',
    specialties: ['Dental Implants', 'Full Arch Restorations', 'Cosmetic Dentistry', 'Complex Oral Surgery'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Dr. Ahmad Hawasli',
    role: 'Periodontist',
    title: 'Board Certified Periodontist',
    experience: '15+ Years Experience',
    bio: 'Specializing in advanced periodontics, bone grafting, and dental implantology, Dr. Hawasli provides precision surgical interventions for complex gum and bone regeneration.',
    specialties: ['Periodontal Surgery', 'Bone Grafting', 'Implant Maintenance', 'Gum Tissue Regeneration'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Dr. Ameena Chimata',
    role: 'Associate Dentist',
    title: 'Doctor of Dental Medicine (DMD)',
    experience: '10+ Years Experience',
    bio: 'Dr. Chimata focuses on patient-centered preventive care, pediatric dentistry, clear aligners, and aesthetic smile enhancements with a gentle, soothing touch.',
    specialties: ['Invisalign Aligners', 'Pediatric Dentistry', 'Teeth Whitening', 'Restorative Dentistry'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Abdur Rauf Chaudry',
    role: 'Lead Dental Hygienist',
    title: 'Registered Dental Hygienist (RDH)',
    experience: '8+ Years Experience',
    bio: 'Abdur Rauf provides thorough oral hygiene therapies, deep cleanings, preventative patient education, and painless plaque management.',
    specialties: ['Deep Cleanings', 'Periodontal Maintenance', 'Oral Health Education', 'Fluoride Therapy'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
  },
];
