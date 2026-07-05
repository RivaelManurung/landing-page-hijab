"use client";

import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import { PRODUCTS } from "@/lib/content";

export function Collection() {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);

  return (
    <section
      className="section"
      id="koleksi"
      ref={scope}
      aria-labelledby="koleksi-heading"
    >
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow" data-reveal>
              Koleksi Pilihan
            </p>
            <h2 className="section__title" id="koleksi-heading" data-reveal>
              Empat andalan yang <em>selalu dicari</em>
            </h2>
          </div>
          <p className="section__note" data-reveal>
            Dari voal harian hingga silk untuk momen istimewa — semua dengan
            jahit tepi halus dan warna yang tidak lekang waktu.
          </p>
        </div>

        <ul className="collection__grid" data-reveal-group>
          {PRODUCTS.map((product) => (
            <li className="product" key={product.name} data-reveal>
              <div className="product__media">
                <div
                  className="product__cloth"
                  style={{ "--cloth": product.cloth } as React.CSSProperties}
                  aria-hidden="true"
                />
                <div className="product__arch" aria-hidden="true" />
                <span className="product__tag">{product.tag}</span>
              </div>
              <div className="product__body">
                <div>
                  <h3 className="product__name">{product.name}</h3>
                  <span className="product__fabric">{product.fabric}</span>
                </div>
                <span className="product__price">{product.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
