"use client";

import { useEffect, useState } from "react";
import { WA_GENERAL } from "@/lib/shop";

const SHOW_AFTER_PX = 600;

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > SHOW_AFTER_PX);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      className={`wa-fab${isVisible ? " wa-fab--visible" : ""}`}
      href={WA_GENERAL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat pemesanan via WhatsApp"
    >
      <svg
        className="wa-fab__icon"
        viewBox="0 0 24 24"
        width="26"
        height="26"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96s-.47-.15-.67.15-.77.96-.94 1.16-.35.22-.64.07a8.3 8.3 0 0 1-2.44-1.5 9.2 9.2 0 0 1-1.69-2.1c-.18-.3 0-.47.13-.62.13-.14.3-.35.45-.52.12-.15.16-.25.25-.42s.05-.35-.02-.5-.67-1.6-.91-2.2c-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.47 1.06 2.86 1.21 3.06 2.1 3.2 5.08 4.49c.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41s.25-1.28.17-1.41-.26-.2-.56-.35M12.05 21.5h-.04a9.5 9.5 0 0 1-4.83-1.32l-.35-.2-3.59.94.96-3.5-.23-.36a9.45 9.45 0 0 1-1.45-5.04c0-5.22 4.26-9.47 9.5-9.47a9.45 9.45 0 0 1 9.48 9.48c0 5.22-4.26 9.47-9.5 9.47M20.52 3.49A11.8 11.8 0 0 0 12.05 0C5.46 0 .1 5.34.1 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.33-1.65a11.9 11.9 0 0 0 5.71 1.45h.01c6.58 0 11.94-5.34 11.95-11.9a11.8 11.8 0 0 0-3.48-8.41"
        />
      </svg>
      <span className="wa-fab__label">Chat &amp; Pesan</span>
    </a>
  );
}
