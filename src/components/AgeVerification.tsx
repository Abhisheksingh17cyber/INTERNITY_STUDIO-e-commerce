"use client";

import { useState, useEffect } from "react";

const AGE_VERIFIED_KEY = "internity-age-verified";

export default function AgeVerification() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem(AGE_VERIFIED_KEY);
    if (!verified) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem(AGE_VERIFIED_KEY, "true");
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com";
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-luxury-card border border-luxury-border p-10 rounded-lg max-w-md w-full mx-4 text-center">
        <h1 className="text-2xl tracking-[0.3em] font-light bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent mb-4">
          INTERNITY VODKA
        </h1>
        <div className="w-16 h-px bg-gold mx-auto mb-6" />
        <p className="text-foreground text-lg font-light mb-2">
          Are you of legal drinking age?
        </p>
        <p className="text-luxury-muted text-sm mb-8">
          You must be 21 years or older to enter this site.
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={handleConfirm} className="btn-gold text-sm uppercase tracking-widest">
            Yes, I am 21+
          </button>
          <button onClick={handleDeny} className="btn-outline-gold text-sm uppercase tracking-widest">
            No
          </button>
        </div>
        <p className="text-luxury-muted text-xs mt-6">
          Please drink responsibly.
        </p>
      </div>
    </div>
  );
}
