"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Order } from "@/types";

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("internity-last-order");
    if (stored) {
      setOrder(JSON.parse(stored));
      sessionStorage.removeItem("internity-last-order");
    }
  }, []);

  if (!order) {
    return (
      <div className="pt-28 pb-16 max-w-3xl mx-auto px-6 text-center">
        <p className="text-xl font-light mb-4">No order found</p>
        <p className="text-luxury-muted mb-8">
          It looks like you haven&apos;t placed an order yet.
        </p>
        <Link href="/products" className="btn-gold text-sm uppercase tracking-widest">
          Browse Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16 max-w-3xl mx-auto px-6 text-center">
      {/* Success icon */}
      <div className="w-20 h-20 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-gold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </div>

      <p className="text-xs tracking-[0.5em] text-gold uppercase mb-4 animate-fade-in">
        Thank You
      </p>
      <h1 className="text-3xl font-light tracking-wide mb-4 animate-slide-up">
        Your order has been placed
      </h1>
      <p className="text-luxury-muted mb-8 animate-slide-up">
        Order #{order.id}
      </p>

      {/* Order details */}
      <div className="bg-luxury-card border border-luxury-border rounded-lg p-8 text-left mb-8 animate-slide-up">
        <h2 className="text-xs tracking-[0.3em] text-gold uppercase mb-6">
          Order Details
        </h2>

        {order.items.map((item) => (
          <div
            key={item.product.id}
            className="flex justify-between py-3 border-b border-luxury-border"
          >
            <span className="text-sm">
              {item.product.name} x{item.quantity}
            </span>
            <span className="text-sm text-gold">
              ${((item.product.price * item.quantity) / 100).toFixed(2)}
            </span>
          </div>
        ))}

        <div className="flex justify-between text-lg mt-4">
          <span>Total</span>
          <span className="text-gold">
            ${(order.totalPrice / 100).toFixed(2)}
          </span>
        </div>

        <div className="w-full h-px bg-luxury-border my-6" />

        <h3 className="text-xs tracking-[0.3em] text-gold uppercase mb-3">
          Shipping To
        </h3>
        <p className="text-sm text-luxury-muted">
          {order.shipping.firstName} {order.shipping.lastName}
        </p>
        <p className="text-sm text-luxury-muted">{order.shipping.address}</p>
        <p className="text-sm text-luxury-muted">
          {order.shipping.city}, {order.shipping.state} {order.shipping.zipCode}
        </p>
        <p className="text-sm text-luxury-muted">{order.shipping.country}</p>
      </div>

      {/* CTAs */}
      <div className="flex gap-4 justify-center animate-slide-up">
        <Link href="/products" className="btn-gold text-sm uppercase tracking-widest">
          Continue Shopping
        </Link>
        <Link href="/" className="btn-outline-gold text-sm uppercase tracking-widest">
          Back to Home
        </Link>
      </div>

      <p className="text-xs text-luxury-muted mt-12">
        This is a demo store. No real order has been placed and no payment was
        processed.
      </p>
    </div>
  );
}
