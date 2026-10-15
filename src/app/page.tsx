import { Hero } from "@/components/Hero";
import { VaultCatalog } from "@/components/VaultCatalog";
import { StackStudio } from "@/components/StackStudio";
import { Manifesto } from "@/components/Manifesto";
import Image from "next/image";
import { Instagram, ArrowUpRight, Sparkles } from "lucide-react";

export default function Home() {
  const instagramFeed = [
    {
      img: "/images/instagram/item_3.jpg",
      tag: "Round Halo Studs (₹179)",
      code: "DeTjI6yGGFA",
    },
    {
      img: "/images/instagram/item_5.jpg",
      tag: "Baroque Pearl Serpent (₹349)",
      code: "DegV0MBmAO3",
    },
    {
      img: "/images/instagram/item_6.jpg",
      tag: "Crystal Bow Drops (₹89)",
      code: "DeTjI6yGGFA",
    },
    {
      img: "/images/instagram/item_7.jpg",
      tag: "Sunburst Fire Opal (₹129)",
      code: "DeTjI6yGGFA",
    },
    {
      img: "/images/instagram/item_9.jpg",
      tag: "The Solitary Tulip (₹249)",
      code: "DeOiW0MGBjw",
    },
    {
      img: "/images/instagram/item_10.jpg",
      tag: "The Eternal Heart (₹219)",
      code: "DeWS5aFNzaB",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Cinematic Hero Exhibition */}
      <Hero />

      {/* 2. The Atelier Vault (Full Product Catalog) */}
      <VaultCatalog />

      {/* 3. The Art of the Stack (Interactive Layering Studio) */}
      <StackStudio />

      {/* 4. Metallurgy & Longevity Manifesto */}
      <Manifesto />

      {/* 5. Live Instagram Dispatch Archive (@eirenejewels_) */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#EAE3D9] pb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Instagram className="w-3.5 h-3.5 text-[#9E7D4E]" />
                <span className="text-[11px] font-sans uppercase tracking-[0.22em] text-[#68625B]">
                  Live Instagram Chronicle
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-4xl text-[#121110]">
                Dispatches from @eirenejewels_
              </h2>
            </div>

            <a
              href="https://www.instagram.com/eirenejewels_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#121110] hover:text-[#9E7D4E] transition-colors"
            >
              <span>Follow the Atelier on Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Clean 6-item Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramFeed.map((item, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/eirenejewels_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square bg-[#EAE3D9] overflow-hidden border border-[#EAE3D9] block"
              >
                <Image
                  src={item.img}
                  alt={item.tag}
                  fill
                  className="object-cover luxury-image-zoom"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />

                <div className="absolute inset-0 bg-[#121110]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-[#FAF8F5]">
                  <Instagram className="w-3.5 h-3.5 text-[#C4A47C]" />
                  <div>
                    <span className="text-[9px] uppercase tracking-wider block font-sans text-[#C4A47C]">
                      Order via DM
                    </span>
                    <span className="font-serif text-[11px] block leading-tight">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
