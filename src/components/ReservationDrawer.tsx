import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Calendar, 
  Clock, 
  Users, 
  Check, 
  Phone, 
  User, 
  Sliders, 
  ShieldCheck, 
  Trash2, 
  AlertCircle, 
  Plus, 
  Minus,
  Sparkles,
  MapPin
} from "lucide-react";
import { Reservation } from "../types";

interface ReservationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  reservations: Reservation[];
  onAddReservation: (res: Omit<Reservation, "id" | "status" | "createdAt">) => void;
  onUpdateStatus: (id: string, status: Reservation["status"]) => void;
  onDeleteReservation: (id: string) => void;
  isFullScreenPage?: boolean;
}

export function ReservationDrawer({
  isOpen,
  onClose,
  reservations,
  onAddReservation,
  onUpdateStatus,
  onDeleteReservation,
  isFullScreenPage = false,
}: ReservationDrawerProps) {
  // Drawer mode: 'book' (Customer booking) or 'admin' (Staff dashboard)
  const [panelMode, setPanelMode] = useState<"book" | "admin">("book");
  
  // Customer form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [selectedTime, setSelectedTime] = useState("19:00");
  const [guestsCount, setGuestsCount] = useState(2);
  const [tablePreference, setTablePreference] = useState("");
  const [note, setNote] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  // Admin filter state
  const [adminFilter, setAdminFilter] = useState<"all" | "Beklemede" | "Onaylandı" | "İptal Edildi">("all");

  const TIME_SLOTS = ["12:00", "14:00", "16:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    onAddReservation({
      name,
      phone,
      date,
      time: selectedTime,
      guestsCount,
      tableNumber: tablePreference || "Belirtilmedi",
      note,
    });

    setSuccessMsg(true);
    setName("");
    setPhone("");
    setNote("");
    setTablePreference("");
    setGuestsCount(2);

    setTimeout(() => {
      setSuccessMsg(false);
    }, 4000);
  };

  // Filter reservations in admin list
  const filteredReservations = reservations.filter((r) => {
    if (adminFilter === "all") return true;
    return r.status === adminFilter;
  });

  // Calculate quick stats for admin view
  const stats = {
    total: reservations.length,
    pending: reservations.filter((r) => r.status === "Beklemede").length,
    approved: reservations.filter((r) => r.status === "Onaylandı").length,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Only if NOT full screen page */}
          {!isFullScreenPage && (
            <motion.div
              className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
          )}

          {/* Bottom Sheet Container / Full Page Container */}
          <motion.div
            className={`fixed left-1/2 -translate-x-1/2 w-full max-w-lg bg-[#faf8f5] z-50 flex flex-col font-sans overflow-hidden ${
              isFullScreenPage 
                ? "top-0 h-full border-0 shadow-none" 
                : "bottom-0 rounded-t-[32px] h-[90%] border-t border-[#e2d6c5] shadow-2xl"
            }`}
            initial={isFullScreenPage ? { opacity: 0, scale: 0.98 } : { y: "100%", opacity: 0.95 }}
            animate={isFullScreenPage ? { opacity: 1, scale: 1 } : { y: 0, opacity: 1 }}
            exit={isFullScreenPage ? { opacity: 0, scale: 0.98 } : { y: "100%", opacity: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 240 }}
          >
            {/* Header Area */}
            <div className={`p-4 border-b border-stone-900 bg-stone-900 text-stone-50 flex items-center justify-between shrink-0 ${
              isFullScreenPage ? "rounded-none" : "rounded-t-[32px]"
            }`}>
              <div className="flex items-center gap-2.5">
                <div>
                  <h3 className="text-xs font-black tracking-wider uppercase text-white">Masa Rezervasyonu</h3>
                  <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                    {panelMode === "book" ? "Hızlı Rezerve Et" : "Uygulama Yönetim Paneli"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Mode Switcher */}
                <button
                  onClick={() => setPanelMode(panelMode === "book" ? "admin" : "book")}
                  className={`px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all border ${
                    panelMode === "admin"
                      ? "bg-amber-500 text-stone-950 border-amber-500 shadow-sm"
                      : "bg-stone-800 hover:bg-stone-700 text-amber-400 border-stone-700"
                  }`}
                >
                  {panelMode === "book" ? "Yönetici" : "Müşteri"}
                </button>

                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-300 hover:text-white cursor-pointer transition-colors"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* Scrollable Main Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f5f2eb]">
                    {/* CUSTOMER BOOKING MODE */}
              {panelMode === "book" && (
                <div className="space-y-4">
                  
                  {successMsg ? (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-white border-2 border-emerald-500/20 rounded-2xl p-6 text-center space-y-3.5 shadow-xs"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner text-lg font-black">
                        ✓
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-stone-900 uppercase tracking-wide">Rezervasyon Talebi Alındı!</h4>
                        <p className="text-[11px] text-stone-600 font-semibold mt-1 leading-relaxed">
                          Harika! Talebiniz sistemimize kaydedildi. En kısa sürede onay SMS'i veya araması ile tarafınıza dönüş sağlanacaktır.
                        </p>
                      </div>
                      <div className="bg-[#faf8f4] border border-stone-200 rounded-xl p-3 inline-block text-left text-[11px] text-stone-700 space-y-1 font-bold">
                        <p>Masa Tercihi: <span className="text-amber-700 font-black">{tablePreference || "Belirtilmedi"}</span></p>
                        <p>Zamanlama: <span className="text-amber-700 font-black">{date} • {selectedTime}</span></p>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={(e) => {
                      handleBookSubmit(e);
                    }} className="bg-white border-2 border-[#e6decb] rounded-2xl p-5 space-y-4 shadow-xs">
                      <div className="border-b border-stone-100 pb-3">
                        <h4 className="text-xs font-black text-stone-950 uppercase tracking-wider">
                          Masa Rezervasyonu
                        </h4>
                        <p className="text-[10px] text-stone-500 font-semibold mt-1 leading-relaxed">
                          Plakların tınısı, retro atmosfer ve eşsiz lezzetler eşliğinde unutulmaz bir akşam için masanızı şimdiden ayırtın.
                        </p>
                      </div>

                      {/* Name & Phone inputs */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[9px] text-stone-500 font-extrabold uppercase tracking-wider block">
                            Ad Soyad
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Örn: Ahmet Yılmaz"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-[#faf8f5] border border-stone-200 focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] rounded-xl px-3 py-2 text-xs font-bold text-stone-900 placeholder-stone-400 outline-none transition-colors"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[9px] text-stone-500 font-extrabold uppercase tracking-wider block">
                            Telefon No
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="05XX XXX XX XX"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-[#faf8f5] border border-stone-200 focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] rounded-xl px-3 py-2 text-xs font-bold text-stone-900 placeholder-stone-400 outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Guest Count Selector (Plus/Minus Counter) */}
                      <div className="space-y-1.5">
                        <label className="text-[9px] text-stone-500 font-extrabold uppercase tracking-wider block">
                          Kişi Sayısı
                        </label>
                        <div className="flex items-center gap-4 bg-[#faf8f5] border border-stone-200 p-2 rounded-xl justify-between">
                          <button
                            type="button"
                            onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                            className="w-8 h-8 rounded-full bg-white hover:bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 font-bold cursor-pointer transition-colors shadow-2xs"
                          >
                            -
                          </button>
                          <span className="text-sm font-black text-stone-900 font-mono">{guestsCount} Kişi</span>
                          <button
                            type="button"
                            onClick={() => setGuestsCount(Math.min(12, guestsCount + 1))}
                            className="w-8 h-8 rounded-full bg-white hover:bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 font-bold cursor-pointer transition-colors shadow-2xs"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Custom Seating Zone Text Input */}
                      <div className="space-y-1">
                        <label className="text-[9px] text-stone-500 font-extrabold uppercase tracking-wider block">
                          Masa / Bölge Tercihi
                        </label>
                        <input
                          type="text"
                          placeholder="Örn: Şömine başı, Bahçe, Cam kenarı, Pikap yanı..."
                          value={tablePreference}
                          onChange={(e) => setTablePreference(e.target.value)}
                          className="w-full bg-[#faf8f5] border border-stone-200 focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] rounded-xl px-3 py-2 text-xs font-bold text-stone-900 placeholder-stone-400 outline-none transition-colors"
                        />
                      </div>

                      {/* Date Input */}
                      <div className="space-y-1">
                        <label className="text-[9px] text-stone-500 font-extrabold uppercase tracking-wider block">
                          Tarih Seçimi
                        </label>
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full bg-[#faf8f5] border border-stone-200 focus:border-[#d97706] rounded-xl px-3 py-2 text-xs font-bold text-stone-900 outline-none"
                        />
                      </div>

                      {/* Time Slots Selector */}
                      <div className="space-y-1.5">
                        <label className="text-[9px] text-stone-500 font-extrabold uppercase tracking-wider block">
                          Saat Seçimi
                        </label>
                        <div className="grid grid-cols-5 gap-1">
                          {TIME_SLOTS.map((time) => {
                            const isSel = selectedTime === time;
                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                className={`py-2 text-[10px] font-black rounded-lg border transition-all cursor-pointer ${
                                  isSel
                                    ? "bg-[#d97706] border-[#d97706] text-white font-mono shadow-xs"
                                    : "bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700 font-mono"
                                }`}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Note Input */}
                      <div className="space-y-1">
                        <label className="text-[9px] text-stone-500 font-extrabold uppercase tracking-wider">Özel İstek / Not (İsteğe Bağlı)</label>
                        <input
                          type="text"
                          placeholder="Örn: Doğum günü pastası, evlilik yıldönümü..."
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          className="w-full bg-[#faf8f5] border border-stone-200 focus:border-[#d97706] rounded-xl px-3 py-2 text-xs font-semibold text-stone-900 placeholder-stone-400 outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-stone-950 hover:bg-black text-[#fef3c7] text-xs font-black uppercase tracking-wider rounded-xl cursor-pointer transition-all shadow-md flex items-center justify-center gap-1 hover:scale-[1.01] active:scale-[0.99]"
                      >
                        Masanızı Rezerve Edin
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* STAFF/ADMINISTRATIVE CONTROL PANEL */}
              {panelMode === "admin" && (
                <div className="space-y-4">
                  {/* Summary Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-stone-900 text-white rounded-xl p-2.5 text-center shadow-3xs">
                      <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest block">Toplam</span>
                      <span className="text-base font-black font-mono text-amber-400 leading-none mt-1 inline-block">{stats.total}</span>
                    </div>
                    <div className="bg-amber-500 text-stone-950 rounded-xl p-2.5 text-center shadow-3xs border border-amber-400/40">
                      <span className="text-[8px] font-black text-amber-900 uppercase tracking-widest block">Bekleyen</span>
                      <span className="text-base font-black font-mono text-stone-950 leading-none mt-1 inline-block">{stats.pending}</span>
                    </div>
                    <div className="bg-emerald-800 text-white rounded-xl p-2.5 text-center shadow-3xs">
                      <span className="text-[8px] font-black text-emerald-200 uppercase tracking-widest block">Onaylanan</span>
                      <span className="text-base font-black font-mono text-emerald-100 leading-none mt-1 inline-block">{stats.approved}</span>
                    </div>
                  </div>

                  {/* Filter tabs */}
                  <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-0.5 bg-stone-100 p-1 rounded-lg border border-stone-200">
                    {(["all", "Beklemede", "Onaylandı", "İptal Edildi"] as const).map((tab) => {
                      const isAct = adminFilter === tab;
                      return (
                        <button
                          key={tab}
                          onClick={() => setAdminFilter(tab)}
                          className={`text-[9px] font-black px-2.5 py-1.5 rounded-md cursor-pointer transition-all flex-1 text-center whitespace-nowrap uppercase tracking-wider ${
                            isAct
                              ? "bg-white text-stone-900 shadow-3xs"
                              : "text-stone-500 hover:text-stone-800"
                          }`}
                        >
                          {tab === "all" ? "Tümü" : tab}
                        </button>
                      );
                    })}
                  </div>

                  {/* List of all reservations */}
                  <div className="space-y-2.5">
                    {filteredReservations.length > 0 ? (
                      filteredReservations.map((res) => (
                        <div
                          key={res.id}
                          className="bg-white border-2 border-[#e6decb] rounded-2xl p-3.5 space-y-3.5 shadow-3xs relative overflow-hidden"
                        >
                          {/* Top Status and Date */}
                          <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                            <div className="space-y-0.5">
                              <span className="text-[8px] text-stone-400 font-extrabold tracking-widest uppercase">
                                Rezervasyon Kodu: #{res.id.substring(0, 4).toUpperCase()}
                              </span>
                              <p className="text-xs font-black text-stone-900 uppercase">{res.name}</p>
                            </div>
                            
                            <span className={`inline-block text-[8.5px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${
                              res.status === "Onaylandı"
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                : res.status === "İptal Edildi"
                                  ? "bg-rose-100 text-rose-800 border border-rose-200"
                                  : "bg-amber-100 text-amber-800 border border-amber-200"
                            }`}>
                              {res.status}
                            </span>
                          </div>

                          {/* Info Rows */}
                          <div className="grid grid-cols-2 gap-2 text-[10.5px] text-stone-700 font-semibold font-mono">
                            <div className="space-y-1">
                              <p>🕒 Zaman: <span className="text-stone-900 font-black">{res.date} @ {res.time}</span></p>
                              <p>📞 Telefon: <span className="text-stone-900 font-black">{res.phone}</span></p>
                            </div>
                            <div className="space-y-1">
                              <p>👥 Kişi: <span className="text-stone-900 font-black">{res.guestsCount} Kişi</span></p>
                              <p>📍 Masa: <span className="text-stone-900 font-black">{res.tableNumber}</span></p>
                            </div>
                          </div>

                          {res.note && (
                            <div className="bg-[#faf8f4] border border-stone-200/50 p-2 rounded-lg text-[10px] text-stone-600 font-semibold italic">
                              " {res.note} "
                            </div>
                          )}

                          {/* Action Controls for Staff */}
                          <div className="flex items-center gap-1.5 pt-2.5 border-t border-stone-100">
                            {res.status !== "Onaylandı" && (
                              <button
                                onClick={() => onUpdateStatus(res.id, "Onaylandı")}
                                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-[9.5px] uppercase tracking-wider py-1.5 px-2 rounded-lg cursor-pointer transition-all flex items-center justify-center gap-1 shadow-3xs"
                              >
                                <Check className="w-3.5 h-3.5" />
                                Onayla
                              </button>
                            )}
                            
                            {res.status !== "İptal Edildi" && (
                              <button
                                onClick={() => onUpdateStatus(res.id, "İptal Edildi")}
                                className="flex-1 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-extrabold text-[9.5px] uppercase tracking-wider py-1.5 px-2 rounded-lg cursor-pointer transition-all flex items-center justify-center gap-1"
                              >
                                <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                                İptal Et
                              </button>
                            )}

                            <button
                              onClick={() => onDeleteReservation(res.id)}
                              className="w-8 h-8 bg-rose-50 hover:bg-rose-100 border border-rose-100 rounded-lg flex items-center justify-center text-rose-700 cursor-pointer transition-colors"
                              title="Sil"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                        </div>
                      ))
                    ) : (
                      <div className="py-12 text-center bg-white rounded-3xl border border-stone-200 space-y-2">
                        <AlertCircle className="w-8 h-8 text-stone-300 mx-auto" />
                        <p className="text-xs text-stone-500 font-bold">Filtreye uygun rezervasyon bulunamadı.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Accent Line */}
            <div className="p-4 bg-stone-900 border-t border-stone-950 flex items-center justify-center text-[10px] text-stone-300 font-bold uppercase tracking-wider select-none shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
              Masa rezervasyonu tamamen ücretsizdir
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
