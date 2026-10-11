"use client";

import React from "react";
import { Truck, ShieldCheck, RefreshCw, Headphones } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      icon: Truck,
      title: "Express Delivery",
      subtitle: "Free on orders ₹999+. Ships in 24h.",
    },
    {
      icon: ShieldCheck,
      title: "6-Mo OEM Warranty",
      subtitle: "100% tested Grade-A cells.",
    },
    {
      icon: RefreshCw,
      title: "7-Day Replacement",
      subtitle: "Guaranteed fit & performance.",
    },
    {
      icon: Headphones,
      title: "Tech Support & GST",
      subtitle: "Instant invoices & advice.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-4 sm:-mt-6 relative z-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 p-3 sm:p-6 rounded-2xl bg-white border border-[#e5e2d8] shadow-md sm:shadow-lg">
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-start gap-2.5 sm:gap-3.5 p-1.5 sm:p-2 rounded-xl hover:bg-stone-50 transition-colors"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
              </div>
              <div className="min-w-0">
                <h4 className="text-[11px] sm:text-sm font-bold text-[#111217] truncate">
                  {item.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-[#5e6375] mt-0.5 leading-tight font-normal line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
