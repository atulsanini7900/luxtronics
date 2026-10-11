"use client";

import React from "react";
import { Star } from "lucide-react";

export default function MarketplaceTrustStrip() {
  const marketplaces = [
    { name: "Amazon India", rating: "4.8★", tag: "Prime Fulfilled" },
    { name: "Flipkart", rating: "4.7★", tag: "F-Assured" },
    { name: "JioMart", rating: "4.6★", tag: "Verified Store" },
    { name: "IndiaMART", rating: "TrustSEAL", tag: "Certified Supplier" },
    { name: "Walmart", rating: "Global", tag: "Marketplace Partner" },
  ];

  return (
    <section id="marketplaces" className="py-12 bg-[#faf9f5] border-b border-[#e5e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs uppercase font-mono tracking-widest text-[#787d90] font-bold">
            Multi-Channel Presence &amp; Trust
          </p>
          <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#111217] mt-1">
            Certified Store on Major Marketplaces
          </h3>
          <p className="text-xs text-[#5e6375] mt-1">
            Buy directly on Luxtronics.in for <strong>exclusive 10% discounts</strong>, zero platform commissions, and 1-on-1 technical warranty support.
          </p>
        </div>

        {/* Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {marketplaces.map((m, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white border border-[#e5e2d8] hover:border-amber-500 shadow-sm flex flex-col items-center justify-center text-center transition-colors group"
            >
              <span className="text-xs font-bold text-[#111217] group-hover:text-amber-700">
                {m.name}
              </span>
              <div className="flex items-center gap-1.5 mt-1 text-[11px] text-amber-600 font-semibold">
                <Star className="w-3 h-3 fill-current" />
                <span>{m.rating}</span>
                <span className="text-stone-300">·</span>
                <span className="text-[#787d90] text-[10px]">{m.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
