import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { RadioChannel } from "../types";

interface GastroPubHeroProps {
  activeChannel: RadioChannel;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const GastroPubHero: React.FC<GastroPubHeroProps> = ({
  isPlaying,
  onTogglePlay,
}) => {
  return (
    <div id="gastro-hero-container" className="relative h-[210px] bg-[#42322a] overflow-hidden flex flex-col justify-between p-5">
      {/* Background Stylized Graphic Pattern - Retro Vinyl Record Grooves (Plak Kanalları) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none flex items-center justify-center">
        <motion.div
          className="relative w-[380px] h-[380px] opacity-[0.38]"
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-amber-400/55">
            {/* Outer Rim of the Vinyl Record */}
            <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.8" />
            
            {/* Concentric Grooves (Plak Kanalları / Tracks) */}
            <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="12 4" />
            <circle cx="100" cy="100" r="84" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="30 8" />
            <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="8 6" />
            <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" />
            
            {/* Outer/Inner track separation gap */}
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Inner Grooves */}
            <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="40 10" />
            <circle cx="100" cy="100" r="51" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="47" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="43" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="15 5" />
            <circle cx="100" cy="100" r="39" fill="none" stroke="currentColor" strokeWidth="1" />
            
            {/* Record Label Border */}
            <circle cx="100" cy="100" r="32" fill="none" stroke="currentColor" strokeWidth="2" />
            
            {/* Vinyl specular/glare lines to make it look realistic and metallic */}
            <path d="M100,100 L30,30 M100,100 L170,170 M100,100 L30,170 M100,100 L170,30" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#42322a]/90 via-transparent to-black/15 pointer-events-none" />

      {/* Main Gastro Food Display Collage & Branding (Matching mockup aesthetics) */}
      <div id="hero-collage" className="relative flex-1 flex items-center justify-between gap-6 z-10">
        {/* Left: Food Display Collage (Overlay of burger and fries in a stylized container) */}
        <div className="relative flex-1 h-full flex items-end">
          {/* Main Burger Image (Floating effect) */}
          <motion.div
            id="floating-burger"
            className="absolute left-0 bottom-1 w-24 h-24 drop-shadow-2xl z-20 cursor-pointer"
            animate={{ 
              y: [0, -6, 0],
              rotate: [0, 2, -2, 0]
            }}
            whileHover={{ 
              scale: 1.15, 
              rotate: -5,
              z: 10,
              filter: "brightness(1.05)"
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              scale: { type: "spring", stiffness: 300, damping: 15 }
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=80"
              alt="Gastro Burger"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-2xl border-2 border-amber-900/30 shadow-xl"
            />
          </motion.div>

          {/* Golden Fries Image */}
          <motion.div
            id="floating-fries"
            className="absolute left-14 bottom-4 w-20 h-20 drop-shadow-xl z-10 cursor-pointer"
            animate={{ 
              y: [0, -8, 0],
              rotate: [8, 12, 5, 8]
            }}
            whileHover={{ 
              scale: 1.18, 
              rotate: 15,
              z: 20,
              filter: "brightness(1.05)"
            }}
            transition={{ 
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
              rotate: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
              scale: { type: "spring", stiffness: 300, damping: 15 }
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1576107232684-1279f390859f?w=300&auto=format&fit=crop&q=80"
              alt="Crispy Fries"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-2xl border-2 border-amber-900/20 shadow-lg"
            />
          </motion.div>

          {/* Crispy Onion Rings overlay removed as requested */}
        </div>

        {/* Right: Retro Colorful Concentric Radio Logo */}
        <div className="flex flex-col items-center justify-center z-10 pr-2">
          <motion.div
            className="relative flex flex-col items-center justify-center cursor-pointer select-none"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={onTogglePlay}
          >
            {/* Pulsing ring background glow when active */}
            <AnimatePresence>
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl animate-pulse pointer-events-none"
                />
              )}
            </AnimatePresence>

            {/* Circular Concentric Retro Rings SVG */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]">
                {/* Center dot */}
                <circle cx="50" cy="50" r="7" fill="#fbbf24" />

                {/* Ring 1 - Solid inner yellow */}
                <circle cx="50" cy="50" r="14" fill="none" stroke="#fef08a" strokeWidth="2.5" strokeDasharray="2 2" />

                {/* Ring 2 - Pink/Coral dashed (rotates counter-clockwise) */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="21"
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="3.2"
                  strokeDasharray="4 3"
                  style={{ transformOrigin: "50px 50px" }}
                  animate={isPlaying ? { rotate: -360 } : { rotate: 0 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                />

                {/* Ring 3 - Blue/Teal dashed (rotates clockwise) */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="28"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="3.5"
                  strokeDasharray="5 3"
                  style={{ transformOrigin: "50px 50px" }}
                  animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                />

                {/* Ring 4 - Amber/Yellow dashed (rotates counter-clockwise) */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="4"
                  strokeDasharray="3 4"
                  style={{ transformOrigin: "50px 50px" }}
                  animate={isPlaying ? { rotate: -360 } : { rotate: 0 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                />

                {/* Ring 5 - Coral/Rose dashed (rotates clockwise) */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="3.5"
                  strokeDasharray="6 4"
                  style={{ transformOrigin: "50px 50px" }}
                  animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                />

                {/* Ring 6 - Emerald Green outer dashed (rotates counter-clockwise) */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  style={{ transformOrigin: "50px 50px" }}
                  animate={isPlaying ? { rotate: -360 } : { rotate: 0 }}
                  transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                />
              </svg>

              {/* Little Playing Indicator Badge inside the circle */}
              {isPlaying && (
                <div className="absolute top-1 right-1 w-3 h-3 bg-emerald-500 border-2 border-stone-900 rounded-full flex items-center justify-center animate-bounce">
                  <span className="w-1 h-1 bg-white rounded-full" />
                </div>
              )}
            </div>

            {/* Logo Text "radyo gastro pub" - Under the rings */}
            <div className="flex flex-col items-center -mt-1 drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)] select-none text-center">
              <span className="font-logo text-lg text-[#f3a43b] tracking-widest leading-none">
                radyo
              </span>
              <span className="font-logo text-[13px] text-[#f3a43b] tracking-wide leading-none mt-1">
                gastro pub
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Golden Glowing Divider Line */}
      <div className="absolute bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent z-10 pointer-events-none" />

      {/* Retro Ticket Jagged Edge Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 100 8" preserveAspectRatio="none" className="w-full h-2.5 text-[#f7f2ea] fill-current">
          <polygon points="0,8 100,8 100,0 97.5,3 95,0 92.5,3 90,0 87.5,3 85,0 82.5,3 80,0 77.5,3 75,0 72.5,3 70,0 67.5,3 65,0 62.5,3 60,0 57.5,3 55,0 52.5,3 50,0 47.5,3 45,0 42.5,3 40,0 37.5,3 35,0 32.5,3 30,0 27.5,3 25,0 22.5,3 20,0 17.5,3 15,0 12.5,3 10,0 7.5,3 5,0 2.5,3 0,0" />
        </svg>
      </div>
    </div>
  );
};
