"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { MARQUEE_ITEMS } from "@/lib/content";

const LOOP_DURATION_S = 22;

export function Marquee() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // Two identical groups; sliding the track by -50% loops seamlessly.
      mm.add(MOTION_OK, () => {
        gsap.to(".marquee__track", {
          xPercent: -50,
          duration: LOOP_DURATION_S,
          ease: "none",
          repeat: -1,
        });
      });
    },
    { scope },
  );

  return (
    <aside className="marquee" ref={scope} aria-label="Keunggulan Nuraya">
      <div className="marquee__track">
        {[0, 1].map((groupIndex) => (
          <div
            className="marquee__group"
            key={groupIndex}
            aria-hidden={groupIndex === 1}
          >
            {MARQUEE_ITEMS.map((item) => (
              <span key={item}>
                {item} <span className="marquee__star"> ✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
