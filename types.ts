
export interface Seller {
  id: number;
  name: string;
  avatar: string;
  isVerified: boolean;
  rating: number;
  totalSales: number;
  joinDate: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  isNew?: boolean;
  seller?: Seller;
  description?: string;
}

export interface Review {
  id: number;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ChatMessage {
  id: number;
  senderId: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}
