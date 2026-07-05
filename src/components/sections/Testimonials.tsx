"use client";

import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);

  return (
    <section
      className="section"
      id="testimoni"
      ref={scope}
      aria-labelledby="testimoni-heading"
    >
      <div className="container">
        <div className="section__head">
          <div>
            <p className="eyebrow" data-reveal>
              Testimoni
            </p>
            <h2 className="section__title" id="testimoni-heading" data-reveal>
              Kata mereka yang <em>sudah mencoba</em>
            </h2>
          </div>
        </div>

        <div className="testi__grid" data-reveal-group>
          {TESTIMONIALS.map((testimonial) => (
            <figure className="testi__card" key={testimonial.name} data-reveal>
              <span className="testi__quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption className="testi__meta">
                <span
                  className="testi__avatar"
                  style={
                    { "--avatar": testimonial.avatar } as React.CSSProperties
                  }
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </span>
                <span>
                  <b>{testimonial.name}</b>
                  <span>{testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
