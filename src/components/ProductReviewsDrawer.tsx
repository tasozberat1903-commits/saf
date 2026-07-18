import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Star, MessageSquare, Check, Search, Sparkles, Utensils } from "lucide-react";
import { MenuItem, MenuItemReview } from "../types";

interface ProductReviewsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  reviews: MenuItemReview[];
  onAddReview: (itemId: string, rating: number, comment: string, reviewerName: string) => void;
}

export function ProductReviewsDrawer({
  isOpen,
  onClose,
  menuItems,
  reviews,
  onAddReview,
}: ProductReviewsDrawerProps) {
  // Search and filter inside reviews drawer
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Track which product has form or reviews open
  const [activeFormItemId, setActiveFormItemId] = useState<string | null>(null);
  const [activeReviewsItemId, setActiveReviewsItemId] = useState<string | null>(null);

  // Form states
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState<string>("");
  const [reviewerName, setReviewerName] = useState<string>("");
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent, itemId: string) => {
    e.preventDefault();
    onAddReview(itemId, rating, comment, reviewerName);

    setSubmitSuccess(itemId);
    setComment("");
    setReviewerName("");
    setRating(5);

    setTimeout(() => {
      setSubmitSuccess(null);
      setActiveFormItemId(null);
    }, 2000);
  };

  // Filter items
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const uniqueCategories = [
    { id: "all", name: "Tümü" },
    { id: "burgers", name: "Burgers" },
    { id: "snacks", name: "Snacks" },
    { id: "wraps", name: "Wraps" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Drinks" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay background */}
          <motion.div
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sheet/Drawer Panel */}
          <motion.div
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg bg-[#faf8f5] rounded-t-[32px] z-50 flex flex-col h-[85%] border-t border-[#e2d6c5] shadow-2xl overflow-hidden font-sans"
            initial={{ y: "100%", opacity: 0.95 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 240 }}
          >
            {/* Premium High Contrast Header */}
            <div className="p-4 border-b border-stone-900 bg-stone-900 text-stone-50 flex items-center justify-between rounded-t-[32px] shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950 shadow-md">
                  <Utensils className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xs font-black tracking-wider uppercase text-white">Lezzet Değerlendirme</h3>
                  <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Mutfaktan masaya lezzetleri oyla</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-300 hover:text-white cursor-pointer transition-colors"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Sticky Search & Category Selector with deep border */}
            <div className="p-3.5 bg-stone-50 border-b border-stone-200/80 space-y-3 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Lezzet ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 rounded-xl py-2 pl-10 pr-4 text-xs font-bold text-stone-900 placeholder-stone-400 outline-none shadow-3xs transition-all"
                />
              </div>

              {/* Category pills with improved contrast */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                {uniqueCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`text-[9.5px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer select-none border ${
                        isActive
                          ? "bg-stone-900 text-amber-400 border-stone-900 shadow-sm"
                          : "bg-white text-stone-600 hover:bg-stone-100 border-stone-200"
                      }`}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inner Scrollable List with warm background and card separator depth */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f5f2eb]">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => {
                  const itemReviews = reviews.filter((r) => r.itemId === item.id);
                  const isFormOpen = activeFormItemId === item.id;
                  const isReviewsOpen = activeReviewsItemId === item.id;
                  const isSuccess = submitSuccess === item.id;

                  return (
                    <div
                      key={item.id}
                      className="bg-white border-2 border-[#e6decb] rounded-2xl p-4 flex flex-col gap-3 shadow-xs transition-all duration-300"
                    >
                      {/* Product Header Card with rich contrasts */}
                      <div className="flex gap-3.5 items-start">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 rounded-xl object-cover border border-stone-200 shadow-sm shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-1.5">
                            <div>
                              <h4 className="text-xs font-extrabold text-stone-950 uppercase tracking-wide line-clamp-1">{item.name}</h4>
                              <span className="inline-block text-[8px] font-black text-amber-800 bg-amber-500/10 px-1.5 py-0.5 rounded-md uppercase tracking-wider mt-0.5">
                                {item.category}
                              </span>
                            </div>
                            
                            {/* Star Badge */}
                            <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-lg shrink-0">
                              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                              <span className="text-xs font-black text-stone-900">{item.rating?.toFixed(1) || "4.8"}</span>
                              <span className="text-[9px] text-stone-500 font-bold">({item.ratingCount || 12})</span>
                            </div>
                          </div>
                          <p className="text-[11px] text-stone-600 leading-normal font-semibold mt-1.5">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Action buttons with enhanced legibility and colors */}
                      <div className="flex items-center gap-2 pt-3 border-t border-stone-100">
                        <button
                          onClick={() => {
                            setActiveFormItemId(isFormOpen ? null : item.id);
                            setActiveReviewsItemId(null);
                          }}
                          className={`flex-1 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 border ${
                            isFormOpen
                              ? "bg-amber-500 text-stone-950 border-amber-500 shadow-sm"
                              : "bg-amber-50/60 hover:bg-amber-100/80 text-amber-900 border-amber-200/50"
                          }`}
                        >
                          <Star className={`w-3.5 h-3.5 ${isFormOpen ? "fill-stone-950 text-stone-950" : "fill-amber-600 text-amber-600"}`} />
                          Puan Ver
                        </button>

                        <button
                          onClick={() => {
                            setActiveReviewsItemId(isReviewsOpen ? null : item.id);
                            setActiveFormItemId(null);
                          }}
                          className={`flex-1 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 border ${
                            isReviewsOpen
                              ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                              : "bg-stone-100/85 hover:bg-stone-200/70 text-stone-800 border-stone-200"
                          }`}
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          Yorumlar ({itemReviews.length})
                        </button>
                      </div>

                      {/* Form Expand Area (Warm tint and rich boundaries) */}
                      <AnimatePresence>
                        {isFormOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-[#faf8f4] rounded-xl p-3.5 border-2 border-amber-500/20 mt-1.5 space-y-3.5"
                          >
                            {isSuccess ? (
                              <div className="py-4 text-center space-y-2">
                                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                                  <Check className="w-5 h-5 stroke-[3]" />
                                </div>
                                <p className="text-[10px] font-black text-stone-900 uppercase tracking-wider">Değerlendirmeniz Kaydedildi!</p>
                              </div>
                            ) : (
                              <form onSubmit={(e) => handleSubmit(e, item.id)} className="space-y-3.5">
                                {/* Stars Selection */}
                                <div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg border border-stone-200 shadow-3xs">
                                  <span className="text-[9px] text-stone-500 font-extrabold uppercase tracking-widest">Lezzet Puanınız</span>
                                  <div className="flex gap-1.5">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <button
                                        type="button"
                                        key={star}
                                        onClick={() => setRating(star)}
                                        className="p-0.5 cursor-pointer focus:outline-none hover:scale-110 transition-transform"
                                      >
                                        <Star
                                          className={`w-6 h-6 transition-colors ${
                                            star <= rating
                                              ? "text-amber-500 fill-amber-500"
                                              : "text-stone-300"
                                          }`}
                                        />
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2.5">
                                  <div className="col-span-1 space-y-1">
                                    <label className="text-[8px] text-stone-500 font-extrabold uppercase tracking-wider">Adınız</label>
                                    <input
                                      type="text"
                                      placeholder="Anonim"
                                      value={reviewerName}
                                      onChange={(e) => setReviewerName(e.target.value)}
                                      className="w-full bg-white border border-stone-300 focus:border-stone-900 rounded-lg p-2.5 text-xs font-bold text-stone-900 outline-none"
                                    />
                                  </div>
                                  <div className="col-span-2 space-y-1">
                                    <label className="text-[8px] text-stone-500 font-extrabold uppercase tracking-wider">Yorumunuz</label>
                                    <input
                                      type="text"
                                      placeholder="Lezzeti nasıldı?"
                                      required
                                      value={comment}
                                      onChange={(e) => setComment(e.target.value)}
                                      className="w-full bg-white border border-stone-300 focus:border-stone-900 rounded-lg p-2.5 text-xs font-bold text-stone-900 outline-none"
                                    />
                                  </div>
                                </div>

                                <button
                                  type="submit"
                                  className="w-full py-2.5 bg-stone-900 hover:bg-stone-950 text-amber-400 text-[10px] font-black uppercase tracking-wider rounded-lg cursor-pointer transition-all shadow-sm flex items-center justify-center gap-1"
                                >
                                  Puanı Kaydet
                                </button>
                              </form>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Reviews List Area (Modern feed styled blocks with high legibility) */}
                      <AnimatePresence>
                        {isReviewsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-1.5 space-y-2.5 max-h-[250px] overflow-y-auto pr-1"
                          >
                            {itemReviews.length > 0 ? (
                              itemReviews.map((rev) => (
                                <div
                                  key={rev.id}
                                  className="bg-stone-50 p-3 rounded-xl border border-stone-200 shadow-3xs space-y-1.5"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-[11px] font-bold text-stone-900">{rev.customerName || "Anonim"}</span>
                                    <span className="text-[9px] text-stone-500 font-bold">{rev.date}</span>
                                  </div>
                                  <div className="flex gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`w-3 h-3 ${
                                          i < rev.rating ? "text-amber-500 fill-amber-500" : "text-stone-300"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <p className="text-xs text-stone-700 font-semibold leading-relaxed pt-0.5">
                                    {rev.comment}
                                  </p>
                                </div>
                              ))
                            ) : (
                              <div className="py-5 text-center border-2 border-dashed border-stone-300 rounded-xl bg-stone-100/50">
                                <p className="text-[10px] text-stone-500 font-black uppercase tracking-wider">Değerlendirme Yok</p>
                                <p className="text-[9px] text-stone-400 font-bold">Bu lezzete ilk puanı siz verin!</p>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center bg-white rounded-3xl border border-stone-200 space-y-2">
                  <Utensils className="w-8 h-8 text-stone-400 mx-auto" />
                  <p className="text-xs text-stone-500 font-bold">Aradığınız ürün bulunamadı.</p>
                </div>
              )}
            </div>

            {/* Bottom Accent Line */}
            <div className="p-4 bg-stone-900 border-t border-stone-950 flex items-center justify-center text-[10px] text-stone-300 font-bold uppercase tracking-wider select-none shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 mr-1.5 animate-pulse" />
              Sizin fikirleriniz bizim için değerli
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
