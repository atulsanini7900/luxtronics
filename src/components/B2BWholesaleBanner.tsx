"use client";

import React, { useState } from "react";
import {
  Building2,
  BadgePercent,
  CheckCircle2,
  Send,
} from "lucide-react";

export default function B2BWholesaleBanner() {
  const [inquirySent, setInquirySent] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      setInquirySent(true);
      setTimeout(() => setInquirySent(false), 4000);
      setPhone("");
    }
  };

  return (
    <section id="b2b" className="py-16 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#11131c] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Golden Glow inside card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>B2B &amp; Service Center Program</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white leading-tight">
                Wholesale Pricing &amp; <span className="text-amber-400">GST Invoicing</span> For Electronics Retailers
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                Partner directly with Luxtronics. Access over 21,000+ genuine OEM replacement cells, display modules, and repair tools with tiered wholesale discounts up to 40%.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Instant 18% GST Input Credit Invoice</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Bulk Tier Discounts (10 to 5,000+ units)</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Batch-Tested &amp; Zero DOA Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Dedicated Key Account Manager</span>
                </div>
              </div>
            </div>

            {/* Right Fast Quote Box */}
            <div className="lg:col-span-5 bg-[#171a26] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <BadgePercent className="w-4 h-4 text-amber-400" />
                  <span>Request Wholesale Catalog</span>
                </h3>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono font-bold">
                  B2B Rates
                </span>
              </div>

              {inquirySent ? (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs text-center space-y-1">
                  <p className="font-bold">Inquiry Received!</p>
                  <p className="text-neutral-400">Our B2B manager will contact you on WhatsApp within 30 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1 font-medium">
                      Mobile Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#10121d] text-xs text-white placeholder-neutral-500 rounded-xl px-3.5 py-2.5 border border-white/10 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-400 mb-1 font-medium">
                      Business Type
                    </label>
                    <select className="w-full bg-[#10121d] text-xs text-white rounded-xl px-3 py-2.5 border border-white/10 focus:outline-none focus:border-amber-400">
                      <option>Mobile Repair Center / Service Chain</option>
                      <option>Electronics Retailer / Shop Owner</option>
                      <option>Bulk Parts Importer / Distributor</option>
                      <option>Corporate Tech Procurement</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full gold-btn py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 mt-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Get Wholesale Rate Card</span>
                  </button>

                  <p className="text-[10px] text-neutral-400 text-center">
                    🔒 No spam. Instant PDF catalog sent to your phone.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
