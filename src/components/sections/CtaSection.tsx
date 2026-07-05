"use client";

import { useRef, useState, type FormEvent } from "react";
import { useReveal } from "@/hooks/useReveal";
import { WA_GENERAL } from "@/lib/shop";

export function CtaSection() {
  const scope = useRef<HTMLElement>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  useReveal(scope);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Placeholder: wire to a newsletter provider / server action in production.
    event.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <section className="section cta" ref={scope} aria-labelledby="cta-heading">
      <div className="cta__orn cta__orn--left" aria-hidden="true" />
      <div className="cta__orn cta__orn--right" aria-hidden="true" />
      <div className="container cta__inner" data-reveal-group>
        <p className="eyebrow" data-reveal>
          Jadi yang Pertama
        </p>
        <h2 className="cta__title" id="cta-heading" data-reveal>
          Dapatkan akses awal <em>koleksi terbaru</em>
        </h2>
        <p className="cta__note" data-reveal>
          Plus voucher 10% untuk pembelian pertamamu. Tanpa spam — hanya kabar
          rilis warna baru dan penawaran khusus member.
        </p>
        {isSubscribed ? (
          <p className="cta__hint" role="status" data-reveal>
            Terima kasih! Cek inbox-mu untuk voucher 10%. ✦
          </p>
        ) : (
          <form className="cta__form" onSubmit={handleSubmit} data-reveal>
            <label className="visually-hidden" htmlFor="cta-email">
              Alamat email
            </label>
            <input
              className="cta__input"
              id="cta-email"
              type="email"
              name="email"
              placeholder="Alamat email kamu"
              autoComplete="email"
              required
            />
            <button className="btn btn--primary" type="submit">
              Daftar
            </button>
          </form>
        )}
        <p className="cta__or" data-reveal>
          atau langsung pesan lewat
        </p>
        <a
          className="btn btn--wa"
          href={WA_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
        >
          Chat &amp; Pesan via WhatsApp
        </a>
      </div>
    </section>
  );
}
