"use client";

import React from "react";
import { ShieldCheck, Droplet, Sparkles, Compass } from "lucide-react";

export function Manifesto() {
  return (
    <section id="manifesto" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D4E]"></span>
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#68625B]">
              The Craftsmanship Standard
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#121110] font-light leading-tight">
            Designed for perpetual contact with skin, water, and air.
          </h2>
          <p className="font-sans text-[15px] text-[#68625B] font-light leading-relaxed">
            Most fashion jewellery is built with cheap zinc alloys that oxidize and tarnish within weeks. EIRENƎ is engineered with marine-grade 316L stainless steel cores enveloped in 18-karat micro-vermeil.
          </p>
        </div>

        {/* 4 Pillars Grid (No generic rounded cards or drop shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#EAE3D9]">
          {/* Pillar 1 */}
          <div className="space-y-4">
            <div className="w-10 h-10 border border-[#D4C9BA] bg-[#F4EFEB] flex items-center justify-center text-[#9E7D4E]">
              <Droplet className="w-5 h-5 stroke-[1.4]" />
            </div>
            <h3 className="font-serif text-xl text-[#121110]">
              Impervious to Water
            </h3>
            <p className="text-xs text-[#68625B] font-sans leading-relaxed">
              Shower, swim, and cleanse without second thoughts. Vacuum PVD coating creates a molecular bond that repels freshwater, chlorinated pools, and ocean surf.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-4">
            <div className="w-10 h-10 border border-[#D4C9BA] bg-[#F4EFEB] flex items-center justify-center text-[#9E7D4E]">
              <Sparkles className="w-5 h-5 stroke-[1.4]" />
            </div>
            <h3 className="font-serif text-xl text-[#121110]">
              18K Micro-Vermeil
            </h3>
            <p className="text-xs text-[#68625B] font-sans leading-relaxed">
              We deposit a 2.5µm gold barrier—substantially heavier than flash plating. The color retains its deep champagne warmth rather than glaring brass.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="space-y-4">
            <div className="w-10 h-10 border border-[#D4C9BA] bg-[#F4EFEB] flex items-center justify-center text-[#9E7D4E]">
              <ShieldCheck className="w-5 h-5 stroke-[1.4]" />
            </div>
            <h3 className="font-serif text-xl text-[#121110]">
              Zero Green Skin
            </h3>
            <p className="text-xs text-[#68625B] font-sans leading-relaxed">
              100% hypoallergenic, nickel-free, and lead-free. Surgical steel cores guarantee zero skin irritation, itching, or green copper marks even in intense summer humidity.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="space-y-4">
            <div className="w-10 h-10 border border-[#D4C9BA] bg-[#F4EFEB] flex items-center justify-center text-[#9E7D4E]">
              <Compass className="w-5 h-5 stroke-[1.4]" />
            </div>
            <h3 className="font-serif text-xl text-[#121110]">
              Ambala Provenance
            </h3>
            <p className="text-xs text-[#68625B] font-sans leading-relaxed">
              Curated and inspected piece-by-piece from our Ambala studio before shipping in sealed, anti-oxidation suede pouches with insured Pan-India transit.
            </p>
          </div>
        </div>

        {/* Metallurgical Comparison Strip */}
        <div className="mt-16 p-8 bg-[#121110] text-[#FAF8F5] border border-[#2A2624]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="space-y-2">
              <span className="font-hallmark text-xs tracking-[0.25em] text-[#C4A47C] uppercase block">
                The Metallurgy Matrix
              </span>
              <h4 className="font-serif text-2xl">
                The EIRENƎ Difference
              </h4>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-[#2A2624] pt-4 md:pt-0 md:pl-8 space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-[#9B948C] font-sans block">
                Standard Fashion Imitation
              </span>
              <p className="text-xs text-[#EAE3D9] font-light leading-relaxed">
                Zinc / copper alloy base. Wears off in 2–4 weeks. Green skin marks. Vulnerable to water and perfumes.
              </p>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-[#2A2624] pt-4 md:pt-0 md:pl-8 space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-[#C4A47C] font-sans block">
                EIRENƎ Contemporary Demi-Fine
              </span>
              <p className="text-xs text-[#FAF8F5] font-light leading-relaxed">
                Marine 316L surgical steel core. 18K micro-vermeil immersion. Anti-tarnish, water-resistant everyday durability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
