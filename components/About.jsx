"use client";

import Image from "next/image";
import { ABOUT } from "./content";
import { MaskLines, Parallax, Reveal, ScrollWords } from "./motion";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__index">01</span>
            <span className="label label--dot">About AF7</span>
          </div>
          <MaskLines
            className="section-head__title"
            lines={["Precision.", "Technology.", <em className="serif" key="r">Reliability.</em>]}
          />
        </div>

        <div className="about__grid">
          <Reveal as="figure" className="about__figure">
            <Parallax className="about__image" distance={60}>
              <Image
                src="/manufacturing/factory.webp"
                alt="Zipper production machinery inside the AF7 facility, Lahore"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </Parallax>
            <figcaption className="label">AF7 facility — Lahore, Pakistan</figcaption>
          </Reveal>

          <div className="about__copy">
            <ScrollWords className="about__statement" text={ABOUT.body[0]} />

            <div className="about__cols">
              <Reveal as="p" delay={0.05}>{ABOUT.body[1]}</Reveal>
              <Reveal as="p" delay={0.15}>{ABOUT.body[2]}</Reveal>
            </div>
          </div>
        </div>

        <div className="about__philosophy">
          <Reveal as="span" className="label">Our philosophy is simple</Reveal>
          <MaskLines
            as="p"
            className="about__motto"
            lines={[
              <>
                Precision in every <em className="serif">detail.</em>
              </>,
            ]}
          />
        </div>
      </div>
    </section>
  );
}
