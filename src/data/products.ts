import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "internity-polar",
    name: "INTERNITY Polar Ice",
    description: "Crystal clear purity inspired by arctic glaciers. Exceptionally smooth with a clean finish.",
    longDescription:
      "INTERNITY Polar Ice captures the essence of pristine arctic landscapes. Crafted from the finest winter wheat and filtered through layers of natural ice-formed minerals, this vodka delivers a remarkably clean and crisp palate. Six times distilled for absolute purity, with subtle notes of fresh citrus and a silky, refreshing finish. Best served chilled, neat, or with a twist of lemon over ice.",
    price: 3999,
    image: "/images/internity-polar.png",
    category: "polar",
    volume: "750ml",
    abv: "40%",
    inStock: true,
  },
  {
    id: "internity-premium",
    name: "INTERNITY Premium",
    description: "Elevated craftsmanship for the discerning palate. A masterpiece of French distillation.",
    longDescription:
      "INTERNITY Premium represents the pinnacle of vodka artistry. Inspired by the world's finest distillation traditions, this spirit is crafted from select French wheat and naturally filtered spring water. Eight times distilled in copper pot stills, it delivers an extraordinarily smooth body with delicate floral aromatics, hints of almond, and a long, elegant finish. Presented in a signature frosted bottle that captures the essence of luxury.",
    price: 5999,
    image: "/images/internity-premium.png",
    category: "premium",
    volume: "750ml",
    abv: "40%",
    inStock: true,
  },
  {
    id: "internity-classic",
    name: "INTERNITY Classic",
    description: "The timeless expression. Pure heritage distilled into every drop.",
    longDescription:
      "INTERNITY Classic is where tradition meets perfection. Drawing from generations of master distillers' expertise, this vodka undergoes a meticulous seven-stage distillation process using heritage grain varieties. Filtered through natural limestone for exceptional clarity, it offers a beautifully balanced palate with notes of subtle sweetness, white pepper, and a whisper of vanilla. The definitive expression of our craft.",
    price: 4999,
    image: "/images/internity-classic.png",
    category: "classic",
    volume: "750ml",
    abv: "40%",
    inStock: true,
  },
  {
    id: "internity-elyx",
    name: "INTERNITY Elyx Reserve",
    description: "The crown jewel. Handcrafted in small batches using copper column distillation.",
    longDescription:
      "INTERNITY Elyx Reserve is our most exclusive offering — a single-estate, copper-crafted luxury vodka of unparalleled character. Distilled in a vintage copper column still from 1921, each batch is personally overseen by our master distiller. The result is a vodka of extraordinary richness and depth, with notes of macadamia, fresh bread, and a silken, full-bodied finish. Presented in a stunning hammered copper vessel, it is as much a work of art as it is a spirit. Limited production of 2,000 bottles per year.",
    price: 9999,
    image: "/images/internity-elyx.png",
    category: "elyx",
    volume: "750ml",
    abv: "42.3%",
    inStock: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
};
