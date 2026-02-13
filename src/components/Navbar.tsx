"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-luxury-black/90 backdrop-blur-md border-b border-luxury-border shadow-lg shadow-black/20"
          : "bg-transparent"
      } ${mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex flex-col group">
          <span className="text-xl font-light tracking-[0.3em] bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent transition-all duration-300 group-hover:from-gold-light group-hover:via-gold group-hover:to-gold-dark">
            INTERNITY
          </span>
          <span className="text-[10px] tracking-[0.5em] text-luxury-muted transition-colors duration-300 group-hover:text-gold">
            VODKA
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm tracking-widest uppercase text-luxury-muted hover:text-gold transition-all duration-300 hover:tracking-[0.2em]"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm tracking-widest uppercase text-luxury-muted hover:text-gold transition-all duration-300 hover:tracking-[0.2em]"
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
              className="w-6 h-6 text-foreground group-hover:text-gold transition-all duration-300 group-hover:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-luxury-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold animate-scale-in">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 transition-transform duration-300"
              style={{ transform: mobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
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
      <div
        className={`md:hidden bg-luxury-black/95 backdrop-blur-md border-t border-luxury-border overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-sm tracking-widest uppercase text-luxury-muted hover:text-gold transition-all duration-300 ${
              mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "100ms" : "0ms" }}
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-sm tracking-widest uppercase text-luxury-muted hover:text-gold transition-all duration-300 ${
              mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "200ms" : "0ms" }}
          >
            Collection
          </Link>
          <Link
            href="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-sm tracking-widest uppercase text-luxury-muted hover:text-gold transition-all duration-300 ${
              mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "300ms" : "0ms" }}
          >
            Cart ({totalItems})
          </Link>
        </div>
      </div>
    </nav>
  );
}
