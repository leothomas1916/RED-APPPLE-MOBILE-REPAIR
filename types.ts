export enum ServiceType {
  MOTHERBOARD_REPAIR = 'Level 4 Motherboard Repair',
  CURVED_DISPLAY = 'Curved & Edge Display Repair',
  LASER_BACK_GLASS = 'Laser Back Glass Replacement',
  SCREEN_REPLACEMENT = 'OEM Screen & Display Repair',
  BATTERY_REPLACEMENT = 'Battery & Charging Service',
  APPLE_WATCH_IPAD = 'Apple Watch & iPad Repair',
  DATA_RECOVERY = 'Dead Phone Data Recovery',
  DIAGNOSTIC = 'Free Device Diagnostics',
  SOFTWARE = 'Software & System Recovery'
}

export enum DeviceType {
  IPHONE = 'iPhone',
  ANDROID = 'Android',
  IPAD = 'iPad',
  MACBOOK = 'MacBook',
  LAPTOP = 'Windows Laptop',
  APPLE_WATCH = 'Apple Watch'
}

export interface RepairService {
  id: string;
  title: string;
  description: string;
  category: 'motherboard' | 'display' | 'glass' | 'battery' | 'apple-watch' | 'data' | 'diagnostic';
  iconName: string;
  popular: boolean;
  technicalTag: string;
  turnaroundTime: string;
  keyFeatures: string[];
  priceEstimate?: string;
  warranty: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}