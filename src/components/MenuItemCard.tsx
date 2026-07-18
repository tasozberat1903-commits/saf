/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Clock, Flame, Star, Heart, ChevronRight, Plus } from "lucide-react";
import { MenuItem } from "../types";

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart?: (item: MenuItem) => void;
  isSuggested: boolean;
  onOpenDetail?: (item: MenuItem) => void;
  viewMode?: "grid" | "list";
}

const heartVariants = {
  unliked: { 
    scale: 1, 
    color: "#78716c", 
    fill: "transparent" 
  },
  liked: {
    scale: [1, 1.45, 0.85, 1.15, 1],
    color: "#ef4444",
    fill: "#ef4444",
    transition: {
      duration: 0.5,
      times: [0, 0.25, 0.45, 0.7, 1],
      ease: "easeInOut"
    }
  }
};

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  onAddToCart,
  isSuggested,
  onOpenDetail,
  viewMode = "grid",
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  if (viewMode === "list") {
    return (
      <motion.div
        id={`menu-item-card-${item.id}`}
        onClick={() => onOpenDetail?.(item)}
        className={`relative bg-[#fcfbf9] border rounded-2xl p-3 flex items-center gap-3.5 transition-all duration-300 shadow-3xs overflow-hidden group cursor-pointer ${
          isSuggested 
            ? "border-[#d97706]/40 bg-[#fefcf8] ring-1 ring-[#d97706]/10" 
            : "border-[#e6decb]/85 hover:border-[#d97706]/35"
        }`}
        whileHover={{ y: -2 }}
        layout
      >
        {/* Suggested Badge for list view */}
        {isSuggested && (
          <div className="absolute top-2 right-2 bg-[#d97706] text-white text-[7.5px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-widest z-10">
            Önerilen
          </div>
        )}

        {/* Thumbnail on the left */}
        <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-[#f5efe4] border border-[#e8dfd0]/40">
          <motion.img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            layoutId={`img-${item.id}`}
          />
          {item.isBestseller && (
            <div className="absolute bottom-1 left-1 bg-red-600 text-[6.5px] font-black text-white px-1 py-0.5 rounded-sm uppercase">
              Popüler
            </div>
          )}
        </div>

        {/* Info on the right */}
        <div className="flex-1 min-w-0 flex flex-col justify-between h-20 py-0.5">
          <div>
            {/* Title & Price in a beautiful dotted leader style */}
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-[12.5px] font-black text-stone-900 tracking-tight truncate group-hover:text-[#d97706] transition-colors uppercase">
                {item.name}
              </h3>
              <div className="flex-1 border-b border-dashed border-stone-300/80 mx-1 min-w-[12px] self-end" />
              <span className="text-[13px] font-mono font-black text-[#d97706] shrink-0">
                {item.price} <span className="text-[9px] font-bold">TL</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-[10px] text-stone-500 line-clamp-1 mt-1 leading-normal font-sans">
              {item.description}
            </p>
          </div>

          {/* Rating, Prep Time & Add-to-cart row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {item.rating && (
                <div className="flex items-center gap-0.5">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  <span className="text-[9px] font-black text-stone-700">{item.rating.toFixed(1)}</span>
                </div>
              )}
              {item.prepTime && (
                <span className="text-[8.5px] text-stone-400 font-bold uppercase font-mono">
                  • {item.prepTime}
                </span>
              )}
            </div>

            {/* Simple elegant plus action or right arrow */}
            {onAddToCart ? (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(item);
                }}
                className="w-6.5 h-6.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white flex items-center justify-center cursor-pointer transition-all"
                whileTap={{ scale: 0.9 }}
              >
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
              </motion.button>
            ) : (
              <div className="w-6.5 h-6.5 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      id={`menu-item-card-${item.id}`}
      onClick={() => onOpenDetail?.(item)}
      className={`relative bg-[#f8f5f0] border rounded-[28px] p-3.5 flex flex-col justify-between transition-all duration-300 shadow-sm overflow-hidden group cursor-pointer ${
        isSuggested 
          ? "border-amber-500 ring-2 ring-amber-500/10 bg-[#fefcf8] shadow-md shadow-amber-900/5" 
          : "border-[#eae2d5] hover:border-[#d97706]/40 hover:shadow-md"
      }`}
      whileHover={{ y: -4 }}
      layout
    >
      {/* Decorative background circle (matches the mockup style) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-28 h-28 bg-[#f2ede3] rounded-full filter blur-xl group-hover:scale-110 transition-transform pointer-events-none -z-10" />

      {/* Suggested / Live Pairing badge */}
      {isSuggested && (
        <div className="absolute top-2.5 left-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-[8px] font-extrabold px-2 py-0.5 rounded-full shadow-sm z-10 flex items-center gap-0.5 uppercase tracking-wider animate-bounce">
          <Star className="w-2 h-2 fill-white" />
          Radyo Seçimi
        </div>
      )}

      {/* Item Image with hover expansion */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3 bg-[#f3ede3] flex items-center justify-center border border-[#e8dfd0]/40">
        <motion.img
          src={item.image}
          alt={item.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          layoutId={`img-${item.id}`}
        />

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-2.5 right-2.5 w-7.5 h-7.5 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center border border-[#e8dfd0]/50 shadow-xs z-10 hover:bg-white active:scale-95 transition-all cursor-pointer"
        >
          <motion.div
            animate={isFavorite ? "liked" : "unliked"}
            variants={heartVariants}
            className="flex items-center justify-center"
          >
            <Heart className="w-4 h-4" />
          </motion.div>
        </button>
        
        {/* Quick details overlay */}
        <div className="absolute bottom-2 left-2 flex gap-1 z-10">
          {item.prepTime && (
            <div className="bg-black/40 backdrop-blur-md text-[8px] font-bold text-white px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <Clock className="w-2.5 h-2.5 text-amber-300" />
              <span>{item.prepTime}</span>
            </div>
          )}
          {item.isBestseller && (
            <div className="bg-[#b91c1c]/80 backdrop-blur-md text-[8px] font-bold text-white px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <Flame className="w-2.5 h-2.5 text-amber-300" />
              <span>Çok Satan</span>
            </div>
          )}
        </div>
      </div>

      {/* Item info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-[12px] font-bold text-stone-900 tracking-tight leading-tight group-hover:text-[#d97706] transition-colors">
            {item.name}
          </h3>
          {item.rating && (
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              <span className="text-[9px] font-black text-stone-700">{item.rating.toFixed(1)}</span>
              <span className="text-[8px] text-stone-400 font-bold">({item.ratingCount})</span>
            </div>
          )}
          <p className="text-[10px] text-stone-500 line-clamp-2 mt-1 leading-normal font-sans">
            {item.description}
          </p>
        </div>

        {/* Pricing row */}
        <div className="flex items-center justify-between mt-3.5 pt-2 border-t border-[#eae2d5]/60">
          <div className="flex flex-col">
            <span className="text-[8px] text-stone-400 font-bold uppercase tracking-widest leading-none">Fiyat</span>
            <span className="text-[14px] font-extrabold text-[#d97706] tracking-tight mt-0.5 font-mono">
              {item.price} <span className="text-[10px] font-bold text-amber-700">TL</span>
            </span>
          </div>

          {/* Minimalist interactive plus add-to-cart button */}
          {onAddToCart && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(item);
              }}
              className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 flex items-center justify-center shadow-xs cursor-pointer border border-amber-400/20 transition-all"
              whileTap={{ scale: 0.88 }}
              whileHover={{ scale: 1.08 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
