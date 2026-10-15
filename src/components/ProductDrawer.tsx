"use client";

import React from "react";
import Image from "next/image";
import { useAtelierStore } from "@/store/useAtelierStore";
import { formatCurrency } from "@/lib/utils";
import { X, Droplet, ShieldCheck, ShoppingBag, MessageSquare, Instagram, Scale, Ruler } from "lucide-react";

export function ProductDrawer() {
  const {
    inspectedProduct: product,
    setInspectedProduct,
    currency,
    addToCart,
    openConcierge,
  } = useAtelierStore();

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#121110]/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-xl bg-[#FAF8F5] h-full overflow-y-auto flex flex-col justify-between shadow-2xl border-l border-[#D4C9BA] animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Bar */}
        <div className="p-6 border-b border-[#EAE3D9] flex items-center justify-between sticky top-0 bg-[#FAF8F5]/95 backdrop-blur-xs z-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D4E]"></span>
            <span className="font-hallmark text-xs uppercase tracking-[0.2em] text-[#68625B]">
              Atelier Archive &bull; {product.id}
            </span>
          </div>

          <button
            onClick={() => setInspectedProduct(null)}
            className="p-1.5 text-[#121110] hover:text-[#9E7D4E] transition-colors"
            aria-label="Close Inspection Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8 flex-grow">
          {/* Main Product Image */}
          <div className="relative aspect-[4/5] bg-[#EAE3D9] border border-[#D4C9BA] overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 600px"
              priority
            />

            {product.waterproof && (
              <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-3 py-1 border border-[#D4C9BA] flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#121110] font-sans">
                <Droplet className="w-3 h-3 text-[#9E7D4E]" />
                <span>100% Waterproof Core</span>
              </div>
            )}
          </div>

          {/* Heading & Pricing */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#9E7D4E] font-sans">
                {product.category}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-xl font-semibold text-[#121110]">
                  {formatCurrency(product.priceINR, currency)}
                </span>
                {product.originalPriceINR && (
                  <span className="font-sans text-sm line-through text-[#9B948C]">
                    {formatCurrency(product.originalPriceINR, currency)}
                  </span>
                )}
              </div>
            </div>

            <h2 className="font-serif text-3xl text-[#121110]">
              {product.name}
            </h2>

            <p className="font-sans text-[14px] text-[#68625B] font-light leading-relaxed pt-2">
              {product.description}
            </p>
          </div>

          {/* Material & Engineering Specifications */}
          <div className="border-t border-[#EAE3D9] pt-6 space-y-4">
            <h3 className="font-hallmark text-xs uppercase tracking-[0.2em] text-[#121110]">
              Material Metallurgy & Architecture
            </h3>

            <div className="grid grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-3 bg-[#F4EFEB] border border-[#EAE3D9] space-y-1">
                <span className="text-[10px] uppercase text-[#68625B] block">
                  Immersion Surface
                </span>
                <span className="font-medium text-[#121110] block">
                  {product.material}
                </span>
              </div>

              <div className="p-3 bg-[#F4EFEB] border border-[#EAE3D9] space-y-1">
                <span className="text-[10px] uppercase text-[#68625B] block">
                  Substrate Core
                </span>
                <span className="font-medium text-[#121110] block">
                  {product.core}
                </span>
              </div>

              <div className="p-3 bg-[#F4EFEB] border border-[#EAE3D9] space-y-1">
                <span className="text-[10px] uppercase text-[#68625B] block flex items-center gap-1">
                  <Ruler className="w-3 h-3 text-[#9E7D4E]" />
                  <span>Dimensions</span>
                </span>
                <span className="font-medium text-[#121110] block">
                  {product.dimensions}
                </span>
              </div>

              <div className="p-3 bg-[#F4EFEB] border border-[#EAE3D9] space-y-1">
                <span className="text-[10px] uppercase text-[#68625B] block flex items-center gap-1">
                  <Scale className="w-3 h-3 text-[#9E7D4E]" />
                  <span>Weight</span>
                </span>
                <span className="font-medium text-[#121110] block">
                  {product.weightGrams ? `${product.weightGrams}g` : "Featherweight"}
                </span>
              </div>
            </div>
          </div>

          {/* Instagram Source Attribution */}
          {product.instagramCode && (
            <div className="border-t border-[#EAE3D9] pt-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-[#68625B] flex items-center gap-1.5">
                  <Instagram className="w-4 h-4 text-[#9E7D4E]" />
                  <span>Official Instagram Post Ref</span>
                </span>
                <a
                  href={`https://www.instagram.com/p/${product.instagramCode}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9E7D4E] hover:underline uppercase text-[10px] tracking-wider"
                >
                  View on Instagram &rarr;
                </a>
              </div>

              {product.instagramCaption && (
                <div className="p-3 bg-[#F4EFEB] text-xs text-[#68625B] font-sans italic border-l-2 border-[#9E7D4E]">
                  &ldquo;{product.instagramCaption}&rdquo;
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Bottom Bar */}
        <div className="p-6 border-t border-[#EAE3D9] bg-[#FAF8F5] sticky bottom-0 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                addToCart(product);
                setInspectedProduct(null);
              }}
              className="w-full py-3.5 bg-[#121110] text-[#FAF8F5] text-xs font-sans uppercase tracking-[0.2em] hover:bg-[#9E7D4E] transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag</span>
            </button>

            <button
              onClick={() => {
                setInspectedProduct(null);
                openConcierge(
                  `Direct Order for ${product.name} (SKU: ${product.id}, Price: ₹${product.priceINR})`
                );
              }}
              className="w-full py-3.5 border border-[#121110] text-[#121110] text-xs font-sans uppercase tracking-[0.2em] hover:border-[#9E7D4E] hover:text-[#9E7D4E] transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#9E7D4E]" />
              <span>DM Concierge</span>
            </button>
          </div>

          <p className="text-[10px] text-center text-[#68625B] font-sans">
            Inspected by Hand in Ambala &bull; Free Pan-India Insured Transit over ₹499
          </p>
        </div>
      </div>
    </div>
  );
}
