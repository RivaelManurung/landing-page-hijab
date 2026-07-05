"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK, MOTION_REDUCED } from "@/lib/gsap";
import { HERO_STATS } from "@/lib/content";

const HEADLINE_LINES = ["Anggun di", "Setiap", "Langkahmu."];

export function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        // Intro timeline — headline lines slide up out of their masks,
        // then supporting copy and the visual settle in.
        const tl = gsap.timeline({
          defaults: { ease: "power4.out", duration: 1.1 },
        });

        tl.fromTo(
          ".hero__line > span",
          { yPercent: 115, opacity: 1 },
          { yPercent: 0, stagger: 0.12 },
        )
          .fromTo(
            "[data-hero-fade]",
            { y: 34, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 },
            "-=0.7",
          )
          .fromTo(
            ".hero__panel--main, .hero__monogram",
            { clipPath: "inset(100% 0 0 0)", opacity: 1 },
            { clipPath: "inset(0% 0 0 0)", duration: 1.3 },
            0.35,
          )
          .fromTo(
            ".hero__panel--back",
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2 },
            0.55,
          )
          .fromTo(
            ".hero__badge",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            1,
          );

        // Gentle parallax while scrolling past the hero.
        gsap.to(".hero__panel--back", {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });

      mm.add(MOTION_REDUCED, () => {
        gsap.set("[data-reveal]", { opacity: 1, clearProps: "transform" });
      });
    },
    { scope },
  );

  return (
    <section className="hero" ref={scope} aria-labelledby="hero-heading">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow" data-hero-fade data-reveal>
            Koleksi Hijab Premium
          </p>
          <h1 className="hero__title" id="hero-heading">
            {HEADLINE_LINES.map((line, index) => (
              <span className="hero__line" key={line}>
                <span data-reveal>
                  {index === HEADLINE_LINES.length - 1 ? <em>{line}</em> : line}
                </span>
              </span>
            ))}
          </h1>
          <p className="hero__lede" data-hero-fade data-reveal>
            Voal ultrafine dan silk pilihan dengan jatuh kain yang anggun,
            warna timeless, dan kenyamanan yang menemanimu sepanjang hari.
          </p>
          <div className="hero__actions" data-hero-fade data-reveal>
            <a className="btn btn--primary" href="#koleksi">
              Jelajahi Koleksi
            </a>
            <a className="btn btn--ghost" href="#craft">
              Cerita Kami
            </a>
          </div>
          <ul className="hero__stats" data-hero-fade data-reveal>
            {HERO_STATS.map((stat) => (
              <li className="hero__stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__panel hero__panel--back" data-reveal />
          <div className="hero__panel hero__panel--main" data-reveal />
          <div className="hero__monogram" data-reveal>
            <div>
              <strong>Nuraya</strong>
              <span>Est. 2021 — Indonesia</span>
            </div>
          </div>
          <div className="hero__badge" data-reveal>
            <b>4.9★</b> dari 32.000+ ulasan
          </div>
        </div>
      </div>
    </section>
  );
}
