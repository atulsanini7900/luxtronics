"use client";

import React, { useState } from "react";
import {
  Star,
  Heart,
  ShoppingBag,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export interface Product {
  id: string;
  category: "wearables" | "batteries" | "displays" | "tools";
  title: string;
  compatibility: string;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  badge?: string;
  stock: string;
  image: string;
  description: string;
}

const productData: Product[] = [
  {
    id: "lux-p1",
    category: "wearables",
    title: "Audio Smart Glasses with Polarized UV400 Lens",
    compatibility: "iOS & Android Bluetooth 5.3",
    rating: 4.9,
    reviewsCount: 128,
    price: 4999,
    originalPrice: 8999,
    badge: "Trending #1",
    stock: "In Stock · Dispatches in 24h",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
    description:
      "Open-ear crystal clear acoustic speakers, touch temple controls, water resistant IPX5.",
  },
  {
    id: "lux-p2",
    category: "batteries",
    title: "For Nokia C31 CN550 Battery Replacement 5050mAh",
    compatibility: "Nokia C31 (TA-1497 / TA-1499)",
    rating: 4.8,
    reviewsCount: 94,
    price: 1640,
    originalPrice: 2899,
    badge: "OEM Grade-A",
    stock: "In Stock · Verified OEM",
    image:
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80",
    description:
      "Original spec polymer cell with built-in thermal protection chip against overcharge.",
  },
  {
    id: "lux-p3",
    category: "wearables",
    title: "Titanium AMOLED Ultra Smartwatch 1.96-inch",
    compatibility: "Universal Bluetooth Fit",
    rating: 4.9,
    reviewsCount: 215,
    price: 3499,
    originalPrice: 6999,
    badge: "50% OFF",
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    description:
      "Sapphire screen, heart-rate, SpO2 sensor, and high precision compass for outdoor use.",
  },
  {
    id: "lux-p4",
    category: "batteries",
    title: "For Sharp Aquos Sense2 Battery Replacement UBATIA273AFN1 2700mAh",
    compatibility: "Sharp Aquos Sense 2 (SH-01L / SHV43)",
    rating: 4.7,
    reviewsCount: 62,
    price: 1720,
    originalPrice: 2999,
    badge: "Top Fitment",
    stock: "In Stock · Tested",
    image:
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80",
    description:
      "High-density replacement battery cell with zero cycle degradation test passed.",
  },
  {
    id: "lux-p5",
    category: "batteries",
    title: "HB27D8C8ECW-12 7150mAh Battery Replacement For Huawei MatePad Pro",
    compatibility: "MatePad Pro MRX-AL09 / AL19 / W09",
    rating: 4.8,
    reviewsCount: 78,
    price: 2560,
    originalPrice: 4200,
    badge: "High Capacity",
    stock: "In Stock · OEM Certified",
    image:
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80",
    description:
      "Heavy duty 7150mAh tablet battery restoration kit with adhesive strips included.",
  },
  {
    id: "lux-p6",
    category: "displays",
    title: "OEM Dynamic AMOLED Display Assembly with Frame",
    compatibility: "Samsung Galaxy Series (Service Pack)",
    rating: 4.9,
    reviewsCount: 112,
    price: 5890,
    originalPrice: 9499,
    badge: "120Hz Fluid",
    stock: "In Stock · Factory Calibrated",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=600&q=80",
    description:
      "Pristine color accuracy and multi-touch responsiveness with original digitizer flex.",
  },
  {
    id: "lux-p7",
    category: "batteries",
    title: "For Huawei P9 Plus Battery Replacement HB376883ECW 3400mAh",
    compatibility: "Huawei P9 Plus (VIE-L09 / VIE-L29)",
    rating: 4.7,
    reviewsCount: 46,
    price: 1640,
    originalPrice: 2699,
    badge: "OEM Tested",
    stock: "In Stock",
    image:
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80",
    description:
      "Stable voltage output with multi-circuit protection against overheating.",
  },
  {
    id: "lux-p8",
    category: "tools",
    title: "64-in-1 Precision Magnetic Screwdriver Repair Toolkit",
    compatibility: "Phones, Watches, Laptops, Consoles",
    rating: 4.9,
    reviewsCount: 340,
    price: 1290,
    originalPrice: 2499,
    badge: "Bestseller Kit",
    stock: "In Stock · S2 Steel Bits",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    description:
      "Industrial S2 alloy bits with ergonomic aluminum handle and magnetic storage case.",
  },
];

interface FeaturedProductsProps {
  onAddToCart: (title: string, price: number) => void;
  onToggleWishlist: (title: string) => void;
  wishlist: string[];
}

export default function FeaturedProducts({
  onAddToCart,
  onToggleWishlist,
  wishlist,
}: FeaturedProductsProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const filteredProducts =
    activeTab === "all"
      ? productData
      : productData.filter((p) => p.category === activeTab);

  const handleAdd = (product: Product) => {
    onAddToCart(product.title, product.price);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section id="spare-parts" className="py-10 sm:py-16 bg-[#f4f2ea] border-t border-b border-[#e5e2d8] relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* SECTION HEADER WITH TABS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6 border-b border-[#dedad0] pb-5 sm:pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full gold-badge text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Verified Catalogue</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-[#111217]">
              Featured Devices &amp; Components
            </h2>
            <p className="text-xs sm:text-sm text-[#5e6375] mt-1">
              Every unit rigorously benchmarked. Includes 6-month replacement warranty and GST invoices.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-full border border-[#e5e2d8] shadow-xs overflow-x-auto no-scrollbar">
            {[
              { id: "all", label: "All Items" },
              { id: "wearables", label: "Smart Gadgets" },
              { id: "batteries", label: "Phone Batteries" },
              { id: "displays", label: "Display Screens" },
              { id: "tools", label: "Repair Tools" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#111217] text-white shadow-xs"
                    : "text-[#5e6375] hover:text-[#111217]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.title);
            const discountPercentage = Math.round(
              ((product.originalPrice - product.price) / product.originalPrice) * 100
            );

            return (
              <div
                key={product.id}
                className="group rounded-2xl bg-white border border-[#e5e2d8] hover:border-amber-500 hover:shadow-xl flex flex-col justify-between overflow-hidden relative transition-all duration-300 shadow-sm"
              >
                {/* Product Image Area */}
                <div className="relative aspect-[1.15/1] bg-[#f9f8f5] overflow-hidden p-4">
                  {/* Badges */}
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                    {product.badge && (
                      <span className="bg-[#111217] text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
                        {product.badge}
                      </span>
                    )}
                    <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded">
                      {discountPercentage}% OFF
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    type="button"
                    onClick={() => onToggleWishlist(product.title)}
                    className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md border transition-all ${
                      isWishlisted
                        ? "bg-rose-600 text-white border-rose-600 shadow-sm"
                        : "bg-white/80 text-[#5e6375] hover:text-rose-600 border-[#e5e2d8] hover:bg-white shadow-sm"
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`}
                    />
                  </button>

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Details Area */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  {/* Brand & Compatibility */}
                  <div className="flex items-center justify-between text-[11px] text-[#6b7280] font-mono mb-1.5">
                    <span className="text-amber-700 font-bold">LUXTRONICS OEM</span>
                    <span className="truncate max-w-[120px]">{product.compatibility}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-[#111217] leading-snug line-clamp-2 group-hover:text-amber-700 transition-colors">
                    {product.title}
                  </h3>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-bold text-[#111217] ml-1">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#717688]">
                      ({product.reviewsCount} reviews)
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="mt-4 pt-3 border-t border-[#f0ede6] flex items-baseline gap-2">
                    <span className="text-xl font-extrabold text-[#111217] font-heading">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-[#8e94a8] line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-[#5e6375] ml-auto font-medium">
                      Inc. GST
                    </span>
                  </div>

                  {/* Delivery Status */}
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{product.stock}</span>
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleAdd(product)}
                      className="dark-btn py-2.5 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {addedItem === product.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAdd(product)}
                      className="py-2.5 px-2 rounded-xl text-xs font-bold bg-stone-100 hover:bg-stone-200 text-[#111217] border border-stone-200 transition-colors text-center"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
