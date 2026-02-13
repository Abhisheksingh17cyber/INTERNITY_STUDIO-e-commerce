"use client";

import Image from "next/image";
import Link from "next/link";
import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItemComponent({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex flex-col sm:flex-row gap-6 p-4 border-b border-luxury-border">
      {/* Image */}
      <Link
        href={`/products/${item.product.id}`}
        className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-luxury-dark rounded overflow-hidden"
      >
        <Image
          fill
          src={item.product.image}
          alt={item.product.name}
          className="object-contain p-2"
        />
      </Link>

      {/* Details */}
      <div className="flex-grow">
        <Link href={`/products/${item.product.id}`}>
          <h3 className="text-lg font-light tracking-wide hover:text-gold transition-colors">
            {item.product.name}
          </h3>
        </Link>
        <p className="text-xs text-gold uppercase tracking-widest mt-1">
          {item.product.category}
        </p>
        <p className="text-sm text-luxury-muted mt-1">{item.product.volume}</p>

        {/* Quantity controls */}
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() =>
              updateQuantity(item.product.id, item.quantity - 1)
            }
            className="w-8 h-8 border border-luxury-border rounded flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-sm"
          >
            -
          </button>
          <span className="w-12 text-center text-sm">{item.quantity}</span>
          <button
            onClick={() =>
              updateQuantity(item.product.id, item.quantity + 1)
            }
            className="w-8 h-8 border border-luxury-border rounded flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-sm"
          >
            +
          </button>
        </div>
      </div>

      {/* Price + Remove */}
      <div className="flex flex-col items-end justify-between">
        <span className="text-lg text-gold font-light">
          ${((item.product.price * item.quantity) / 100).toFixed(2)}
        </span>
        <button
          onClick={() => removeFromCart(item.product.id)}
          className="text-xs text-luxury-muted hover:text-red-400 uppercase tracking-widest mt-2 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
