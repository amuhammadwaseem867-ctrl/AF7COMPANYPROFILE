"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CUSTOMIZATION } from "./content";
import { EASE, MaskLines, Reveal, scrollToId } from "./motion";
import "./Customization.css";

export default function Customization() {
  return (
    <section className="custom is-dark" id="customization">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__index">07</span>
            <span className="label label--dot">Customization</span>
          </div>
          <MaskLines
            className="section-head__title"
            lines={["Built around", <em className="serif" key="y">your requirements.</em>]}
          />
        </div>

        <div className="custom__grid">
          <div className="custom__aside">
            <Reveal as="p" className="custom__intro">
              {CUSTOMIZATION.intro}
            </Reveal>
            <Reveal delay={0.1}>
              <button className="btn btn--light" onClick={() => scrollToId("contact")}>
                Start a specification
                <ArrowUpRight size={17} strokeWidth={1.5} />
              </button>
            </Reveal>
          </div>

          <div className="custom__sheet">
            <div className="custom__sheet-head">
              <span className="label">Specification sheet</span>
              <span className="label">We can discuss</span>
            </div>
            <ol>
              {CUSTOMIZATION.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.9 }}
                >
                  <motion.span
                    className="custom__no"
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <motion.span
                    className="custom__item"
                    variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.9, delay: i * 0.05, ease: EASE }}
                  >
                    {item}
                  </motion.span>
                  <motion.span
                    className="custom__leader"
                    variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
                    transition={{ duration: 1.2, delay: 0.15 + i * 0.05, ease: EASE }}
                  />
                  <motion.span
                    className="custom__tick"
                    variants={{ hidden: { scale: 0 }, show: { scale: 1 } }}
                    transition={{ type: "spring", stiffness: 400, damping: 22, delay: 0.5 + i * 0.05 }}
                  />
                </motion.li>
              ))}
            </ol>
          </div>
        </div>

        <MaskLines
          as="p"
          className="custom__closing"
          lines={[
            "Your requirements.",
            <em className="serif" key="o">Our manufacturing expertise.</em>,
          ]}
        />
      </div>
    </section>
  );
}
