export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  treatment: string;
  quote: string;
  verified: boolean;
  date: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    location: 'Falls Church, VA',
    rating: 5,
    treatment: 'All-On-4 Dental Implants',
    quote: 'Dr. Chaudhry and his staff literally changed my life. I was terrified of dental work, but the glass-like calm environment and gentleness made my implant surgery painless. My new smile looks completely natural!',
    verified: true,
    date: '2 weeks ago',
  },
  {
    id: '2',
    author: 'Michael R.',
    location: 'Springfield, VA',
    rating: 5,
    treatment: 'Zoom! Whitening & Veneers',
    quote: 'I paid 20% less than two other quotes in Northern VA and received top-tier care. The Zoom whitening gave me immediate results before my wedding. Highly recommended!',
    verified: true,
    date: '1 month ago',
  },
  {
    id: '3',
    author: 'Elena Rostova',
    location: 'Alexandria, VA',
    rating: 5,
    treatment: 'Emergency Root Canal',
    quote: 'I had unbearable tooth pain on a Saturday morning. Brookfield Dental got me in within 45 minutes and relieved the pain immediately. Truly 5-star emergency service.',
    verified: true,
    date: '3 weeks ago',
  },
  {
    id: '4',
    author: 'David Chen',
    location: 'Annandale, VA',
    rating: 5,
    treatment: 'ClearCorrect Aligners',
    quote: 'Seamless experience from digital scanning to final alignment tray. The staff is professional, polite, and the office is ultra-modern and spotless.',
    verified: true,
    date: '2 months ago',
  },
];
