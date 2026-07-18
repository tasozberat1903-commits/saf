/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Flame,
  Cookie,
  Beer,
  Cake,
  Utensils,
  Search,
  ShoppingBag,
  Sparkles,
  MessageSquare,
  Volume2,
  VolumeX,
  Clock,
  ThumbsUp,
  Info,
  Shield,
  Disc,
  Radio,
  ChevronRight,
  Music,
  ArrowLeft,
  CheckCircle,
  HelpCircle,
  X,
  Home,
  Compass,
  Users,
  Calendar,
  Wine,
  GlassWater,
  Coffee,
  Leaf,
  PlusCircle,
  MapPin,
  Menu,
  LayoutGrid,
  List
} from "lucide-react";
import { MenuItem, Category, RadioChannel, CartItem, Staff, StaffReview, MenuItemReview, Campaign } from "./types";
import { CATEGORIES, MENU_ITEMS, RADIO_CHANNELS, INITIAL_STAFF, CAMPAIGNS } from "./data";
import { GastroPubHero } from "./components/GastroPubHero";
import { MenuItemCard } from "./components/MenuItemCard";
import { StaffDrawer } from "./components/StaffDrawer";
import { SongRequestDrawer } from "./components/SongRequestDrawer";
import { MenuItemDetailDrawer } from "./components/MenuItemDetailDrawer";
import { ProductReviewsDrawer } from "./components/ProductReviewsDrawer";
import { CampaignsSlider } from "./components/CampaignsSlider";
import { PopularTastesSlider } from "./components/PopularTastesSlider";
import { RadioController } from "./components/RadioController";
import { PremiumCategoryCard } from "./components/PremiumCategoryCard";


export default function App() {
  // Navigation & State
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDetailItem, setSelectedDetailItem] = useState<MenuItem | null>(null);
  const [activeChannel, setActiveChannel] = useState<RadioChannel>(RADIO_CHANNELS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(null);

  // Staff evaluation state
  const [staffList, setStaffList] = useState<Staff[]>(INITIAL_STAFF);
  const [isStaffOpen, setIsStaffOpen] = useState<boolean>(false);
  const [isProductReviewsOpen, setIsProductReviewsOpen] = useState<boolean>(false);
  const [isSongRequestOpen, setIsSongRequestOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"home" | "menu">("home");
  const [showSplash, setShowSplash] = useState<boolean>(false);
  const [menuLayoutMode, setMenuLayoutMode] = useState<"grid" | "list">("list");
  const [tableNumber, setTableNumber] = useState<string>("Masa 07");


  // Menu items list state with initial ratings
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    return MENU_ITEMS.map(item => {
      let rating = 4.8;
      let ratingCount = 12;
      if (item.id === "burger-classic") { rating = 4.9; ratingCount = 42; }
      else if (item.id === "drink-craft-beer") { rating = 4.9; ratingCount = 56; }
      else if (item.id === "wrap-chicken") { rating = 4.8; ratingCount = 29; }
      else if (item.id === "burger-smash") { rating = 4.9; ratingCount = 35; }
      else if (item.id === "dessert-banoffee") { rating = 5.0; ratingCount = 18; }
      else if (item.id === "fries-seasoned") { rating = 4.7; ratingCount = 15; }
      else if (item.id === "nachos-loaded") { rating = 4.6; ratingCount = 12; }
      else if (item.id === "drink-lemonade") { rating = 4.8; ratingCount = 22; }
      return { ...item, rating, ratingCount };
    });
  });

  // Find selected highlight items from the actual product list for home card circles
  const selectedHighlightMeal = menuItems.find(item => item.id === "f0f9ed7f-820c-4579-8c95-2fd9b4b6d524") || menuItems.find(item => item.category === "meals") || menuItems[0];
  const selectedHighlightCocktail = menuItems.find(item => item.id === "167c925a-31d1-45ec-b750-ad0fed388bdc") || menuItems.find(item => item.category === "cocktails") || menuItems[1];
  const selectedHighlightBeer = menuItems.find(item => item.id === "17e492f2-4843-4db7-8e4d-0e83c7eb0633") || menuItems.find(item => item.category === "beers" || item.category === "wines") || menuItems[2];

  const [menuItemReviews, setMenuItemReviews] = useState<MenuItemReview[]>([
    {
      id: "mrev-1",
      itemId: "burger-classic",
      customerName: "Caner T.",
      rating: 5,
      comment: "Brioche ekmeği taptazeydi ve karamelize soğanla köftenin uyumu inanılmaz!",
      date: "08.07.2026"
    },
    {
      id: "mrev-2",
      itemId: "burger-classic",
      customerName: "Ayşe L.",
      rating: 4,
      comment: "Gayet lezzetli, patatesi çok çıtır ve sıcaktı.",
      date: "08.07.2026"
    },
    {
      id: "mrev-3",
      itemId: "drink-craft-beer",
      customerName: "Burak E.",
      rating: 5,
      comment: "Narenciye aromalı bu bira pub ortamına çok yakışmış, her gelişimde söylerim.",
      date: "07.07.2026"
    },
    {
      id: "mrev-4",
      itemId: "dessert-banoffee",
      customerName: "Eda K.",
      rating: 5,
      comment: "Muzlu ve karamelli milföy gerçekten rüya gibiydi! Aşırı hafif ve lezzetli.",
      date: "08.07.2026"
    },
    {
      id: "mrev-5",
      itemId: "wrap-chicken",
      customerName: "Ömer Ş.",
      rating: 5,
      comment: "Cheddar ve tavuk miktarı boldu, jalapeno sosu tam istediğim acılıkta.",
      date: "06.07.2026"
    }
  ]);
  const [reviews, setReviews] = useState<StaffReview[]>([
    {
      id: "rev-1",
      staffId: "staff-merve",
      customerName: "Ahmet K.",
      rating: 5,
      comment: "Espresso Martini harikaydı, Merve Hanım'ın güleryüzü için ayrıca teşekkürler.",
      date: "08.07.2026"
    },
    {
      id: "rev-2",
      staffId: "staff-merve",
      customerName: "Selin T.",
      rating: 5,
      comment: "Kokteyl önerileri çok başarılıydı, müzikle harika eşleşti!",
      date: "08.07.2026"
    },
    {
      id: "rev-3",
      staffId: "staff-ulas",
      customerName: "Can B.",
      rating: 5,
      comment: "Ulaş Bey inanılmaz hızlı ve ilgiliydi. Siparişimizi anında getirdi.",
      date: "08.07.2026"
    },
    {
      id: "rev-4",
      staffId: "staff-ulas",
      customerName: "Elif Y.",
      rating: 4,
      comment: "Güler yüzlü ve çok temiz servis.",
      date: "07.07.2026"
    },
    {
      id: "rev-5",
      staffId: "staff-berat",
      customerName: "Murat D.",
      rating: 5,
      comment: "Classic Gastro Burger hayatımda yediğim en iyisiydi! Soslar efsane.",
      date: "08.07.2026"
    },
    {
      id: "rev-6",
      staffId: "staff-berat",
      customerName: "Melisa Ş.",
      rating: 5,
      comment: "Mutfak ekibi harika çalışıyor, şefin ellerine sağlık.",
      date: "08.07.2026"
    },
    {
      id: "rev-7",
      staffId: "staff-mert",
      customerName: "Ege A.",
      rating: 5,
      comment: "Seçtiği şarkılar harika, pub ruhunu tam hissettiriyor.",
      date: "08.07.2026"
    },
    {
      id: "rev-8",
      staffId: "staff-mert",
      customerName: "Deniz G.",
      rating: 4,
      comment: "Parça isteklerimize kulak verdi, çok cana yakın bir DJ.",
      date: "07.07.2026"
    }
  ]);

  const handleAddStaffReview = (staffId: string, rating: number, comment: string, reviewerName: string) => {
    const newReview: StaffReview = {
      id: `rev-${Date.now()}`,
      staffId,
      customerName: reviewerName || "Anonim",
      rating,
      comment,
      date: new Date().toLocaleDateString("tr-TR")
    };

    setReviews(prev => [newReview, ...prev]);

    // Recalculate average rating for this staff member
    setStaffList(prevList => prevList.map(staff => {
      if (staff.id === staffId) {
        const staffReviews = reviews.filter(r => r.staffId === staffId);
        const totalRating = staffReviews.reduce((sum, r) => sum + r.rating, 0) + rating;
        const newCount = staffReviews.length + 1;
        const newAvg = parseFloat((totalRating / newCount).toFixed(1));
        return {
          ...staff,
          rating: newAvg,
          ratingCount: newCount
        };
      }
      return staff;
    }));
  };

  const handleAddMenuItemReview = (itemId: string, rating: number, comment: string, reviewerName: string) => {
    const newReview: MenuItemReview = {
      id: `mrev-${Date.now()}`,
      itemId,
      customerName: reviewerName || "Anonim",
      rating,
      comment,
      date: new Date().toLocaleDateString("tr-TR")
    };

    setMenuItemReviews(prev => [newReview, ...prev]);

    // Recalculate average rating for this menu item
    setMenuItems(prevList => prevList.map(item => {
      if (item.id === itemId) {
        const itemReviews = menuItemReviews.filter(r => r.itemId === itemId);
        const totalRating = itemReviews.reduce((sum, r) => sum + r.rating, 0) + rating;
        const newCount = itemReviews.length + 1;
        const newAvg = parseFloat((totalRating / newCount).toFixed(1));
        return {
          ...item,
          rating: newAvg,
          ratingCount: newCount
        };
      }
      return item;
    }));

    // Update selectedDetailItem so the active drawer updates instantly
    setSelectedDetailItem(prev => {
      if (prev && prev.id === itemId) {
        const itemReviews = menuItemReviews.filter(r => r.itemId === itemId);
        const totalRating = itemReviews.reduce((sum, r) => sum + r.rating, 0) + rating;
        const newCount = itemReviews.length + 1;
        const newAvg = parseFloat((totalRating / newCount).toFixed(1));
        return {
          ...prev,
          rating: newAvg,
          ratingCount: newCount
        };
      }
      return prev;
    });
  };

  // Sound play simulation (we can play beautiful simulated audio beeps or keep it visual with toggles)
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Helper to map category icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame":
        return <Flame className="w-4 h-4" />;
      case "Cookie":
        return <Cookie className="w-4 h-4" />;
      case "Beer":
        return <Beer className="w-4 h-4" />;
      case "Cake":
        return <Cake className="w-4 h-4" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4" />;
      case "Wine":
        return <Wine className="w-4 h-4" />;
      case "GlassWater":
        return <GlassWater className="w-4 h-4" />;
      case "Coffee":
        return <Coffee className="w-4 h-4" />;
      case "Leaf":
        return <Leaf className="w-4 h-4" />;
      case "PlusCircle":
        return <PlusCircle className="w-4 h-4" />;
      default:
        return <Utensils className="w-4 h-4" />;
    }
  };

  // Cart operations
  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.menuItem.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.menuItem.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  const addCampaignToCart = (campaign: Campaign) => {
    const campaignAsMenuItem: MenuItem = {
      id: campaign.id,
      name: campaign.title,
      description: campaign.description,
      price: campaign.discountedPrice,
      image: campaign.image,
      category: "campaign",
      prepTime: "12-15 dk",
      isBestseller: true
    };
    addToCart(campaignAsMenuItem);
  };

  const updateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeCartItem(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((c) => (c.menuItem.id === itemId ? { ...c, quantity: newQty } : c))
    );
  };

  const removeCartItem = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.menuItem.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Pairing highlight function
  const handleHighlightPairings = (category: string) => {
    setHighlightedCategory(category);
    setSelectedCategory(category);
    
    // Auto-scroll to items or show a friendly alert
    setTimeout(() => {
      const element = document.getElementById("menu-grid-anchor");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Filter items
  const filteredItems = menuItems.filter((item) => {
    let matchesCategory = false;
    if (selectedCategory === "all") {
      matchesCategory = true;
    } else if (selectedCategory === "campaigns") {
      matchesCategory = item.isBestseller === true;
    } else if (selectedCategory === "new") {
      matchesCategory = item.isBestseller === true || item.rating >= 4.9;
    } else {
      matchesCategory = item.category === selectedCategory;
    }

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalCartPrice = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div id="app-root-container" className="min-h-screen bg-[#ecd9c5] font-sans text-stone-900 antialiased flex flex-col items-center justify-start relative overflow-x-hidden">
      {/* Entry Splash Screen with AnimatePresence */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#1a1512] flex flex-col items-center justify-between p-8 font-sans overflow-hidden text-center"
          >
            {/* Background effects */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-amber-500/10 rounded-full filter blur-[90px] pointer-events-none" />

            {/* Top Branding Section */}
            <div className="mt-6 relative z-10 space-y-1.5">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-amber-500/80 block">RETRO VINYL & GASTRO</span>
              <h1 className="text-3xl font-black tracking-tighter text-stone-100 uppercase">Radyo Gastro</h1>
              <div className="w-10 h-[2px] bg-[#d97706] mx-auto mt-3 rounded-full opacity-70" />
            </div>

            {/* Circular Image & Vinyl Vinyl details */}
            <div className="relative z-10 flex flex-col items-center gap-7">
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              >
                {/* Vintage Grooves */}
                <div className="absolute inset-[-15px] rounded-full border border-amber-600/15" />
                <div className="absolute inset-[-10px] rounded-full border border-amber-600/30" />
                <div className="absolute inset-[-5px] rounded-full border-2 border-[#d97706]/60" />
                
                {/* Main Circular Image */}
                <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-stone-900 shadow-2xl relative bg-stone-950 flex items-center justify-center">
                  <img
                    src="https://i.hizliresim.com/gnugfka.png"
                    alt="Radyo Gastro Splash Logo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full pointer-events-none select-none scale-102"
                  />
                  {/* Sheen glaze effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full pointer-events-none" />
                </div>
              </motion.div>

              <div className="space-y-1.5 max-w-[290px]">
                <p className="text-sm font-bold text-stone-200 tracking-wide">Plakların Sıcak Tınılarıyla Tanışın</p>
                <p className="text-[11px] text-stone-400 font-medium leading-relaxed">
                  Retro plak ruhu, nefis pub lezzetleri ve benzersiz atmosferimiz için dijital menümüze hoş geldiniz.
                </p>
              </div>
            </div>

            {/* Action Area */}
            <div className="mb-8 w-full max-w-[280px] relative z-10 space-y-4">
              <motion.button
                onClick={() => {
                  setShowSplash(false);
                  setIsPlaying(true);
                }}
                className="w-full py-4 bg-[#d97706] hover:bg-[#b45309] active:bg-[#92400e] text-[#fef3c7] font-black text-xs uppercase tracking-widest rounded-full shadow-lg shadow-black/60 cursor-pointer transition-all border border-[#d97706]/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Menüye Giriş
              </motion.button>
              <p className="text-[10px] text-stone-500 font-bold flex items-center justify-center gap-1">
                📻 Plak seslerini duymak için sesinizi açın
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Warm Backlighting Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-600/15 rounded-full filter blur-[120px] pointer-events-none -z-10" />

      {/* Main Responsive App Container (No smartphone mockup frame, edge-to-edge on real phones, elegant column on desktop) */}
      <div className="w-full max-w-lg min-h-screen bg-[#f7f2ea] flex flex-col justify-between shadow-2xl relative overflow-x-hidden select-none pb-36">
        
        {/* Top Area: High-End Premium Header Bar with Gold Laser Light & Ambient Glow */}
        <div className="bg-stone-950/95 backdrop-blur-md border-b border-stone-900/80 px-5 py-4 flex items-center justify-between z-40 shadow-[0_4px_30px_rgba(0,0,0,0.4)] relative">
          
          {/* Symmetrical laser-thin gold accent light line underneath the header */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f59e0b]/55 to-transparent z-10" />

          {/* Left: Glassmorphic Kitchen Hours Badge */}
          <div className="flex items-center gap-1.5 relative z-10 bg-stone-900/40 border border-stone-800/60 px-2 py-0.5 rounded-lg text-left select-none max-w-[120px]">
            <Clock className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
            <div className="flex flex-col">
              <span className="text-[#f59e0b] text-[7.5px] font-black uppercase tracking-wider leading-none">
                Mutfak
              </span>
              <div className="text-[7.5px] text-stone-300 font-bold leading-tight mt-0.5 flex flex-col">
                <span>H.İçi: 10:00 - 23:30</span>
                <span>H.Sonu: 10:00 - 23:30</span>
              </div>
            </div>
          </div>

          {/* Center: Circular Brand Logo (Just the clean logo itself, kept stationary) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
            <motion.img
              src="https://i.hizliresim.com/ofnopsa.png"
              alt="Radyo Gastro Logo"
              referrerPolicy="no-referrer"
              onClick={togglePlay}
              className={`w-18 h-18 object-cover rounded-full cursor-pointer transition-all duration-300 ${isPlaying ? 'brightness-100' : 'brightness-90'} shadow-md`}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            />
            
            {/* Pulsing Live Badge Dot */}
            <div className="absolute top-0.5 right-0.5 flex h-3 w-3 pointer-events-none">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isPlaying ? 'bg-[#1DB954]' : 'bg-red-500'}`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isPlaying ? 'bg-[#1DB954]' : 'bg-red-500'}`}></span>
            </div>
          </div>

          {/* Right: Glassmorphic Search Button & Visualizer */}
          <div className="flex items-center gap-2.5 relative z-10">
            {/* Tiny Equalizer Waves (Shown when music playing) */}
            {isPlaying && (
              <div className="flex items-end gap-0.5 h-4.5 px-1">
                <div className="w-[1.5px] bg-[#1DB954] rounded-full animate-[bounce_1s_infinite_100ms]" style={{ height: '70%' }} />
                <div className="w-[1.5px] bg-[#f59e0b] rounded-full animate-[bounce_1.2s_infinite_200ms]" style={{ height: '100%' }} />
                <div className="w-[1.5px] bg-[#1DB954] rounded-full animate-[bounce_0.8s_infinite_300ms]" style={{ height: '40%' }} />
              </div>
            )}

            <button
              onClick={() => {
                setActiveTab("menu");
                setTimeout(() => {
                  const searchInput = document.getElementById("menu-search-input");
                  if (searchInput) {
                    searchInput.focus();
                    searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }, 150);
              }}
              className="w-9.5 h-9.5 rounded-full bg-stone-900/90 border border-stone-800 hover:border-[#f59e0b]/40 flex items-center justify-center text-stone-300 hover:text-white transition-all hover:bg-stone-850 active:scale-95 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            >
              <Search className="w-4 h-4 text-stone-300" />
            </button>
          </div>
        </div>

        {/* Main Menu Body */}
        <div className="flex-1 px-4 py-4 space-y-4">

          {/* Search, Categories, and Products conditionally shown based on activeTab */}
          <AnimatePresence mode="wait">
            {activeTab === "home" ? (
              <motion.div
                key="home-section"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Radyo Gastro - Unique Signature Welcome Hero Card */}
                <div 
                  onClick={() => {
                    setSelectedCategory("all");
                    setActiveTab("menu");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="relative h-[430px] rounded-[36px] overflow-hidden shadow-2xl shadow-stone-950/20 border border-stone-900/10 cursor-pointer group select-none bg-stone-950"
                >
                  {/* Cozy high quality vintage retro bar background with subtle blur for depth of field */}
                  <img
                    src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&auto=format&fit=crop&q=80"
                    alt="Cozy Retro Bar Atmosphere"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-15 blur-[6px] transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Premium dark gradient overlay for optimal readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-stone-950/30" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,25,23,0.15)_0%,rgba(12,10,9,0.92)_85%)]" />
                  
                  {/* Idea 1: Warm ambient amber light spill behind the center products (Aura effect) */}
                  <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-tr from-[#f59e0b]/15 to-[#d97706]/20 blur-[60px] pointer-events-none mix-blend-screen z-0 animate-pulse" style={{ animationDuration: '6s' }} />
                  <div className="absolute top-[35%] left-[30%] w-48 h-48 rounded-full bg-amber-500/10 blur-[50px] pointer-events-none mix-blend-screen z-0" />
                  <div className="absolute top-[50%] right-[25%] w-48 h-48 rounded-full bg-orange-500/10 blur-[50px] pointer-events-none mix-blend-screen z-0" />
                  
                  {/* Real radio logo: stationary rings with stationary brand text */}
                  <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 flex items-center justify-center pointer-events-none z-0 select-none">
                    <div className="relative w-full h-full flex items-center justify-center">
                      
                      {/* Stationary concentric rings (no text) */}
                      <div className="absolute w-72 h-72 flex items-center justify-center opacity-[0.14]">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {/* Concentric colored rings of the real logo (Teal, Orange, Red, Yellow) */}
                          <circle cx="100" cy="100" r="76" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
                          <circle cx="100" cy="100" r="70" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
                          <circle cx="100" cy="100" r="64" stroke="#ef4444" strokeWidth="2.5" fill="none" />
                          <circle cx="100" cy="100" r="58" stroke="#eab308" strokeWidth="2.5" fill="none" />
                          <circle cx="100" cy="100" r="52" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
                          <circle cx="100" cy="100" r="46" stroke="#ef4444" strokeWidth="2.5" fill="none" />
                          <circle cx="100" cy="100" r="40" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
                          <circle cx="100" cy="100" r="34" stroke="#14b8a6" strokeWidth="2.5" fill="none" />
                          <circle cx="100" cy="100" r="28" stroke="#ef4444" strokeWidth="2.5" fill="none" />
                          
                          {/* Central orange solid circle of the real logo */}
                          <circle cx="100" cy="100" r="22" fill="#f59e0b" />
                          
                          {/* Center spindle hole */}
                          <circle cx="100" cy="100" r="3.5" fill="#0c0a09" />
                        </svg>
                      </div>
                      
                      {/* Stationary 'radyo' text positioned vertically on the left, matching their branding image */}
                      <div className="absolute -translate-x-44 flex items-center justify-center opacity-[0.22]">
                        <span 
                          className="text-[#f59e0b] font-sans text-3.5xl font-black tracking-wider lowercase select-none"
                          style={{ transform: "rotate(-90deg)", fontFamily: "system-ui, -apple-system, sans-serif" }}
                        >
                          radyo
                        </span>
                      </div>
                      
                    </div>
                  </div>
                  
                  {/* Top-Left: Glassmorphic Live Indicator */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-950/65 backdrop-blur-md border border-white/10 z-20">
                    <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
                    <span className="text-[9px] font-black tracking-widest text-white uppercase font-mono">
                      {isPlaying ? `YAYINDA: ${activeChannel.name}` : "72.24 FM RETRO"}
                    </span>
                  </div>

                  {/* Top-Right: Symmetrical Est. Badge */}
                  <div className="absolute top-6 right-6 flex items-center z-20">
                    <span className="text-[9px] font-black tracking-widest text-[#f59e0b]/80 uppercase">EST. 2026</span>
                  </div>

                  {/* Right Area: Dynamic Interactive Floating Product Canvas (Burger, Cocktail, Pizza & Vinyl Record) */}
                  <div className="absolute inset-y-0 inset-x-0 overflow-hidden pointer-events-none z-10">
                    
                    {/* 1. Gourmet Burger (The gorgeous main centerpiece requested by the user) */}
                    <motion.div
                      className="absolute top-20 left-[28%] w-38 h-38 rounded-full shadow-[0_12px_32px_rgba(245,158,11,0.4)] overflow-hidden pointer-events-auto cursor-pointer"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 4, -4, 0]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: 1.12, rotate: 10, zIndex: 30 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory("meals");
                        setSearchQuery("burger");
                        setActiveTab("menu");
                        setTimeout(() => {
                          const searchInput = document.getElementById("menu-search-input");
                          if (searchInput) searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
                        }, 100);
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80"
                        alt="Gurme Burger"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-stone-950/10 hover:bg-transparent transition-colors" />
                      {/* Badge inside */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-stone-950/85 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                        <span className="text-[8px] font-black text-[#f59e0b] uppercase tracking-wider whitespace-nowrap">Burger</span>
                      </div>
                    </motion.div>
                    
                    {/* 2. Cozy Cocktail (Left float) */}
                    <motion.div
                      className="absolute top-24 left-4 w-24 h-24 rounded-full shadow-[0_8px_24px_rgba(245,158,11,0.3)] overflow-hidden pointer-events-auto cursor-pointer"
                      animate={{ 
                        y: [0, 8, 0],
                        rotate: [0, -6, 6, 0]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      whileHover={{ scale: 1.15, rotate: -12, zIndex: 30 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory("cocktails");
                        setSearchQuery("");
                        setActiveTab("menu");
                        setTimeout(() => {
                          const searchInput = document.getElementById("menu-search-input");
                          if (searchInput) searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
                        }, 100);
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300&auto=format&fit=crop&q=80"
                        alt="Premium Cocktail"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-stone-950/15 hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 bg-stone-950/85 backdrop-blur-xs px-2 py-0.5 rounded-full">
                        <span className="text-[7.5px] font-black text-[#f59e0b] uppercase tracking-wider whitespace-nowrap">Kokteyl</span>
                      </div>
                    </motion.div>

                    {/* 3. Sizzling Pizza (Right float) */}
                    <motion.div
                      className="absolute top-22 right-5 w-26 h-26 rounded-full shadow-[0_8px_24px_rgba(245,158,11,0.3)] overflow-hidden pointer-events-auto cursor-pointer"
                      animate={{ 
                        y: [0, -7, 0],
                        rotate: [0, 6, -6, 0]
                      }}
                      transition={{ 
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      whileHover={{ scale: 1.15, rotate: 15, zIndex: 30 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory("meals");
                        setSearchQuery("pizza");
                        setActiveTab("menu");
                        setTimeout(() => {
                          const searchInput = document.getElementById("menu-search-input");
                          if (searchInput) searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
                        }, 100);
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&auto=format&fit=crop&q=80"
                        alt="Taş Fırın Pizza"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-stone-950/15 hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 bg-stone-950/85 backdrop-blur-xs px-2 py-0.5 rounded-full">
                        <span className="text-[7px] font-black text-[#f59e0b] uppercase tracking-wider whitespace-nowrap">Pizza</span>
                      </div>
                    </motion.div>

                    {/* 5. Cozy Shotlar (Bottom Left float) */}
                    <motion.div
                      className="absolute top-[230px] left-6 w-20 h-20 rounded-full shadow-[0_8px_24px_rgba(245,158,11,0.3)] overflow-hidden pointer-events-auto cursor-pointer"
                      animate={{ 
                        y: [0, -6, 0],
                        rotate: [0, -4, 4, 0]
                      }}
                      transition={{ 
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2
                      }}
                      whileHover={{ scale: 1.15, rotate: -10, zIndex: 30 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory("cocktails");
                        setSearchQuery("shot");
                        setActiveTab("menu");
                        setTimeout(() => {
                          const searchInput = document.getElementById("menu-search-input");
                          if (searchInput) searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
                        }, 100);
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1560512823-829485b8bf24?w=300&auto=format&fit=crop&q=80"
                        alt="Ateşli Shotlar"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-stone-950/15 hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 bg-stone-950/85 backdrop-blur-xs px-2 py-0.5 rounded-full">
                        <span className="text-[7.5px] font-black text-[#f59e0b] uppercase tracking-wider whitespace-nowrap">Shotlar</span>
                      </div>
                    </motion.div>

                    {/* 6. Creative Kokteyller (Bottom Center float) */}
                    <motion.div
                      className="absolute top-[250px] left-[35%] w-22 h-22 rounded-full shadow-[0_8px_24px_rgba(245,158,11,0.3)] overflow-hidden pointer-events-auto cursor-pointer"
                      animate={{ 
                        y: [0, 8, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 6.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.7
                      }}
                      whileHover={{ scale: 1.15, rotate: 12, zIndex: 30 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory("cocktails");
                        setSearchQuery("");
                        setActiveTab("menu");
                        setTimeout(() => {
                          const searchInput = document.getElementById("menu-search-input");
                          if (searchInput) searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
                        }, 100);
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1536935338788-846bb9981813?w=300&auto=format&fit=crop&q=80"
                        alt="Efsane Kokteyller"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-stone-950/15 hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 bg-stone-950/85 backdrop-blur-xs px-2 py-0.5 rounded-full">
                        <span className="text-[7.5px] font-black text-[#f59e0b] uppercase tracking-wider whitespace-nowrap">Kokteyller</span>
                      </div>
                    </motion.div>

                    {/* 7. Cold Biralar (Bottom Right float) */}
                    <motion.div
                      className="absolute top-[230px] right-6 w-20 h-20 rounded-full shadow-[0_8px_24px_rgba(245,158,11,0.3)] overflow-hidden pointer-events-auto cursor-pointer"
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, 4, -4, 0]
                      }}
                      transition={{ 
                        duration: 4.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.4
                      }}
                      whileHover={{ scale: 1.15, rotate: -8, zIndex: 30 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory("beers");
                        setSearchQuery("");
                        setActiveTab("menu");
                        setTimeout(() => {
                          const searchInput = document.getElementById("menu-search-input");
                          if (searchInput) searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
                        }, 100);
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1567696911980-2eed69a41f87?w=300&auto=format&fit=crop&q=80"
                        alt="Soğuk Biralar"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-stone-950/15 hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 bg-stone-950/85 backdrop-blur-xs px-2 py-0.5 rounded-full">
                        <span className="text-[7.5px] font-black text-[#f59e0b] uppercase tracking-wider whitespace-nowrap">Biralar</span>
                      </div>
                    </motion.div>


                  </div>

                  {/* Bottom: Play-button action & Navigation helpers */}
                  <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between z-20">
                    {/* Floating Yellow Action Button & Label */}
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-11 h-11 rounded-full bg-[#f59e0b] text-stone-950 flex items-center justify-center shadow-[0_4px_15px_rgba(245,158,11,0.45)] relative z-10 border border-[#f59e0b]/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Compass className="w-4.5 h-4.5 text-stone-950 animate-pulse fill-stone-950/10" />
                      </motion.div>
                      <span className="text-[11px] font-black uppercase text-white tracking-[0.15em] drop-shadow-md group-hover:text-[#f59e0b] transition-colors">
                        MENÜYÜ KEŞFET
                      </span>
                    </div>

                    {/* Sliding helper */}
                    <div className="flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] font-black tracking-widest text-stone-300 uppercase">‹ İNCELE ›</span>
                    </div>
                  </div>
                </div>

                {/* Visual Quick Categories with custom Unsplash images (Shots, Pizzas, Burgers, Cocktails, Beers, etc.) */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[10px] font-black tracking-[0.25em] text-stone-500 uppercase font-mono">
                      GÖRSEL KEŞİF
                    </span>
                    <span className="text-[8px] font-bold text-[#f59e0b] uppercase tracking-widest font-mono animate-pulse">
                      ‹ Seç & İncele ›
                    </span>
                  </div>
                  
                  <div className="flex gap-4 overflow-x-auto pb-2 pt-1 scrollbar-none snap-x px-1">
                    {[
                      {
                        name: "Shotlar",
                        image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?w=300&auto=format&fit=crop&q=80",
                        color: "border-amber-500/50 hover:border-amber-500",
                        category: "cocktails",
                        search: "shot"
                      },
                      {
                        name: "Pizzalar",
                        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&auto=format&fit=crop&q=80",
                        color: "border-red-500/50 hover:border-red-500",
                        category: "meals",
                        search: "pizza"
                      },
                      {
                        name: "Burgerler",
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80",
                        color: "border-orange-500/50 hover:border-orange-500",
                        category: "meals",
                        search: "burger"
                      },
                      {
                        name: "Kokteyller",
                        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300&auto=format&fit=crop&q=80",
                        color: "border-sky-400/50 hover:border-sky-400",
                        category: "cocktails",
                        search: ""
                      },
                      {
                        name: "Biralar",
                        image: "https://images.unsplash.com/photo-1538256531285-511566e19026?w=300&auto=format&fit=crop&q=80",
                        color: "border-yellow-600/50 hover:border-yellow-600",
                        category: "beers",
                        search: ""
                      },
                      {
                        name: "Atıştırmalık",
                        image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=300&auto=format&fit=crop&q=80",
                        color: "border-emerald-500/50 hover:border-emerald-500",
                        category: "meals",
                        search: "atıştırmalık"
                      }
                    ].map((cat, idx) => (
                      <motion.div
                        key={idx}
                        className="flex flex-col items-center gap-1.5 shrink-0 snap-center cursor-pointer group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCategory(cat.category);
                          setSearchQuery(cat.search);
                          setActiveTab("menu");
                          setTimeout(() => {
                            const searchInput = document.getElementById("menu-search-input");
                            if (searchInput) {
                              searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
                            } else {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }, 100);
                        }}
                      >
                        <div className={`relative w-18 h-18 rounded-full overflow-hidden border-2 ${cat.color} shadow-lg shadow-stone-950/10 transition-colors duration-300`}>
                          <img 
                            src={cat.image} 
                            alt={cat.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-stone-950/10 group-hover:bg-transparent transition-colors duration-300" />
                          {/* Symmetrical subtle glossy reflection glass arc */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-40 mix-blend-overlay" />
                        </div>
                        <span className="text-[10px] font-black text-stone-600 group-hover:text-[#f59e0b] transition-colors uppercase tracking-[0.1em] font-sans">
                          {cat.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Campaigns List (Always great for home view) */}
                <CampaignsSlider
                  campaigns={CAMPAIGNS}
                  cartItemIds={cart.map((c) => c.menuItem.id)}
                  onAddCampaign={addCampaignToCart}
                />

                {/* Hot Promo Banner - Kokteylin En Nefis Hali (BAMM Garden Style) */}
                <div 
                  onClick={() => {
                    setSelectedCategory("cocktails");
                    setActiveTab("menu");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="relative h-[165px] rounded-[28px] overflow-hidden shadow-lg shadow-stone-950/15 border border-stone-900/5 cursor-pointer group select-none"
                >
                  <img
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80"
                    alt="Premium Cocktails"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Extreme overlay gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-between p-5 z-10">
                    <div className="space-y-1">
                      <span className="text-[8.5px] font-black tracking-[0.25em] text-amber-400 uppercase block">GASTRO GECELERİ</span>
                      
                      <h2 className="text-[20px] font-black uppercase italic leading-none tracking-tight text-white drop-shadow-md">
                        KOKTEYLİN <span className="text-[#f59e0b]">EN NEFİS</span> HALİ!
                      </h2>
                      
                      <p className="text-[10.5px] text-stone-300 font-medium leading-relaxed max-w-[220px]">
                        El yapımı taze mixler ve seçkin içki koleksiyonumuzla.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="w-8 h-8 rounded-full bg-[#f59e0b] text-stone-950 flex items-center justify-center shadow-md border border-[#f59e0b]/25 shrink-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Compass className="w-3.5 h-3.5 text-stone-950" />
                      </motion.div>
                      <span className="text-[10px] font-black uppercase text-white tracking-[0.1em] group-hover:text-[#f59e0b] transition-colors">
                        Bar Menüsünü İncele
                      </span>
                    </div>
                  </div>
                </div>

                {/* Popular Tastes Horizontal Slider */}
                <PopularTastesSlider
                  items={menuItems}
                  onOpenDetail={(item) => setSelectedDetailItem(item)}
                  onAddToCart={addToCart}
                />
              </motion.div>
            ) : (
              <motion.div
                key="menu-section"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {selectedCategory === "all" ? (
                  <>
                    {/* Search Bar */}
                    <div id="search-bar" className="relative flex items-center">
                      <Search className="absolute left-3.5 w-4 h-4 text-stone-400" />
                      <input
                        id="menu-search-input"
                        type="text"
                        placeholder="Lezzet veya içecek ara... (Örn: burger, kokteyl)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#fbf9f6] border border-[#e9e3da] hover:border-[#d97706]/30 text-stone-900 text-xs pl-10 pr-4 py-3 rounded-2xl focus:outline-none focus:ring-1 focus:ring-amber-500 shadow-inner font-sans transition-all"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 text-stone-400 hover:text-stone-700"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {searchQuery ? (
                      // Search Results view
                      <div className="space-y-4">
                        <div className="flex items-center justify-between px-1">
                          <span className="text-[10px] font-black text-stone-600 uppercase tracking-wider font-sans">
                            Arama Sonuçları ({filteredItems.length})
                          </span>
                          <button
                            onClick={() => setSearchQuery("")}
                            className="text-[9.5px] font-extrabold text-[#f59e0b] uppercase tracking-wider"
                          >
                            Temizle
                          </button>
                        </div>
                        
                        {/* Food cards grid for Search */}
                        <div
                          id="food-cards-grid"
                          className={`grid gap-3.5 pb-24 ${
                            menuLayoutMode === "list" ? "grid-cols-1" : "grid-cols-2"
                          }`}
                        >
                          {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                              <MenuItemCard
                                key={item.id}
                                item={item}
                                isSuggested={false}
                                viewMode={menuLayoutMode}
                                onAddToCart={addToCart}
                                onOpenDetail={(clickedItem) => setSelectedDetailItem(clickedItem)}
                              />
                            ))
                          ) : (
                            <div className="col-span-full py-12 text-center space-y-2">
                              <Info className="w-8 h-8 text-stone-300 mx-auto" />
                              <p className="text-xs text-stone-500 font-bold">Aradığınız lezzet bulunamadı.</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      // Categories Portal with Premium Minimalist Symmetrical Layout
                      <div className="space-y-4">
                        <div className="px-1 flex flex-col">
                          <span className="text-[8.5px] font-black text-[#f59e0b] uppercase tracking-[0.18em] font-mono">Gastro Pub Menüsü</span>
                          <h3 className="text-base font-black text-stone-900 uppercase mt-0.5 tracking-tight font-sans">Kategoriler</h3>
                        </div>

                        {/* Beautifully balanced grid of luxury menu cards */}
                        <div id="category-selector" className="grid grid-cols-2 gap-3.5 pb-28 select-none">
                          {CATEGORIES.filter(cat => cat.id !== "all").map((cat, index) => {
                            // Find some items in this category to calculate real count
                            const realCount = menuItems.filter(item => {
                              if (cat.id === "campaigns") return item.isBestseller === true;
                              if (cat.id === "new") return item.isBestseller === true || item.rating >= 4.9;
                              return item.category === cat.id;
                            }).length;

                            // Formatted zero-padded index (e.g. 01, 02...)
                            const formattedIndex = String(index + 1).padStart(2, '0');

                            // Mapped elegant descriptors for a premium feel
                            const getGastronomyDescriptor = (id: string) => {
                              switch (id) {
                                case "campaigns": return "EXCLUSIVE OFFERS";
                                case "meals": return "GOURMET DELICACIES";
                                case "beers": return "ARTISANAL BREWS";
                                case "cocktails": return "SIGNATURE MIXOLOGY";
                                case "wines": return "PRESTIGE CELLAR";
                                case "whiskies": return "SINGLE MALT RESERVE";
                                case "shots": return "EXPRESSIVE SHOOTERS";
                                case "soft_drinks": return "ELIXIRS & SODAS";
                                case "desserts": return "FINE PÂTISSERIE";
                                case "spirits": return "PREMIUM GLASSES";
                                case "teas": return "INFUSIONS & LEAVES";
                                case "new": return "SEASONAL SELECTION";
                                default: return "CURATED ITEMS";
                              }
                            };

                            return (
                              <PremiumCategoryCard
                                key={cat.id}
                                cat={cat}
                                index={index}
                                realCount={realCount}
                                getGastronomyDescriptor={getGastronomyDescriptor}
                                getCategoryIcon={getCategoryIcon}
                                onClick={() => {
                                  setSelectedCategory(cat.id);
                                  setHighlightedCategory(null); // Clear manual music highlight
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  // Dedicated Category Detail View/Page!
                  <div className="space-y-4">
                    {/* Header with back button */}
                    <div className="flex items-center justify-between bg-white/95 border border-stone-200/70 p-3 rounded-2xl shadow-xs">
                      <button
                        onClick={() => {
                          setSelectedCategory("all");
                          setSearchQuery("");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-[11px] transition-colors cursor-pointer select-none active:scale-95"
                      >
                        <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Kategoriler</span>
                      </button>

                      {/* Title & Icon Badge */}
                      <div className="flex items-center gap-2.5 pr-1 select-none text-right">
                        <div className="flex flex-col">
                          <span className="text-[12.5px] font-black text-stone-900 uppercase tracking-tight">
                            {CATEGORIES.find(c => c.id === selectedCategory)?.name || "Kategori"}
                          </span>
                          <span className="text-[9.5px] font-bold text-stone-400 font-mono">
                            {filteredItems.length} Çeşit
                          </span>
                        </div>
                        <span className="flex items-center justify-center w-8.5 h-8.5 rounded-xl bg-[#f59e0b]/15 text-[#f59e0b] shrink-0 [&_svg]:w-4 [&_svg]:h-4">
                          {getCategoryIcon(CATEGORIES.find(c => c.id === selectedCategory)?.icon || "Utensils")}
                        </span>
                      </div>
                    </div>

                    {/* Category Search Bar */}
                    <div className="relative flex items-center">
                      <Search className="absolute left-3.5 w-4 h-4 text-stone-400" />
                      <input
                        type="text"
                        placeholder={`${CATEGORIES.find(c => c.id === selectedCategory)?.name || "Kategori"} içinde ara...`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#fbf9f6] border border-[#e9e3da] hover:border-[#d97706]/30 text-stone-900 text-xs pl-10 pr-4 py-3 rounded-2xl focus:outline-none focus:ring-1 focus:ring-amber-500 shadow-inner font-sans transition-all"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 text-stone-400 hover:text-stone-700"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Live Pairing Notification Banner */}
                    {highlightedCategory && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-amber-50 border border-amber-200 rounded-2xl p-3 flex items-start gap-2.5"
                      >
                        <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[10px] font-extrabold text-amber-900 uppercase tracking-wider">Şefin Ritmi Yakalayan Eşlemesi</h4>
                          <p className="text-[9.5px] text-amber-800 leading-snug mt-0.5 font-sans">
                            Şu an çalan <b>{activeChannel.name}</b> tınılarıyla mükemmel uyum sağlayan lezzetlerimizi aşağıda senin için listeledim.
                          </p>
                        </div>
                        <button onClick={() => setHighlightedCategory(null)} className="text-amber-500 hover:text-amber-700">
                          <X className="w-3 h-3" />
                        </button>
                      </motion.div>
                    )}

                    {/* Layout mode and header */}
                    <div className="flex items-center justify-between px-1">
                      <span className="text-[9.5px] font-black text-stone-500 uppercase tracking-widest font-mono">
                        {filteredItems.length} Ürün Listeleniyor
                      </span>
                      
                      {/* Glassmorphic View Toggle Pill */}
                      <div className="flex bg-stone-200/50 p-0.5 rounded-xl border border-stone-300/30">
                        <button
                          onClick={() => setMenuLayoutMode("list")}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[9px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                            menuLayoutMode === "list"
                              ? "bg-stone-950 text-white shadow-xs"
                              : "text-stone-500 hover:text-stone-800"
                          }`}
                        >
                          <List className="w-3 h-3" />
                          Liste
                        </button>
                        <button
                          onClick={() => setMenuLayoutMode("grid")}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[9px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                            menuLayoutMode === "grid"
                              ? "bg-stone-950 text-white shadow-xs"
                              : "text-stone-500 hover:text-stone-800"
                          }`}
                        >
                          <LayoutGrid className="w-3 h-3" />
                          Izgara
                        </button>
                      </div>
                    </div>

                    {/* Cards Grid of the category */}
                    <div
                      id="food-cards-grid"
                      className={`grid gap-3.5 pb-24 ${
                        menuLayoutMode === "list" ? "grid-cols-1" : "grid-cols-2"
                      }`}
                    >
                      {filteredItems.length > 0 ? (
                        filteredItems.map((item) => {
                          // Decide if this item matches the live radio suggested category
                          let isSuggested = false;
                          if (activeChannel.id === "radio-indie" && item.category === "burgers") isSuggested = true;
                          if (activeChannel.id === "radio-jazz" && (item.category === "drinks" || item.category === "desserts")) isSuggested = true;
                          if (activeChannel.id === "radio-synth" && item.category === "snacks") isSuggested = true;

                          return (
                            <MenuItemCard
                              key={item.id}
                              item={item}
                              isSuggested={isSuggested}
                              viewMode={menuLayoutMode}
                              onAddToCart={addToCart}
                              onOpenDetail={(clickedItem) => setSelectedDetailItem(clickedItem)}
                            />
                          );
                        })
                      ) : (
                        <div className="col-span-full py-12 text-center space-y-2">
                          <Info className="w-8 h-8 text-stone-300 mx-auto" />
                          <p className="text-xs text-stone-500 font-bold">Bu kategoride aradığınız kriterde ürün bulunamadı.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Bar: Premium iOS Tab Bar and Dynamic Floating Cart Strip */}
        <div id="bottom-dock-container" className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg z-30 flex flex-col pointer-events-none">
          
          {/* Symmetrical Floating Action Buttons (BAMM Garden Style) */}
          <div className="px-4 pb-2 w-full flex justify-between items-center pointer-events-auto gap-3">
            {/* Left Button: Menüyü Gör */}
            <motion.button
              onClick={() => {
                setIsStaffOpen(false);
                setIsProductReviewsOpen(false);
                setActiveTab("menu");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex-1 bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 font-black text-[11.5px] tracking-widest uppercase py-3.5 px-4 rounded-[20px] flex items-center justify-center gap-2.5 shadow-lg shadow-stone-950/20 cursor-pointer transition-all border border-[#f59e0b]/35 hover:scale-[1.03] active:scale-95"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Menu className="w-4 h-4 stroke-[3.5] text-stone-950" />
              <span className="font-extrabold tracking-wider">Menüyü Gör</span>
            </motion.button>

            {/* Right Button: İstek Parça */}
            <motion.button
              onClick={() => setIsSongRequestOpen(true)}
              className="flex-1 bg-stone-900 hover:bg-stone-850 text-white font-black text-[11.5px] tracking-widest uppercase py-3.5 px-4 rounded-[20px] flex items-center justify-center gap-2.5 shadow-lg shadow-stone-950/20 cursor-pointer transition-all border border-stone-800 hover:scale-[1.03] active:scale-95"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Music className="w-4 h-4 stroke-[3] text-[#f59e0b]" />
              <span className="font-extrabold tracking-wider">İstek Parça</span>
            </motion.button>
          </div>

          {/* 2. Translucent Floating Pill Dock (4 Icons) with Sliding Capsule */}
          {(() => {
            const currentActiveTab = isStaffOpen 
              ? "staff" 
              : isProductReviewsOpen
                ? "reviews"
                : activeTab;

            return (
              <div className="w-[94%] max-w-sm mx-auto mb-6 bg-white/75 backdrop-blur-2xl border border-white/60 p-1 shadow-[0_12px_40px_rgba(28,25,23,0.1)] rounded-full pointer-events-auto flex items-center justify-between relative">
                
                {/* Tab 1: Ana Sayfa */}
                <motion.button
                  onClick={() => {
                    setIsStaffOpen(false);
                    setIsProductReviewsOpen(false);
                    setActiveTab("home");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="relative flex flex-col items-center justify-center py-2 px-2.5 cursor-pointer group flex-1 rounded-full select-none z-10"
                  whileTap={{ scale: 0.95 }}
                >
                  {currentActiveTab === "home" && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-stone-950 rounded-full -z-10 shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Home 
                    className={`w-4 h-4 mb-0.5 transition-all duration-300 ${
                      currentActiveTab === "home" 
                        ? "text-amber-400 scale-110" 
                        : "text-stone-400 group-hover:text-stone-600"
                    }`} 
                  />
                  <span 
                    className={`text-[8px] font-black tracking-wider uppercase transition-colors duration-300 ${
                      currentActiveTab === "home" 
                        ? "text-white" 
                        : "text-stone-400 group-hover:text-stone-600"
                    }`}
                  >
                    Ana Sayfa
                  </span>
                </motion.button>

                {/* Tab 2: Menü */}
                <motion.button
                  onClick={() => {
                    setIsStaffOpen(false);
                    setIsProductReviewsOpen(false);
                    setActiveTab("menu");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="relative flex flex-col items-center justify-center py-2 px-2.5 cursor-pointer group flex-1 rounded-full select-none z-10"
                  whileTap={{ scale: 0.95 }}
                >
                  {currentActiveTab === "menu" && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-stone-950 rounded-full -z-10 shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Compass 
                    className={`w-4 h-4 mb-0.5 transition-all duration-300 ${
                      currentActiveTab === "menu" 
                        ? "text-amber-400 scale-110" 
                        : "text-stone-400 group-hover:text-stone-600"
                    }`} 
                  />
                  <span 
                    className={`text-[8px] font-black tracking-wider uppercase transition-colors duration-300 ${
                      currentActiveTab === "menu" 
                        ? "text-white" 
                        : "text-stone-400 group-hover:text-stone-600"
                    }`}
                  >
                    Menü
                  </span>
                </motion.button>

                {/* Tab 3: Lezzetler */}
                <motion.button
                  onClick={() => {
                    setIsProductReviewsOpen(true);
                    setIsStaffOpen(false);
                  }}
                  className="relative flex flex-col items-center justify-center py-2 px-2.5 cursor-pointer group flex-1 rounded-full select-none z-10"
                  whileTap={{ scale: 0.95 }}
                >
                  {currentActiveTab === "reviews" && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-stone-950 rounded-full -z-10 shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Utensils 
                    className={`w-4 h-4 mb-0.5 transition-all duration-300 ${
                      currentActiveTab === "reviews" 
                        ? "text-amber-400 scale-110" 
                        : "text-stone-400 group-hover:text-stone-600"
                    }`} 
                  />
                  <span 
                    className={`text-[8px] font-black tracking-wider uppercase transition-colors duration-300 ${
                      currentActiveTab === "reviews" 
                        ? "text-white" 
                        : "text-stone-400 group-hover:text-stone-600"
                    }`}
                  >
                    Lezzetler
                  </span>
                </motion.button>

                {/* Tab 4: Ekibimiz */}
                <motion.button
                  onClick={() => {
                    setIsStaffOpen(true);
                    setIsProductReviewsOpen(false);
                  }}
                  className="relative flex flex-col items-center justify-center py-2 px-2.5 cursor-pointer group flex-1 rounded-full select-none z-10"
                  whileTap={{ scale: 0.95 }}
                >
                  {currentActiveTab === "staff" && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-stone-950 rounded-full -z-10 shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Users 
                    className={`w-4 h-4 mb-0.5 transition-all duration-300 ${
                      currentActiveTab === "staff" 
                        ? "text-amber-400 scale-110" 
                        : "text-stone-400 group-hover:text-stone-600"
                    }`} 
                  />
                  <span 
                    className={`text-[8px] font-black tracking-wider uppercase transition-colors duration-300 ${
                      currentActiveTab === "staff" 
                        ? "text-white" 
                        : "text-stone-400 group-hover:text-stone-600"
                    }`}
                  >
                    Ekibimiz
                  </span>
                </motion.button>

              </div>
            );
          })()}

        </div>

        {/* Staff Drawer */}
        <StaffDrawer
          isOpen={isStaffOpen}
          onClose={() => setIsStaffOpen(false)}
          staffList={staffList}
          onAddReview={handleAddStaffReview}
          reviews={reviews}
        />

        {/* Product Reviews Drawer */}
        <ProductReviewsDrawer
          isOpen={isProductReviewsOpen}
          onClose={() => setIsProductReviewsOpen(false)}
          menuItems={menuItems}
          reviews={menuItemReviews}
          onAddReview={handleAddMenuItemReview}
        />

        {/* Song Request Drawer */}
        <SongRequestDrawer
          isOpen={isSongRequestOpen}
          onClose={() => setIsSongRequestOpen(false)}
          activeChannelName={activeChannel.name}
          activeSongTitle={activeChannel.nowPlaying.title}
          activeArtistName={activeChannel.nowPlaying.artist}
        />

        {/* MenuItem Detail Drawer */}
        <MenuItemDetailDrawer
          item={selectedDetailItem}
          isOpen={!!selectedDetailItem}
          onClose={() => setSelectedDetailItem(null)}
        />

      </div>
    </div>
  );
}
