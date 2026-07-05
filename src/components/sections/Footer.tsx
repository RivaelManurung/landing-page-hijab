import { FOOTER_LINKS } from "@/lib/content";
import { WA_GENERAL, MARKETPLACES } from "@/lib/shop";

const CURRENT_YEAR = 2026;

const SHOP_LINKS = [
  { label: "Pesan via WhatsApp", href: WA_GENERAL },
  { label: "Shopee Official", href: MARKETPLACES.shopee },
  { label: "Tokopedia Official", href: MARKETPLACES.tokopedia },
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <p className="footer__brand">
              Nur<em>aya</em>
            </p>
            <p className="footer__tagline">
              Hijab premium dengan jatuh kain anggun dan warna timeless —
              dibuat dengan penuh perhatian di Indonesia.
            </p>
          </div>
          <nav aria-label="Tautan belanja">
            <h3>Belanja</h3>
            <ul>
              {FOOTER_LINKS.belanja.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Hubungi dan pesan">
            <h3>Hubungi & Pesan</h3>
            <ul>
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer__base">
          <span>© {CURRENT_YEAR} Nuraya. Semua hak dilindungi.</span>
          <span>Dibuat dengan ♥ di Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
