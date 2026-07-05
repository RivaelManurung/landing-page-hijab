"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { PRODUCTS } from "@/lib/content";
import { waProduct } from "@/lib/shop";

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
              <a
                href={waProduct(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="product__link"
                aria-label={`Pesan ${product.name} via WhatsApp`}
              >
                <div className="product__media">
                  <Image
                    className="product__img"
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                  />
                  <div className="product__arch" aria-hidden="true" />
                  <span className="product__tag">{product.tag}</span>
                  <span className="product__quick" aria-hidden="true">
                    Pesan via WhatsApp
                  </span>
                </div>
                <div className="product__body">
                  <div>
                    <h3 className="product__name">{product.name}</h3>
                    <span className="product__fabric">{product.fabric}</span>
                  </div>
                  <span className="product__price">{product.price}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
