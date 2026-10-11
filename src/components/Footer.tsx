"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#111217] text-neutral-400 text-xs pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter Strip */}
        <div className="rounded-2xl bg-[#181a24] border border-stone-800 p-6 sm:p-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center md:justify-start gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Stay Ahead with Luxtronics</span>
            </span>
            <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white">
              Get ₹200 Off Your First Order + Weekly B2B Rate Sheets
            </h3>
            <p className="text-xs text-neutral-400">
              New arrivals, battery compatibility guides, and secret discounts delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto max-w-md gap-2">
            {subscribed ? (
              <div className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Coupon code LUXWELCOME sent!</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#10121a] text-white placeholder-neutral-500 text-xs px-4 py-2.5 rounded-xl border border-stone-700 focus:outline-none focus:border-amber-400 flex-1 md:w-64"
                />
                <button
                  type="submit"
                  className="gold-btn px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </form>
        </div>

        {/* 4 Columns Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-stone-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5">
                <div className="w-full h-full bg-[#111217] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-black text-amber-400 text-sm">
                    LX
                  </span>
                </div>
              </div>
              <span className="font-heading font-extrabold text-lg tracking-wider text-white">
                LUX<span className="text-amber-400">TRONICS</span>
              </span>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Luxtronics is India&apos;s premier destination for considered technology, smart eyewear, and verified OEM replacement parts for over 50+ global phone &amp; tablet brands.
            </p>

            <div className="space-y-1.5 text-xs text-neutral-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Electronics Hub, Bangalore, Karnataka - 560001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>+91 98765 43210 (Mon-Sat: 10 AM - 7 PM IST)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>support@luxtronics.in</span>
              </p>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Key Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#spare-parts" className="hover:text-amber-400 transition-colors">
                  Nokia Batteries
                </a>
              </li>
              <li>
                <a href="#spare-parts" className="hover:text-amber-400 transition-colors">
                  Sharp Aquos Batteries
                </a>
              </li>
              <li>
                <a href="#spare-parts" className="hover:text-amber-400 transition-colors">
                  Huawei &amp; Honor Cells
                </a>
              </li>
              <li>
                <a href="#spare-parts" className="hover:text-amber-400 transition-colors">
                  Samsung Display Assemblies
                </a>
              </li>
              <li>
                <a href="#gadgets" className="hover:text-amber-400 transition-colors">
                  Audio Smart Glasses
                </a>
              </li>
              <li>
                <a href="#gadgets" className="hover:text-amber-400 transition-colors">
                  Titanium Smartwatches
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Service */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Customer Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Track Consignment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  6-Month Warranty Claim
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  7-Day Replacement Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Battery Installation Guides
                </a>
              </li>
              <li>
                <a href="#b2b" className="hover:text-amber-400 transition-colors text-amber-400 font-semibold">
                  B2B Bulk GST Invoice Help
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Trust &amp; Compliance
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-1.5 text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>GST Registered Business</span>
              </li>
              <li className="flex items-center gap-1.5 text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Tested Grade-A Cells</span>
              </li>
              <li className="flex items-center gap-1.5 text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Safe Delivery Across India</span>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Privacy Policy &amp; Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>© {new Date().getFullYear()} Luxtronics India. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <span className="text-neutral-400">Accepted Payments:</span>
            <span className="px-2 py-0.5 rounded bg-stone-800 text-neutral-200 font-mono font-bold">
              UPI / GPay / PhonePe
            </span>
            <span className="px-2 py-0.5 rounded bg-stone-800 text-neutral-200 font-mono font-bold">
              RuPay
            </span>
            <span className="px-2 py-0.5 rounded bg-stone-800 text-neutral-200 font-mono font-bold">
              Cards &amp; NetBanking
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
