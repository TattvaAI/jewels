"use client";

import React from "react";
import { useAtelierStore } from "@/store/useAtelierStore";
import { Instagram, MessageCircle, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  const { openConcierge } = useAtelierStore();

  return (
    <footer className="bg-[#121110] text-[#FAF8F5] pt-20 pb-12 border-t border-[#2A2624]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Upper Brand Horizon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2A2624]">
          {/* Brand & Ethos (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="font-display text-3xl tracking-[0.25em] text-[#FAF8F5] uppercase block">
                EIREN<span className="inline-block transform scale-x-[-1] text-[#C4A47C]">E</span>
              </span>
              <span className="font-hallmark text-[10px] tracking-[0.35em] text-[#9B948C] uppercase block">
                Contemporary Atelier &bull; Ambala
              </span>
            </div>

            <p className="font-sans text-xs text-[#9B948C] font-light max-w-sm leading-relaxed">
              Quiet luxury forged for daily touch. 18-karat micro-vermeil immersion over medical-grade 316L stainless steel. Impervious to water, perfume, and oxidation.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/eirenejewels_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#2A2624] hover:border-[#C4A47C] hover:text-[#C4A47C] transition-colors flex items-center justify-center text-[#EAE3D9]"
                aria-label="Instagram @eirenejewels_"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <button
                onClick={() => openConcierge("Footer Atelier Line")}
                className="w-9 h-9 border border-[#2A2624] hover:border-[#C4A47C] hover:text-[#C4A47C] transition-colors flex items-center justify-center text-[#EAE3D9]"
                aria-label="WhatsApp Concierge"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Access Links (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-hallmark text-[11px] uppercase tracking-[0.22em] text-[#C4A47C] block">
              The Architecture
            </span>
            <ul className="space-y-2.5 text-xs font-sans text-[#9B948C]">
              <li>
                <a href="#vault" className="hover:text-[#FAF8F5] transition-colors">
                  The Complete Vault
                </a>
              </li>
              <li>
                <a href="#stack-studio" className="hover:text-[#FAF8F5] transition-colors">
                  The Layering Studio (Trios)
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-[#FAF8F5] transition-colors">
                  Metallurgy & 316L Core
                </a>
              </li>
              <li>
                <button
                  onClick={() => openConcierge("Festive & Bulk Gifting")}
                  className="hover:text-[#FAF8F5] transition-colors text-left"
                >
                  Custom Gifting & Festive Hampers
                </button>
              </li>
            </ul>
          </div>

          {/* Provenance & Care (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-hallmark text-[11px] uppercase tracking-[0.22em] text-[#C4A47C] block">
              Atelier Protocol & Care
            </span>
            <div className="space-y-3 text-xs font-sans text-[#9B948C] font-light leading-relaxed">
              <p>
                <strong className="text-[#EAE3D9] font-normal">Care Ritual:</strong> Rinse with lukewarm water after chlorinated pool exposure and dry with your complimentary microfiber cloth.
              </p>
              <p>
                <strong className="text-[#EAE3D9] font-normal">Dispatch & Transit:</strong> Hand-packed in Ambala. Complimentary tracked insured shipping across India for orders over ₹499.
              </p>
            </div>
          </div>
        </div>

        {/* Lower Legal & Hallmark Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-[#68625B] gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} EIRENƎ JEWELS. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Direct Instagram Ordering:</span>
            <a
              href="https://www.instagram.com/eirenejewels_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4A47C] hover:underline"
            >
              @eirenejewels_
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
