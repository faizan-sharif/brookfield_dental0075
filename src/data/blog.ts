export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogData: BlogPost[] = [
  {
    id: '1',
    title: 'Dental Veneers for Missing Teeth: Pros, Cons and Alternatives',
    excerpt: 'Dental veneers are thin, custom-made shells that cover the front surface of teeth, instantly improving color, shape, and overall appearance...',
    category: 'Cosmetic Dentistry',
    date: 'Aug 15, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Top 5 Reasons to Replace Missing Teeth Immediately',
    excerpt: 'Replacing missing teeth is essential for maintaining optimal oral health and overall well-being. Leaving gaps can cause jawbone erosion...',
    category: 'Dental Implants',
    date: 'Aug 10, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'How to Get Rid of Oral Herpes Quickly: Fast Relief Methods',
    excerpt: 'Oral herpes, commonly caused by HSV-1, is a widespread condition. Discover fast relief remedies, antiviral therapies, and prevention tips...',
    category: 'Oral Health',
    date: 'Jul 28, 2025',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Fixing a Front Tooth Cavity: Options and Tips',
    excerpt: 'Discovering a cavity on a front tooth can feel frustrating. Modern tooth-colored composite resins restore invisible aesthetics effortlessly...',
    category: 'Restorative Dentistry',
    date: 'Jul 14, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Gumline Cavity: The Silent Threat to Your Smile',
    excerpt: 'People often ignore cavities along the gumline until sensitivity sets in. Learn how deep scaling and early filling stop root decay...',
    category: 'General Dentistry',
    date: 'Jun 30, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Pediatric Dental Checkups: Essential Tips for Parents',
    excerpt: 'Early dental care builds lifelong healthy habits. Discover how our gentle pediatric checkups ensure stress-free visits for kids...',
    category: 'Pediatric Dentistry',
    date: 'Jun 18, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
  },
];
