"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { QUALITY } from "./content";
import { EASE, MaskLines, Parallax, Reveal } from "./motion";
import "./Quality.css";

export default function Quality() {
  return (
    <section className="quality" id="quality">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__index">06</span>
            <span className="label label--dot">Quality</span>
          </div>
          <MaskLines
            className="section-head__title"
            lines={["Quality in", <em className="serif" key="e">every stage.</em>]}
          />
        </div>

        <div className="quality__grid">
          <div className="quality__media">
            <Reveal className="quality__img quality__img--a">
              <Parallax className="quality__frame" distance={50}>
                <Image
                  src="/quality/inspection.webp"
                  alt="Production team reviewing work on the AF7 floor"
                  fill
                  sizes="(max-width: 900px) 60vw, 26vw"
                />
              </Parallax>
            </Reveal>
            <Reveal className="quality__img quality__img--b" delay={0.15}>
              <Parallax className="quality__frame" distance={40}>
                <Image
                  src="/quality/detail.webp"
                  alt="Hands checking a finished product"
                  fill
                  sizes="(max-width: 900px) 60vw, 24vw"
                />
              </Parallax>
            </Reveal>
          </div>

          <div className="quality__copy">
            <Reveal as="p" className="quality__intro">
              {QUALITY.intro}
            </Reveal>

            <ol className="quality__list">
              {QUALITY.points.map((point, i) => (
                <motion.li
                  key={point}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <motion.span
                    className="quality__line"
                    variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
                    transition={{ duration: 1.2, delay: i * 0.06, ease: EASE }}
                  />
                  <span className="quality__no">{String(i + 1).padStart(2, "0")}</span>
                  <motion.span
                    className="quality__text"
                    variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.06, ease: EASE }}
                  >
                    {point}
                  </motion.span>
                  <motion.svg
                    className="quality__check"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M5 12.5l4.2 4.2L19 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1 } }}
                      transition={{ duration: 0.8, delay: 0.35 + i * 0.06, ease: EASE }}
                    />
                  </motion.svg>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>

        <div className="quality__objective">
          <Reveal as="span" className="label label--dot">Our objective</Reveal>
          <MaskLines
            as="blockquote"
            className="quality__quote"
            lines={[
              "To deliver products that combine",
              <>
                <em className="serif">reliable functionality</em> with consistent
              </>,
              "appearance and finishing.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
