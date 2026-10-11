"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import B2BWholesaleBanner from "@/components/B2BWholesaleBanner";
import MarketplaceTrustStrip from "@/components/MarketplaceTrustStrip";
import Testimonials from "@/components/Testimonials";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { ArrowUp } from "lucide-react";

export default function HomePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "demo-1",
      title: "For Nokia C31 CN550 Battery Replacement 5050mAh",
      price: 1640,
      quantity: 1,
    },
  ]);
  const [wishlist, setWishlist] = useState<string[]>([
    "Audio Smart Glasses with Polarized UV400 Lens",
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleAddToCart = (title: string, price: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.title === title);
      if (existing) {
        return prev.map((item) =>
          item.title === title ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: `item-${Date.now()}`,
          title,
          price,
          quantity: 1,
        },
      ];
    });
    showToast(`✓ Added to Bag: ${title.slice(0, 32)}...`);
  };

  const handleUpdateQty = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast("Item removed from bag");
  };

  const handleToggleWishlist = (title: string) => {
    if (wishlist.includes(title)) {
      setWishlist((prev) => prev.filter((t) => t !== title));
      showToast("Removed from wishlist");
    } else {
      setWishlist((prev) => [...prev, title]);
      showToast("♥ Added to wishlist");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#111217] flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-900">
      {/* 1. NAVBAR */}
      <Navbar
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => {
          showToast(`You have ${wishlist.length} items in your wishlist`);
        }}
      />

      {/* 2. HERO SECTION */}
      <main className="flex-1">
        <HeroSection onAddToCart={handleAddToCart} />

        {/* 3. FLOATING TRUST ASSURANCE BAR */}
        <TrustBar />

        {/* 4. VISUAL CATEGORIES GRID */}
        <CategoriesGrid />

        {/* 5. FEATURED E-COMMERCE PRODUCTS & SPARE PARTS */}
        <FeaturedProducts
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
        />

        {/* 6. B2B WHOLESALE & GST INVOICING BANNER */}
        <B2BWholesaleBanner />

        {/* 7. MARKETPLACE PRESENCE STRIP */}
        <MarketplaceTrustStrip />

        {/* 8. SOCIAL PROOF & TESTIMONIALS */}
        <Testimonials />
      </main>

      {/* 9. FOOTER */}
      <Footer />

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />

      {/* SCROLL TO TOP (Placed at bottom-left so it doesn't conflict with Chat widget) */}
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-white hover:bg-stone-100 text-[#111217] border border-[#e5e2d8] shadow-lg backdrop-blur-md transition-all hover:-translate-y-0.5 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* PREMIUM CHAT CONCIERGE WIDGET */}
      <ChatWidget />

      {/* POPUP TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#111217] text-white border border-stone-700 px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
