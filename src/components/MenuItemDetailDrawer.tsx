import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Star, Flame, Info, Box } from "lucide-react";
import { MenuItem } from "../types";
import { ARViewerModal } from "./ARViewerModal";

interface MenuItemDetailDrawerProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

// Static mapping for extra details of menu items
const MENU_ITEM_DETAILS: Record<string, { ingredients: string[]; allergens: string[] }> = {
  "burger-classic": {
    ingredients: [
      "150g El Yapımı Dana Burger Köftesi",
      "Sıcak Brioche Ekmeği",
      "Karamelize Pub Soğanı",
      "Eritilmiş Cheddar Peyniri",
      "Ev Yapımı Gizli Gastro Sos",
      "Taze Kıvırcık Marul",
      "Bahçe Domates Dilimleri"
    ],
    allergens: ["Gluten (Buğday)", "Süt ve Süt Ürünleri", "Yumurta"]
  },
  "fries-seasoned": {
    ingredients: [
      "Altın Sarısı Patates",
      "Özel Pub Baharat Harmanı",
      "Ev Yapımı Sarımsaklı Mayonez",
      "Taze Biberiye",
      "Narenciye Dilimleri"
    ],
    allergens: ["Yumurta", "Gluten"]
  },
  "wrap-chicken": {
    ingredients: [
      "Izgara Tavuk Göğsü",
      "Tortilla Ekmeği",
      "Sıcak Cheddar",
      "Sote Renkli Biberler",
      "Meksika Fasulyesi",
      "Hafif Acı Jalapeno"
    ],
    allergens: ["Gluten", "Süt Ürünleri"]
  },
  "nachos-loaded": {
    ingredients: [
      "Çıtır Mısır Tortilla Cipsi",
      "Akışkan Pub Peynir Sosu",
      "Guacamole Avokado",
      "Ekşi Krema",
      "Baharatlı Dana Kıyma",
      "Doğranmış Taze Kişniş"
    ],
    allergens: ["Süt ve Süt Ürünleri"]
  },
  "burger-smash": {
    ingredients: [
      "Çift 80g Smash Dana Köfte",
      "Sıcak Brioche Ekmeği",
      "Çift Kat Cheddar",
      "Çıtır Soğan Halkası",
      "Trüflü Mayonez",
      "Ekşi Turşu Dilimleri"
    ],
    allergens: ["Gluten", "Süt Ürünleri", "Yumurta"]
  },
  "dessert-banoffee": {
    ingredients: [
      "Fırınlanmış Çıtır Milföy",
      "İpeksi Pastacı Kreması",
      "Karamelize Muz Dilimleri",
      "Yoğun Çikolata Sosu",
      "Pudra Şekeri"
    ],
    allergens: ["Gluten", "Süt Ürünleri", "Yumurta"]
  },
  "drink-craft-beer": {
    ingredients: [
      "Özel Kavrulmuş Arpa Maltı",
      "Aromatik Şerbetçiotu",
      "Portakal Kabuğu Özü",
      "Pub Mayası",
      "Doğal Kaynak Suyu"
    ],
    allergens: ["Gluten"]
  },
  "drink-lemonade": {
    ingredients: [
      "Taze Sıkılmış Limon Suyu",
      "Demleme Hibiskus Özü",
      "Kokulu Nane Yaprakları",
      "Hafif Esmer Şeker"
    ],
    allergens: ["Alerjen içermez"]
  }
};

const getCategoryName = (catId: string) => {
  const mapping: Record<string, string> = {
    campaigns: "Kampanya",
    meals: "Yemekler",
    beers: "Biralar",
    cocktails: "Kokteyller",
    wines: "Şaraplar",
    whiskies: "Viskiler",
    shots: "Shotlar",
    soft_drinks: "Soft İçecekler",
    desserts: "Tatlılar",
    spirits: "Kadeh Alkoller",
    teas: "Çaylar",
    new: "Yeni Ürünler"
  };
  return mapping[catId] || catId;
};

export function MenuItemDetailDrawer({
  item,
  isOpen,
  onClose,
}: MenuItemDetailDrawerProps) {
  const [isARViewerOpen, setIsARViewerOpen] = useState(false);

  if (!item) return null;

  // Retrieve details
  const details = MENU_ITEM_DETAILS[item.id] || {
    ingredients: ["Özel Reçeteli Gastro Malzemeler"],
    allergens: ["Bilgi için lütfen servis personeline danışınız."]
  };

  return (
    <>
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Premium Sheet Container */}
          <motion.div
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white rounded-t-[32px] z-50 flex flex-col max-h-[85%] border-t border-stone-200 shadow-2xl overflow-hidden font-sans"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 240 }}
          >
            {/* Image Section at the very top */}
            <div className="relative w-full h-64 shrink-0 bg-[#faf8f5] flex items-center justify-center p-6 border-b border-stone-100">
              <img
                src={item.image}
                alt={item.name}
                className="max-w-full max-h-full object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Soft top gradient removed or toned down for premium look */}
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-stone-900/5 to-transparent pointer-events-none" />

              {/* Floating Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-stone-200/80 text-stone-700 flex items-center justify-center cursor-pointer transition-all shadow-md active:scale-95"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Bestseller indicator if active */}
              {item.isBestseller && (
                <div className="absolute bottom-4 left-4 bg-rose-500 text-white font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md flex items-center gap-1 border border-rose-600/10">
                  <Flame className="w-3 h-3 fill-white" />
                  Çok Satan Lezzet
                </div>
              )}
              
              {/* AR Button */}
              <button
                onClick={() => setIsARViewerOpen(true)}
                className="absolute bottom-4 right-4 bg-stone-900 text-white hover:bg-stone-800 font-black text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-stone-900/20 flex items-center gap-1 border border-stone-700 transition-transform active:scale-95"
              >
                <Box className="w-3.5 h-3.5" />
                Masanda Gör
              </button>
            </div>

            {/* Drag Handle & Content Area */}
            <div className="flex-1 overflow-y-auto pb-8">
              {/* Soft Drag/Indicator Handle */}
              <div className="w-full flex justify-center py-2.5">
                <div className="w-10 h-1 bg-stone-200 rounded-full" />
              </div>

              <div className="px-6 space-y-5">
                {/* Title and Category Row */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/50">
                      {getCategoryName(item.category)}
                    </span>
                    
                    <span className="text-lg font-black text-[#d97706] font-mono tracking-tight">
                      {item.price} <span className="text-[11px] font-extrabold text-amber-600">TL</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-stone-900 tracking-tight uppercase">
                    {item.name}
                  </h3>

                  {/* Rating Info */}
                  {item.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-black text-stone-800">{item.rating.toFixed(1)}</span>
                      <span className="text-[10.5px] text-stone-400 font-bold">({item.ratingCount} Değerlendirme)</span>
                    </div>
                  )}
                </div>

                {/* Description Text */}
                <div className="bg-stone-50 border border-stone-100 p-4 rounded-2xl">
                  <p className="text-xs text-stone-600 font-semibold leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Recipe Ingredients Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <h4 className="text-[10.5px] font-black text-stone-400 uppercase tracking-widest">
                      Reçete İçeriği
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2 pl-1.5">
                    {details.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-stone-300" />
                        <span className="text-xs text-stone-700 font-semibold leading-snug">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Allergen Advisory box */}
                <div className="bg-rose-50/30 border border-rose-100/70 rounded-xl p-3 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-rose-800">
                    <Info className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span className="text-[9.5px] font-black uppercase tracking-wider">Alerjen Uyarısı</span>
                  </div>
                  
                  <p className="text-[10.5px] text-stone-600 font-semibold leading-relaxed">
                    {details.allergens.join(", ")}
                  </p>
                  
                  <p className="text-[8.5px] text-stone-400 leading-normal italic font-medium pt-1 border-t border-rose-100/40">
                    * Herhangi bir gıda alerjiniz veya hassasiyetiniz varsa lütfen siparişinizi tamamlamadan önce servis ekibimize danışınız.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Safe Area indicator bar */}
            <div className="flex justify-center pb-2 pt-1 bg-white border-t border-stone-100 shrink-0">
              <div className="w-28 h-1 bg-stone-200 rounded-full" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    
    <ARViewerModal 
      item={item} 
      isOpen={isARViewerOpen} 
      onClose={() => setIsARViewerOpen(false)} 
    />
    </>
  );
}
