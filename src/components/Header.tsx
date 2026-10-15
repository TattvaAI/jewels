"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAtelierStore } from "@/store/useAtelierStore";
import { ShoppingBag, MessageCircle, Menu, X, ShieldCheck } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart, currency, setCurrency, setIsCartOpen, openConcierge } = useAtelierStore();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Provenance Bar */}
      <div className="bg-[#121110] text-[#EAE3D9] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.22em] py-2 px-3 sm:px-4 font-sans text-center border-b border-[#2A2624] flex items-center justify-center gap-2 sm:gap-3">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C4A47C] flex-shrink-0"></span>
        <span className="truncate">Pan-India Insured Dispatch &bull; 100% Anti-Tarnish &bull; Ambala Studio</span>
        <span className="hidden md:inline text-[#9B948C]">|</span>
        <a
          href="https://www.instagram.com/eirenejewels_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1 text-[#C4A47C] hover:text-[#FAF8F5] transition-colors"
        >
          @eirenejewels_
        </a>
      </div>

      {/* Main Luxury Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE3D9] py-3.5 shadow-[0_4px_24px_rgba(18,17,16,0.03)]"
            : "bg-[#FAF8F5] py-5 border-b border-[#EAE3D9]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Desktop Left Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-[12px] uppercase tracking-[0.2em] font-sans text-[#121110]">
            <a
              href="#vault"
              className="relative py-1 hover:text-[#9E7D4E] transition-colors group"
            >
              The Vault
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#9E7D4E] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#stack-studio"
              className="relative py-1 hover:text-[#9E7D4E] transition-colors group"
            >
              The Layering Studio
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#9E7D4E] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#manifesto"
              className="relative py-1 hover:text-[#9E7D4E] transition-colors group"
            >
              Metallurgy & Care
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#9E7D4E] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 -ml-2 text-[#121110] hover:text-[#9E7D4E] transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Central Hallmark Wordmark */}
          <Link href="/" className="text-center group flex flex-col items-center">
            <span className="font-display text-2xl md:text-3xl tracking-[0.25em] text-[#121110] font-light uppercase transition-transform duration-500 group-hover:scale-[1.02]">
              EIREN<span className="inline-block transform scale-x-[-1] text-[#9E7D4E]">E</span>
            </span>
            <span className="font-hallmark text-[9px] tracking-[0.38em] uppercase text-[#68625B] -mt-0.5">
              Contemporary Atelier
            </span>
          </Link>

          {/* Right Actions: Currency, Concierge, Cart */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Currency Switcher */}
            <div className="flex items-center text-[11px] font-sans border border-[#D4C9BA] rounded-none px-2 py-1 text-[#121110] bg-[#FAF8F5]">
              <button
                onClick={() => setCurrency("INR")}
                className={`px-1.5 py-0.5 tracking-wider transition-colors ${
                  currency === "INR"
                    ? "font-semibold text-[#121110] underline decoration-[#9E7D4E] underline-offset-4"
                    : "text-[#9B948C] hover:text-[#121110]"
                }`}
              >
                ₹ INR
              </button>
              <span className="text-[#D4C9BA]">/</span>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-1.5 py-0.5 tracking-wider transition-colors ${
                  currency === "USD"
                    ? "font-semibold text-[#121110] underline decoration-[#9E7D4E] underline-offset-4"
                    : "text-[#9B948C] hover:text-[#121110]"
                }`}
              >
                $ USD
              </button>
            </div>

            {/* Atelier Concierge Trigger */}
            <button
              onClick={() => openConcierge("General Atelier Consultation")}
              className="hidden sm:flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-[#121110] hover:text-[#9E7D4E] transition-colors border border-transparent hover:border-[#D4C9BA] px-2.5 py-1"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#9E7D4E]" />
              <span>Concierge</span>
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#121110] hover:text-[#9E7D4E] transition-colors"
              aria-label={`View Bag with ${totalItems} items`}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.4]" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-0.5 bg-[#121110] text-[#FAF8F5] text-[9px] font-medium w-4 h-4 rounded-full flex items-center justify-center font-sans">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#121110]/70 backdrop-blur-sm lg:hidden transition-opacity">
          <div className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-[#FAF8F5] p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EAE3D9]">
                <div className="font-display text-xl tracking-[0.2em] text-[#121110]">
                  EIREN<span className="inline-block transform scale-x-[-1] text-[#9E7D4E]">E</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#121110] hover:text-[#9E7D4E]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-8 space-y-6 flex flex-col text-[14px] uppercase tracking-[0.2em] text-[#121110]">
                <a
                  href="#vault"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#9E7D4E] transition-colors"
                >
                  The Vault (Collection)
                </a>
                <a
                  href="#stack-studio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#9E7D4E] transition-colors"
                >
                  The Layering Studio
                </a>
                <a
                  href="#manifesto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#9E7D4E] transition-colors"
                >
                  Metallurgy & Guarantee
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openConcierge("Mobile Navigation Inquiry");
                  }}
                  className="text-left hover:text-[#9E7D4E] transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#9E7D4E]" />
                  <span>DM Atelier Concierge</span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EAE3D9] space-y-4">
              <div className="flex items-center justify-between text-xs text-[#68625B]">
                <span>Instagram Profile</span>
                <a
                  href="https://www.instagram.com/eirenejewels_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9E7D4E] font-medium"
                >
                  @eirenejewels_
                </a>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#68625B]">
                <ShieldCheck className="w-4 h-4 text-[#C4A47C]" />
                <span>Pan-India Delivery &bull; Lifetime Anti-Tarnish</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
