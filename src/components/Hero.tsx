"use client";

import React from "react";
import Image from "next/image";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { useAtelierStore } from "@/store/useAtelierStore";

export function Hero() {
  const { openConcierge } = useAtelierStore();

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-8 md:pt-16 pb-20 md:pb-28 border-b border-[#EAE3D9]">
      {/* Background Architectural Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] text-[22vw] font-display font-light text-[#121110] leading-none whitespace-nowrap z-0">
        EIREN<span className="inline-block transform scale-x-[-1]">E</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Subtle Atelier Stamp */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-12 border-b border-[#EAE3D9] pb-6">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#9E7D4E]"></span>
            <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#68625B]">
              Atelier Nº 01 &bull; Demi-Fine & Contemporary
            </span>
          </div>
          <div className="text-[12px] font-sans text-[#68625B] flex flex-wrap items-center gap-3 md:gap-4">
            <span>Waterproof 316L Core</span>
            <span className="text-[#D4C9BA]">&bull;</span>
            <span>18K Micro-Vermeil</span>
            <span className="text-[#D4C9BA]">&bull;</span>
            <span>Ambala &bull; Pan-India</span>
          </div>
        </div>

        {/* 12-Column Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Columns 1-7: Typography & Thesis */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 min-w-0 w-full">
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] text-[#121110] font-light leading-[1.14] tracking-tight">
              Sculpted stillness <br className="inline sm:hidden" />
              for the daily ritual.
            </h1>

            <p className="font-sans text-[15px] sm:text-[16px] text-[#68625B] max-w-xl leading-relaxed font-light">
              Rooted in the ancient Greek ideal of <em className="font-serif italic text-[#121110]">Eirēnē</em>—serene, unhurried grace. Demi-fine jewellery engineered with 18-karat micro-vermeil immersion over medical-grade steel. Created to be lived in, never tucked away.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#vault"
                className="inline-flex items-center justify-between gap-4 bg-[#121110] text-[#FAF8F5] px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] font-sans hover:bg-[#9E7D4E] transition-all duration-300 group"
              >
                <span>Enter The Vault</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <button
                onClick={() => openConcierge("Hero Inquiries & Pre-Orders")}
                className="inline-flex items-center gap-2 border border-[#2A2624] text-[#121110] px-6 py-3.5 text-[12px] uppercase tracking-[0.22em] font-sans hover:border-[#9E7D4E] hover:text-[#9E7D4E] transition-all duration-300"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#9E7D4E]" />
                <span>DM Atelier Concierge</span>
              </button>
            </div>

            {/* Quick Metallurgical Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#EAE3D9] max-w-md">
              <div>
                <span className="block font-hallmark text-sm font-semibold text-[#121110]">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-[#68625B]">Waterproof PVD</span>
              </div>
              <div>
                <span className="block font-hallmark text-sm font-semibold text-[#121110]">18K</span>
                <span className="text-[10px] uppercase tracking-wider text-[#68625B]">Gold Vermeil</span>
              </div>
              <div>
                <span className="block font-hallmark text-sm font-semibold text-[#121110]">Zero</span>
                <span className="text-[10px] uppercase tracking-wider text-[#68625B]">Green Skin</span>
              </div>
            </div>
          </div>

          {/* Columns 8-12: The Asymmetrical Gallery Artwork */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative group overflow-hidden bg-[#EAE3D9] border border-[#D4C9BA] aspect-[4/5] shadow-[0_20px_50px_rgba(18,17,16,0.06)]">
              {/* Product Showcase Image */}
              <Image
                src="/images/hero_editorial.jpg"
                alt="EIRENƎ Jewels - Signature Celestial Crescent & Emerald Choker"
                fill
                priority
                className="object-cover luxury-image-zoom"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />

              {/* Discreet Editorial Plaque */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#121110]/85 via-[#121110]/40 to-transparent text-[#FAF8F5] flex items-end justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.24em] text-[#C4A47C] block font-sans">
                    Signature Silhouette
                  </span>
                  <span className="font-serif text-lg tracking-wide block">
                    The Celestial Crescent & Emerald Choker
                  </span>
                  <span className="text-xs text-[#FAF8F5]/80 font-sans">
                    316L Marine Steel &bull; 18K Micro-Vermeil
                  </span>
                </div>
                <span className="text-sm font-sans tracking-wider text-[#C4A47C]">
                  ₹349
                </span>
              </div>
            </div>

            {/* Floated Secondary Offset Card with authentic Eirene Jewels branded card */}
            <div className="hidden sm:block absolute -bottom-6 -left-8 bg-[#FAF8F5] p-3 border border-[#D4C9BA] shadow-xl max-w-[200px] z-20">
              <div className="relative w-full aspect-square bg-[#EAE3D9] overflow-hidden mb-2 border border-[#EAE3D9]">
                <Image
                  src="/images/instagram/item_7.jpg"
                  alt="EIRENƎ Jewels Official Atelier Packaging"
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-[#9E7D4E] font-sans">
                Atelier Artifact
              </span>
              <span className="block font-serif text-xs text-[#121110] leading-tight">
                Branded Keepsake Card & Chain
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
