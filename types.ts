export enum ServiceType {
  SCREEN_REPLACEMENT = 'Screen Replacement',
  BATTERY_REPLACEMENT = 'Battery Replacement',
  BACK_GLASS = 'Back Glass Replacement',
  WATER_DAMAGE = 'Water Damage Repair',
  DIAGNOSTIC = 'Free Diagnostics',
  SOFTWARE = 'Software Issue'
}

export enum DeviceType {
  IPHONE = 'iPhone',
  ANDROID = 'Android',
  IPAD = 'iPad',
  MACBOOK = 'MacBook',
  LAPTOP = 'Windows Laptop'
}

export interface RepairService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  popular: boolean;
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