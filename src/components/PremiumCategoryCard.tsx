import React, { useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { Category } from "../types";

interface PremiumCategoryCardProps {
  cat: Category;
  index: number;
  realCount: number;
  getGastronomyDescriptor: (id: string) => string;
  getCategoryIcon: (iconName: string) => React.ReactNode;
  onClick: () => void;
}

// Map high-end, appetizing food & beverage photography from Unsplash to categories
const getCategoryImageUrl = (id: string): string => {
  switch (id) {
    case "campaigns":
      return "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=400&q=80"; // Shared gourmet platter
    case "meals":
      return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"; // Gourmet juicy smash burger
    case "beers":
      return "https://images.unsplash.com/photo-1532635241-17e820add104?auto=format&fit=crop&w=400&q=80"; // Crispy craft beer with rich foam
    case "cocktails":
      return "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80"; // Modern cocktail with slice of lime
    case "wines":
      return "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80"; // Red wine pour in crystal glass
    case "whiskies":
      return "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=400&q=80"; // Whiskey glass with pure ice block
    case "shots":
      return "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=400&q=80"; // Vibrant neon tequila shots
    case "soft_drinks":
      return "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80"; // Condensation glass of orange soft cooler
    case "desserts":
      return "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80"; // Melting warm chocolate lava cake
    case "spirits":
      return "https://images.unsplash.com/photo-1524350302447-8a5e62c107e3?auto=format&fit=crop&w=400&q=80"; // Elegant botanical gin & tonic
    case "teas":
      return "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=400&q=80"; // Steaming premium herbal tea glass
    case "new":
      return "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=400&q=80"; // Culinary masterpiece plate
    default:
      return "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80";
  }
};

export const PremiumCategoryCard: React.FC<PremiumCategoryCardProps> = ({
  cat,
  index,
  realCount,
  getGastronomyDescriptor,
  getCategoryIcon,
  onClick
}) => {
  const cardRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize mouse coordinates relative to card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    setCoords({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // 3D physical rotation calculation (max tilt 16deg for controlled elegancy)
  const maxTilt = 16;
  const rotateX = -coords.y * maxTilt;
  const rotateY = coords.x * maxTilt;

  // Glare/reflection position based on mouse position
  const glareX = (coords.x + 0.5) * 100;
  const glareY = (coords.y + 0.5) * 100;

  const formattedIndex = String(index + 1).padStart(2, "0");

  // Custom Category Themes (Glow Colors, Gradients, and Styling)
  const getCategoryTheme = (id: string) => {
    switch (id) {
      case "campaigns":
        return {
          glowColor: "rgba(245, 158, 11, 0.45)", // Luxury Gold
          iconBg: "from-amber-400 to-amber-600",
          glowShadow: "shadow-amber-500/15",
          borderColor: "hover:border-amber-400/50",
          descColor: "text-amber-600/80"
        };
      case "meals":
        return {
          glowColor: "rgba(239, 68, 68, 0.4)", // Gourmet Crimson
          iconBg: "from-rose-500 to-red-600",
          glowShadow: "shadow-rose-500/15",
          borderColor: "hover:border-rose-400/50",
          descColor: "text-rose-600/80"
        };
      case "beers":
        return {
          glowColor: "rgba(217, 119, 6, 0.4)", // Roasted Amber
          iconBg: "from-amber-600 to-orange-700",
          glowShadow: "shadow-amber-700/15",
          borderColor: "hover:border-amber-600/50",
          descColor: "text-amber-700/80"
        };
      case "cocktails":
        return {
          glowColor: "rgba(168, 85, 247, 0.45)", // Violet Neon
          iconBg: "from-violet-500 to-fuchsia-600",
          glowShadow: "shadow-violet-500/15",
          borderColor: "hover:border-violet-400/50",
          descColor: "text-violet-600/80"
        };
      case "wines":
        return {
          glowColor: "rgba(153, 27, 27, 0.4)", // Wine Burgundy
          iconBg: "from-red-800 to-rose-950",
          glowShadow: "shadow-red-900/15",
          borderColor: "hover:border-red-800/50",
          descColor: "text-red-800/80"
        };
      case "whiskies":
        return {
          glowColor: "rgba(249, 115, 22, 0.4)", // Smoky Copper
          iconBg: "from-orange-500 to-amber-700",
          glowShadow: "shadow-orange-500/15",
          borderColor: "hover:border-orange-500/50",
          descColor: "text-orange-600/80"
        };
      case "shots":
        return {
          glowColor: "rgba(239, 68, 68, 0.45)", // Ignite Orange-Red
          iconBg: "from-orange-600 to-red-600",
          glowShadow: "shadow-red-500/15",
          borderColor: "hover:border-red-500/50",
          descColor: "text-red-600/80"
        };
      case "soft_drinks":
        return {
          glowColor: "rgba(6, 182, 212, 0.4)", // Cool Glacial Cyan
          iconBg: "from-cyan-400 to-teal-500",
          glowShadow: "shadow-cyan-500/15",
          borderColor: "hover:border-cyan-400/50",
          descColor: "text-cyan-600/80"
        };
      case "desserts":
        return {
          glowColor: "rgba(236, 72, 153, 0.4)", // Sweet Pink
          iconBg: "from-pink-400 to-rose-500",
          glowShadow: "shadow-pink-500/15",
          borderColor: "hover:border-pink-400/50",
          descColor: "text-pink-600/80"
        };
      case "spirits":
        return {
          glowColor: "rgba(13, 148, 136, 0.4)", // Emerald Glass
          iconBg: "from-teal-500 to-emerald-700",
          glowShadow: "shadow-teal-500/15",
          borderColor: "hover:border-teal-500/50",
          descColor: "text-teal-600/80"
        };
      case "teas":
        return {
          glowColor: "rgba(34, 197, 94, 0.4)", // Pure Matcha Green
          iconBg: "from-emerald-400 to-green-600",
          glowShadow: "shadow-green-500/15",
          borderColor: "hover:border-green-500/50",
          descColor: "text-emerald-700/80"
        };
      case "new":
        return {
          glowColor: "rgba(59, 130, 246, 0.4)", // Sapphire Blue
          iconBg: "from-blue-500 to-indigo-600",
          glowShadow: "shadow-blue-500/15",
          borderColor: "hover:border-blue-400/50",
          descColor: "text-blue-600/80"
        };
      default:
        return {
          glowColor: "rgba(120, 113, 108, 0.3)",
          iconBg: "from-stone-500 to-stone-700",
          glowShadow: "shadow-stone-500/10",
          borderColor: "hover:border-stone-400/50",
          descColor: "text-stone-500/80"
        };
    }
  };

  const theme = getCategoryTheme(cat.id);

  return (
    <div className="w-full [perspective:1000px]">
      <button
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.035)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transformStyle: "preserve-3d",
          transition: isHovered
            ? "none"
            : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, shadow 0.6s ease",
        }}
        className={`group relative flex flex-col items-center justify-between p-5 min-h-[175px] w-full rounded-[28px] cursor-pointer select-none border border-stone-200/80 bg-gradient-to-b from-[#fefefe] via-[#FAF9F6] to-[#F5F3ED] text-stone-800 shadow-[0_12px_32px_rgba(40,35,30,0.035),0_3px_8px_rgba(40,35,30,0.015),inset_0_1px_1px_white] hover:border-stone-300 hover:shadow-[0_28px_56px_rgba(40,35,30,0.08),0_10px_24px_rgba(40,35,30,0.03)] active:scale-[0.98] active:duration-100 overflow-hidden`}
      >
        {/* Dynamic clean white glass gloss overlay (Glare Effect - No Color) */}
        <div
          style={{
            background: isHovered
              ? `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 70%)`
              : "none",
            transition: "background 0.2s ease",
          }}
          className="absolute inset-0 pointer-events-none z-20"
        />

        {/* Premium Inner Gold/Bronze Engraved Foil Border */}
        <div
          style={{ transform: "translateZ(8px)" }}
          className="absolute inset-2 border border-amber-500/[0.07] group-hover:border-amber-500/20 rounded-[22px] pointer-events-none transition-all duration-500"
        />

        {/* Corner Accent Brackets inside Foil Border */}
        <div
          style={{ transform: "translateZ(10px)" }}
          className="absolute top-4.5 left-4.5 w-1.5 h-1.5 border-t border-l border-amber-600/[0.15] group-hover:border-amber-500/40 transition-colors duration-500"
        />
        <div
          style={{ transform: "translateZ(10px)" }}
          className="absolute top-4.5 right-4.5 w-1.5 h-1.5 border-t border-r border-amber-600/[0.15] group-hover:border-amber-500/40 transition-colors duration-500"
        />
        <div
          style={{ transform: "translateZ(10px)" }}
          className="absolute bottom-4.5 left-4.5 w-1.5 h-1.5 border-b border-l border-amber-600/[0.15] group-hover:border-amber-500/40 transition-colors duration-500"
        />
        <div
          style={{ transform: "translateZ(10px)" }}
          className="absolute bottom-4.5 right-4.5 w-1.5 h-1.5 border-b border-r border-amber-600/[0.15] group-hover:border-amber-500/40 transition-colors duration-500"
        />

        {/* Top line detail: index & item count badge */}
        <div
          style={{ transform: "translateZ(14px)" }}
          className="relative z-10 w-full flex items-center justify-between font-mono text-[9px] text-stone-400 tracking-wider"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-amber-600 font-extrabold group-hover:text-amber-500 transition-colors">{formattedIndex}</span>
            <span className="w-1 h-1 rounded-full bg-stone-300 group-hover:bg-amber-500/45 transition-colors" />
            <span className="text-[7.5px] font-black uppercase text-stone-300 group-hover:text-amber-800/40 transition-colors">PUB</span>
          </div>
          <span className="bg-stone-100/90 border border-stone-200/50 group-hover:bg-amber-50 group-hover:text-amber-700 group-hover:border-amber-200/40 transition-all px-2 py-0.5 rounded-md font-sans font-black text-[8px] tracking-tight">
            {realCount > 0 ? `${realCount} Ürün` : "Gözat"}
          </span>
        </div>

        {/* Center Section: Beautiful Floating Multi-layer Gastronomic Photo */}
        <div
          style={{ transform: "translateZ(34px)" }}
          className="relative z-10 flex flex-col items-center justify-center w-full mt-2"
        >
          {/* Framed Appetizing Realistic Image */}
          <div className="relative w-[92px] h-[92px] rounded-[22px] p-1 bg-white shadow-[0_8px_20px_rgba(40,35,30,0.08)] border border-stone-200/60 group-hover:scale-105 transition-all duration-500 group-hover:shadow-[0_12px_24px_rgba(40,35,30,0.12)]">
            <div className="w-full h-full rounded-[17px] overflow-hidden relative bg-stone-100">
              <img
                src={getCategoryImageUrl(cat.id)}
                alt={cat.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform group-hover:scale-115 transition-transform duration-700 ease-out"
              />
              {/* Subtle glass vignette overlay for photogenic depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/10 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom Section: Category name */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="relative z-10 w-full text-center mt-3.5 flex flex-col items-center"
        >
          <span className="font-sans font-black text-[13px] tracking-wide leading-none text-stone-800 group-hover:text-stone-950 transition-colors uppercase">
            {cat.name}
          </span>
        </div>

        {/* Absolute Arrow: pops up on hover and shifts in 3D depth */}
        <div
          style={{ transform: "translateZ(16px)" }}
          className="absolute bottom-4 right-4 text-stone-300 group-hover:text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 pointer-events-none"
        >
          <ChevronRight className="w-3.5 h-3.5 stroke-[3.5] opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
      </button>
    </div>
  );
};
