"use client";

import Link from "next/link";
import CartItemComponent from "@/components/CartItem";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, totalPrice, totalItems, clearCart } = useCart();

  return (
    <div className="pt-28 pb-16 max-w-7xl mx-auto px-6">
      <AnimateOnScroll animation="fade-in">
        <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">
          Your Cart
        </p>
      </AnimateOnScroll>
      <AnimateOnScroll animation="slide-up" delay={0.1}>
        <h1 className="text-4xl font-light tracking-wide mb-2">Shopping Cart</h1>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-in" delay={0.2}>
        <p className="text-luxury-muted text-sm mb-8">
          {totalItems} item{totalItems !== 1 ? "s" : ""}
        </p>
      </AnimateOnScroll>

      {items.length === 0 ? (
        <AnimateOnScroll animation="scale-in">
          <div className="text-center py-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              className="w-16 h-16 text-luxury-border mx-auto mb-6 animate-float"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <p className="text-xl font-light mb-4">Your cart is empty</p>
            <p className="text-luxury-muted mb-8">
              Discover our exceptional collection
            </p>
            <Link href="/products" className="btn-gold text-sm uppercase tracking-widest">
              Explore Collection
            </Link>
          </div>
        </AnimateOnScroll>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <AnimateOnScroll animation="fade-in">
              <div className="flex justify-end mb-4">
                <button
                  onClick={clearCart}
                  className="text-xs text-luxury-muted hover:text-red-400 uppercase tracking-widest transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </AnimateOnScroll>
            {items.map((item, index) => (
              <AnimateOnScroll key={item.product.id} animation="slide-left" delay={0.1 * index}>
                <CartItemComponent item={item} />
              </AnimateOnScroll>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <AnimateOnScroll animation="slide-left" delay={0.2}>
              <div className="bg-luxury-card border border-luxury-border rounded-lg p-6 sticky top-28 transition-all duration-300 hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5">
                <h2 className="text-xs tracking-[0.3em] text-gold uppercase mb-6">
                  Order Summary
                </h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm text-luxury-muted">
                    <span>Subtotal</span>
                    <span>${(totalPrice / 100).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-luxury-muted">
                    <span>Shipping</span>
                    <span className="text-gold">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-sm text-luxury-muted">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                <div className="w-full h-px bg-luxury-border my-4" />
                <div className="flex justify-between text-lg mb-6">
                  <span>Total</span>
                  <span className="text-gold">
                    ${(totalPrice / 100).toFixed(2)}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  className="btn-gold w-full text-center block text-sm uppercase tracking-widest animate-pulse-gold"
                >
                  Proceed to Checkout
                </Link>
                <div className="text-center mt-4">
                  <Link
                    href="/products"
                    className="text-sm text-luxury-muted hover:text-gold transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      )}
    </div>
  );
}
