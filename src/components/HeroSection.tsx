"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/internity-polar.png"
      >
        <source src="/video/internity-brand.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/50 via-luxury-black/20 to-luxury-black" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-6 animate-fade-in">
          Crafted for the Extraordinary
        </p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight tracking-[0.2em] mb-2 animate-fade-in">
          INTERNITY
        </h1>
        <p className="text-lg sm:text-xl tracking-[0.5em] font-light text-luxury-muted mb-10 animate-fade-in">
          VODKA
        </p>
        <div className="w-24 h-px bg-gold mb-10" />
        <p className="text-lg sm:text-xl font-light text-foreground/80 mb-12 max-w-lg animate-slide-up">
          Where precision meets purity
        </p>
        <div className="flex gap-4 animate-slide-up flex-col sm:flex-row">
          <Link href="/products" className="btn-gold text-sm uppercase tracking-widest">
            Explore Collection
          </Link>
          <Link href="#story" className="btn-outline-gold text-sm uppercase tracking-widest">
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 text-gold/50"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
