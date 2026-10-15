"use client";

import { motion } from "framer-motion";
import { WHY } from "./content";
import { EASE, MaskLines } from "./motion";
import "./WhyAF7.css";

const WORDS = ["Precision", "Technology", "Reliability", "Consistency", "Finishing"];

export default function WhyAF7() {
  return (
    <section className="why" id="why">
      <div className="why__marquee" aria-hidden="true">
        <div className="why__marquee-track">
          {[0, 1].map((k) => (
            <div className="why__marquee-group" key={k}>
              {WORDS.map((w) => (
                <span key={w}>
                  {w}
                  <i />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__index">09</span>
            <span className="label label--dot">Why AF7</span>
          </div>
          <MaskLines
            className="section-head__title"
            lines={["One manufacturing partner.", <em className="serif" key="s">Multiple solutions.</em>]}
          />
        </div>

        <ul className="why__grid">
          {WHY.items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1, delay: (i % 3) * 0.1, ease: EASE }}
            >
              <span className="why__no">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
