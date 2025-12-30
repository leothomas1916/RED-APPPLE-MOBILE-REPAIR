import { v4 as uuidv4 } from 'uuid';

export interface Booking {
  id: string;
  customerName: string;
  phone: string;
  device: string;
  issue: string;
  status: 'Pending' | 'Diagnostics' | 'In Progress' | 'Ready' | 'Completed' | 'Cancelled';
  date: string;
  quote: number;
  notes: string;
}

// Initial Mock Data
const INITIAL_BOOKINGS: Booking[] = [
  {
    id: '1',
    customerName: 'Rahul Sharma',
    phone: '9876543210',
    device: 'iPhone 13 Pro',
    issue: 'Screen Replacement',
    status: 'In Progress',
    date: '2024-05-20',
    quote: 18000,
    notes: 'Customer needs it by evening. True Tone required.'
  },
  {
    id: '2',
    customerName: 'Priya Patel',
    phone: '9988776655',
    device: 'MacBook Air M1',
    issue: 'Battery Issue',
    status: 'Pending',
    date: '2024-05-21',
    quote: 8500,
    notes: 'Battery drains in 2 hours.'
  },
  {
    id: '3',
    customerName: 'Amit Kumar',
    phone: '9123456789',
    device: 'Samsung S22 Ultra',
    issue: 'Back Glass',
    status: 'Completed',
    date: '2024-05-18',
    quote: 4500,
    notes: 'Laser replacement done.'
  }
];

const STORAGE_KEY = 'red_apple_crm_data';

export const storageService = {
  // Initialize data if empty
  init: () => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BOOKINGS));
    }
  },

  getBookings: (): Booking[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  addBooking: (booking: Omit<Booking, 'id' | 'status' | 'quote' | 'notes'>) => {
    const bookings = storageService.getBookings();
    const newBooking: Booking = {
      ...booking,
      id: Math.random().toString(36).substr(2, 9),
      status: 'Pending',
      quote: 0,
      notes: ''
    };
    bookings.unshift(newBooking);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    return newBooking;
  },

  updateBooking: (id: string, updates: Partial<Booking>) => {
    const bookings = storageService.getBookings();
    const index = bookings.findIndex(b => b.id === id);
    if (index !== -1) {
      bookings[index] = { ...bookings[index], ...updates };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    }
  },

  deleteBooking: (id: string) => {
    const bookings = storageService.getBookings();
    const filtered = bookings.filter(b => b.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },

  getStats: () => {
    const bookings = storageService.getBookings();
    const totalRevenue = bookings
      .filter(b => b.status === 'Completed')
      .reduce((acc, curr) => acc + (curr.quote || 0), 0);
    
    return {
      total: bookings.length,
      pending: bookings.filter(b => b.status === 'Pending').length,
      inProgress: bookings.filter(b => ['Diagnostics', 'In Progress'].includes(b.status)).length,
      completed: bookings.filter(b => b.status === 'Completed').length,
      revenue: totalRevenue
    };
  }
};

// Initialize on load
storageService.init();