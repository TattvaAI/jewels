"use client";

import React, { useState, useEffect } from "react";
import { useAtelierStore } from "@/store/useAtelierStore";
import { X, MessageCircle, Instagram, Send, Sparkles } from "lucide-react";

export function ConciergeModal() {
  const { isConciergeOpen, closeConcierge, conciergePrefill } = useAtelierStore();
  const [inquiryText, setInquiryText] = useState("");

  useEffect(() => {
    if (conciergePrefill) {
      setInquiryText(conciergePrefill);
    } else {
      setInquiryText("");
    }
  }, [conciergePrefill, isConciergeOpen]);

  if (!isConciergeOpen) return null;

  const quickPrompts = [
    "I would like to order via Instagram DM",
    "Can you suggest a layering chain stack?",
    "Do you deliver to my city in India?",
    "Inquiring about bulk gifting / festive hampers",
  ];

  const handleSendWhatsApp = () => {
    const text = inquiryText.trim() || "Hello EIRENƎ Atelier, I am interested in your jewellery collection.";
    const encoded = encodeURIComponent(`*EIRENƎ JEWELS CONCIERGE*\n\n${text}`);
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
    closeConcierge();
  };

  const handleSendInstagram = () => {
    window.open("https://www.instagram.com/eirenejewels_/", "_blank");
    closeConcierge();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#121110]/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="w-full max-w-lg bg-[#FAF8F5] border border-[#D4C9BA] shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={closeConcierge}
          className="absolute top-5 right-5 p-1 text-[#121110] hover:text-[#9E7D4E] transition-colors"
          aria-label="Close Concierge Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D4E]"></span>
            <span className="font-hallmark text-xs uppercase tracking-[0.2em] text-[#68625B]">
              Direct Atelier Line
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#121110]">
            Atelier Concierge Desk
          </h3>
          <p className="text-xs text-[#68625B] font-sans font-light leading-relaxed">
            Speak directly with our jewellery curators in Ambala for sizing advice, custom layering curation, or immediate order reservations.
          </p>
        </div>

        {/* Quick Selection Prompts */}
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-wider text-[#68625B] font-sans block">
            Suggested Inquiries:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => setInquiryText(prompt)}
                className="text-[11px] font-sans px-2.5 py-1 bg-[#F4EFEB] border border-[#EAE3D9] text-[#121110] hover:border-[#9E7D4E] hover:bg-[#FAF8F5] transition-colors text-left"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Inquiry Input Area */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-wider text-[#68625B] font-sans block">
            Your Message or Piece of Interest:
          </label>
          <textarea
            value={inquiryText}
            onChange={(e) => setInquiryText(e.target.value)}
            rows={4}
            placeholder="Type your question or name the piece you wish to reserve..."
            className="w-full bg-[#FAF8F5] border border-[#D4C9BA] p-3 text-xs font-sans text-[#121110] focus:outline-none focus:border-[#9E7D4E] transition-colors resize-none"
          />
        </div>

        {/* Contact Channel Buttons */}
        <div className="space-y-3 pt-2">
          <button
            onClick={handleSendWhatsApp}
            className="w-full py-3.5 bg-[#121110] text-[#FAF8F5] text-xs font-sans uppercase tracking-[0.2em] hover:bg-[#9E7D4E] transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#C4A47C]" />
            <span>Connect on WhatsApp</span>
          </button>

          <button
            onClick={handleSendInstagram}
            className="w-full py-3 border border-[#D4C9BA] text-[#121110] text-xs font-sans uppercase tracking-[0.18em] hover:border-[#121110] transition-colors flex items-center justify-center gap-2"
          >
            <Instagram className="w-4 h-4 text-[#9E7D4E]" />
            <span>Open Instagram DM (@eirenejewels_)</span>
          </button>
        </div>

        <div className="pt-2 border-t border-[#EAE3D9] flex items-center justify-between text-[11px] text-[#68625B] font-sans">
          <span>Average reply time: Under 1 hour</span>
          <span>Pan-India Studio</span>
        </div>
      </div>
    </div>
  );
}
