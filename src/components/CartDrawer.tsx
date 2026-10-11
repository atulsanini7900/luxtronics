"use client";

import React, { useState } from "react";
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
}: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const shippingThreshold = 999;
  const freeShipping = subtotal >= shippingThreshold;
  const amountNeeded = Math.max(0, shippingThreshold - subtotal);
  const total = subtotal - discount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === "LUX10") {
      setCouponApplied(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#e5e2d8] shadow-2xl flex flex-col text-[#111217]">
          {/* Header */}
          <div className="p-5 border-b border-[#e5e2d8] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-600" />
              <h2 className="font-heading font-extrabold text-lg">Your Bag</h2>
              <span className="text-xs bg-stone-100 text-[#111217] px-2 py-0.5 rounded-full font-mono font-bold">
                {items.reduce((acc, i) => acc + i.quantity, 0)} items
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-stone-100 text-[#787d90] hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#f9f8f5] px-5 py-3 border-b border-[#e5e2d8] text-xs">
            {freeShipping ? (
              <p className="text-emerald-700 font-bold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Congratulations! You unlocked FREE Express Delivery.
              </p>
            ) : (
              <div className="space-y-1.5">
                <p className="text-[#323540]">
                  Add <strong className="text-amber-700 font-bold">₹{amountNeeded}</strong> more for <strong>FREE Delivery</strong>
                </p>
                <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-500 h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min(100, (subtotal / shippingThreshold) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-[#787d90]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-sm font-bold text-[#111217]">
                  Your shopping bag is empty
                </p>
                <p className="text-xs text-[#787d90] max-w-xs mx-auto">
                  Explore our collection of smart wearables, genuine phone batteries, and screens.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="dark-btn px-5 py-2.5 rounded-full text-xs font-bold mt-2"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-[#f9f8f5] border border-[#e5e2d8] flex items-center justify-between gap-3 shadow-sm"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#111217] line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-amber-700 font-extrabold mt-1">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-[#e5e2d8] shadow-sm">
                    <button
                      type="button"
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="p-1 text-[#787d90] hover:text-black"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-mono px-1 font-bold text-[#111217]">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="p-1 text-[#787d90] hover:text-black"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#e5e2d8] bg-[#faf9f5] space-y-4">
              {/* Coupon Code Input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon code (Try: LUX10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 bg-white text-xs px-3 py-2 rounded-lg border border-[#e5e2d8] focus:outline-none focus:border-amber-500 text-[#111217] uppercase placeholder-[#8a8e9e] font-semibold"
                />
                <button
                  type="submit"
                  className="bg-[#111217] hover:bg-stone-800 text-white text-xs px-3.5 py-2 rounded-lg font-bold transition-colors"
                >
                  Apply
                </button>
              </form>

              {couponApplied && (
                <div className="text-[11px] text-emerald-700 font-bold flex items-center justify-between">
                  <span>Code LUX10 Applied (10% Off)</span>
                  <span>-₹{discount}</span>
                </div>
              )}

              {/* Subtotal & Total */}
              <div className="space-y-1.5 text-xs text-[#5e6375] pt-2 border-t border-[#e5e2d8]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#111217] font-bold">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className={freeShipping ? "text-emerald-700 font-bold" : "text-[#111217] font-bold"}>
                    {freeShipping ? "FREE" : "₹90"}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-[#111217] pt-2 border-t border-[#dedad0]">
                  <span>Total (Incl. 18% GST)</span>
                  <span className="text-amber-700 text-base font-heading">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                type="button"
                className="w-full dark-btn py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#787d90]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-bit Encrypted Checkout · Instant GST Invoice</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
