import { FOOTER_LINKS } from "@/lib/content";

const CURRENT_YEAR = 2026;

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
          <nav aria-label="Tautan bantuan">
            <h3>Bantuan</h3>
            <ul>
              {FOOTER_LINKS.bantuan.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
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
