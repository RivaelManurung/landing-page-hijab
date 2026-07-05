import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Collection } from "@/components/sections/Collection";
import { Craft } from "@/components/sections/Craft";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";

// Static structured data — no user input involved.
const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nuraya",
  description:
    "Brand hijab premium Indonesia dengan koleksi voal dan silk berkualitas.",
  url: "https://nuraya.example.com",
} as const;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORGANIZATION_JSON_LD),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Collection />
        <Craft />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
