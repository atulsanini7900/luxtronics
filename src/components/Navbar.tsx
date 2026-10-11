"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  ChevronDown,
  PhoneCall,
  Flame,
  ArrowRight,
} from "lucide-react";

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const categories = [
    {
      name: "Smart Wearables & Audio",
      desc: "Directional audio glasses, sports watches & premium earbuds",
      href: "#gadgets",
      badge: "Trending",
    },
    {
      name: "OEM Phone Batteries",
      desc: "High-density replacement cells for Nokia, Sharp, Huawei, Apple & Samsung",
      href: "#spare-parts",
      badge: "Bestseller",
    },
    {
      name: "Display & Touch Screens",
      desc: "Original AMOLED & OLED factory-calibrated assemblies",
      href: "#spare-parts",
    },
    {
      name: "Industrial Rugged Phones",
      desc: "Heavy-duty outdoor phones, thermal cameras & field gear",
      href: "#hero",
    },
    {
      name: "Precision Repair Tools",
      desc: "S2 alloy screwdrivers, heating mats & testing multimeters",
      href: "#categories",
    },
  ];

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR (Responsive & Clean on Mobile) */}
      <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-stone-900 font-medium text-xs py-1.5 px-3 sm:px-4 shadow-xs border-b border-amber-300/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Mobile concise notice */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs truncate">
            <span className="bg-stone-900 text-amber-300 px-1.5 py-0.2 rounded font-extrabold text-[9px] uppercase tracking-wider shrink-0">
              OFFER
            </span>
            <span className="truncate font-semibold">
              ⚡ Free Delivery ₹999+ | Code: <strong className="underline">LUX10</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] shrink-0">
            <a
              href="tel:+919876543210"
              className="hidden lg:flex items-center gap-1 hover:underline font-bold text-stone-900"
            >
              <PhoneCall className="w-3 h-3" />
              <span>+91 98765 43210</span>
            </a>
            <a
              href="#b2b"
              className="bg-stone-900 text-amber-300 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold hover:bg-stone-800 transition-colors shadow-xs"
            >
              B2B / GST
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (Responsive for Mobile screens) */}
      <header className="sticky top-0 z-50 glass-header">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            {/* BRAND LOGO */}
            <a href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
                <div className="w-full h-full bg-[#111217] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 256 256"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 sm:w-[26px] sm:h-[26px]"
                  >
                    <path d="M29.3 71 A114 114 0 0 1 235.1 89" />
                    <path d="M235.1 185 A114 114 0 0 1 20.9 167" />
                    <path d="M76 55 V96 L66 101 L86 111 L66 121 L86 131 L76 136 V186 H120" />
                    <path d="M112 78 H140 L145 68 L155 88 L165 68 L175 88 L180 78 H200" />
                    <circle cx="76" cy="48" r="10" fill="#f59e0b" />
                    <circle cx="206" cy="78" r="10" fill="#f59e0b" />
                    <circle cx="126" cy="186" r="10" fill="#f59e0b" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base sm:text-xl tracking-[0.14em] text-[#111217] leading-tight">
                  LUX<span className="text-amber-600">TRONICS</span>
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#787d90] font-semibold">
                  Technology
                </span>
              </div>
            </a>

            {/* INTEGRATED SEARCH BAR (Desktop) */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search smart glasses, battery replacement, screens, tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white text-sm text-[#111217] placeholder-[#8a8e9e] rounded-full pl-11 pr-24 py-2.5 border border-[#e5e2d8] focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/15 transition-all shadow-sm"
                />
                <Search className="w-4 h-4 text-[#8a8e9e] absolute left-4 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#111217] hover:bg-stone-800 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
                >
                  Search
                </button>
              </div>
            </div>

            {/* NAVIGATION LINKS (Desktop) */}
            <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-[#3a3e4d]">
              <a href="#hero" className="hover:text-amber-600 transition-colors">
                Home
              </a>

              {/* Mega Menu Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("categories")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 hover:text-amber-600 transition-colors py-2"
                >
                  <span>Categories</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>

                {activeDropdown === "categories" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 p-3 bg-white border border-[#e5e2d8] rounded-2xl shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="space-y-1">
                      {categories.map((cat, idx) => (
                        <a
                          key={idx}
                          href={cat.href}
                          className="flex items-start justify-between p-2.5 rounded-xl hover:bg-stone-50 transition-colors group"
                        >
                          <div>
                            <p className="text-xs font-bold text-[#111217] group-hover:text-amber-600 flex items-center gap-1.5">
                              {cat.name}
                              {cat.badge && (
                                <span className="text-[9px] px-1.5 py-0.2 bg-amber-100 text-amber-800 rounded font-bold">
                                  {cat.badge}
                                </span>
                              )}
                            </p>
                            <p className="text-[11px] text-[#787d90] mt-0.5 line-clamp-1">
                              {cat.desc}
                            </p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#9a9fb0] group-hover:text-amber-600 mt-0.5 shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="#spare-parts" className="hover:text-amber-600 transition-colors">
                Spare Parts
              </a>
              <a
                href="#b2b"
                className="hover:text-amber-600 transition-colors flex items-center gap-1 text-amber-700 font-bold"
              >
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                Wholesale B2B
              </a>
              <a href="#marketplaces" className="hover:text-amber-600 transition-colors">
                Marketplaces
              </a>
            </nav>

            {/* RIGHT ICONS & ACTION BUTTONS */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Wishlist */}
              <button
                type="button"
                onClick={onOpenWishlist}
                className="relative p-2 text-[#4a4f60] hover:text-rose-600 hover:bg-stone-100 rounded-full transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-rose-600 text-white text-[9px] sm:text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Button */}
              <button
                type="button"
                onClick={onOpenCart}
                className="relative flex items-center gap-1.5 bg-white hover:bg-stone-50 border border-[#e5e2d8] hover:border-amber-500/60 text-[#111217] px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full transition-all group shadow-xs"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold hidden md:inline">Bag</span>
                <span className="w-4 h-4 sm:w-5 sm:h-5 bg-[#111217] text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-1.5 text-[#4a4f60] hover:text-black rounded-lg hover:bg-stone-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* MOBILE SEARCH BAR (Clean & Compact) */}
          <div className="lg:hidden pb-2.5">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products, batteries, parts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-xs text-[#111217] placeholder-[#8a8e9e] rounded-full pl-9 pr-3.5 py-2 border border-[#e5e2d8] focus:outline-none focus:border-amber-500 shadow-xs"
              />
              <Search className="w-3.5 h-3.5 text-[#8a8e9e] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-[#e5e2d8] px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
            <div className="flex flex-col space-y-1.5 text-sm font-semibold text-[#111217]">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-stone-50"
              >
                Home
              </a>
              <a
                href="#categories"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-stone-50"
              >
                Explore All Categories
              </a>
              <a
                href="#spare-parts"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-stone-50"
              >
                Phone Spare Parts &amp; Batteries
              </a>
              <a
                href="#b2b"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg bg-amber-50 text-amber-900 font-bold"
              >
                B2B Bulk Inquiry &amp; GST Billing
              </a>
              <a
                href="#marketplaces"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-stone-50"
              >
                Shop On Marketplaces
              </a>
            </div>

            <div className="pt-3 border-t border-[#e5e2d8] flex items-center justify-between text-xs text-[#787d90]">
              <span>Customer Care: +91 98765 43210</span>
              <span className="text-amber-700 font-bold">100% Original OEM</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
