import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Music, Radio, Send, Users, Disc, Play } from "lucide-react";

interface SongRequestDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeChannelName?: string;
  activeSongTitle?: string;
  activeArtistName?: string;
}

interface SongRequest {
  id: string;
  songName: string;
  artistName: string;
  customerName?: string;
  tableNo?: string;
  note?: string;
  status: "pending" | "approved" | "playing";
  timestamp: string;
}

export function SongRequestDrawer({
  isOpen,
  onClose,
  activeChannelName = "Radyo Gastro",
  activeSongTitle,
  activeArtistName,
}: SongRequestDrawerProps) {
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Seed with simulated live community song requests to make it feel alive!
  const [requests, setRequests] = useState<SongRequest[]>([
    {
      id: "req-1",
      songName: "Seni Dert Etmeler",
      artistName: "Madrigal",
      customerName: "Selin",
      note: "Harika bir parça! ❤️",
      status: "approved",
      timestamp: "2 dk önce",
    },
    {
      id: "req-2",
      songName: "Do I Wanna Know?",
      artistName: "Arctic Monkeys",
      customerName: "Ulaş",
      status: "playing",
      timestamp: "Şu an çalıyor",
    },
    {
      id: "req-3",
      songName: "Bir Derdim Var",
      artistName: "Mor ve Ötesi",
      customerName: "Can",
      note: "Efsane şarkı!",
      status: "approved",
      timestamp: "5 dk önce",
    },
    {
      id: "req-4",
      songName: "Blinding Lights",
      artistName: "The Weeknd",
      customerName: "Anonim",
      status: "pending",
      timestamp: "Yolculukta",
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!songName.trim()) {
      setError("Lütfen şarkı adını giriniz.");
      return;
    }
    if (!artistName.trim()) {
      setError("Lütfen sanatçı adını giriniz.");
      return;
    }

    const newRequest: SongRequest = {
      id: `req-${Date.now()}`,
      songName: songName.trim(),
      artistName: artistName.trim(),
      customerName: customerName.trim() || "Gizemli Misafir",
      note: note.trim() || undefined,
      status: "pending",
      timestamp: "Az önce",
    };

    setRequests((prev) => [newRequest, ...prev]);
    setSubmitted(true);
    setError("");

    // Reset fields after successful submission
    setTimeout(() => {
      setSubmitted(false);
      setSongName("");
      setArtistName("");
      setCustomerName("");
      setNote("");
    }, 2500);
  };

  const getStatusBadge = (status: "pending" | "approved" | "playing") => {
    switch (status) {
      case "playing":
        return (
          <span className="bg-[#1DB954]/20 text-[#1DB954] text-[8.5px] px-2 py-0.5 rounded-full font-black uppercase flex items-center gap-1 border border-[#1DB954]/30 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
            Şu An Çalıyor
          </span>
        );
      case "approved":
        return (
          <span className="bg-amber-100 text-amber-900 text-[8.5px] px-2 py-0.5 rounded-full font-black uppercase flex items-center gap-1 border border-amber-300/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Sırada
          </span>
        );
      case "pending":
        return (
          <span className="bg-stone-100 text-stone-500 text-[8.5px] px-2 py-0.5 rounded-full font-black uppercase flex items-center gap-1 border border-stone-200">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
            İletildi
          </span>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop screen */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Slider content */}
          <motion.div
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg bg-[#0c0d0e] text-white rounded-t-[36px] z-50 flex flex-col h-[85%] border-t border-[#1DB954]/20 shadow-2xl overflow-hidden font-sans"
            initial={{ y: "40px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "40px", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
          >
            {/* Header with Spotify green glow */}
            <div className="p-4 border-b border-stone-800 bg-[#121315] flex items-center justify-between rounded-t-[36px]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#1DB954] flex items-center justify-center text-black shadow-[0_0_12px_rgba(29,185,84,0.4)]">
                  <Music className="w-4.5 h-4.5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xs font-black text-white tracking-widest uppercase flex items-center gap-1.5">
                    İSTEK ŞARKI PANELİ
                  </h3>
                  <p className="text-[9px] text-[#1DB954] font-black uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-ping" />
                    Mert DJ Kabini Live
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              
              {/* Highlight banner showing active playing context */}
              <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-[8px] text-stone-500 font-bold uppercase tracking-widest block leading-none">ŞU AN YAYINDA</span>
                  <span className="text-xs font-extrabold text-white mt-1 block">📻 {activeChannelName}</span>
                </div>
                {activeSongTitle && (
                  <div className="text-right">
                    <span className="text-[8px] text-[#1DB954] font-bold uppercase tracking-widest block leading-none animate-pulse">ÇALAN ŞARKI</span>
                    <span className="text-[11px] font-bold text-stone-300 mt-1 block max-w-[160px] truncate">{activeSongTitle}</span>
                  </div>
                )}
              </div>

              {submitted ? (
                // Success screen with Spotify neon colors
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-stone-900/40 border border-[#1DB954]/20 rounded-2xl p-6 text-center space-y-3 shadow-inner"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1DB954]/20 text-[#1DB954] flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(29,185,84,0.15)]">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider">İSTEĞİNİZ İLETİLDİ!</h4>
                  <p className="text-[11px] text-stone-400 max-w-xs mx-auto leading-relaxed">
                    Şarkı talebiniz DJ Mert'in listesine eklendi. Keyifli dinlemeler!
                  </p>
                </motion.div>
              ) : (
                // Request Form
                <form onSubmit={handleSubmit} className="bg-stone-900/30 border border-stone-800 rounded-2xl p-4 space-y-3">
                  <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-widest">HIZLI ŞARKI TALEBİ</h4>
                  
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">Şarkı Adı *</label>
                      <input
                        type="text"
                        placeholder="Örn: Seni Dert Etmeler"
                        value={songName}
                        onChange={(e) => setSongName(e.target.value)}
                        className="w-full bg-[#121315] border border-stone-800 focus:border-[#1DB954] rounded-xl p-2.5 text-xs focus:outline-none text-white font-medium"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">Sanatçı / Grup *</label>
                      <input
                        type="text"
                        placeholder="Örn: Madrigal"
                        value={artistName}
                        onChange={(e) => setArtistName(e.target.value)}
                        className="w-full bg-[#121315] border border-stone-800 focus:border-[#1DB954] rounded-xl p-2.5 text-xs focus:outline-none text-white font-medium"
                      />
                    </div>
                  </div>

                  {error && <p className="text-[10px] text-red-400 font-bold">{error}</p>}

                  <button
                    type="submit"
                    className="w-full bg-[#1DB954] hover:bg-[#1ed760] active:scale-98 text-black font-black text-xs py-3 rounded-xl transition-all cursor-pointer shadow-lg shadow-[#1DB954]/15 flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 fill-black" />
                    Şarkı Talebini Gönder
                  </button>
                </form>
              )}

              {/* Live Request list feed */}
              <div className="space-y-3">
                <div className="flex items-center justify-between px-1">
                  <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-widest">SON ŞARKI İSTEKLERİ</h4>
                  <span className="text-[9px] text-stone-500 font-medium font-mono">Toplam {requests.length} istek</span>
                </div>

                <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                  {requests.map((req) => (
                    <div
                      key={req.id}
                      className="bg-[#121315] border border-stone-800/80 rounded-xl p-3 flex flex-col gap-1.5 hover:border-stone-700 transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="text-xs font-bold text-white leading-tight flex items-center gap-1.5">
                            {req.songName}
                          </h5>
                          <p className="text-[10px] text-stone-400 font-medium">{req.artistName}</p>
                        </div>
                        {getStatusBadge(req.status)}
                      </div>

                      <div className="flex items-center justify-between text-[9px] text-stone-500 pt-1.5 border-t border-stone-800/50">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                          {req.customerName}
                        </span>
                        <span>{req.timestamp}</span>
                      </div>

                      {req.note && (
                        <div className="bg-stone-900/50 rounded-lg p-2 mt-0.5 border-l-2 border-[#1DB954]/50">
                          <p className="text-[9px] text-stone-300 italic font-medium">"{req.note}"</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* iOS Indicator Home Line */}
            <div className="flex justify-center pt-2 pb-1 bg-[#121315] border-t border-stone-900">
              <div className="w-36 h-1.5 bg-stone-700/50 rounded-full" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
