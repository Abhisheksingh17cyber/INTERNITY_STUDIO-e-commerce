"use client";

import { useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      {/* Quantity selector */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm text-luxury-muted uppercase tracking-widest">
          Quantity
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 border border-luxury-border rounded flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-sm"
          >
            -
          </button>
          <span className="w-12 text-center text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-8 border border-luxury-border rounded flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-sm"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart button */}
      <button
        onClick={handleAdd}
        disabled={!product.inStock}
        className={`w-full text-center text-sm uppercase tracking-widest py-4 rounded font-semibold transition-all duration-300 ${
          added
            ? "bg-green-700 text-white"
            : "btn-gold"
        } ${!product.inStock ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {added ? "Added to Cart" : product.inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}
