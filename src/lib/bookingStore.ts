export interface BookingRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  doctor: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // e.g. "10:00 AM"
  service: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  notes?: string;
  createdAt: string;
}

export const TIME_SLOTS = [
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

const INITIAL_BOOKINGS: BookingRecord[] = [
  {
    id: 'BK-91823',
    name: 'Sarah Jenkins',
    phone: '(703) 555-0192',
    email: 'sarah.j@example.com',
    doctor: 'Dr. Maqsood A. Chaudhry',
    date: '2026-08-30',
    timeSlot: '10:00 AM',
    service: 'Dental Implants',
    status: 'Confirmed',
    notes: 'Consultation for single implant upper molar.',
    createdAt: '2026-08-29T10:15:00Z',
  },
  {
    id: 'BK-84721',
    name: 'Michael Miller',
    phone: '(703) 555-0144',
    email: 'mmiller@example.com',
    doctor: 'Dr. Ahmad Hawasli',
    date: '2026-08-30',
    timeSlot: '02:00 PM',
    service: 'Deep Cleaning & Periodontal Care',
    status: 'Pending',
    notes: 'Gum sensitivity examination.',
    createdAt: '2026-08-29T14:20:00Z',
  },
  {
    id: 'BK-73621',
    name: 'Emily Davis',
    phone: '(703) 555-0188',
    email: 'emily.d@example.com',
    doctor: 'Dr. Ameena Chimata',
    date: '2026-08-31',
    timeSlot: '11:00 AM',
    service: 'Philips Zoom! Teeth Whitening',
    status: 'Confirmed',
    notes: 'Pre-wedding teeth whitening package.',
    createdAt: '2026-08-28T16:45:00Z',
  },
];

const STORAGE_KEY = 'brookfield_dental_bookings';

export function getStoredBookings(): BookingRecord[] {
  if (typeof window === 'undefined') return INITIAL_BOOKINGS;
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    if (!item) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKINGS));
      return INITIAL_BOOKINGS;
    }
    return JSON.parse(item);
  } catch (err) {
    console.error('Failed to parse stored bookings:', err);
    return INITIAL_BOOKINGS;
  }
}

export function saveBooking(newBooking: Omit<BookingRecord, 'id' | 'status' | 'createdAt'>): BookingRecord {
  const currentBookings = getStoredBookings();
  const generatedId = `BK-${Math.floor(10000 + Math.random() * 90000)}`;

  const record: BookingRecord = {
    ...newBooking,
    id: generatedId,
    status: 'Pending',
    createdAt: new Date().toISOString(),
  };

  const updated = [record, ...currentBookings];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return record;
}

export function getTodayDateString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function isThursday(dateStr: string): boolean {
  if (!dateStr) return false;
  const d = new Date(`${dateStr}T00:00:00`);
  return d.getDay() === 4;
}

export function isSunday(dateStr: string): boolean {
  if (!dateStr) return false;
  const d = new Date(`${dateStr}T00:00:00`);
  return d.getDay() === 0;
}

export function isClosedDay(dateStr: string): boolean {
  return isThursday(dateStr) || isSunday(dateStr);
}

export function isSaturday(dateStr: string): boolean {
  if (!dateStr) return false;
  const d = new Date(`${dateStr}T00:00:00`);
  return d.getDay() === 6;
}

export function isPastDate(dateStr: string): boolean {
  if (!dateStr) return false;
  return dateStr < getTodayDateString();
}

export function isSlotClosedForDay(dateStr: string, slot: string): boolean {
  if (isClosedDay(dateStr)) return true; // Thursday & Sunday CLOSED
  if (isSaturday(dateStr)) {
    // Saturday open 8:00 AM - 4:00 PM. 05:00 PM slot closed.
    return slot === '05:00 PM';
  }
  // Mon, Tue, Wed, Fri open 9:00 AM - 5:00 PM. 08:00 AM slot closed.
  return slot === '08:00 AM';
}

export function getFirstAvailableSlot(doctor: string, dateStr: string): string | null {
  if (!dateStr || isClosedDay(dateStr) || isPastDate(dateStr)) return null;

  for (const slot of TIME_SLOTS) {
    const isClosed = isSlotClosedForDay(dateStr, slot);
    const isBooked = isSlotBooked(doctor, dateStr, slot);
    if (!isClosed && !isBooked) {
      return slot;
    }
  }
  return null;
}

export function isSlotBooked(doctor: string, date: string, timeSlot: string): boolean {
  const bookings = getStoredBookings();
  return bookings.some(
    (b) =>
      b.doctor === doctor &&
      b.date === date &&
      b.timeSlot === timeSlot &&
      b.status !== 'Cancelled'
  );
}

export function updateBookingStatus(id: string, status: BookingRecord['status']): BookingRecord[] {
  const current = getStoredBookings();
  const updated = current.map((b) => (b.id === id ? { ...b, status } : b));
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return updated;
}

export function deleteBooking(id: string): BookingRecord[] {
  const current = getStoredBookings();
  const updated = current.filter((b) => b.id !== id);
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return updated;
}
