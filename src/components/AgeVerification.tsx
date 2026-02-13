"use client";

import { useState, useEffect } from "react";

const AGE_VERIFIED_KEY = "internity-age-verified";

export default function AgeVerification() {
  const [showModal, setShowModal] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem(AGE_VERIFIED_KEY);
    if (!verified) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
      setTimeout(() => setAnimateIn(true), 50);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem(AGE_VERIFIED_KEY, "true");
    setAnimateOut(true);
    setTimeout(() => {
      setShowModal(false);
      document.body.style.overflow = "auto";
    }, 500);
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com";
  };

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${
        animateOut ? "opacity-0" : animateIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-luxury-card border border-luxury-border p-10 rounded-lg max-w-md w-full mx-4 text-center transition-all duration-700 ${
          animateOut
            ? "opacity-0 scale-95 translate-y-4"
            : animateIn
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        <h1
          className={`text-2xl tracking-[0.3em] font-light bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent mb-4 transition-all duration-700 delay-200 ${
            animateIn && !animateOut ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          INTERNITY VODKA
        </h1>
        <div
          className={`h-px bg-gold mx-auto mb-6 transition-all duration-700 delay-300 ${
            animateIn && !animateOut ? "w-16" : "w-0"
          }`}
        />
        <p
          className={`text-foreground text-lg font-light mb-2 transition-all duration-500 delay-[400ms] ${
            animateIn && !animateOut ? "opacity-100" : "opacity-0"
          }`}
        >
          Are you of legal drinking age?
        </p>
        <p
          className={`text-luxury-muted text-sm mb-8 transition-all duration-500 delay-500 ${
            animateIn && !animateOut ? "opacity-100" : "opacity-0"
          }`}
        >
          You must be 21 years or older to enter this site.
        </p>
        <div
          className={`flex gap-4 justify-center transition-all duration-500 delay-[600ms] ${
            animateIn && !animateOut ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <button onClick={handleConfirm} className="btn-gold text-sm uppercase tracking-widest">
            Yes, I am 21+
          </button>
          <button onClick={handleDeny} className="btn-outline-gold text-sm uppercase tracking-widest">
            No
          </button>
        </div>
        <p
          className={`text-luxury-muted text-xs mt-6 transition-all duration-500 delay-700 ${
            animateIn && !animateOut ? "opacity-100" : "opacity-0"
          }`}
        >
          Please drink responsibly.
        </p>
      </div>
    </div>
  );
}
