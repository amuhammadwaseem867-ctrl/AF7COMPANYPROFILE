"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { APPLICATIONS } from "./content";
import { EASE, MaskLines, Reveal } from "./motion";
import "./Applications.css";

export default function Applications() {
  return (
    <section className="apps" id="applications">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__index">08</span>
            <span className="label label--dot">Applications</span>
          </div>
          <MaskLines
            className="section-head__title"
            lines={["Designed for", <em className="serif" key="m">modern apparel.</em>]}
          />
          <Reveal as="p" className="section-head__lead">
            {APPLICATIONS.intro}
          </Reveal>
        </div>

        <ul className="apps__list">
          {APPLICATIONS.items.map((name, i) => (
            <motion.li
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <span className="apps__no">{String(i + 1).padStart(2, "0")}</span>
              <span className="apps__name">{name}</span>
              <ArrowUpRight className="apps__arrow" size={28} strokeWidth={1.2} aria-hidden="true" />
            </motion.li>
          ))}
        </ul>

        <Reveal as="p" className="apps__closing">
          {APPLICATIONS.closing}
        </Reveal>
      </div>
    </section>
  );
}
