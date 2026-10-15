"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FINISHES } from "./content";
import { EASE, MaskLines, Reveal } from "./motion";
import "./Finishes.css";

const metal = (g, angle = 135) => `linear-gradient(${angle}deg, ${g[0]} 0%, ${g[1]} 38%, ${g[2]} 62%, ${g[3]} 100%)`;

export default function Finishes() {
  const [active, setActive] = useState(0);
  const f = FINISHES[active];

  return (
    <section className="finishes" id="finishes">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__index">05</span>
            <span className="label label--dot">Finishes</span>
          </div>
          <MaskLines
            className="section-head__title"
            lines={["Finishing that", <em className="serif" key="c">completes the product.</em>]}
          />
          <Reveal as="p" className="section-head__lead">
            The finish of a zipper contributes significantly to the appearance and
            character of the finished garment. For applicable metal zipper
            constructions, AF7 offers a range of finishing options.
          </Reveal>
        </div>

        <div className="finishes__grid">
          <Reveal className="finishes__preview">
            <AnimatePresence initial={false}>
              <motion.div
                key={f.name}
                className="finishes__metal"
                style={{ background: metal(f.g) }}
                initial={{ clipPath: "inset(0 0 0 100%)" }}
                animate={{ clipPath: "inset(0 0 0 0%)" }}
                exit={{ opacity: 0, transition: { delay: 0.9, duration: 0.01 } }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              />
            </AnimatePresence>
            <div className="finishes__sheen" />
            <div className="finishes__grain" />

            <div className="finishes__caption">
              <span className="label">
                {String(active + 1).padStart(2, "0")} / {FINISHES.length}
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <h3>{f.name}</h3>
                  <span className="label">{f.tone}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          <ul className="finishes__list" aria-label="Finishes">
            {FINISHES.map((item, i) => (
              <Reveal as="li" key={item.name} delay={i * 0.04} y={16}>
                <button
                  aria-pressed={i === active}
                  className={i === active ? "is-active" : ""}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  <span className="finishes__no">{String(i + 1).padStart(2, "0")}</span>
                  <span className="finishes__chip" style={{ background: metal(item.g) }} />
                  <span className="finishes__name">{item.name}</span>
                  <span className="finishes__tone">{item.tone}</span>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal as="p" className="finishes__note">
          Finish availability may vary according to zipper type, material, and
          production requirements. Swatches are indicative.
        </Reveal>
      </div>
    </section>
  );
}
