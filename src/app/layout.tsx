import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import "@/styles/sections.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://nuraya.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nuraya — Hijab Premium untuk Setiap Langkahmu",
  description:
    "Koleksi hijab voal dan silk premium dengan jahitan rapi, warna timeless, dan kenyamanan sepanjang hari. Dibuat dengan penuh perhatian di Indonesia.",
  openGraph: {
    title: "Nuraya — Hijab Premium",
    description:
      "Koleksi hijab voal dan silk premium. Anggun, ringan, dan nyaman sepanjang hari.",
    url: SITE_URL,
    siteName: "Nuraya",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuraya — Hijab Premium",
    description:
      "Koleksi hijab voal dan silk premium. Anggun, ringan, dan nyaman sepanjang hari.",
  },
};

/**
 * Stamps html[data-motion] before first paint so CSS only hides
 * GSAP reveal targets when JS is actually running (see globals.css).
 * Static string — no user input involved.
 */
const MOTION_FLAG_SCRIPT = "document.documentElement.dataset.motion=''";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${jost.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: MOTION_FLAG_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
