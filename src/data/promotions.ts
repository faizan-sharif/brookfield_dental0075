export interface Promotion {
  id: string;
  badge: string;
  title: string;
  price: string;
  originalPrice: string;
  description: string;
  details: string[];
  expires?: string;
  popular?: boolean;
}

export const promotionsData: Promotion[] = [
  {
    id: 'free-consultation',
    badge: 'NEW PATIENT SPECIAL',
    title: 'Free Oral Health Consultation',
    price: 'FREE',
    originalPrice: '$150 Value',
    description: 'Complimentary full dental evaluation, digital consultation, and custom treatment outline.',
    details: ['Includes dental examination', 'Digital consultation & treatment plan', 'New patients only', 'No obligation required'],
    expires: 'Limited Time Offer',
    popular: true,
  },
  {
    id: 'first-visit-20-off',
    badge: 'EXCLUSIVE SAVINGS',
    title: '20% OFF First Day Service',
    price: '20% OFF',
    originalPrice: 'Reg. Price',
    description: 'Receive 20% discount on any dental service rendered during your very first visit to our office.',
    details: ['Applies to any service on 1st visit', '20% less than competing Northern VA offices', 'Instant savings at checkout'],
    expires: 'Limited Time Offer',
    popular: true,
  },
  {
    id: 'zoom-whitening',
    badge: 'COSMETIC SPECIAL',
    title: 'Philips Zoom! Laser Whitening',
    price: '$400',
    originalPrice: '$1,000 Value',
    description: 'In-office laser smile brightening. Additional $40 mail-in rebate available from Philips while supplies last!',
    details: ['45-minute in-office session', 'Up to 8 shades lighter', '$40 Philips mail-in rebate option', 'Custom whitening tray guidance'],
    expires: 'End of Month',
  },
  {
    id: 'exam-xrays-95',
    badge: 'COMPREHENSIVE CHECKUP',
    title: '$95 Comprehensive Exam & X-Rays',
    price: '$95',
    originalPrice: '$300 Value',
    description: 'Full mouth digital X-rays, periodontal evaluation, and complete oral cancer screening.',
    details: ['Complete HD digital X-ray set', 'Comprehensive doctor exam', 'Oral cancer screening', 'Gum health check'],
    expires: 'Limited Time',
  },
];
