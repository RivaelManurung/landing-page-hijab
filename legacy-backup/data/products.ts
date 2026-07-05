export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  category: "all" | "pashmina" | "chiffon" | "sport";
  priceIDR: number;
  priceUSD: number;
  image: string;
  badge?: string;
  badgeType?: "gold" | "rose" | "sage";
  colors: ProductColor[];
  description: string;
  breathability: number;
  drape: number;
  opacity: number;
  rating: number;
  reviewsCount: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "pashmina-rose-silk",
    name: "Royal Pashmina Silk — Rose Gold",
    category: "pashmina",
    priceIDR: 149000,
    priceUSD: 10,
    image: "/images/pashmina.jpg",
    badge: "Best Seller",
    badgeType: "gold",
    colors: [
      { name: "Rose Gold", hex: "#D8B4A0" },
      { name: "Pastel Pink", hex: "#F3C8D2" },
      { name: "Ivory Cream", hex: "#F7F2E8" },
      { name: "Mocca Taupe", hex: "#A88B7D" },
    ],
    description: "Pashmina sutra eksklusif dengan kilau mewah yang elegan namun tidak licin. Sangat lembut di kulit, anti kusut, dan memberikan efek drape yang anggun untuk acara spesial maupun harian.",
    breathability: 92,
    drape: 98,
    opacity: 95,
    rating: 4.9,
    reviewsCount: 1420,
  },
  {
    id: "instant-chiffon-sage",
    name: "Instant Chiffon Ceruty — Sage Olive",
    category: "chiffon",
    priceIDR: 129000,
    priceUSD: 8.5,
    image: "/images/chiffon.jpg",
    badge: "New Arrival",
    badgeType: "sage",
    colors: [
      { name: "Sage Olive", hex: "#8A9A86" },
      { name: "Earthy Sand", hex: "#D4C5B9" },
      { name: "Terracotta", hex: "#C86D51" },
      { name: "Midnight Black", hex: "#1A1817" },
    ],
    description: "Hijab instan berbahan Ceruty Babydoll impor yang super flowy dan langsung tegak sempurna di dahi tanpa perlu jarum pentul berlebih. Ringan dan sejuk untuk mobilitas tinggi.",
    breathability: 96,
    drape: 94,
    opacity: 90,
    rating: 4.8,
    reviewsCount: 850,
  },
  {
    id: "active-sport-cool",
    name: "Active Cool-Tech Sport Hijab",
    category: "sport",
    priceIDR: 119000,
    priceUSD: 8,
    image: "/images/sport.jpg",
    badge: "Anti-UV 50+",
    badgeType: "rose",
    colors: [
      { name: "Midnight Black", hex: "#1A1817" },
      { name: "Navy Blue", hex: "#1E293B" },
      { name: "Charcoal Grey", hex: "#475569" },
      { name: "Mauve Pink", hex: "#C08497" },
    ],
    description: "Hijab olahraga performa tinggi dengan teknologi Cool-Tech moisture-wicking yang menyerap keringat 3x lebih cepat. Anti-bakteri, anti-bau, dan dilengkapi perlindungan UV 50+ untuk lari, gym, atau tenis.",
    breathability: 100,
    drape: 88,
    opacity: 98,
    rating: 5.0,
    reviewsCount: 630,
  },
  {
    id: "pashmina-silk-cream",
    name: "Aura Silk Pashmina — Vanilla Cream",
    category: "pashmina",
    priceIDR: 149000,
    priceUSD: 10,
    image: "/images/hero.jpg",
    badge: "Limited Edition",
    badgeType: "gold",
    colors: [
      { name: "Vanilla Cream", hex: "#FAF0E6" },
      { name: "Golden Pearl", hex: "#DFCA9B" },
      { name: "Emerald Luxe", hex: "#1A4D2E" },
      { name: "Burgundy Wine", hex: "#581845" },
    ],
    description: "Edisi terbatas dengan tekstur satin sutra halus yang memantulkan cahaya secara natural. Memberikan kesan wajah lebih cerah dan berkelas seketika.",
    breathability: 90,
    drape: 99,
    opacity: 96,
    rating: 4.9,
    reviewsCount: 510,
  },
];
