"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/content";
import { WA_GENERAL } from "@/lib/shop";

const SOLID_THRESHOLD_PX = 24;

export function Navbar() {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSolid(window.scrollY > SOLID_THRESHOLD_PX);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav${isSolid ? " nav--solid" : ""}`}>
      <div className="container nav__inner">
        <a href="#" className="nav__brand" aria-label="Nuraya — beranda">
          Nur<em>aya</em>
        </a>
        <nav aria-label="Navigasi utama">
          <ul className="nav__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="nav__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="nav__cta"
          href={WA_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Belanja via WA
        </a>
      </div>
    </header>
  );
}
