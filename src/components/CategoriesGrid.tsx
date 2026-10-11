"use client";

import React from "react";
import {
  BatteryCharging,
  Smartphone,
  Glasses,
  Watch,
  Wrench,
  Radio,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function CategoriesGrid() {
  const categories = [
    {
      title: "Smart Eyewear",
      count: "14 Models",
      desc: "Directional audio & polarized glasses",
      icon: Glasses,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
      href: "#gadgets",
    },
    {
      title: "Phone Batteries",
      count: "850+ SKUs",
      desc: "High-density OEM replacement cells",
      icon: BatteryCharging,
      image:
        "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80",
      href: "#spare-parts",
    },
    {
      title: "Touch Displays",
      count: "420+ Models",
      desc: "Original AMOLED & OLED panels",
      icon: Smartphone,
      image:
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=600&q=80",
      href: "#spare-parts",
    },
    {
      title: "Smartwatches",
      count: "28 Models",
      desc: "Sapphire glass AMOLED wearables",
      icon: Watch,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
      href: "#gadgets",
    },
    {
      title: "Repair Tools",
      count: "180+ Kits",
      desc: "Magnetic screwdrivers & heat mats",
      icon: Wrench,
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      href: "#spare-parts",
    },
    {
      title: "Wireless Audio",
      count: "65+ Items",
      desc: "Low-latency ANC earbuds & chargers",
      icon: Radio,
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
      href: "#gadgets",
    },
  ];

  return (
    <section id="categories" className="py-10 sm:py-16 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-3 sm:gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-700 mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Departments</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-[#111217]">
              Specialist Catalogue
            </h2>
            <p className="text-xs sm:text-sm text-[#5e6375] mt-1 max-w-xl">
              Engineered hardware, precision repair replacements, and next-generation lifestyle technology.
            </p>
          </div>
          <a
            href="#spare-parts"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors uppercase tracking-wider group shrink-0"
          >
            <span>All Collections</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Categories Grid (2-column on mobile, 3-column on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <a
                key={idx}
                href={cat.href}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-[#e5e2d8] hover:border-amber-500 hover:shadow-lg p-3.5 sm:p-5 flex flex-col justify-between min-h-[170px] sm:min-h-[220px] transition-all duration-300 shadow-xs"
              >
                {/* Background Image Overlay with Gradient */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-15 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform shadow-xs">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-semibold border border-stone-200">
                    {cat.count}
                  </span>
                </div>

                {/* Bottom Title & Description */}
                <div className="relative z-10 pt-4 sm:pt-8">
                  <h3 className="text-xs sm:text-base font-bold text-[#111217] group-hover:text-amber-700 transition-colors flex items-center justify-between">
                    <span className="truncate">{cat.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8a8e9e] group-hover:text-amber-700 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#5e6375] mt-0.5 line-clamp-1 sm:line-clamp-2 font-normal">
                    {cat.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
