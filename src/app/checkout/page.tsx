"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ShippingInfo } from "@/types";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  useEffect(() => {
    if (items.length === 0 && !isProcessing) {
      router.push("/cart");
    }
  }, [items.length, isProcessing, router]);

  const handleChange = (field: keyof ShippingInfo, value: string) => {
    setShippingInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const orderId = `INT-${Date.now().toString(36).toUpperCase()}`;

    sessionStorage.setItem(
      "internity-last-order",
      JSON.stringify({
        id: orderId,
        items: items,
        shipping: shippingInfo,
        totalPrice: totalPrice,
        date: new Date().toISOString(),
      })
    );

    clearCart();
    router.push("/order-confirmation");
  };

  if (items.length === 0 && !isProcessing) return null;

  const inputClass =
    "w-full bg-luxury-black border border-luxury-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors";
  const labelClass =
    "block text-xs text-luxury-muted uppercase tracking-widest mb-2";

  return (
    <div className="pt-28 pb-16 max-w-7xl mx-auto px-6">
      <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">
        Checkout
      </p>
      <h1 className="text-4xl font-light tracking-wide mb-8">
        Complete Your Order
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Shipping Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-luxury-card border border-luxury-border rounded-lg p-8">
              <h2 className="text-xs tracking-[0.3em] text-gold uppercase mb-6">
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    required
                    value={shippingInfo.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Address</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>City</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>State</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>ZIP Code</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.zipCode}
                    onChange={(e) => handleChange("zipCode", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Country</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Mock Payment */}
            <div className="bg-luxury-card border border-luxury-border rounded-lg p-8">
              <h2 className="text-xs tracking-[0.3em] text-gold uppercase mb-6">
                Payment
              </h2>
              <p className="text-luxury-muted text-sm mb-4">
                This is a demo store. No real payment will be processed.
              </p>
              <div className="bg-luxury-black border border-luxury-border rounded p-4 space-y-4">
                <div>
                  <label className={labelClass}>Card Number</label>
                  <input
                    type="text"
                    disabled
                    value="**** **** **** 4242"
                    className={`${inputClass} opacity-50 cursor-not-allowed`}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Expiry</label>
                    <input
                      type="text"
                      disabled
                      value="12/28"
                      className={`${inputClass} opacity-50 cursor-not-allowed`}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>CVV</label>
                    <input
                      type="text"
                      disabled
                      value="***"
                      className={`${inputClass} opacity-50 cursor-not-allowed`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Review */}
          <div className="lg:col-span-1">
            <div className="bg-luxury-card border border-luxury-border rounded-lg p-6 sticky top-28">
              <h2 className="text-xs tracking-[0.3em] text-gold uppercase mb-6">
                Order Review
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="relative w-12 h-12 bg-luxury-dark rounded flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm truncate">{item.product.name}</p>
                      <p className="text-xs text-luxury-muted">
                        x{item.quantity}
                      </p>
                    </div>
                    <p className="text-sm text-gold flex-shrink-0">
                      ${((item.product.price * item.quantity) / 100).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="w-full h-px bg-luxury-border my-4" />

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm text-luxury-muted">
                  <span>Subtotal</span>
                  <span>${(totalPrice / 100).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-luxury-muted">
                  <span>Shipping</span>
                  <span className="text-gold">Free</span>
                </div>
              </div>

              <div className="w-full h-px bg-luxury-border my-4" />

              <div className="flex justify-between text-lg mb-6">
                <span>Total</span>
                <span className="text-gold">
                  ${(totalPrice / 100).toFixed(2)}
                </span>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full text-center text-sm uppercase tracking-widest py-4 rounded font-semibold transition-all duration-300 ${
                  isProcessing
                    ? "bg-luxury-border text-luxury-muted cursor-wait"
                    : "btn-gold"
                }`}
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
