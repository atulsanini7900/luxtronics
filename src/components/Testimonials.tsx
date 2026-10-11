"use client";

import React from "react";
import { Star, CheckCircle } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Sharma",
      role: "Owner, QuickFix Mobiles (Mumbai)",
      badge: "Verified Bulk Buyer",
      comment:
        "We order 50+ replacement batteries and display flexes every month from Luxtronics. Zero DOA so far, battery health calibrated 100%, and proper GST bills for input credit. Best supplier in India.",
      rating: 5,
      product: "Nokia & Sharp Batteries",
    },
    {
      name: "Ananya Deshmukh",
      role: "Tech Enthusiast (Bangalore)",
      badge: "Verified Retail Customer",
      comment:
        "Bought the Audio Smart Glasses. Audio clarity for conference calls and cycling is surprisingly crisp. Lightweight titanium build feels like a ₹15,000 product. Fast delivery in 2 days!",
      rating: 5,
      product: "Audio Smart Glasses Series 3",
    },
    {
      name: "Vikram Singhania",
      role: "Electronics Lab Incharge (New Delhi)",
      badge: "Verified Lab Purchase",
      comment:
        "The 64-in-1 precision screwdriver set and replacement cells for Huawei tablets fit perfectly. Customer support on WhatsApp answered pinout questions immediately. Very impressed.",
      rating: 5,
      product: "Huawei MatePad Battery + Toolkit",
    },
  ];

  return (
    <section className="py-16 bg-[#faf9f5] border-b border-[#e5e2d8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full gold-badge text-xs font-bold uppercase tracking-wider mb-2">
            <Star className="w-3.5 h-3.5 text-amber-600 fill-current" />
            <span>Social Proof &amp; Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#111217]">
            Trusted by 15,000+ Customers &amp; Technicians
          </h2>
          <p className="text-xs sm:text-sm text-[#5e6375] mt-1 max-w-lg mx-auto">
            Real feedback from repair specialists, corporate labs, and gadget enthusiasts across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#e5e2d8] hover:border-amber-500 shadow-sm hover:shadow-lg flex flex-col justify-between space-y-4 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-emerald-800 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    {rev.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#373b49] leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0ede6]">
                <p className="text-xs font-bold text-[#111217]">{rev.name}</p>
                <p className="text-[11px] text-[#787d90] font-medium">{rev.role}</p>
                <p className="text-[10px] text-amber-700 mt-1 font-mono font-semibold">
                  Purchased: {rev.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
