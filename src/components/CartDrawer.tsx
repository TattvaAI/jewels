"use client";

import React from "react";
import Image from "next/image";
import { useAtelierStore } from "@/store/useAtelierStore";
import { formatCurrency } from "@/lib/utils";
import { X, Plus, Minus, Trash2, Gift, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    currency,
    giftPackaging,
    setGiftPackaging,
  } = useAtelierStore();

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD_INR = 499;
  const GIFT_BOX_PRICE_INR = 99;

  const subtotalINR = cart.reduce(
    (sum, item) => sum + item.product.priceINR * item.quantity,
    0
  );
  const giftBoxTotalINR = giftPackaging ? GIFT_BOX_PRICE_INR : 0;
  const finalTotalINR = subtotalINR + giftBoxTotalINR;

  const progressPercent = Math.min(
    100,
    Math.round((subtotalINR / FREE_SHIPPING_THRESHOLD_INR) * 100)
  );
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD_INR - subtotalINR);

  // Formats WhatsApp order payload
  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const itemList = cart
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name} (Qty: ${item.quantity}) - ₹${
            item.product.priceINR * item.quantity
          }`
      )
      .join("\n");

    const message = encodeURIComponent(
      `*EIRENƎ JEWELS - ATELIER ORDER RESERVATION*\n\n` +
      `Hello Atelier Concierge, I would like to place an order:\n\n` +
      `${itemList}\n\n` +
      `${giftPackaging ? `• Luxury Keepsake Gift Box Included (+₹99)\n` : ""}` +
      `*Total Order Amount: ₹${finalTotalINR}*\n\n` +
      `Please confirm availability and dispatch to:\n` +
      `Name:\n` +
      `Address:\n` +
      `City & Pincode:`
    );

    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  const handleInstagramDM = () => {
    window.open("https://www.instagram.com/eirenejewels_/", "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#121110]/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-[#FAF8F5] h-full overflow-y-auto flex flex-col justify-between shadow-2xl border-l border-[#D4C9BA] animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="p-6 border-b border-[#EAE3D9] flex items-center justify-between sticky top-0 bg-[#FAF8F5]/95 backdrop-blur-xs z-10">
          <div className="flex items-center gap-2">
            <span className="font-hallmark text-xs uppercase tracking-[0.2em] text-[#121110]">
              Atelier Bag ({cart.reduce((s, i) => s + i.quantity, 0)})
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-[#121110] hover:text-[#9E7D4E] transition-colors"
            aria-label="Close Bag Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="p-4 bg-[#F4EFEB] border-b border-[#EAE3D9] text-xs font-sans space-y-2">
          <div className="flex justify-between text-[#121110]">
            <span className="text-[11px] uppercase tracking-wider text-[#68625B]">
              Pan-India Insured Dispatch
            </span>
            <span className="font-medium text-[#9E7D4E]">
              {remainingForFreeShipping === 0
                ? "Complimentary Shipping Unlocked"
                : `Add ${formatCurrency(remainingForFreeShipping, currency)} for Free Shipping`}
            </span>
          </div>
          <div className="w-full h-1 bg-[#D4C9BA] overflow-hidden">
            <div
              className="h-full bg-[#9E7D4E] transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Items List */}
        <div className="p-6 space-y-6 flex-grow overflow-y-auto">
          {cart.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <span className="font-display text-2xl text-[#121110] block">
                Your Bag is Empty
              </span>
              <p className="text-xs text-[#68625B] font-sans max-w-xs mx-auto">
                Explore our vault of anti-tarnish everyday fine jewellery and compose your signature stack.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-2.5 bg-[#121110] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-sans hover:bg-[#9E7D4E] transition-colors"
              >
                Browse The Vault
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-start gap-4 pb-6 border-b border-[#EAE3D9]"
              >
                <div className="relative w-16 h-20 bg-[#EAE3D9] border border-[#D4C9BA] flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>

                <div className="flex-grow space-y-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-serif text-sm text-[#121110] leading-tight">
                      {item.product.name}
                    </h4>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-[#9B948C] hover:text-[#121110] p-0.5"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider text-[#68625B] block font-sans">
                    {item.product.core}
                  </span>

                  <div className="flex items-center justify-between pt-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#D4C9BA] text-xs font-sans">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="px-2 py-0.5 hover:bg-[#EAE3D9] text-[#121110]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 py-0.5 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="px-2 py-0.5 hover:bg-[#EAE3D9] text-[#121110]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-sans text-xs font-semibold text-[#121110]">
                      {formatCurrency(
                        item.product.priceINR * item.quantity,
                        currency
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Luxury Gift Packaging Option */}
          {cart.length > 0 && (
            <div className="p-4 bg-[#F4EFEB] border border-[#D4C9BA] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Gift className="w-4 h-4 text-[#9E7D4E]" />
                <div>
                  <span className="text-xs font-medium text-[#121110] block font-sans">
                    Embossed Keepsake Gift Box
                  </span>
                  <span className="text-[10px] text-[#68625B] block font-sans">
                    Includes suede travel pouch & calligraphy card
                  </span>
                </div>
              </div>

              <button
                onClick={() => setGiftPackaging(!giftPackaging)}
                className={`text-[11px] font-sans px-2.5 py-1 border transition-colors ${
                  giftPackaging
                    ? "bg-[#121110] text-[#FAF8F5] border-[#121110]"
                    : "bg-transparent text-[#121110] border-[#D4C9BA] hover:border-[#121110]"
                }`}
              >
                {giftPackaging ? "Included (+₹99)" : "+ Add (₹99)"}
              </button>
            </div>
          )}
        </div>

        {/* Footer & Actions */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-[#EAE3D9] bg-[#FAF8F5] sticky bottom-0 space-y-4">
            <div className="space-y-1.5 font-sans text-xs">
              <div className="flex justify-between text-[#68625B]">
                <span>Creations Subtotal</span>
                <span>{formatCurrency(subtotalINR, currency)}</span>
              </div>

              {giftPackaging && (
                <div className="flex justify-between text-[#68625B]">
                  <span>Keepsake Packaging</span>
                  <span>{formatCurrency(GIFT_BOX_PRICE_INR, currency)}</span>
                </div>
              )}

              <div className="flex justify-between text-[#68625B]">
                <span>Pan-India Transit</span>
                <span>
                  {remainingForFreeShipping === 0
                    ? "Complimentary"
                    : formatCurrency(60, currency)}
                </span>
              </div>

              <div className="flex justify-between text-base font-semibold text-[#121110] pt-2 border-t border-[#EAE3D9]">
                <span>Total</span>
                <span className="font-serif text-xl">
                  {formatCurrency(finalTotalINR, currency)}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 bg-[#121110] text-[#FAF8F5] text-xs font-sans uppercase tracking-[0.2em] hover:bg-[#9E7D4E] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#C4A47C]" />
                <span>Reserve via WhatsApp Concierge</span>
              </button>

              <button
                onClick={handleInstagramDM}
                className="w-full py-2.5 border border-[#D4C9BA] text-[#121110] text-xs font-sans uppercase tracking-[0.16em] hover:border-[#121110] transition-colors flex items-center justify-center gap-2"
              >
                <span>DM Order to @eirenejewels_</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#68625B] font-sans">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9E7D4E]" />
              <span>Direct studio reservation &bull; Verified order dispatch</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
