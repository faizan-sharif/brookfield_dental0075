export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string[];
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
    author: 'Dr. Maqsood A. Chaudhry, DDS',
    content: [
      'Dental veneers are paper-thin, custom-crafted shells of medical-grade porcelain or composite resin designed to fit over the front facing portion of your teeth. They offer a transformative solution for discolored, chipped, misaligned, or unevenly spaced teeth.',
      'While veneers are ideal for cosmetic enhancements, patients often wonder if veneers can replace missing teeth. Strictly speaking, traditional veneers require an existing natural tooth structure for bonding. If a tooth is completely missing, alternatives like Dental Implants, All-On-4®, or Porcelain Dental Bridges are required to restore function and jawbone integrity.',
      'For patients with minor gaps, chipped edges, or cosmetic irregularities, veneers offer an unmatched aesthetic transformation that mimics natural tooth enamel translucency. At Brookfield Dental Associates, we customize every veneer shade to perfectly harmonize with your smile.',
      'Key Benefits of Porcelain Veneers:',
      '• Instant Smile Makeover: Corrects stains, gaps, and chips in just 2 appointments.',
      '• Stain Resistant: High-grade porcelain resists coffee, tea, and tobacco discoloration.',
      '• Long-Lasting Durability: With proper hygiene, porcelain veneers last 10–15+ years.',
      'If you have a completely missing tooth, Dr. Maqsood A. Chaudhry recommends evaluating single dental implants or implant-supported bridges to prevent surrounding teeth from shifting.'
    ]
  },
  {
    id: '2',
    title: 'Top 5 Reasons to Replace Missing Teeth Immediately',
    excerpt: 'Replacing missing teeth is essential for maintaining optimal oral health and overall well-being. Leaving gaps can cause jawbone erosion...',
    category: 'Dental Implants',
    date: 'Aug 10, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    author: 'Dr. Ahmad Hawasli, Board Certified Periodontist',
    content: [
      'Losing a tooth is more than just a cosmetic inconvenience—it starts a domino effect that impacts your entire oral health structure. Whether due to decay, gum disease, or trauma, leaving a gap untreated can lead to severe long-term dental issues.',
      '1. Prevents Jawbone Resorption & Bone Loss:',
      'When a tooth is extracted or lost, the underlying jawbone loses the natural stimulation provided by tooth roots. Over time, the bone resorbs (shrinks), causing facial sagging and premature aging. Dental implants act as artificial roots to preserve healthy bone mass.',
      '2. Stops Surrounding Teeth from Tilting:',
      'Teeth naturally rely on adjacent neighbors for support. Gaps cause nearby teeth to tilt, drift, and loosen, throwing off your bite alignment and increasing the risk of TMJ jaw discomfort.',
      '3. Restores Natural Chewing & Digestive Health:',
      'Missing molars impair your ability to break down nutritious foods efficiently, placing extra strain on your digestive system. Implants restore 100% natural bite force.',
      '4. Protects Against Gum Disease & Cavities:',
      'Drifting teeth create hard-to-clean crevices where food particles and plaque accumulate rapidly, elevating periodontal disease risks.',
      '5. Regains Complete Smile Confidence:',
      'Replacing missing teeth with porcelain implants or bridges restores your natural smile and speech clarity so you can smile without hesitation.'
    ]
  },
  {
    id: '3',
    title: 'How to Get Rid of Oral Herpes Quickly: Fast Relief Methods',
    excerpt: 'Oral herpes, commonly caused by HSV-1, is a widespread condition. Discover fast relief remedies, antiviral therapies, and prevention tips...',
    category: 'Oral Health',
    date: 'Jul 28, 2025',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    author: 'Dr. Ameena Chimata, DMD',
    content: [
      'Oral herpes, caused by the HSV-1 virus, manifests as small, painful fluid-filled blisters (cold sores) around the lips and mouth. While there is no instant magic cure, initiating targeted treatments at the first tingling sensation significantly shortens healing times.',
      'Effective Cold Sore Treatment Methods:',
      '• Prescription Antiviral Medications: Oral antivirals like Valacyclovir or Acyclovir prescribed by your dentist dramatically accelerate healing when taken within 24 hours of onset.',
      '• Topical Treatments: Over-the-counter creams containing Docosanol (Abreva) reduce blister swelling and pain duration.',
      '• Ice Therapy: Applying an ice pack wrapped in a clean towel for 5-10 minutes calms local inflammation and numbs burning discomfort.',
      '• Avoid Acids & Salty Foods: Citrus fruits, tomatoes, and spicy foods irritate open sores and prolong healing.',
      'At Brookfield Dental Associates, we offer gentle laser cold sore treatments that stop lesions in their tracks and promote rapid tissue regeneration without needle discomfort.'
    ]
  },
  {
    id: '4',
    title: 'Fixing a Front Tooth Cavity: Options and Tips',
    excerpt: 'Discovering a cavity on a front tooth can feel frustrating. Modern tooth-colored composite resins restore invisible aesthetics effortlessly...',
    category: 'Restorative Dentistry',
    date: 'Jul 14, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    author: 'Dr. Maqsood A. Chaudhry, DDS',
    content: [
      'Front teeth cavities are a common concern for patients because they directly impact your smile aesthetics. Unlike back molars where silver amalgam was historically used, front teeth require seamless, tooth-colored restorative materials.',
      'Treatment Solutions for Front Tooth Decay:',
      '1. Composite Resin Fillings: High-grade micro-hybrid composite resin is custom-shaded to match your exact enamel hue. Dr. Chaudhry meticulously layers and polishes the resin for an invisible restoration.',
      '2. Dental Bonding: For decay near the biting edges, bonding restores both structural shape and translucency in a single 45-minute visit.',
      '3. Porcelain Crowns or Veneers: If decay covers a large surface area, custom ceramic crowns or porcelain veneers provide full-coverage strength and stain resistance.',
      'Early detection via regular digital X-rays allows us to treat front cavities when they are small, preserving maximum natural enamel.'
    ]
  },
  {
    id: '5',
    title: 'Gumline Cavity: The Silent Threat to Your Smile',
    excerpt: 'People often ignore cavities along the gumline until sensitivity sets in. Learn how deep scaling and early filling stop root decay...',
    category: 'General Dentistry',
    date: 'Jun 30, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
    author: 'Abdur Rauf Chaudry, RDH',
    content: [
      'Cavities that form near or beneath the gumline are particularly treacherous because they target soft root dentin which is far less dense than top enamel.',
      'Why Gumline Cavities Develop:',
      '• Gum Recession: Exposes vulnerable root surfaces to bacteria.',
      '• Plaque Accumulation along the Margin: Inadequate flossing lets biofilm sit undisturbed.',
      '• High-Sugar Diet & Dry Mouth: Reduced saliva allows acidic plaque to erode root dentin rapidly.',
      'How We Treat Gumline Cavities:',
      'Our team cleanses root pockets with deep scaling and applies fluoride varnish or tooth-colored composite sealants to shield sensitive dentin. Professional cleanings every 6 months keep gumline decay away.'
    ]
  },
  {
    id: '6',
    title: 'Pediatric Dental Checkups: Essential Tips for Parents',
    excerpt: 'Early dental care builds lifelong healthy habits. Discover how our gentle pediatric checkups ensure stress-free visits for kids...',
    category: 'Pediatric Dentistry',
    date: 'Jun 18, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    author: 'Dr. Ameena Chimata, DMD',
    content: [
      'Establishing positive dental experiences in early childhood sets the foundation for a lifetime of healthy smiles. The American Dental Association recommends scheduling your child’s first visit by their first birthday or within six months of their first tooth appearing.',
      'What to Expect During a Gentle Kid-Friendly Checkup:',
      '• Friendly Enamel Inspection: Checking baby teeth for signs of early cavity formation or bite misalignment.',
      '• Gentle Cleaning & Fluoride Shield: Removing plaque and applying child-safe fluoride treatment to strengthen young enamel.',
      '• Dental Sealants: Applying protective liquid coatings over deep molar grooves to prevent 80% of childhood cavities.',
      '• Stress-Free Atmosphere: Our caring team ensures children feel calm, comfortable, and excited about caring for their teeth.'
    ]
  },
];
