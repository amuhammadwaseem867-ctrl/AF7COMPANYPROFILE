"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PULLERS, PULLERS_INTRO } from "./content";
import { EASE, MaskLines, Reveal } from "./motion";
import "./Pullers.css";

export default function Pullers() {
  return (
    <section className="pullers" id="pullers">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="label label--dot">Zipper Pullers</span>
          </div>

          <MaskLines
            className="section-head__title"
            lines={["Pullers for", "#4.5 and #5 zippers."]}
          />

          <Reveal as="p" className="section-head__lead">
            {PULLERS_INTRO}
          </Reveal>
        </div>

        <ul className="pullers__grid">
          {PULLERS.map((p, i) => (
            <motion.li
              key={p.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: EASE }}
            >
              <figure className="puller">
                <div className="puller__img">
                  <Image
                    src={p.image}
                    alt={`${p.finish} zipper puller`}
                    fill
                    sizes="(max-width: 600px) 50vw, (max-width: 1100px) 33vw, 25vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <figcaption>
                  <span className="puller__code">{p.code}</span>
                  <span className="puller__finish">{p.finish}</span>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
