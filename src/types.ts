/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags?: string[];
  prepTime?: string;
  isBestseller?: boolean;
  rating?: number;
  ratingCount?: number;
}

export interface MenuItemReview {
  id: string;
  itemId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  customNote?: string;
}

export interface RadioChannel {
  id: string;
  name: string;
  genre: string;
  nowPlaying: {
    title: string;
    artist: string;
    albumArt?: string;
  };
  icon: string;
  streamUrl?: string;
  bgColor: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  ratingCount: number;
  bio?: string;
  specialty?: string;
  achievements?: string[];
}

export interface StaffReview {
  id: string;
  staffId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Campaign {
  id: string;
  title: string;
  subtitle: string;
  discountBadge: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  description: string;
  itemIds: string[];
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guestsCount: number;
  tableNumber?: string;
  note?: string;
  status: "Beklemede" | "Onaylandı" | "İptal Edildi";
  createdAt: string;
}


