"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { useReveal } from "@/hooks/useReveal";
import { CRAFT_STEPS } from "@/lib/content";

export function Craft() {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // Subtle drift of the photo inside its arch mask while scrolling.
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          ".craft__img",
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      });
    },
    { scope },
  );

  return (
    <section
      className="section craft"
      id="craft"
      ref={scope}
      aria-labelledby="craft-heading"
    >
      <div className="container craft__grid">
        <div className="craft__sticky">
          <p className="eyebrow" data-reveal>
            Craftsmanship
          </p>
          <h2 className="craft__title" id="craft-heading" data-reveal>
            Dibuat perlahan, <em>dipakai lama</em>
          </h2>
          <p className="craft__lede" data-reveal>
            Kami percaya hijab terbaik lahir dari proses yang tidak
            terburu-buru. Empat tahap ini kami jaga di setiap helainya.
          </p>
          <div className="craft__figure" data-reveal>
            <Image
              className="craft__img"
              src="/images/hijab.jpg"
              alt="Detail hijab voal motif hijau sage yang dikenakan dengan anggun"
              fill
              sizes="(min-width: 900px) 36vw, 92vw"
            />
          </div>
        </div>

        <ol className="craft__steps">
          {CRAFT_STEPS.map((step, index) => (
            <li className="craft__step" key={step.title} data-reveal>
              <span className="craft__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
