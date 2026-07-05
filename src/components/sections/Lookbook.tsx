"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { useReveal } from "@/hooks/useReveal";
import { LOOKBOOK } from "@/lib/content";

const PIN_BREAKPOINT = "(min-width: 900px)";

export function Lookbook() {
  const scope = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  useReveal(scope);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const mm = gsap.matchMedia();

      // Desktop + motion allowed: pin the section and scrub the track
      // horizontally. Elsewhere the track is a native swipe carousel (CSS).
      mm.add(`${PIN_BREAKPOINT} and ${MOTION_OK}`, () => {
        const getDistance = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: () => `+=${getDistance()}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      });
    },
    { scope },
  );

  return (
    <section
      className="lookbook"
      id="lookbook"
      ref={scope}
      aria-labelledby="lookbook-heading"
    >
      <div className="lookbook__inner">
        <div className="container lookbook__head">
          <div>
            <p className="eyebrow" data-reveal>
              Lookbook
            </p>
            <h2 className="section__title" id="lookbook-heading" data-reveal>
              Satu hijab, <em>banyak cerita</em>
            </h2>
          </div>
          <p className="section__note" data-reveal>
            Inspirasi padu padan dari komunitas Nuraya — geser untuk
            menjelajah.
          </p>
        </div>

        <ul className="lookbook__track" ref={trackRef}>
          {LOOKBOOK.map((item, index) => (
            <li className="lookbook__card" key={item.caption}>
              <figure>
                <div className="lookbook__media">
                  <Image
                    className="lookbook__img"
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 900px) 30vw, 78vw"
                  />
                  <span className="lookbook__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <figcaption className="lookbook__caption">
                  <b>{item.caption}</b>
                  <span>{item.note}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
