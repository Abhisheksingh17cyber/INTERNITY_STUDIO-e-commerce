"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
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
          <p className="text-sm text-luxury-muted mb-4">
            <a href="/" className="hover:text-gold transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-foreground">Collection</span>
          </p>
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">
            The Collection
          </p>
          <h1 className="text-4xl font-light tracking-wide">
            Our Complete Range
          </h1>
        </div>
      </div>

      {/* Filters + Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 text-xs tracking-widest uppercase rounded-full border transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-gold text-luxury-black border-gold"
                  : "border-luxury-border text-luxury-muted hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-xl font-light mb-4">No products found</p>
            <p className="text-luxury-muted">
              Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
