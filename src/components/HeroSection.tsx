"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Shield,
  Zap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  BatteryCharging,
  Eye,
  Smartphone,
  Play,
  Pause,
} from "lucide-react";

interface HeroSlide {
  id: number;
  number: string;
  shortTitle: string;
  tag: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  originalPrice: string;
  discount: string;
  ctaText: string;
  ctaLink: string;
  specs: string[];
  image: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    number: "01",
    shortTitle: "Smart Eyewear",
    tag: "THE ELECTRONICS EDIT · 01",
    badge: "Smart Eyewear 2026",
    title: "Audio Smart Glasses",
    subtitle: "See What Is Next.",
    description:
      "Open-ear acoustic engineering with polarized UV400 lenses and ultra-lightweight titanium frame. 12-hour continuous talk time.",
    price: "₹4,999",
    originalPrice: "₹8,999",
    discount: "45% OFF",
    ctaText: "Order Glasses",
    ctaLink: "#gadgets",
    specs: ["Open-Ear Sound", "Polarized UV400", "IPX5 Splashproof", "Dual Mics ENC"],
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    number: "02",
    shortTitle: "Smartwatch Ultra",
    tag: "THE ELECTRONICS EDIT · 02",
    badge: "Flagship Wearable",
    title: "Titanium Smartwatch Ultra",
    subtitle: "Precision On Your Wrist.",
    description:
      "Sapphire glass crystal with 1.96-inch Always-On AMOLED display. Comprehensive biometric monitoring, ECG sensors, and 14-day battery reserve.",
    price: "₹3,499",
    originalPrice: "₹6,999",
    discount: "50% OFF",
    ctaText: "Shop Smartwatch",
    ctaLink: "#gadgets",
    specs: ["1.96\" AMOLED Display", "Sapphire Glass", "ECG + SpO2 Monitor", "14-Day Battery"],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    number: "03",
    shortTitle: "Rugged Phones",
    tag: "THE ELECTRONICS EDIT · 03",
    badge: "Field-Ready Durability",
    title: "Industrial Rugged Phones",
    subtitle: "Power That Does Not Pause.",
    description:
      "Military-grade shock resistance (MIL-STD-810H) with 10,600mAh battery reserve, thermal imaging lens, and high-gain satellite GPS.",
    price: "₹14,999",
    originalPrice: "₹22,999",
    discount: "35% OFF",
    ctaText: "Explore Rugged Tech",
    ctaLink: "#gadgets",
    specs: ["10,600mAh Monster Battery", "MIL-STD-810H Certified", "Night Vision Sensor", "IP69K Waterproof"],
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
  },
];

const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds per slide

export default function HeroSection({
  onAddToCart,
}: {
  onAddToCart: (title: string, price: number) => void;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  // Auto-play interval with reset
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgressKey((prev) => prev + 1);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  const handleSelectSlide = (idx: number) => {
    setCurrentSlide(idx);
    setProgressKey((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setProgressKey((prev) => prev + 1);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgressKey((prev) => prev + 1);
  };

  const slide = slides[currentSlide];

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-3 sm:pt-6 pb-8 sm:pb-12 subtle-grid-bg border-b border-[#e8e5dc] bg-[#faf9f5]"
    >
      {/* Background Soft Champagne Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-200/40 via-amber-100/20 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ======================================================== */}
        {/* MOBILE CAROUSEL CONTROLLER (Story-style Segmented Bars)  */}
        {/* ======================================================== */}
        <div className="md:hidden mb-5 space-y-2.5">
          {/* 3 Story Progress Bars */}
          <div className="grid grid-cols-3 gap-2">
            {slides.map((s, idx) => {
              const isActive = currentSlide === idx;
              const isPast = idx < currentSlide;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleSelectSlide(idx)}
                  className="relative h-1.5 bg-stone-200 rounded-full overflow-hidden cursor-pointer"
                  aria-label={`Go to slide ${s.number}`}
                >
                  {isActive && !isPaused && (
                    <span
                      key={progressKey}
                      className="absolute inset-0 bg-amber-600 rounded-full"
                      style={{
                        animation: `heroProgressMobile ${AUTOPLAY_INTERVAL}ms linear forwards`,
                      }}
                    />
                  )}
                  {isActive && isPaused && (
                    <span className="absolute inset-0 bg-amber-600 rounded-full" />
                  )}
                  {isPast && (
                    <span className="absolute inset-0 bg-stone-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Current Slide Label & Arrow Controls */}
          <div className="flex items-center justify-between pt-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-full">
                {slide.number} / 03
              </span>
              <span className="text-xs font-bold text-[#111217]">
                {slide.shortTitle}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="p-1.5 rounded-full bg-white border border-[#e5e2d8] text-[#555a6d] hover:text-black shadow-xs"
                title={isPaused ? "Resume" : "Pause"}
              >
                {isPaused ? <Play className="w-3 h-3 text-amber-600 fill-current" /> : <Pause className="w-3 h-3" />}
              </button>
              <button
                type="button"
                onClick={handlePrev}
                className="p-1.5 rounded-full bg-white border border-[#e5e2d8] text-[#555a6d] hover:text-black shadow-xs"
                aria-label="Previous"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-1.5 rounded-full bg-white border border-[#e5e2d8] text-[#555a6d] hover:text-black shadow-xs"
                aria-label="Next"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP CAROUSEL STEPPER NAV                             */}
        {/* ======================================================== */}
        <div className="hidden md:flex items-center justify-between border-b border-[#e8e5dc] pb-4 mb-8">
          <div className="flex items-center gap-3">
            {slides.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleSelectSlide(idx)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all overflow-hidden cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#111217] text-white shadow-md shadow-stone-900/15"
                      : "bg-white text-[#555a6d] hover:text-[#111217] border border-[#e8e5dc] hover:border-stone-400"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] font-black ${
                      isActive ? "text-amber-400" : "text-amber-600"
                    }`}
                  >
                    {s.number}
                  </span>
                  <span>{s.title}</span>

                  {isActive && !isPaused && (
                    <span
                      key={progressKey}
                      className="absolute bottom-0 left-0 h-[2.5px] bg-amber-400"
                      style={{
                        animation: `heroProgress ${AUTOPLAY_INTERVAL}ms linear forwards`,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-full border border-[#e8e5dc] bg-white text-[#555a6d] hover:text-black hover:border-stone-400 transition-colors shadow-sm"
              title={isPaused ? "Resume" : "Pause"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-amber-600 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 rounded-full border border-[#e8e5dc] bg-white text-[#555a6d] hover:text-black hover:border-stone-400 transition-colors shadow-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2 rounded-full border border-[#e8e5dc] bg-white text-[#555a6d] hover:text-black hover:border-stone-400 transition-colors shadow-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* HERO MAIN STAGE (Responsive for Mobile & Desktop)        */}
        {/* ======================================================== */}
        <div
          key={`hero-stage-${currentSlide}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
        >
          {/* CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 animate-hero-fade">
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full gold-badge text-[11px] sm:text-xs font-bold tracking-wide">
              <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
              <span className="truncate">{slide.tag}</span>
              <span className="text-amber-500">·</span>
              <span className="text-stone-900 font-extrabold truncate">{slide.badge}</span>
            </div>

            {/* Headline & Subtitle */}
            <div className="space-y-1">
              <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111217] leading-tight">
                {slide.title}
                <span className="text-amber-600">.</span>
              </h1>
              <p className="font-heading text-base sm:text-xl text-[#4b5063] font-light italic">
                &ldquo;{slide.subtitle}&rdquo;
              </p>
            </div>

            {/* ====================================================== */}
            {/* MOBILE-ONLY PRODUCT IMAGE (Shows high up on mobile screen!) */}
            {/* ====================================================== */}
            <div className="lg:hidden my-2">
              <div className="relative w-full aspect-[4/3] max-w-[360px] mx-auto rounded-2xl p-2.5 bg-white border border-[#e5e2d8] shadow-md overflow-hidden">
                <img
                  key={`mobile-${slide.image}`}
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-xl animate-hero-image"
                />

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-amber-500/30 px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-[10px] font-bold text-[#111217]">
                    Grade-A Tested
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-[#e5e2d8] px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-[10px] font-bold text-[#111217]">
                    Ships in 24h
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-base text-[#5a5f73] leading-relaxed max-w-xl font-normal">
              {slide.description}
            </p>

            {/* KEY SPECS CHIPS (Clean 2-Col Grid on Mobile) */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 pt-1">
              {slide.specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white border border-[#e5e2d8] text-[11px] sm:text-xs font-semibold text-[#2f3342] shadow-xs"
                >
                  <CheckCircle2 className="w-3 h-3 text-amber-600 shrink-0" />
                  <span className="truncate">{spec}</span>
                </div>
              ))}
            </div>

            {/* PRICING & CTAS */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#111217] font-heading">
                  {slide.price}
                </span>
                <span className="text-xs sm:text-sm text-[#8c91a4] line-through">
                  {slide.originalPrice}
                </span>
                <span className="text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {slide.discount}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5">
                <button
                  type="button"
                  onClick={() =>
                    onAddToCart(
                      slide.title,
                      parseInt(slide.price.replace(/[^\d]/g, ""))
                    )
                  }
                  className="dark-btn py-3 px-4 sm:px-6 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md hover:scale-[1.02] active:scale-95 transition-transform"
                >
                  <span className="truncate">{slide.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
                <a
                  href="#categories"
                  className="py-3 px-4 sm:px-5 rounded-full border border-[#dcd8cb] bg-white hover:bg-stone-50 text-[#111217] text-xs font-bold transition-colors shadow-sm text-center truncate"
                >
                  Browse Catalog
                </a>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* DESKTOP-ONLY VISUAL COLUMN (Side-by-side on lg: screen)  */}
          {/* ======================================================== */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
            <div className="relative w-full aspect-square max-w-[420px] rounded-3xl p-4 bg-white border border-[#e5e2d8] shadow-xl overflow-hidden group">
              <img
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-2xl animate-hero-image"
              />

              <div className="absolute top-7 left-7 bg-white/95 backdrop-blur-md border border-amber-500/30 px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-600" />
                <span className="text-[11px] font-bold text-[#111217]">
                  Grade-A Tested
                </span>
              </div>

              <div className="absolute bottom-7 right-7 bg-white/95 backdrop-blur-md border border-[#e5e2d8] px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-600" />
                <span className="text-[11px] font-bold text-[#111217]">
                  Ships in 24 Hours
                </span>
              </div>

              <div className="absolute bottom-4 left-6 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => handleSelectSlide(i)}
                    className={`h-1.5 rounded-full cursor-pointer transition-all ${
                      currentSlide === i
                        ? "w-5 bg-amber-400"
                        : "w-1.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FAST CATEGORY LINKS */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#e8e5dc] grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
          <a
            href="#spare-parts"
            className="p-2.5 sm:p-3 rounded-xl bg-white hover:bg-stone-50 border border-[#e5e2d8] hover:border-amber-500/50 transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-[#2f3342] shadow-xs"
          >
            <BatteryCharging className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
            <span className="truncate">OEM Phone Batteries</span>
          </a>
          <a
            href="#spare-parts"
            className="p-2.5 sm:p-3 rounded-xl bg-white hover:bg-stone-50 border border-[#e5e2d8] hover:border-amber-500/50 transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-[#2f3342] shadow-xs"
          >
            <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
            <span className="truncate">Display Assemblies</span>
          </a>
          <a
            href="#gadgets"
            className="p-2.5 sm:p-3 rounded-xl bg-white hover:bg-stone-50 border border-[#e5e2d8] hover:border-amber-500/50 transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-[#2f3342] shadow-xs"
          >
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
            <span className="truncate">Smart Wearables</span>
          </a>
          <a
            href="#b2b"
            className="p-2.5 sm:p-3 rounded-xl bg-white hover:bg-stone-50 border border-[#e5e2d8] hover:border-amber-500/50 transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-[#2f3342] shadow-xs"
          >
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
            <span className="truncate">B2B Wholesale</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        @keyframes heroProgressMobile {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
