import { siteConfig } from '@/data/site';
import { teamData } from '@/data/team';

export function getAIAssistantResponse(query: string): string {
  const q = query.toLowerCase().trim();

  // 1. Doctors / Team / Staff Queries
  if (
    q.includes('doctor') ||
    q.includes('team') ||
    q.includes('staff') ||
    q.includes('who works') ||
    q.includes('dentist') ||
    q.includes('chaudhry') ||
    q.includes('hawasli') ||
    q.includes('chimata') ||
    q.includes('rauf')
  ) {
    return (
      `Meet our expert team at Brookfield Dental:\n\n` +
      `• Dr. Maqsood A. Chaudhry (Founder & CEO, DDS): 32+ years experience placing implants & comprehensive dentistry.\n` +
      `• Dr. Ahmad Hawasli (Board Certified Periodontist): Specialist in gum surgery, bone grafting & implants.\n` +
      `• Dr. Ameena Chimata (Associate Dentist, DMD): Invisalign aligners, cosmetic smile design & family dentistry.\n` +
      `• Abdur Rauf Chaudry (Lead Hygienist, RDH): Deep cleanings & preventative hygiene.`
    );
  }

  // 2. Clinic Hours / Closed Days / Open Time Queries
  if (
    q.includes('hour') ||
    q.includes('open') ||
    q.includes('time') ||
    q.includes('schedule') ||
    q.includes('sunday') ||
    q.includes('thursday') ||
    q.includes('saturday') ||
    q.includes('closed') ||
    q.includes('weekend')
  ) {
    return (
      `📅 Our Official Office Hours:\n` +
      `• Mon, Tue, Wed, Fri: 9:00 AM – 5:00 PM\n` +
      `• Thursday: CLOSED\n` +
      `• Saturday: 8:00 AM – 4:00 PM\n` +
      `• Sunday: CLOSED\n\n` +
      `Emergency walk-ins are welcomed during open business hours!`
    );
  }

  // 3. Location / Address / Directions Queries
  if (
    q.includes('location') ||
    q.includes('where') ||
    q.includes('address') ||
    q.includes('springfield') ||
    q.includes('falls church') ||
    q.includes('alexandria') ||
    q.includes('direction') ||
    q.includes('map')
  ) {
    return (
      `📍 We are located at:\n` +
      `6120 Brandon Ave, Springfield, VA 22150\n\n` +
      `Conveniently serving Springfield, Falls Church, Alexandria, and surrounding Northern Virginia communities.`
    );
  }

  // 4. Phone / Contact / Email Queries
  if (
    q.includes('phone') ||
    q.includes('contact') ||
    q.includes('call') ||
    q.includes('number') ||
    q.includes('email') ||
    q.includes('reach')
  ) {
    return (
      `📞 Contact Us:\n` +
      `• Direct Reception: ${siteConfig.phonePrimary}\n` +
      `• Toll-Free: ${siteConfig.phoneTollFree}\n` +
      `• Email: ${siteConfig.email}\n` +
      `You can also book an appointment online via our Contact page!`
    );
  }

  // 5. Booking / Appointment Queries
  if (
    q.includes('book') ||
    q.includes('appointment') ||
    q.includes('reserve') ||
    q.includes('slot') ||
    q.includes('visit')
  ) {
    return (
      `🗓️ Booking an appointment is easy!\n` +
      `1) Click on 'Contact' in the top header or use our Quick Booking Bar.\n` +
      `2) Select your preferred Doctor, Date, and Time Slot.\n` +
      `3) Receive instant booking confirmation!`
    );
  }

  // 6. Dental Implants / All-on-4 Queries
  if (
    q.includes('implant') ||
    q.includes('all-on-4') ||
    q.includes('all on 4') ||
    q.includes('missing teeth') ||
    q.includes('denture') ||
    q.includes('graft')
  ) {
    return (
      `🦷 Dental Implants & Restorations:\n` +
      `Dr. Chaudhry & Dr. Hawasli specialize in Single Tooth Implants, Implant-Supported Bridges, Snap-In Dentures, and All-on-4® Full Arch restorations with 20% lower pricing than regional averages!`
    );
  }

  // 7. Teeth Whitening / Zoom Queries
  if (
    q.includes('white') ||
    q.includes('whitening') ||
    q.includes('zoom') ||
    q.includes('bleach') ||
    q.includes('stain')
  ) {
    return (
      `✨ Teeth Whitening Special:\n` +
      `We feature Philips Zoom! In-Office Whitening ($400 promo) that brightens teeth up to 8 shades in just 45 minutes, plus custom home whitening trays!`
    );
  }

  // 8. Invisalign / Clear Aligners Queries
  if (
    q.includes('invisalign') ||
    q.includes('aligner') ||
    q.includes('braces') ||
    q.includes('straight') ||
    q.includes('clearcorrect')
  ) {
    return (
      `😁 Clear Aligners & Invisalign:\n` +
      `Straighten your teeth comfortably without metal braces! Dr. Chimata provides customized Invisalign® and ClearCorrect treatment plans for teens and adults.`
    );
  }

  // 9. Veneers / Cosmetic Dental Queries
  if (
    q.includes('veneer') ||
    q.includes('lumineer') ||
    q.includes('cosmetic') ||
    q.includes('smile makeover') ||
    q.includes('chip')
  ) {
    return (
      `💎 Porcelain Veneers & Lumineers:\n` +
      `Fix chipped, discolored, or uneven teeth with ultrathin porcelain veneers designed to give you a flawless, natural-looking smile.`
    );
  }

  // 10. Emergency Dental Care Queries
  if (
    q.includes('emergency') ||
    q.includes('pain') ||
    q.includes('ache') ||
    q.includes('broken') ||
    q.includes('swelling') ||
    q.includes('bleed') ||
    q.includes('urgent')
  ) {
    return (
      `🚨 Emergency Dental Care:\n` +
      `Suffering from severe tooth pain or a broken tooth? We provide same-day urgent emergency care. Please call our hotline immediately at ${siteConfig.phonePrimary}!`
    );
  }

  // 11. Special Offers / Pricing / Deals Queries
  if (
    q.includes('price') ||
    q.includes('cost') ||
    q.includes('offer') ||
    q.includes('deal') ||
    q.includes('promo') ||
    q.includes('discount') ||
    q.includes('free') ||
    q.includes('exam')
  ) {
    return (
      `🎁 Current Special Offers:\n` +
      `1) FREE New Patient Exam & Consult ($150 Value)\n` +
      `2) 20% OFF First Visit Treatment\n` +
      `3) $95 Complete Exam & Digital X-Rays\n` +
      `4) $400 Philips Zoom! Teeth Whitening`
    );
  }

  // 12. Insurance & Financing Queries
  if (
    q.includes('insurance') ||
    q.includes('payment') ||
    q.includes('ppo') ||
    q.includes('coverage') ||
    q.includes('carecredit') ||
    q.includes('finance')
  ) {
    return (
      `💳 Insurance & Payment Options:\n` +
      `We accept most major PPO dental insurances (Cigna, Delta Dental, MetLife, Aetna, Guardian, Humana) and offer 0% interest flexible financing via CareCredit!`
    );
  }

  // 13. Blog / Educational Content Queries
  if (
    q.includes('blog') ||
    q.includes('article') ||
    q.includes('tip') ||
    q.includes('guide') ||
    q.includes('learn')
  ) {
    return (
      `📚 Dental Health Library:\n` +
      `Check out our 'Blog' tab in the top navigation to read expert guides on cavity prevention, veneer care, dental implant benefits, and pediatric hygiene!`
    );
  }

  // Default Helpful Response
  return (
    `Thank you for asking! Brookfield Dental Associates provides expert family, cosmetic, and implant dentistry in Springfield, VA.\n\n` +
    `You can call us directly at ${siteConfig.phonePrimary} or book online for a Free Consultation ($150 Value)!`
  );
}
