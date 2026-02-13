import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">
          The Collection
        </p>
        <h2 className="text-3xl font-light tracking-wide mb-4">
          Exceptional spirits for exceptional moments
        </h2>
        <div className="w-16 h-px bg-gold mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section id="story" className="bg-luxury-dark py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-luxury-card">
            <Image
              src="/images/internity-elyx.png"
              alt="INTERNITY Elyx Reserve"
              fill
              className="object-contain p-8"
            />
            <div className="absolute inset-4 border border-gold/20 rounded-lg pointer-events-none" />
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">
              Our Story
            </p>
            <h2 className="text-3xl font-light tracking-wide mb-6">
              Born from an obsession with perfection
            </h2>
            <p className="text-luxury-muted leading-relaxed mb-4">
              INTERNITY VODKA was founded on a singular belief: that the pursuit
              of perfection is not a destination, but a journey. Every bottle we
              produce is a testament to this philosophy — from the careful
              selection of the finest grains to the precision of our
              multi-stage distillation process.
            </p>
            <p className="text-luxury-muted leading-relaxed mb-8">
              Our master distillers combine centuries-old techniques with modern
              innovation, creating spirits that transcend the ordinary. Each
              expression in our collection tells a unique story, united by an
              unwavering commitment to excellence.
            </p>
            <div className="w-16 h-px bg-gold mb-8" />
            <div className="flex gap-12">
              <div>
                <p className="text-2xl text-gold font-light">6x</p>
                <p className="text-[10px] text-luxury-muted uppercase tracking-widest mt-1">
                  Distilled
                </p>
              </div>
              <div>
                <p className="text-2xl text-gold font-light">&lt; 2,000</p>
                <p className="text-[10px] text-luxury-muted uppercase tracking-widest mt-1">
                  Bottles
                </p>
              </div>
              <div>
                <p className="text-2xl text-gold font-light">100%</p>
                <p className="text-[10px] text-luxury-muted uppercase tracking-widest mt-1">
                  Natural
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light tracking-[0.15em] mb-6">
            EXPERIENCE INTERNITY
          </h2>
          <p className="text-luxury-muted leading-relaxed mb-8 max-w-2xl mx-auto">
            Discover our complete range of premium spirits. Each bottle is a
            masterpiece of craft and precision, waiting to elevate your most
            memorable moments.
          </p>
          <a
            href="/products"
            className="btn-gold text-sm uppercase tracking-widest inline-block"
          >
            Shop the Collection
          </a>
        </div>
      </section>
    </>
  );
}
