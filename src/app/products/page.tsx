"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { getProductsByCategory } from "@/data/products";

const categories = [
  { value: "all", label: "All" },
  { value: "polar", label: "Polar Ice" },
  { value: "premium", label: "Premium" },
  { value: "classic", label: "Classic" },
  { value: "elyx", label: "Elyx Reserve" },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProducts = getProductsByCategory(activeCategory);

  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-16 px-6 bg-gradient-to-b from-luxury-dark to-luxury-black">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-in">
            <p className="text-sm text-luxury-muted mb-4">
              <a href="/" className="hover:text-gold transition-colors">Home</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">Collection</span>
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="slide-up" delay={0.1}>
            <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">
              The Collection
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="slide-up" delay={0.2}>
            <h1 className="text-4xl font-light tracking-wide">
              Our Complete Range
            </h1>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Filters + Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <AnimateOnScroll animation="slide-down">
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 text-xs tracking-widest uppercase rounded-full border transition-all duration-300 hover:scale-105 ${
                  activeCategory === cat.value
                    ? "bg-gold text-luxury-black border-gold shadow-lg shadow-gold/20"
                    : "border-luxury-border text-luxury-muted hover:border-gold hover:text-gold"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <AnimateOnScroll key={product.id} animation="slide-up" delay={0.08 * index}>
                <ProductCard product={product} />
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <AnimateOnScroll animation="fade-in">
            <div className="text-center py-24">
              <p className="text-xl font-light mb-4">No products found</p>
              <p className="text-luxury-muted">
                Try selecting a different category.
              </p>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </>
  );
}
