"use client";

import { useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { FAQ_ITEMS } from "@/lib/content";

export function Faq() {
  const scope = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  useReveal(scope);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className="section"
      id="faq"
      ref={scope}
      aria-labelledby="faq-heading"
    >
      <div className="container faq__grid">
        <div className="faq__intro">
          <p className="eyebrow" data-reveal>
            Sering Ditanyakan
          </p>
          <h2 className="section__title" id="faq-heading" data-reveal>
            Masih ragu? <em>Kami jawab</em>
          </h2>
          <p className="section__note" data-reveal>
            Tidak menemukan jawabanmu? Tim kami siap membantu lewat WhatsApp
            setiap hari pukul 08.00–21.00 WIB.
          </p>
        </div>

        <div className="faq__list" data-reveal-group>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                className={`faq__item${isOpen ? " faq__item--open" : ""}`}
                key={item.question}
                data-reveal
              >
                <h3>
                  <button
                    className="faq__question"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
