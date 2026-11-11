"use client";

import { motion } from "framer-motion";
import { PURPOSE } from "./content";
import { EASE, MaskLines, Reveal, ScrollWords } from "./motion";
import "./Purpose.css";

export default function Purpose() {
  return (
    <section className="purpose" id="purpose">
      <div className="wrap">
        <div className="purpose__pair">
          <Reveal className="purpose__block">
            <span className="label label--dot">Our Vision</span>
            <p>{PURPOSE.vision}</p>
          </Reveal>
          <Reveal className="purpose__block" delay={0.12}>
            <span className="label label--dot">Our Mission</span>
            <p>{PURPOSE.mission}</p>
          </Reveal>
        </div>

        <div className="purpose__values">
          <div className="section-head__meta">
            <span className="section-head__index">11</span>
            <span className="label label--dot">Our Values</span>
          </div>
          <ol className="purpose__values-list">
            {PURPOSE.values.map((v, i) => (
              <motion.li
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: EASE }}
              >
                <span className="purpose__value-no">{String(i + 1).padStart(2, "0")}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="purpose__commitment">
          <div className="section-head__meta">
            <span className="section-head__index">12</span>
            <span className="label label--dot">Our Manufacturing Philosophy</span>
          </div>
          <div className="purpose__body">
            <MaskLines
              as="h2"
              className="purpose__lead"
              lines={[
                "Precision is more",
                <>
                  than a promise.
                </>,
              ]}
            />
            <ScrollWords className="purpose__statement" text={PURPOSE.philosophy.text} />
          </div>
        </div>
      </div>
    </section>
  );
}
