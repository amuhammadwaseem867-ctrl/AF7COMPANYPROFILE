"use client";

import { useState } from "react";
import Image from "next/image";
import { FINISHES, FINISHES_COPY, TAPES } from "./content";
import { MaskLines, Reveal } from "./motion";
import "./Finishes.css";

// Copied from the AF7 website (af7 repo, components/home/Finishes.jsx).
// Same images, layout and behaviour; only the motion helpers are this site's own.

const DEFAULT_FINISH = Math.max(
  0,
  FINISHES.findIndex((finish) => finish.slug === "golden-brass"),
);

/**
 * One zipper photo, built from two stacked layers: the tape (one image per
 * tape colour) and the metal teeth, slider and stops (one image per finish).
 * Every layer is rendered up front and only the selected pair is visible,
 * so switching is instant and the zipper never moves. Hidden layers load
 * eagerly too: lazy loading would skip them, since they are invisible.
 */
export default function Finishes() {
  const [finishIndex, setFinishIndex] = useState(DEFAULT_FINISH);
  const [tapeIndex, setTapeIndex] = useState(0);
  const finish = FINISHES[finishIndex];
  const tape = TAPES[tapeIndex];

  return (
    <section className="home-finishes" id="finishes" aria-labelledby="finishes-title">
      <div className="wrap">
        <div className="home-section-head">
          <div>
            <Reveal as="span" className="section-eyebrow" y={16}>
              Finishes · {String(FINISHES.length).padStart(2, "0")}
            </Reveal>
            <div id="finishes-title">
              <MaskLines
                className="home-heading"
                lines={["Finishing that", <span key="a" className="split-accent">completes the product.</span>]}
              />
            </div>
          </div>
          <Reveal delay={0.2}>
            <p className="home-section-copy">{FINISHES_COPY.intro}</p>
          </Reveal>
        </div>

        <div className="home-finishes-layout">
          <Reveal className="home-finish-preview" y={50}>
            <div
              className="home-finish-zipper"
              role="img"
              aria-label={`Open-end metal zipper with ${finish.name} finish on ${tape.name} tape`}
            >
              {TAPES.map((item, index) => (
                <Image
                  key={item.slug}
                  src={`/finishes/zipper-v3/tape-${item.slug}.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 92vw, 560px"
                  loading="eager"
                  className={`home-finish-layer ${index === tapeIndex ? "is-active" : ""}`}
                />
              ))}
              {FINISHES.map((item, index) => (
                <Image
                  key={item.slug}
                  src={`/finishes/zipper-v3/metal-${item.slug}.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 92vw, 560px"
                  loading="eager"
                  className={`home-finish-layer ${index === finishIndex ? "is-active" : ""}`}
                />
              ))}
            </div>
            <div className="home-finish-preview-label" aria-live="polite">
              <span>{finish.name}</span>
              <span>{tape.name} tape</span>
            </div>
          </Reveal>

          <div>
            <Reveal as="h3" className="home-finish-group-title" y={16}>
              Metal finish
            </Reveal>
            <div className="home-finish-grid">
              {FINISHES.map((item, index) => (
                <Reveal key={item.slug} y={24} delay={index * 0.05}>
                  <button
                    type="button"
                    className={`home-finish ${index === finishIndex ? "is-active" : ""}`}
                    onClick={() => setFinishIndex(index)}
                    aria-pressed={index === finishIndex}
                  >
                    <span className="home-finish-swatch" style={{ background: item.swatch }} />
                    <span className="home-finish-name">{item.name}</span>
                  </button>
                </Reveal>
              ))}
            </div>

            <Reveal as="h3" className="home-finish-group-title home-finish-group-title-tape" y={16}>
              Tape colour
            </Reveal>
            <Reveal className="home-tape-grid" delay={0.1}>
              {TAPES.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  className={`home-tape ${index === tapeIndex ? "is-active" : ""}`}
                  onClick={() => setTapeIndex(index)}
                  aria-pressed={index === tapeIndex}
                  aria-label={`${item.name} tape`}
                  title={item.name}
                >
                  <span className="home-tape-swatch" style={{ background: item.color }} />
                </button>
              ))}
            </Reveal>

            <Reveal as="p" className="home-finish-note" delay={0.2}>
              {FINISHES_COPY.note}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
