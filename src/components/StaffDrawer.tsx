import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Users, Star, MessageSquare, Check, Send, Award, Sparkles, Smile, ThumbsUp } from "lucide-react";
import { Staff, StaffReview } from "../types";

interface StaffDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  staffList: Staff[];
  onAddReview: (staffId: string, rating: number, comment: string, reviewerName: string) => void;
  reviews: StaffReview[];
}

const QUICK_TAGS = [
  "Hızlı ve Sıcak Servis ⚡",
  "Güleryüzlü Hizmet 😊",
  "Harika Sunum & İlgi 🍽️",
  "Çok Başarılı Öneriler 🍹",
  "Mükemmel Misafirperverlik ❤️",
  "Kusursuz Profesyonellik ✨"
];

const RATING_LABELS: Record<number, string> = {
  1: "Zayıf 🌟",
  2: "Orta 🌟🌟",
  3: "İyi 🌟🌟🌟",
  4: "Çok İyi 🌟🌟🌟🌟",
  5: "Kusursuz! 🌟🌟🌟🌟🌟"
};

export function StaffDrawer({ isOpen, onClose, staffList, onAddReview, reviews }: StaffDrawerProps) {
  // Sorting state: "rating" or "default"
  const [sortBy, setSortBy] = useState<"default" | "rating">("default");

  // Track active staff form or reviews list
  const [activeFormStaffId, setActiveFormStaffId] = useState<string | null>(null);
  const [activeReviewsStaffId, setActiveReviewsStaffId] = useState<string | null>(null);

  // Review form states
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState<string>("");
  const [reviewerName, setReviewerName] = useState<string>("");
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent, staffId: string) => {
    e.preventDefault();
    const finalName = reviewerName.trim() || "Değerli Misafirimiz";
    const finalComment = comment.trim() || "Harika hizmet!";
    
    onAddReview(staffId, rating, finalComment, finalName);
    
    // Show premium local success feedback
    setSubmitSuccess(staffId);
    
    // Reset inputs
    setComment("");
    setReviewerName("");
    setRating(5);

    setTimeout(() => {
      setSubmitSuccess(null);
      setActiveFormStaffId(null);
    }, 2200);
  };

  const handleTagClick = (tag: string) => {
    if (comment) {
      setComment((prev) => `${prev} ${tag}`);
    } else {
      setComment(tag);
    }
  };

  // Sort staff members
  const sortedStaff = [...staffList].sort((a, b) => {
    if (sortBy === "rating") {
      return (b.rating || 5) - (a.rating || 5);
    }
    return 0; // maintain original database order
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-md z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Luxury Sheet Container */}
          <motion.div
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg bg-[#FCFAF7] rounded-t-[40px] z-[70] flex flex-col h-[88%] border-t border-amber-500/15 shadow-[0_-15px_40px_rgba(20,15,10,0.12)] overflow-hidden"
            initial={{ y: "100%", opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0.8 }}
            transition={{ type: "spring", damping: 26, stiffness: 190 }}
          >
            {/* Top Drag Indicator Notch */}
            <div className="w-full flex justify-center pt-3 pb-1">
              <div className="w-12 h-1.5 rounded-full bg-stone-300/60" />
            </div>

            {/* Header section with fine typographic detailing */}
            <div className="px-5 pb-4 border-b border-stone-200/55 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-amber-400 flex items-center justify-center shadow-md">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[13px] font-black text-stone-900 tracking-wider uppercase flex items-center gap-1.5">
                    Gastro Ekibimiz
                    <span className="inline-flex items-center justify-center bg-amber-500/10 text-amber-700 text-[9px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-normal">
                      EST. 2026
                    </span>
                  </h3>
                  <p className="text-[10px] text-amber-700 font-bold tracking-wide mt-0.5">
                    Hizmet kalitemizi puanlayıp ekibimize destek olun
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200/70 text-stone-500 hover:text-stone-800 flex items-center justify-center cursor-pointer transition-all active:scale-90"
              >
                <X className="w-4.5 h-4.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Custom Control Bar for Sorting & Quick Stats */}
            <div className="px-5 py-2.5 bg-[#FAF7F2] border-b border-stone-200/40 flex items-center justify-between text-xs text-stone-600">
              <div className="flex items-center gap-1">
                <Smile className="w-3.5 h-3.5 text-amber-600" />
                <span className="font-bold text-[11px] text-stone-700">{staffList.length} Ekip Üyesi Aktif</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Sıralama:</span>
                <div className="bg-stone-200/50 p-0.5 rounded-lg flex">
                  <button
                    onClick={() => setSortBy("default")}
                    className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md transition-all cursor-pointer ${
                      sortBy === "default" ? "bg-white text-stone-900 shadow-3xs" : "text-stone-500 hover:text-stone-800"
                    }`}
                  >
                    Varsayılan
                  </button>
                  <button
                    onClick={() => setSortBy("rating")}
                    className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md transition-all cursor-pointer ${
                      sortBy === "rating" ? "bg-white text-stone-900 shadow-3xs" : "text-stone-500 hover:text-stone-800"
                    }`}
                  >
                    En Popülerler
                  </button>
                </div>
              </div>
            </div>

            {/* Main Interactive Scrollable List */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              <div className="space-y-3.5">
                {sortedStaff.map((staff, idx) => {
                  const staffReviews = reviews.filter((r) => r.staffId === staff.id);
                  const isFormOpen = activeFormStaffId === staff.id;
                  const isReviewsOpen = activeReviewsStaffId === staff.id;
                  const isSuccess = submitSuccess === staff.id;

                  return (
                    <motion.div
                      key={staff.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      className="group/card relative bg-white border border-stone-200/70 hover:border-amber-500/20 rounded-3xl p-4.5 shadow-[0_4px_16px_rgba(40,35,30,0.015)] hover:shadow-[0_12px_28px_rgba(139,92,26,0.05)] transition-all duration-400"
                    >
                      {/* Premium Top Thin Aesthetic Badge */}
                      <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-[#FCFAF7] border border-stone-200/60 text-[8px] font-mono text-stone-400 px-2 py-0.5 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity">
                        ID: {staff.id.toUpperCase()}
                      </div>

                      {/* Main Row: Avatar + Info */}
                      <div className="flex items-start gap-4">
                        {/* Realistic Avatar Framed with Dual Rings */}
                        <div className="relative shrink-0">
                          <img
                            src={staff.image}
                            alt={staff.name}
                            className="w-16 h-16 rounded-2xl object-cover border border-stone-200 shadow-sm"
                            referrerPolicy="no-referrer"
                          />
                          {/* Award / Medal Tag on High-rated staff */}
                          {(staff.rating || 5.0) >= 4.8 && (
                            <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white p-1 rounded-full shadow-md animate-pulse">
                              <Award className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                          )}
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-1.5">
                            <div>
                              <h4 className="text-sm font-black text-stone-900 tracking-tight leading-snug">
                                {staff.name}
                              </h4>
                              <p className="text-[11px] text-amber-700 font-extrabold tracking-wide uppercase mt-0.5">
                                {staff.role}
                              </p>
                            </div>

                            {/* Luxurious Rating Stars Badge */}
                            <div className="flex items-center gap-1 bg-amber-500/[0.06] border border-amber-500/15 px-2.5 py-1 rounded-full shrink-0">
                              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                              <span className="text-xs font-black text-amber-800">
                                {staff.rating ? staff.rating.toFixed(1) : "5.0"}
                              </span>
                              <span className="text-[8.5px] text-stone-400 font-bold">
                                ({staff.ratingCount || 1})
                              </span>
                            </div>
                          </div>

                          {/* Specialty Description */}
                          {staff.specialty && (
                            <p className="text-xs text-stone-500 font-semibold leading-relaxed mt-1.5 flex items-center gap-1.5">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500/55" />
                              {staff.specialty}
                            </p>
                          )}

                          {/* Optional Bio */}
                          {staff.bio && (
                            <p className="text-[11px] text-stone-400 font-medium leading-relaxed italic mt-1">
                              "{staff.bio}"
                            </p>
                          )}

                          {/* Achievements Row */}
                          {staff.achievements && staff.achievements.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2.5">
                              {staff.achievements.map((ach, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1 bg-stone-100 text-stone-600 text-[8.5px] font-black uppercase tracking-tight px-2 py-0.5 rounded-md border border-stone-200/50"
                                >
                                  <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                                  {ach}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Row */}
                      <div className="flex items-center gap-2 mt-3.5 pt-3 border-t border-stone-100/80">
                        <button
                          onClick={() => {
                            setActiveFormStaffId(isFormOpen ? null : staff.id);
                            setActiveReviewsStaffId(null);
                          }}
                          className={`flex-1 py-2 px-3 rounded-xl text-[11px] font-black tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 ${
                            isFormOpen
                              ? "bg-stone-900 text-white shadow-md shadow-stone-900/10"
                              : "bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/60 active:scale-95"
                          }`}
                        >
                          <Star className="w-3.5 h-3.5" />
                          Değerlendir
                        </button>

                        <button
                          onClick={() => {
                            setActiveReviewsStaffId(isReviewsOpen ? null : staff.id);
                            setActiveFormStaffId(null);
                          }}
                          className={`flex-1 py-2 px-3 rounded-xl text-[11px] font-black tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 ${
                            isReviewsOpen
                              ? "bg-amber-50 text-amber-800 border border-amber-200/60 shadow-sm"
                              : "bg-white hover:bg-stone-50 text-stone-500 border border-stone-200/60 active:scale-95"
                          }`}
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          Yorumlar ({staffReviews.length})
                        </button>
                      </div>

                      {/* Animated Evaluation Form */}
                      <AnimatePresence>
                        {isFormOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden bg-[#FAFAF9] rounded-2xl p-4 border border-stone-200/50 mt-3"
                          >
                            {isSuccess ? (
                              <motion.div
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                className="py-6 text-center space-y-2.5"
                              >
                                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                                  <Check className="w-5 h-5 stroke-[3]" />
                                </div>
                                <p className="text-xs font-black text-stone-800 uppercase tracking-wider">
                                  Puanınız İletildi!
                                </p>
                                <p className="text-[10px] text-stone-500 font-semibold">
                                  {staff.name} ve ekibimize destek verdiğiniz için teşekkür ederiz.
                                </p>
                              </motion.div>
                            ) : (
                              <form onSubmit={(e) => handleSubmit(e, staff.id)} className="space-y-4">
                                {/* Interactive Stars Selection */}
                                <div className="flex flex-col items-center gap-1.5 py-2 px-3 bg-white rounded-xl border border-stone-200/50 shadow-3xs">
                                  <span className="text-[9px] text-stone-400 font-black uppercase tracking-widest">
                                    Puan Seçiniz
                                  </span>
                                  <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <motion.button
                                        type="button"
                                        key={star}
                                        whileHover={{ scale: 1.25 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setRating(star)}
                                        className="p-1 focus:outline-none cursor-pointer transition-all"
                                      >
                                        <Star
                                          className={`w-7 h-7 transition-colors filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)] ${
                                            star <= rating
                                              ? "text-amber-400 fill-amber-400"
                                              : "text-stone-200 hover:text-amber-300"
                                          }`}
                                        />
                                      </motion.button>
                                    ))}
                                  </div>
                                  <span className="text-[10px] text-amber-700 font-extrabold font-mono mt-1 uppercase tracking-wide">
                                    {RATING_LABELS[rating]}
                                  </span>
                                </div>

                                {/* Premium Quick Tags Selection */}
                                <div className="space-y-1.5">
                                  <label className="text-[9px] text-stone-400 font-black uppercase tracking-widest flex items-center gap-1">
                                    <ThumbsUp className="w-3 h-3 text-amber-500" />
                                    Hızlı Yorum Ekle
                                  </label>
                                  <div className="flex flex-wrap gap-1.5">
                                    {QUICK_TAGS.map((tag) => (
                                      <button
                                        type="button"
                                        key={tag}
                                        onClick={() => handleTagClick(tag)}
                                        className="bg-white hover:bg-amber-500/[0.06] hover:border-amber-500/25 border border-stone-200 text-stone-600 hover:text-amber-800 text-[10px] font-bold px-2.5 py-1.5 rounded-lg cursor-pointer transition-all active:scale-95 shadow-3xs"
                                      >
                                        {tag}
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                {/* Row Inputs */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                  <div className="space-y-1">
                                    <label className="text-[9px] text-stone-400 font-black uppercase tracking-widest">
                                      Adınız
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Anonim Misafir"
                                      value={reviewerName}
                                      onChange={(e) => setReviewerName(e.target.value)}
                                      className="w-full bg-white border border-stone-200 focus:border-amber-500 rounded-xl p-2.5 text-xs focus:outline-none text-stone-800 font-bold shadow-3xs transition-all"
                                    />
                                  </div>
                                  <div className="space-y-1 md:col-span-2">
                                    <label className="text-[9px] text-stone-400 font-black uppercase tracking-widest">
                                      Yorumunuz
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Ekibimiz hakkındaki harika deneyiminizi yazın..."
                                      value={comment}
                                      onChange={(e) => setComment(e.target.value)}
                                      required
                                      className="w-full bg-white border border-stone-200 focus:border-amber-500 rounded-xl p-2.5 text-xs focus:outline-none text-stone-800 font-medium shadow-3xs transition-all"
                                    />
                                  </div>
                                </div>

                                <button
                                  type="submit"
                                  className="w-full bg-stone-900 hover:bg-stone-800 text-white font-black text-[10px] tracking-widest uppercase py-3 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98 transition-transform"
                                >
                                  <Send className="w-3.5 h-3.5" />
                                  Değerlendirmeyi Gönder
                                </button>
                              </form>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Animated Reviews List */}
                      <AnimatePresence>
                        {isReviewsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden bg-[#FAFAF9] rounded-2xl p-4 border border-stone-200/55 mt-3 space-y-3 max-h-[250px] overflow-y-auto"
                          >
                            <div className="flex items-center justify-between border-b border-stone-200/45 pb-1.5">
                              <h5 className="text-[9px] font-black text-stone-400 uppercase tracking-widest">
                                Misafir Yorumları
                              </h5>
                              <span className="text-[9px] bg-stone-200/60 text-stone-600 px-2 py-0.5 rounded-full font-bold">
                                {staffReviews.length} Değerlendirme
                              </span>
                            </div>

                            {staffReviews.length > 0 ? (
                              <div className="space-y-2.5">
                                {staffReviews.map((rev) => (
                                  <div
                                    key={rev.id}
                                    className="bg-white border border-stone-100 rounded-xl p-3 shadow-3xs space-y-1.5"
                                  >
                                    <div className="flex items-center justify-between text-xs">
                                      <span className="font-extrabold text-stone-800 flex items-center gap-1">
                                        <Smile className="w-3 h-3 text-amber-600" />
                                        {rev.customerName}
                                      </span>
                                      <span className="text-stone-400 font-bold text-[9px]">{rev.date}</span>
                                    </div>
                                    <div className="flex gap-0.5">
                                      {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`w-3 h-3 ${
                                            i < rev.rating ? "text-amber-400 fill-amber-400" : "text-stone-200"
                                          }`}
                                        />
                                      ))}
                                    </div>
                                    <p className="text-xs text-stone-600 font-medium leading-relaxed italic">
                                      "{rev.comment}"
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="text-center py-6">
                                <MessageSquare className="w-8 h-8 text-stone-300 mx-auto stroke-[1.5]" />
                                <p className="text-[11px] text-stone-400 mt-1.5 font-bold">
                                  Henüz değerlendirme yapılmamış. İlk değerlendiren siz olun!
                                </p>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Premium Bottom Bar */}
            <div className="px-5 py-3.5 bg-white border-t border-stone-200/50 flex flex-col items-center gap-2">
              <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest text-center">
                Teşekkür ederiz • GastroPub 2026
              </span>
              <div className="w-32 h-1 bg-stone-900/20 rounded-full" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
