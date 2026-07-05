"use client";

import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import { CRAFT_STEPS } from "@/lib/content";

export function Craft() {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);

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
