import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/data/products";
import AddToCartButton from "./AddToCartButton";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-28 pb-16 max-w-7xl mx-auto px-6">
      {/* Breadcrumb */}
      <p className="text-sm text-luxury-muted mb-8">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-gold transition-colors">
          Collection
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image */}
        <div className="relative aspect-square bg-luxury-dark rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-12"
            priority
          />
          <div className="absolute inset-4 border border-gold/10 rounded-lg pointer-events-none" />
        </div>

        {/* Details */}
        <div>
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-2">
            {product.category}
          </p>
          <h1 className="text-4xl font-light tracking-wide mb-4">
            {product.name}
          </h1>
          <p className="text-3xl text-gold font-light mb-6">
            ${(product.price / 100).toFixed(2)}
          </p>
          <div className="w-16 h-px bg-luxury-border mb-6" />
          <p className="text-luxury-muted leading-relaxed mb-8">
            {product.longDescription}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-luxury-card border border-luxury-border rounded-lg p-4 text-center">
              <p className="text-[10px] uppercase tracking-widest text-luxury-muted mb-1">
                Volume
              </p>
              <p className="text-lg text-foreground font-light">
                {product.volume}
              </p>
            </div>
            <div className="bg-luxury-card border border-luxury-border rounded-lg p-4 text-center">
              <p className="text-[10px] uppercase tracking-widest text-luxury-muted mb-1">
                ABV
              </p>
              <p className="text-lg text-foreground font-light">
                {product.abv}
              </p>
            </div>
            <div className="bg-luxury-card border border-luxury-border rounded-lg p-4 text-center">
              <p className="text-[10px] uppercase tracking-widest text-luxury-muted mb-1">
                Category
              </p>
              <p className="text-lg text-foreground font-light capitalize">
                {product.category}
              </p>
            </div>
          </div>

          <AddToCartButton product={product} />

          {/* Trust badges */}
          <div className="flex gap-6 mt-8 text-xs text-luxury-muted">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              Free Shipping
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              Secure Packaging
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
              Gift Ready
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
