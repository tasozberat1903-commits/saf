import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { Percent, ChevronRight, Check } from "lucide-react";
import { Campaign } from "../types";

interface CampaignsSliderProps {
  campaigns: Campaign[];
  cartItemIds: string[];
  onAddCampaign: (campaign: Campaign) => void;
}

export const CampaignsSlider: React.FC<CampaignsSliderProps> = ({
  campaigns,
  cartItemIds,
  onAddCampaign,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollPos = el.scrollLeft;
      const cardWidth = 260 + 16; // width + gap
      const index = Math.round(scrollPos / cardWidth);
      setActiveDot(Math.min(Math.max(index, 0), campaigns.length - 1));
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [campaigns.length]);

  return (
    <div id="campaigns-container" className="space-y-3.5 pt-1 mb-5">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
            <Percent className="w-3 h-3 stroke-[2.5]" />
          </div>
          <h3 className="text-[12px] font-black italic tracking-wide text-stone-900 uppercase">
            KAMPANYALAR
          </h3>
        </div>
        <span className="text-[8px] text-stone-400 font-bold uppercase tracking-widest animate-pulse">
          Sola Kaydırın
        </span>
      </div>

      {/* Horizontal Scroll View */}
      <div
        ref={scrollRef}
        id="campaigns-scroll-view"
        className="flex gap-4 overflow-x-auto pb-3 pt-1 scrollbar-none -mx-4 px-4 snap-x snap-mandatory"
      >
        {campaigns.map((camp) => {
          const isAdded = cartItemIds.includes(camp.id);

          return (
            <motion.div
              key={camp.id}
              className="w-[260px] h-[280px] rounded-[28px] shrink-0 relative overflow-hidden shadow-md border border-stone-200/40 snap-start"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {/* Full-bleed Background Image */}
              <img
                src={camp.image}
                alt={camp.title}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Dark Gradient Overlay (full height, darker at the bottom) */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-black/20" />

              {/* Card Contents Container */}
              <div className="absolute inset-0 p-4.5 flex flex-col justify-between z-10">
                
                {/* Top Row: Tag & Price Tag */}
                <div className="flex justify-between items-start">
                  {/* Category / Subtitle Badge */}
                  <div className="bg-black/60 border border-white/10 px-2.5 py-1 rounded-full text-[7px] font-black text-white tracking-widest uppercase backdrop-blur-xs">
                    {camp.subtitle}
                  </div>

                  {/* Price Tag with Glossy Backdrop */}
                  <div className="bg-black/70 backdrop-blur-xs px-2.5 py-1.5 rounded-xl border border-white/10 flex flex-col items-end shadow-xs">
                    <span className="text-[8px] text-stone-400 line-through font-bold tracking-tight">
                      {camp.originalPrice} TL
                    </span>
                    <span className="text-[11px] font-black text-[#facc15] font-mono tracking-tight">
                      {camp.discountedPrice} TL
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Title, Description, and Yellow Button */}
                <div className="space-y-3">
                  <div>
                    {/* Big Bold Italic Capital Title */}
                    <h4 className="text-sm font-black italic text-white tracking-tight leading-snug uppercase">
                      {camp.title}
                    </h4>
                    {/* Sentence Description in Uppercase / Subdued Style */}
                    <p className="text-[9px] text-stone-300 font-bold uppercase tracking-wide leading-relaxed mt-1 line-clamp-2">
                      {camp.description}
                    </p>
                  </div>

                  {/* Detaylı İncele / Sepete Ekle Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddCampaign(camp);
                    }}
                    className={`px-3.5 py-2 rounded-full text-[8.5px] font-black uppercase tracking-widest cursor-pointer shadow-xs transition-all flex items-center gap-1 active:scale-95 ${
                      isAdded
                        ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                        : "bg-[#facc15] hover:bg-yellow-400 text-stone-950"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3 h-3 stroke-[3]" />
                        <span>SİPARİŞE EKLENDİ</span>
                      </>
                    ) : (
                      <>
                        <span>DETAYLI İNCELE</span>
                        <ChevronRight className="w-3 h-3 stroke-[3]" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Slider Pagination Dots */}
      <div className="flex justify-center items-center gap-1.5 pt-1">
        {campaigns.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeDot === idx 
                ? "w-6 bg-amber-500" 
                : "w-1.5 bg-stone-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
