"use client";

import type { RefObject } from "react";
import { gsap, useGSAP, MOTION_OK, MOTION_REDUCED } from "@/lib/gsap";

const REVEAL_DISTANCE = 40;
const REVEAL_DURATION = 0.9;
const REVEAL_STAGGER = 0.12;

/**
 * Scroll-triggered fade-up for every [data-reveal] inside `scope`.
 * Elements sharing a parent [data-reveal-group] animate as a stagger.
 * Falls back to simply showing content when the user prefers reduced motion.
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const groups = gsap.utils.toArray<HTMLElement>(
          "[data-reveal-group]",
          root,
        );

        groups.forEach((group) => {
          gsap.fromTo(
            group.querySelectorAll("[data-reveal]"),
            { y: REVEAL_DISTANCE, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: REVEAL_DURATION,
              ease: "power3.out",
              stagger: REVEAL_STAGGER,
              scrollTrigger: { trigger: group, start: "top 82%" },
            },
          );
        });

        const singles = gsap.utils
          .toArray<HTMLElement>("[data-reveal]", root)
          .filter((el) => !el.closest("[data-reveal-group]"));

        singles.forEach((el) => {
          gsap.fromTo(
            el,
            { y: REVEAL_DISTANCE, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: REVEAL_DURATION,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
            },
          );
        });
      });

      mm.add(MOTION_REDUCED, () => {
        gsap.set(gsap.utils.toArray<HTMLElement>("[data-reveal]", root), {
          opacity: 1,
        });
      });
    },
    { scope },
  );
}
