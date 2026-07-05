/**
 * Central place for all "buy" destinations so every CTA points to one source
 * of truth. The WhatsApp number is public info (it is printed on the site),
 * so exposing it via a NEXT_PUBLIC_* env var is intentional.
 */

// Indonesian number in international format WITHOUT the leading "+" or "0".
// Example: 6281234567890 for +62 812-3456-7890.
const WA_NUMBER = (process.env.NEXT_PUBLIC_WA_NUMBER ?? "6281234567890").replace(
  /[^0-9]/g,
  "",
);

// Optional marketplace storefronts. Empty string hides the link.
export const MARKETPLACES = {
  shopee: process.env.NEXT_PUBLIC_SHOPEE_URL ?? "https://shopee.co.id/",
  tokopedia:
    process.env.NEXT_PUBLIC_TOKOPEDIA_URL ?? "https://www.tokopedia.com/",
} as const;

/**
 * Build a wa.me deep link with a pre-filled message.
 * `wa.me` works on both mobile app and WhatsApp Web.
 */
export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Generic "I want to shop" entry point (navbar, hero, footer). */
export const WA_GENERAL = waLink(
  "Halo Nuraya! Saya tertarik dengan koleksi hijabnya. Boleh minta info lengkapnya?",
);

/** Product-specific enquiry with name, fabric, and price pre-filled. */
export function waProduct(product: {
  name: string;
  fabric: string;
  price: string;
}): string {
  return waLink(
    `Halo Nuraya! Saya mau tanya ketersediaan *${product.name}* ` +
      `(${product.fabric}) — ${product.price}. Apakah masih ready?`,
  );
}
