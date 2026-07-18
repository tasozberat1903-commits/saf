import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Box, Cuboid as Cube } from "lucide-react";
import { MenuItem } from "../types";

interface ARViewerModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

// Model map based on category
const getModelUrl = (categoryId: string) => {
  // Let's use some real generic GLB models from modelviewer.dev
  switch (categoryId) {
    case "meals":
    case "campaigns":
      // A generic burger/food model if possible, we'll use a known public one
      // ModelViewer shared assets avocado for food
      return "https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Avocado/glTF-Binary/Avocado.glb";
    case "beers":
    case "soft_drinks":
    case "cocktails":
    case "shots":
    case "wines":
    case "spirits":
    case "whiskies":
    case "teas":
      // A generic bottle or cup for drinks
      return "https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Avocado/glTF-Binary/Avocado.glb";
    case "desserts":
      return "https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Avocado/glTF-Binary/Avocado.glb";
    default:
      return "https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Avocado/glTF-Binary/Avocado.glb";
  }
};

export function ARViewerModal({ item, isOpen, onClose }: ARViewerModalProps) {
  if (!item) return null;

  const modelUrl = getModelUrl(item.category);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-stone-900/90 backdrop-blur-md z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-4 md:inset-10 bg-black rounded-[32px] z-[110] flex flex-col shadow-2xl overflow-hidden border border-stone-800"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
              <div className="flex flex-col text-white pointer-events-auto">
                <span className="font-black text-lg tracking-tight">{item.name}</span>
                <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest flex items-center gap-1">
                  <Box className="w-3 h-3" /> AR Görünümü (3D)
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white flex items-center justify-center cursor-pointer transition-all active:scale-90 pointer-events-auto border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Model Viewer Container */}
            <div className="flex-1 w-full relative bg-gradient-to-b from-stone-900 to-black">
              {/* @ts-ignore - model-viewer is a web component */}
              <model-viewer
                src={modelUrl}
                ar
                ar-modes="webxr scene-viewer quick-look"
                ar-scale="auto"
                camera-controls
                auto-rotate
                shadow-intensity="1"
                shadow-softness="1"
                environment-image="neutral"
                exposure="1"
                interaction-prompt="auto"
                style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
              >
                <div slot="ar-button" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-amber-500 hover:bg-amber-600 text-stone-900 font-black px-6 py-3 rounded-full shadow-lg shadow-amber-500/20 uppercase tracking-widest text-xs flex items-center gap-2 cursor-pointer transition-all active:scale-95 z-20">
                  <Cube className="w-4 h-4" /> Masanda Gör
                </div>
              </model-viewer>
            </div>
            
            {/* Disclaimer or hints */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none flex justify-center">
              <p className="text-[10px] text-white/50 text-center max-w-[80%] font-medium">
                3D modeli döndürmek için sürükleyin. AR özelliğini kullanmak için "Masanda Gör" butonuna tıklayarak kameranızı açın. (Bu özellik AR destekli cihazlarda çalışır.)
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
