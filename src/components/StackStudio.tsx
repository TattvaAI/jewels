"use client";

import React from "react";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { useAtelierStore } from "@/store/useAtelierStore";
import { formatCurrency } from "@/lib/utils";
import { Layers, Sparkles, Check, RefreshCw, ShoppingBag, MessageCircle } from "lucide-react";
import { Product } from "@/types";

export function StackStudio() {
  const { stack, setStackLayer, clearStack, currency, addToCart, openConcierge } = useAtelierStore();

  const layer1Options = PRODUCTS.filter(
    (p) => p.category === "necklaces" || p.category === "stacks"
  );
  const layer2Options = PRODUCTS.filter(
    (p) => p.category === "pendants" || p.category === "necklaces"
  );
  const layer3Options = PRODUCTS.filter((p) => p.category === "earrings");

  // Calculate pricing & Stacking Privilege (15% off when all 3 layers selected)
  const selectedItems = [stack.layer1, stack.layer2, stack.layer3].filter(
    Boolean
  ) as Product[];
  const subtotalINR = selectedItems.reduce((sum, item) => sum + item.priceINR, 0);
  const isCompleteStack = selectedItems.length === 3;
  const discountINR = isCompleteStack ? Math.round(subtotalINR * 0.15) : 0;
  const totalINR = subtotalINR - discountINR;

  const handleAddAllToCart = () => {
    selectedItems.forEach((item) => {
      addToCart(item);
    });
  };

  const handleConciergeStack = () => {
    const names = selectedItems.map((i) => i.name).join(" + ");
    openConcierge(
      `Custom Layering Stack (${selectedItems.length} pieces): ${names}. Bundle Total: ₹${totalINR}`
    );
  };

  return (
    <section id="stack-studio" className="py-20 md:py-28 bg-[#F4EFEB] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.26em] text-[#9E7D4E]">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Layering Studio</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[#121110] font-light">
            The Art of the Stack
          </h2>
          <p className="font-sans text-[14px] text-[#68625B] font-light leading-relaxed">
            Jewellery designed to be composed together without tangling or heaviness. Curate three graduated tiers to receive the 15% Atelier Stacking Privilege.
          </p>
        </div>

        {/* Studio Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Columns (1-7): Selection Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tier 1: The Base Collar / Choker */}
            <div className="bg-[#FAF8F5] p-6 border border-[#D4C9BA] space-y-4">
              <div className="flex items-center justify-between border-b border-[#EAE3D9] pb-3">
                <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#121110] font-medium">
                  Tier 01 &bull; Collarbone Choker or Dense Weave
                </span>
                {stack.layer1 && (
                  <span className="text-xs text-[#9E7D4E] font-medium font-sans">
                    {formatCurrency(stack.layer1.priceINR, currency)}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {layer1Options.slice(0, 3).map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      setStackLayer(
                        "layer1",
                        stack.layer1?.id === item.id ? null : item
                      )
                    }
                    className={`p-2.5 text-left border transition-all flex flex-col justify-between ${
                      stack.layer1?.id === item.id
                        ? "border-[#121110] bg-[#EAE3D9]/60 shadow-sm"
                        : "border-[#EAE3D9] hover:border-[#D4C9BA] bg-[#FAF8F5]"
                    }`}
                  >
                    <div className="relative aspect-square w-full mb-2 bg-[#EAE3D9] overflow-hidden">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                    <div>
                      <span className="font-serif text-xs block text-[#121110] truncate">
                        {item.name}
                      </span>
                      <span className="text-[11px] font-sans text-[#68625B]">
                        {formatCurrency(item.priceINR, currency)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tier 2: The Focal Pendant Chain */}
            <div className="bg-[#FAF8F5] p-6 border border-[#D4C9BA] space-y-4">
              <div className="flex items-center justify-between border-b border-[#EAE3D9] pb-3">
                <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#121110] font-medium">
                  Tier 02 &bull; Mid-Drape Focal Pendant
                </span>
                {stack.layer2 && (
                  <span className="text-xs text-[#9E7D4E] font-medium font-sans">
                    {formatCurrency(stack.layer2.priceINR, currency)}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {layer2Options.slice(0, 3).map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      setStackLayer(
                        "layer2",
                        stack.layer2?.id === item.id ? null : item
                      )
                    }
                    className={`p-2.5 text-left border transition-all flex flex-col justify-between ${
                      stack.layer2?.id === item.id
                        ? "border-[#121110] bg-[#EAE3D9]/60 shadow-sm"
                        : "border-[#EAE3D9] hover:border-[#D4C9BA] bg-[#FAF8F5]"
                    }`}
                  >
                    <div className="relative aspect-square w-full mb-2 bg-[#EAE3D9] overflow-hidden">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                    <div>
                      <span className="font-serif text-xs block text-[#121110] truncate">
                        {item.name}
                      </span>
                      <span className="text-[11px] font-sans text-[#68625B]">
                        {formatCurrency(item.priceINR, currency)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tier 3: Accent Earring / Huggie */}
            <div className="bg-[#FAF8F5] p-6 border border-[#D4C9BA] space-y-4">
              <div className="flex items-center justify-between border-b border-[#EAE3D9] pb-3">
                <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#121110] font-medium">
                  Tier 03 &bull; Ear Architecture (Huggies / Studs)
                </span>
                {stack.layer3 && (
                  <span className="text-xs text-[#9E7D4E] font-medium font-sans">
                    {formatCurrency(stack.layer3.priceINR, currency)}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {layer3Options.slice(0, 3).map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      setStackLayer(
                        "layer3",
                        stack.layer3?.id === item.id ? null : item
                      )
                    }
                    className={`p-2.5 text-left border transition-all flex flex-col justify-between ${
                      stack.layer3?.id === item.id
                        ? "border-[#121110] bg-[#EAE3D9]/60 shadow-sm"
                        : "border-[#EAE3D9] hover:border-[#D4C9BA] bg-[#FAF8F5]"
                    }`}
                  >
                    <div className="relative aspect-square w-full mb-2 bg-[#EAE3D9] overflow-hidden">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                    <div>
                      <span className="font-serif text-xs block text-[#121110] truncate">
                        {item.name}
                      </span>
                      <span className="text-[11px] font-sans text-[#68625B]">
                        {formatCurrency(item.priceINR, currency)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Columns (8-12): The Live Composition Preview & Order Manifest */}
          <div className="lg:col-span-5 bg-[#FAF8F5] p-8 border border-[#D4C9BA] shadow-lg sticky top-28 space-y-6">
            <div className="flex items-center justify-between border-b border-[#EAE3D9] pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7D4E] font-sans block">
                  Composition Manifest
                </span>
                <h3 className="font-serif text-xl text-[#121110]">
                  Your Bespoke Trio
                </h3>
              </div>
              <button
                onClick={clearStack}
                className="text-[11px] text-[#68625B] hover:text-[#121110] flex items-center gap-1 font-sans"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Visual Mini Stacking Racks */}
            <div className="space-y-3">
              {[
                { title: "Tier 1: Base Weave", item: stack.layer1 },
                { title: "Tier 2: Mid Focal", item: stack.layer2 },
                { title: "Tier 3: Ear Silhouette", item: stack.layer3 },
              ].map((tier, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 border border-[#EAE3D9] bg-[#FAF8F5]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 relative bg-[#EAE3D9] border border-[#D4C9BA] flex-shrink-0">
                      {tier.item ? (
                        <Image
                          src={tier.item.images[0]}
                          alt={tier.item.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-[#9B948C]">
                          —
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] text-[#68625B] font-sans uppercase block">
                        {tier.title}
                      </span>
                      <span className="font-serif text-xs text-[#121110]">
                        {tier.item ? tier.item.name : "Select piece from left"}
                      </span>
                    </div>
                  </div>
                  {tier.item && (
                    <span className="font-sans text-xs font-medium text-[#121110]">
                      {formatCurrency(tier.item.priceINR, currency)}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Pricing Summary */}
            <div className="pt-4 border-t border-[#EAE3D9] space-y-2 font-sans text-xs">
              <div className="flex justify-between text-[#68625B]">
                <span>A la carte subtotal</span>
                <span>{formatCurrency(subtotalINR, currency)}</span>
              </div>

              {isCompleteStack && (
                <div className="flex justify-between text-[#9E7D4E] font-medium">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Atelier Stacking Privilege (15%)</span>
                  </span>
                  <span>-{formatCurrency(discountINR, currency)}</span>
                </div>
              )}

              <div className="flex justify-between text-base font-semibold text-[#121110] pt-2 border-t border-[#EAE3D9]">
                <span>Trio Price</span>
                <span className="font-serif text-lg text-[#121110]">
                  {formatCurrency(totalINR, currency)}
                </span>
              </div>
            </div>

            {/* Order and Reserve Buttons */}
            <div className="space-y-3 pt-2">
              <button
                disabled={selectedItems.length === 0}
                onClick={handleAddAllToCart}
                className="w-full py-3.5 bg-[#121110] text-[#FAF8F5] text-xs font-sans uppercase tracking-[0.2em] hover:bg-[#9E7D4E] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add Stack To Bag</span>
              </button>

              <button
                disabled={selectedItems.length === 0}
                onClick={handleConciergeStack}
                className="w-full py-3.5 border border-[#121110] text-[#121110] text-xs font-sans uppercase tracking-[0.2em] hover:bg-[#FAF8F5] hover:border-[#9E7D4E] hover:text-[#9E7D4E] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#9E7D4E]" />
                <span>Reserve Stack via WhatsApp / DM</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
