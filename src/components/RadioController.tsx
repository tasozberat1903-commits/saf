/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Play, Pause, SkipForward, Radio, Disc, Volume2 } from "lucide-react";
import { RadioChannel } from "../types";
import { RADIO_CHANNELS } from "../data";

interface RadioControllerProps {
  activeChannel: RadioChannel;
  isPlaying: boolean;
  onSelectChannel: (channel: RadioChannel) => void;
  onTogglePlay: () => void;
  onHighlightPairings: (category: string) => void;
}

export const RadioController: React.FC<RadioControllerProps> = ({
  activeChannel,
  isPlaying,
  onSelectChannel,
  onTogglePlay,
  onHighlightPairings,
}) => {
  return (
    <div id="radio-controller" className="p-4 bg-[#fbf9f6] border-b border-[#e9e3da] rounded-2xl shadow-sm mx-4 -mt-4 relative z-20">
      {/* Radio Station Selector Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold text-amber-900/60 uppercase tracking-widest flex items-center gap-1">
          <Radio className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
          Radyo Yayın Kanalları
        </span>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">CANLI YAYIN</span>
        </div>
      </div>

      {/* Grid of Stations */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {RADIO_CHANNELS.map((channel) => {
          const isSelected = channel.id === activeChannel.id;
          return (
            <button
              key={channel.id}
              onClick={() => onSelectChannel(channel)}
              className={`p-2 rounded-xl text-left transition-all relative overflow-hidden flex flex-col justify-between h-[72px] border cursor-pointer ${
                isSelected
                  ? "bg-[#d97706] text-white border-amber-600 shadow-md shadow-amber-900/10"
                  : "bg-white text-stone-700 hover:bg-[#faf6f0] border-stone-200"
              }`}
            >
              {/* Spinning background element for selected channel */}
              {isSelected && isPlaying && (
                <Disc className="absolute -right-3 -bottom-3 w-12 h-12 text-white/15 animate-spin pointer-events-none" />
              )}
              
              <div className="flex justify-between items-start">
                <span className={`text-[9px] font-bold uppercase tracking-wider ${isSelected ? "text-amber-100" : "text-amber-700"}`}>
                  {channel.genre.split(" ")[0]}
                </span>
                <Disc className={`w-3.5 h-3.5 ${isSelected ? "text-white animate-spin" : "text-stone-400"}`} />
              </div>
              <span className="text-[10px] font-bold truncate leading-tight z-10 w-full">
                {channel.name.replace("Radyo ", "")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Audio Controller Bar */}
      <div className="flex items-center justify-between bg-stone-900 text-white rounded-xl p-2 px-3">
        <div className="flex items-center gap-2 max-w-[50%]">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-stone-800 flex-shrink-0">
            <img
              src={activeChannel.nowPlaying.albumArt}
              alt="Album art"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 h-2 bg-amber-400 animate-pulse" />
                  <span className="w-0.5 h-3 bg-amber-400 animate-pulse delay-100" />
                  <span className="w-0.5 h-1 bg-amber-400 animate-pulse delay-300" />
                </div>
              </div>
            )}
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-amber-400 truncate">{activeChannel.nowPlaying.title}</p>
            <p className="text-[9px] text-stone-400 truncate">{activeChannel.nowPlaying.artist}</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePlay}
            className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center cursor-pointer transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-stone-900 fill-stone-900" />
            ) : (
              <Play className="w-4 h-4 text-stone-900 fill-stone-900 ml-0.5" />
            )}
          </button>
          <button
            onClick={() => {
              // Highlight category suggested for this genre
              let category = "all";
              if (activeChannel.id === "radio-indie") category = "burgers";
              if (activeChannel.id === "radio-jazz") category = "drinks";
              if (activeChannel.id === "radio-synth") category = "snacks";
              onHighlightPairings(category);
            }}
            className="text-[9px] font-bold bg-amber-900/40 hover:bg-amber-900/60 border border-amber-500/20 text-amber-300 px-2.5 py-1 rounded-lg flex items-center gap-1 cursor-pointer transition-all"
            title="Müzikle Uyumlu Lezzetleri Filtrele"
          >
            <SkipForward className="w-3 h-3" />
            <span>Müzik & Menü Eşle</span>
          </button>
        </div>
      </div>
    </div>
  );
};
