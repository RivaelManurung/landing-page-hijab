import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Collection } from "@/components/sections/Collection";
import { Lookbook } from "@/components/sections/Lookbook";
import { Craft } from "@/components/sections/Craft";
import { Faq } from "@/components/sections/Faq";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { PRODUCTS } from "@/lib/content";

// Static structured data — no user input involved.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Nuraya",
      description:
        "Brand hijab premium Indonesia dengan koleksi voal dan silk berkualitas.",
      url: "https://nuraya.example.com",
    },
    {
      "@type": "ItemList",
      name: "Koleksi Pilihan Nuraya",
      itemListElement: PRODUCTS.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          image: `https://nuraya.example.com${product.image}`,
          description: `${product.name} — ${product.fabric}`,
        },
      })),
    },
  ],
} as const;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(JSON_LD),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Collection />
        <Lookbook />
        <Craft />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
