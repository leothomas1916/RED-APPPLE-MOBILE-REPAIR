import { RepairService, ServiceType, Review, PortfolioItem } from './types';

export const COMPANY_NAME = "Red Apple Mobile Repair";
export const PHONE_NUMBER = "866-066-3776";
export const PHONE_NUMBER_RAW = "8660663776";
export const PHONE_NUMBER_FORMATTED = "+91 8660663776";
export const HASHTAG_PHONE = "#8660663776";
export const WHATSAPP_URL = "https://wa.me/918660663776?text=Hi%20Red%20Apple%20Halasuru,%20I%20need%20repair%20assistance%20for%20my%20device.";
export const STORE_EMAIL = "redapple.repair@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/red_apple_mobile_repair/";
export const FACEBOOK_URL = "https://www.facebook.com/share/17ySmY8wrh/?mibextid=wwXIfr";
export const ADDRESS = "Metro Pillar 125, Off MG Road Police Station, 37 Metro Road, Opp. Bhadra Landmark, Halasuru, Gupta Layout, Bengaluru, KA 560008";
export const LANDMARK = "Metro Pillar 125, Opp. Bhadra Landmark, Halasuru";
export const GOOGLE_MAPS_SHARE_URL = "https://share.google/ohRRuw6XISfoYKI9T";
export const GOOGLE_MAPS_CID = "17991444583161020000";
export const RATING_VAL = "4.9";
export const REVIEW_COUNT_STR = "480+ Google Reviews";
export const OPENING_HOURS_STR = "Mon - Sun: 9:00 AM - 9:00 PM";

export const GEO_DATA = {
  region: "IN-KA",
  placename: "Halasuru, Bengaluru, Karnataka, India",
  latitude: 12.9748349,
  longitude: 77.6222756,
  position: "12.9748349;77.6222756",
  icbm: "12.9748349, 77.6222756",
  nearbyAreas: [
    "Halasuru",
    "Indiranagar",
    "MG Road",
    "Ulsoor",
    "Gupta Layout",
    "Trinity",
    "Commercial Street",
    "Koramangala",
    "Frazer Town",
    "Domlur"
  ]
};

export const SERVICES: RepairService[] = [
  {
    id: 'laser-backglass',
    title: "iPhone TBK Laser Backglass Restoration",
    description: 'Specialized non-invasive TBK 958B laser breakdown of shattered iPhone back glass without opening or dismantling your phone. Preserves MagSafe wireless charging, camera seal, and original factory chassis.',
    category: 'glass',
    iconName: 'Monitor',
    popular: true,
    technicalTag: '⭐ Maps Top Rated Laser Tech',
    turnaroundTime: '45 - 60 Minutes',
    keyFeatures: [
      'TBK 958B non-contact laser beam pulse',
      'Zero internal opening - phone stays sealed',
      'MagSafe & Wireless coil protected',
      'Factory camera housing & glass fitment'
    ],
    priceEstimate: 'Save ₹18,000+ vs Authorized',
    warranty: '90 Days Lab Warranty'
  },
  {
    id: 'oem-display',
    title: "iPhone OEM Display & True Tone Lamination",
    description: 'Original OEM display replacement & Vacuum OCA glass separation for iPhone 11 through 15 Pro Max. Includes EEPROM serial data transfer to keep True Tone, FaceID & 120Hz ProMotion active.',
    category: 'display',
    iconName: 'Smartphone',
    popular: true,
    technicalTag: '⭐ Maps Core Specialization',
    turnaroundTime: '30 - 45 Minutes',
    keyFeatures: [
      'EEPROM programmer True Tone serial transfer',
      'Original OLED / Super Retina XDR clarity',
      'Cleanroom dust-free Vacuum OCA lamination',
      'Oleophobic glass & Free Tempered Shield'
    ],
    priceEstimate: 'Original OEM Quality',
    warranty: '90 Days Lab Warranty'
  },
  {
    id: 'oem-battery',
    title: "iPhone OEM High-Capacity Battery Replacement",
    description: 'Instant swap with high-density OEM battery cells for iPhone, Android, iPad & MacBook. Restores 100% battery health, eliminates sudden battery drops, and includes BMS battery health data flashing.',
    category: 'battery',
    iconName: 'Battery',
    popular: true,
    technicalTag: '⭐ Maps Top Service',
    turnaroundTime: '20 - 30 Minutes',
    keyFeatures: [
      'Zero-cycle high density OEM battery cells',
      'BMS flex cable battery health flashing',
      'Overheat & short-circuit protection IC',
      'Ends fast discharge & random shutdowns'
    ],
    priceEstimate: 'Instant 20-Min Swap',
    warranty: '6 Months Warranty'
  },
  {
    id: 'motherboard',
    title: ServiceType.MOTHERBOARD_REPAIR,
    description: 'Specialized Level 4 chip micro-soldering for devices deemed "dead" by other centers. We fix Audio IC, Power IC, CPU reballing, and water damage board shorts.',
    category: 'motherboard',
    iconName: 'Cpu',
    popular: true,
    technicalTag: 'Level 4 Micro-Soldering',
    turnaroundTime: '24 - 48 Hours',
    keyFeatures: [
      'Audio IC & Power IC chip repair',
      'CPU & RAM reballing technology',
      'Ultrasonic liquid corrosion wash',
      'Fixes dead devices & bootloops'
    ],
    priceEstimate: '40-50% Cheaper than Authorized',
    warranty: '6 Months Warranty'
  },
  {
    id: 'curved-display',
    title: ServiceType.CURVED_DISPLAY,
    description: 'Expert edge display glass replacement for Samsung Galaxy Ultra, OnePlus, and flagship curved OLEDs without replacing the expensive internal display.',
    category: 'display',
    iconName: 'Smartphone',
    popular: true,
    technicalTag: 'Edge OLED Precision',
    turnaroundTime: '1 - 2 Hours',
    keyFeatures: [
      'Curved glass-only separation',
      'Original OLED panel preservation',
      'Zero touch latency or color loss',
      'In-display fingerprint calibration'
    ],
    priceEstimate: 'Original OLED Quality',
    warranty: '6 Months Warranty'
  },
  {
    id: 'apple-watch',
    title: ServiceType.APPLE_WATCH_IPAD,
    description: 'Specialized glass, digitizer, battery, and sensor repairs for Apple Watch (Series 3-9, Ultra) and iPad Air/Pro with original touch sensitivity.',
    category: 'apple-watch',
    iconName: 'Watch',
    popular: false,
    technicalTag: 'Precision Wearable Lab',
    turnaroundTime: 'Same Day Repair',
    keyFeatures: [
      'Apple Watch outer glass separation',
      'iPad laminated screen & touch digitizer',
      'Digital Crown & sensor cleaning',
      'Water seal restoration'
    ],
    priceEstimate: 'Specialist Workmanship',
    warranty: '6 Months Warranty'
  },
  {
    id: 'data-recovery',
    title: ServiceType.DATA_RECOVERY,
    description: 'High-success-rate chip-off data extraction from dead, water-damaged, or crushed devices with strict Zero-Password Privacy Maintenance Mode.',
    category: 'data',
    iconName: 'HardDrive',
    popular: false,
    technicalTag: 'Zero-Password Privacy',
    turnaroundTime: '24 - 48 Hours',
    keyFeatures: [
      'NAND memory chip extraction',
      'No password required for hardware diagnosis',
      'Strict customer data confidentiality',
      'Photos, contacts & WhatsApp backup'
    ],
    priceEstimate: 'No Data, No Fee Policy',
    warranty: 'Data Security Guarantee'
  },
  {
    id: 'free-diagnostic',
    title: ServiceType.DIAGNOSTIC,
    description: 'Complete 25-point hardware and power rail inspection by master technicians. Clear explanation of faults with zero obligation.',
    category: 'diagnostic',
    iconName: 'SearchCheck',
    popular: false,
    technicalTag: 'Free 15-Min Check',
    turnaroundTime: '15 Minutes',
    keyFeatures: [
      'Current draw & power rail testing',
      'Thermal camera leak detection',
      'Zero diagnostic fees',
      'Honest technical consultation'
    ],
    priceEstimate: '100% Free Inspection',
    warranty: 'No Cost Consultation'
  }
];

export const REVIEWS: Review[] = [
  { 
    id: 1, 
    name: "Rahul Sharma", 
    text: "Excellent service near Halasuru Metro Pillar 125! My iPhone 13 Pro display was shattered, and they fixed it in 30 minutes with an original screen using OCA lamination. True Tone works perfectly!", 
    rating: 5, 
    date: "2 days ago" 
  },
  { 
    id: 2, 
    name: "Deepa Krishnan", 
    text: "Very professional team at Red Apple Mobile Repair. Replaced my MacBook Air battery and fixed a curved display on Galaxy S22 Ultra. Pricing was 50% cheaper than authorized centers.", 
    rating: 5, 
    date: "1 week ago" 
  },
  { 
    id: 3, 
    name: "Arjun Reddy", 
    text: "Saved my data! Other repair shops in Indiranagar said my water-damaged phone was completely dead. Red Apple performed Level 4 motherboard micro-soldering and revived it completely!", 
    rating: 5, 
    date: "3 weeks ago" 
  },
  { 
    id: 4, 
    name: "Sneha Patil", 
    text: "Genuine and trustworthy! Took my OnePlus for a charging issue. They used maintenance mode so my personal data was untouched and fixed it quickly with 6 months warranty.", 
    rating: 5, 
    date: "1 month ago" 
  },
  { 
    id: 5, 
    name: "Mohammed Fazil", 
    text: "Best laser back glass repair in Bengaluru! Their TBK laser machine removed the shattered back glass of my iPhone 14 Pro without opening the phone. Factory quality finish!", 
    rating: 5, 
    date: "2 months ago" 
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "iPhone 14 Pro Max",
    category: "iPhone Glass & Screen",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=800",
    beforeImage: "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=1000",
    description: "TBK laser back glass removal & vacuum OCA display lamination with True Tone preservation.",
    equipment: "TBK Laser 958B & OCA Lamination Press"
  },
  {
    id: 2,
    title: "Samsung S23 Ultra Curved Display",
    category: "Samsung Curved OLED",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
    beforeImage: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=800",
    description: "Curved edge glass separation & in-display fingerprint sensor re-calibration.",
    equipment: "360° Rotating Curved Screen Separator"
  },
  {
    id: 3,
    title: "TBK Laser Machine Operation Reel",
    category: "Video Reel Showcase",
    mediaType: "video",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-circuit-board-manufacturing-process-40348-large.mp4",
    description: "Watch our automated non-contact TBK 958B laser breakdown shattered iPhone back glass cleanly in seconds.",
    equipment: "TBK 958B Precision Fiber Laser"
  },
  {
    id: 4,
    title: "Dead iPhone 13 Board Micro-Soldering",
    category: "Micro-Soldering",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
    beforeImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    description: "Audio IC micro-soldering & power rail short circuit repair for water damaged board.",
    equipment: "HD Trinocular Microscope & Hot Air Rework"
  },
  {
    id: 5,
    title: "MacBook Pro Liquid Clean & Screen",
    category: "MacBook & iPad",
    mediaType: "video",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-computer-motherboard-41584-large.mp4",
    description: "Complete ultrasonic logic board de-oxidation and M2 display replacement.",
    equipment: "Ultrasonic Chemical Bath & Thermal Camera"
  },
  {
    id: 6,
    title: "Apple Watch Series 8",
    category: "Watch Glass & Battery",
    mediaType: "image",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
    beforeImage: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800",
    description: "Shattered Sapphire glass replacement with water-seal gasket restoration.",
    equipment: "Precision Hot Wire & UV Curing Lamp"
  }
];

export const SEO_KEYWORDS = [
  "Red Apple Mobile Repair",
  "Red Apple Mobile Repair Halasuru",
  "Mobile Repair Halasuru Bengaluru",
  "Curved Display Repair Bengaluru",
  "Level 4 Motherboard Repair",
  "Micro Soldering Repair Bengaluru",
  "Laser Back Glass Repair Halasuru",
  "iPhone Screen Replacement Halasuru",
  "Samsung Edge Screen Glass Replacement",
  "Apple Watch Repair Bengaluru",
  "MacBook Battery Replacement MG Road",
  "Dead Phone Data Recovery Halasuru",
  "Mobile Repair Metro Pillar 125",
  "Vacuum OCA Display Lamination",
  "Zero Password Repair Privacy Mode",
  "Best Mobile Service Shop Indiranagar",
  "iPhone Battery Replacement Halasuru",
  "6 Month Warranty Mobile Repair Bengaluru"
];