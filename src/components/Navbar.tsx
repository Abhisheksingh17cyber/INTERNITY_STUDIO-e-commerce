"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-luxury-black/90 backdrop-blur-md border-b border-luxury-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-light tracking-[0.3em] bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent">
            INTERNITY
          </span>
          <span className="text-[10px] tracking-[0.5em] text-luxury-muted">
            VODKA
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm tracking-widest uppercase text-luxury-muted hover:text-gold transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm tracking-widest uppercase text-luxury-muted hover:text-gold transition-colors"
          >
            Collection
          </Link>
        </div>

        {/* Cart + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-foreground group-hover:text-gold transition-colors"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-luxury-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-luxury-black/95 backdrop-blur-md border-t border-luxury-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-luxury-muted hover:text-gold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-luxury-muted hover:text-gold transition-colors"
            >
              Collection
            </Link>
            <Link
              href="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-luxury-muted hover:text-gold transition-colors"
            >
              Cart ({totalItems})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
