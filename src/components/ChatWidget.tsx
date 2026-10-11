"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Phone,
  ShieldCheck,
  BatteryCharging,
  Truck,
  Building2,
  CheckCircle2,
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hello! Welcome to Luxtronics Concierge. 👋 How can we assist you today?",
      time: "Just now",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const quickPrompts = [
    {
      label: "🔋 Phone Battery Finder",
      text: "Which battery do I need for my phone model?",
      reply: "Please share your phone brand and model (e.g. Nokia C31, Sharp Aquos, Huawei). We have over 850+ original OEM batteries in stock!",
    },
    {
      label: "🚚 Order & Delivery Time",
      text: "How fast is delivery to my pincode?",
      reply: "We dispatch orders within 24 hours from Bangalore. Major metros receive delivery within 2-3 business days with free shipping above ₹999!",
    },
    {
      label: "💼 B2B & Wholesale Rates",
      text: "I need bulk pricing with GST invoice.",
      reply: "Great! We offer up to 40% wholesale margin for repair centers with 18% GST input credit. You can also message us directly on WhatsApp at +91 98765 43210.",
    },
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText("");

    setIsTyping(true);

    // Smart Concierge response simulation
    setTimeout(() => {
      let botReply =
        "Thank you! Our technical specialist has received your message. Would you like to continue on WhatsApp (+91 98765 43210) for instant live assistance?";

      const matchingPrompt = quickPrompts.find((q) => q.text === text);
      if (matchingPrompt) {
        botReply = matchingPrompt.reply;
      } else if (text.toLowerCase().includes("battery")) {
        botReply =
          "We carry tested Grade-A batteries for Nokia, Sharp, Huawei, Apple & Samsung. Each comes with a 6-month replacement warranty!";
      } else if (text.toLowerCase().includes("price") || text.toLowerCase().includes("discount")) {
        botReply =
          "You can use code LUX10 for an extra 10% off today on any order above ₹999!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `b-${Date.now()}`,
          sender: "bot",
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setHasUnread(false);
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 flex flex-col items-end">
      {/* 1. CHAT POPUP WINDOW */}
      {isOpen && (
        <div className="w-[calc(100vw-24px)] max-w-[380px] h-[490px] sm:h-[520px] bg-white rounded-2xl shadow-2xl border border-[#e5e2d8] flex flex-col overflow-hidden mb-2 sm:mb-3 animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#111217] text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5">
                  <div className="w-full h-full bg-[#111217] rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#111217] rounded-full" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xs sm:text-sm text-white flex items-center gap-1.5">
                  <span>Luxtronics Concierge</span>
                </h3>
                <p className="text-[10px] sm:text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online · Typically replies in 1 min</span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* WhatsApp Direct Bar */}
          <a
            href="https://wa.me/919876543210?text=Hi%20Luxtronics,%20I%20need%20quick%20support"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-50 hover:bg-emerald-100 border-b border-emerald-100 px-4 py-2 flex items-center justify-between text-xs text-emerald-900 transition-colors"
          >
            <span className="flex items-center gap-1.5 font-semibold">
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Prefer WhatsApp? Chat +91 98765 43210</span>
            </span>
            <span className="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded shadow-xs">
              Open App →
            </span>
          </a>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#faf9f5]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                    m.sender === "user"
                      ? "bg-[#111217] text-white rounded-br-none shadow-sm"
                      : "bg-white text-[#111217] border border-[#e5e2d8] rounded-bl-none shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-[#8a8e9e] mt-1 px-1">
                  {m.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-[#e5e2d8] px-3 py-2 rounded-2xl text-xs text-stone-500 w-20">
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            {/* Quick Suggestions Chips */}
            <div className="pt-2">
              <p className="text-[10px] text-[#787d90] font-bold uppercase tracking-wider mb-1.5">
                Quick Questions
              </p>
              <div className="flex flex-col gap-1.5">
                {quickPrompts.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSend(q.text)}
                    className="text-left text-[11px] font-medium text-[#111217] bg-white hover:bg-amber-50/60 border border-[#e5e2d8] hover:border-amber-400 px-3 py-1.5 rounded-xl transition-all shadow-xs"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-[#e5e2d8] flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about a battery, price, or product..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-[#f5f4ef] text-xs text-[#111217] placeholder-[#8a8e9e] px-3.5 py-2.5 rounded-xl border border-transparent focus:border-amber-500 focus:bg-white focus:outline-none transition-all font-medium"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-[#111217] hover:bg-stone-800 disabled:opacity-40 text-white transition-all shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Footer Security Tag */}
          <div className="bg-[#f5f4ef] px-3 py-1.5 text-center text-[10px] text-[#787d90] flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Luxtronics Official Support Desk · Encrypted</span>
          </div>
        </div>
      )}

      {/* 2. FLOATING CHAT BUTTON (Premium Obsidian & Gold Launcher) */}
      <button
        type="button"
        onClick={handleOpen}
        className="group relative flex items-center gap-2.5 bg-[#111217] hover:bg-stone-800 text-white px-4 py-3 rounded-full shadow-2xl border border-amber-500/40 hover:border-amber-400 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Open support chat"
      >
        {/* Glow halo */}
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-500/30 to-yellow-600/30 blur-sm group-hover:opacity-100 transition duration-300" />

        <div className="relative flex items-center gap-2">
          {isOpen ? (
            <X className="w-5 h-5 text-amber-400" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
              )}
            </div>
          )}

          <div className="flex flex-col text-left">
            <span className="text-xs font-bold leading-tight flex items-center gap-1">
              <span>Chat with us</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="text-[10px] text-neutral-400 font-medium leading-none mt-0.5">
              Replies under 1 min
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
