"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="card-luxury group overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-luxury-dark">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <span className="text-xs tracking-widest uppercase text-foreground">
              View Details
            </span>
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2">
          {product.category}
        </span>
        <h3 className="text-lg font-light tracking-wide text-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-luxury-muted line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-5 pt-0">
        <span className="text-xl font-light text-gold">
          ${(product.price / 100).toFixed(2)}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="btn-gold text-sm py-2 px-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
