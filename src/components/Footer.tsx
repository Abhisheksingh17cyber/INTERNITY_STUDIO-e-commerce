"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-luxury-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <AnimateOnScroll animation="fade-in">
            <div>
              <h3 className="text-gold tracking-[0.3em] font-light text-lg mb-4">
                INTERNITY VODKA
              </h3>
              <p className="text-luxury-muted text-sm leading-relaxed">
                Where precision meets purity. Crafted for those who appreciate the
                extraordinary in every moment.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Links */}
          <AnimateOnScroll animation="slide-up" delay={0.1}>
            <div>
              <h4 className="text-sm tracking-widest uppercase text-foreground mb-4">
                Explore
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-luxury-muted hover:text-gold text-sm transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-luxury-muted hover:text-gold text-sm transition-colors duration-300"
                  >
                    Collection
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="text-luxury-muted hover:text-gold text-sm transition-colors duration-300"
                  >
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Legal */}
          <AnimateOnScroll animation="slide-up" delay={0.2}>
            <div>
              <h4 className="text-sm tracking-widest uppercase text-foreground mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                <li className="text-luxury-muted text-sm">Must be 21+ to purchase</li>
                <li className="text-luxury-muted text-sm">Drink Responsibly</li>
                <li className="text-luxury-muted text-sm">Terms &amp; Conditions</li>
                <li className="text-luxury-muted text-sm">Privacy Policy</li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fade-in" delay={0.3}>
          <div className="w-full h-px bg-luxury-border my-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-luxury-muted gap-2">
            <span>&copy; 2026 INTERNITY VODKA. All rights reserved.</span>
            <span>Crafted with precision.</span>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}
