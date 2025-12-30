import { RepairService, ServiceType, Review, PortfolioItem } from './types';

export const SERVICES: RepairService[] = [
  {
    id: '1',
    title: ServiceType.SCREEN_REPLACEMENT,
    description: 'Restore vivid visuals and responsive touch instantly with our premium OEM-grade screen replacements.',
    iconName: 'Smartphone',
    popular: true,
  },
  {
    id: '2',
    title: ServiceType.BATTERY_REPLACEMENT,
    description: 'Power through your day again. We install high-capacity batteries to restore original performance.',
    iconName: 'Battery',
    popular: true,
  },
  {
    id: '3',
    title: ServiceType.BACK_GLASS,
    description: 'Seamlessly repair shattered back glass using precision laser technology for a factory-perfect finish.',
    iconName: 'Monitor', // Using Monitor as a proxy for back/body
    popular: true,
  },
  {
    id: '4',
    title: ServiceType.WATER_DAMAGE,
    description: 'Save your water-damaged device with our advanced ultrasonic cleaning and corrosion removal process.',
    iconName: 'Droplets',
    popular: false,
  },
  {
    id: '5',
    title: ServiceType.DIAGNOSTIC,
    description: 'Not sure what is wrong? Get a quick, accurate expert assessment of your device issues completely for free.',
    iconName: 'Cpu',
    popular: true,
  },
  {
    id: '6',
    title: ServiceType.SOFTWARE,
    description: 'Resolve boot loops, crashes, and recover lost files with our secure software troubleshooting.',
    iconName: 'Settings',
    popular: false,
  }
];

export const REVIEWS: Review[] = [
  { 
    id: 1, 
    name: "Rahul Sharma", 
    text: "Excellent service! My iPhone 13 Pro display was shattered, and they fixed it in 30 minutes with an original screen. The True Tone functionality is working perfectly. Highly recommended.", 
    rating: 5, 
    date: "2 days ago" 
  },
  { 
    id: 2, 
    name: "Deepa Krishnan", 
    text: "Very professional staff. I visited for my MacBook Air battery replacement. They explained the process clearly and the pricing was much better than the authorized center. Laptop works like new now.", 
    rating: 5, 
    date: "1 week ago" 
  },
  { 
    id: 3, 
    name: "Arjun Reddy", 
    text: "Saved my data! My Samsung phone fell in water and wouldn't turn on. Other shops said it was dead, but Red Apple fixed the motherboard issue and recovered all my photos. Truly expert technicians.", 
    rating: 5, 
    date: "3 weeks ago" 
  },
  { 
    id: 4, 
    name: "Sneha Patil", 
    text: "Genuine people. Went for a charging port issue on my OnePlus. Instead of replacing the whole part, they just cleaned it thoroughly and didn't even charge me. Will definitely come back for any future repairs.", 
    rating: 5, 
    date: "1 month ago" 
  },
  { 
    id: 5, 
    name: "Mohammed Fazil", 
    text: "Best place for back glass replacement. They used a laser machine and the finish is factory quality. You can't even tell it was broken. Fast turnaround time too.", 
    rating: 5, 
    date: "2 months ago" 
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "iPhone 13 Pro Max",
    category: "Screen Replacement",
    image: "https://images.unsplash.com/photo-1603539947673-c80b5b153b69?auto=format&fit=crop&q=80&w=600",
    description: "Complete front glass restoration with True Tone preservation."
  },
  {
    id: 2,
    title: "MacBook Air M1",
    category: "Screen Repair",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600",
    description: "Broken LCD panel replaced with OEM display assembly."
  },
  {
    id: 3,
    title: "Samsung S23 Ultra",
    category: "Back Glass",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
    description: "Laser machine removal of shattered back glass."
  },
  {
    id: 4,
    title: "iPad Pro 12.9",
    category: "Battery Replacement",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
    description: "New battery installation restoring 10-hour battery life."
  }
];

export const SEO_KEYWORDS = [
  "Mobile Repair",
  "Mobile Phone",
  "Mobile Phone Service",
  "Fix Phone",
  "Phone Service",
  "Mobile Repair Shop"
];

export const COMPANY_NAME = "Red Apple Mobile Repair";
export const PHONE_NUMBER = "866-066-3776";
export const ADDRESS = "Metro Pillar 125, Off MG Road Police Station, 37 Metro Road, Opp. Bhadra Landmark, Halasuru, Gupta Layout, Bengaluru, KA 560008";