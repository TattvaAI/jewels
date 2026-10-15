"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { useAtelierStore } from "@/store/useAtelierStore";
import { formatCurrency } from "@/lib/utils";
import { Droplet, Eye, Plus, Sparkles, MessageSquare } from "lucide-react";
import { ProductCategory, Product } from "@/types";

export function VaultCatalog() {
  const {
    categoryFilter,
    setCategoryFilter,
    sortOrder,
    setSortOrder,
    currency,
    addToCart,
    setInspectedProduct,
    openConcierge,
  } = useAtelierStore();

  const categories: { label: string; value: ProductCategory }[] = [
    { label: "All Creations", value: "all" },
    { label: "Earrings & Studs", value: "earrings" },
    { label: "Necklaces & Chains", value: "necklaces" },
    { label: "Pendants & Chokers", value: "pendants" },
    { label: "Curated Stacks", value: "stacks" },
  ];

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (categoryFilter !== "all") {
      list = list.filter((p) => p.category === categoryFilter);
    }

    if (sortOrder === "price-asc") {
      list.sort((a, b) => a.priceINR - b.priceINR);
    } else if (sortOrder === "price-desc") {
      list.sort((a, b) => b.priceINR - a.priceINR);
    }

    return list;
  }, [categoryFilter, sortOrder]);

  return (
    <section id="vault" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#EAE3D9] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D4E]"></span>
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#68625B]">
                Curated Collection &bull; Edition 2026
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#121110] font-light">
              The Atelier Vault
            </h2>
          </div>

          <p className="font-sans text-[13px] md:text-[14px] text-[#68625B] max-w-md font-light leading-relaxed">
            Every silhouette is verified tarnish-resistant, cast with hypoallergenic cores and finished in pure 18K immersion gold. Reserved individually or ordered via Instagram direct concierge.
          </p>
        </div>

        {/* Filter and Pacing Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-[#EAE3D9]/60">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategoryFilter(cat.value)}
                className={`text-[12px] uppercase tracking-[0.18em] px-3.5 py-1.5 transition-all font-sans border ${
                  categoryFilter === cat.value
                    ? "bg-[#121110] text-[#FAF8F5] border-[#121110]"
                    : "bg-transparent text-[#68625B] border-[#D4C9BA] hover:text-[#121110] hover:border-[#121110]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs font-sans text-[#68625B]">
            <span className="tracking-wider uppercase text-[10px]">Sort:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
              className="bg-[#FAF8F5] border border-[#D4C9BA] text-[#121110] text-xs px-2.5 py-1 focus:outline-none focus:border-[#9E7D4E]"
            >
              <option value="curated">Curated Selection</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Atelier Direct DM Callout */}
        <div className="mt-16 p-8 bg-[#F4EFEB] border border-[#D4C9BA] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-hallmark text-xs tracking-[0.2em] text-[#9E7D4E] uppercase block">
              Instagram Atelier Protocol
            </span>
            <h3 className="font-serif text-2xl text-[#121110]">
              Saw a specific reel or post on @eirenejewels_?
            </h3>
            <p className="text-xs text-[#68625B] font-sans max-w-xl">
              We honor all active Instagram launch promotions, festive bundles, and custom requests directly via our DM concierge line.
            </p>
          </div>

          <button
            onClick={() => openConcierge("Instagram Post / Reel Inquiries")}
            className="whitespace-nowrap px-6 py-3 bg-[#121110] text-[#FAF8F5] text-xs font-sans uppercase tracking-[0.2em] hover:bg-[#9E7D4E] transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#C4A47C]" />
            <span>Connect via Direct Message</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { currency, addToCart, setInspectedProduct, openConcierge } = useAtelierStore();

  return (
    <article className="group flex flex-col bg-[#FAF8F5] border border-[#EAE3D9] hover:border-[#D4C9BA] transition-colors">
      {/* Product Image Frame */}
      <div className="relative aspect-[4/5] bg-[#EAE3D9] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover luxury-image-zoom"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Floating Attribute Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.waterproof && (
            <span className="inline-flex items-center gap-1 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#121110] text-[10px] tracking-wider uppercase px-2 py-0.5 border border-[#D4C9BA] font-sans font-medium">
              <Droplet className="w-2.5 h-2.5 text-[#9E7D4E]" />
              <span>Waterproof</span>
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-[#121110] text-[#FAF8F5] text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 font-sans">
              Bestseller
            </span>
          )}
        </div>

        {/* Quick Action Overlay on Hover */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#121110]/80 via-[#121110]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
          <button
            onClick={() => setInspectedProduct(product)}
            className="flex items-center gap-1.5 text-[11px] text-[#FAF8F5] hover:text-[#C4A47C] transition-colors font-sans uppercase tracking-wider"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect</span>
          </button>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-1.5 bg-[#FAF8F5] text-[#121110] px-3 py-1 text-[11px] font-sans uppercase tracking-wider hover:bg-[#C4A47C] hover:text-[#FAF8F5] transition-colors"
          >
            <Plus className="w-3 h-3" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

      {/* Product Details Block */}
      <div className="p-4 flex flex-col justify-between flex-grow space-y-3">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7D4E] font-sans">
              {product.category}
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-sans text-sm font-semibold text-[#121110]">
                {formatCurrency(product.priceINR, currency)}
              </span>
              {product.originalPriceINR && (
                <span className="font-sans text-xs line-through text-[#9B948C]">
                  {formatCurrency(product.originalPriceINR, currency)}
                </span>
              )}
            </div>
          </div>

          <h3
            onClick={() => setInspectedProduct(product)}
            className="font-serif text-[17px] text-[#121110] leading-snug hover:text-[#9E7D4E] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          <p className="text-[12px] text-[#68625B] font-light mt-1 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Material Specs & Direct Concierge Reservation */}
        <div className="pt-2 border-t border-[#EAE3D9] flex items-center justify-between text-[11px] text-[#68625B] font-sans">
          <span className="truncate max-w-[130px]">{product.core}</span>
          <button
            onClick={() =>
              openConcierge(
                `Inquiry for ${product.name} (Price: ₹${product.priceINR})`
              )
            }
            className="text-[#9E7D4E] hover:text-[#121110] transition-colors underline underline-offset-2 tracking-wider uppercase text-[10px]"
          >
            DM to Reserve
          </button>
        </div>
      </div>
    </article>
  );
}
