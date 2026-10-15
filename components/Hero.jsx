"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { COMPANY, FINISHES, PROCESS, PRODUCTS } from "./content";
import { EASE, MaskLines, scrollToId } from "./motion";
import { useIntroDone } from "./Preloader";
import "./Hero.css";

const FACTS = [
  { value: String(PRODUCTS.length).padStart(2, "0"), label: "Product lines" },
  { value: String(PROCESS.length).padStart(2, "0"), label: "Production stages" },
  { value: String(FINISHES.length).padStart(2, "0"), label: "Metal finishes" },
];

export default function Hero() {
  const ref = useRef(null);
  const ready = useIntroDone();
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fadeIn = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 1.1, delay, ease: EASE },
  });

  return (
    <section className="hero" id="top" ref={ref}>
      <motion.div className="hero__media" style={{ y: reduce ? 0 : imgY }}>
        <motion.div
          className="hero__media-inner"
          initial={reduce ? false : { scale: 1.18 }}
          animate={ready ? { scale: 1 } : undefined}
          transition={{ duration: 2.6, ease: EASE }}
        >
          <Image
            src="/manufacturing/machinery.webp"
            alt="Zipper tape weaving machinery on the AF7 production floor"
            fill
            preload
            sizes="100vw"
          />
        </motion.div>
      </motion.div>
      <div className="hero__shade" />

      <motion.div className="hero__content wrap" style={{ y: reduce ? 0 : contentY, opacity: fade }}>
        <motion.div className="hero__top" {...fadeIn(0.3)}>
          <span className="label label--dot">Company Profile</span>
          <span className="label">{COMPANY.city}</span>
        </motion.div>

        <div className="hero__main">
          <motion.p className="hero__kicker" {...fadeIn(0.45)}>
            {COMPANY.descriptor}
          </motion.p>

          <MaskLines
            as="h1"
            className="hero__title"
            immediate={ready}
            delay={0.2}
            stagger={0.11}
            lines={[
              "Precision in",
              <>
                every <em className="serif">detail.</em>
              </>,
            ]}
          />
        </div>

        <div className="hero__bottom">
          <motion.p className="hero__intro" {...fadeIn(0.75)}>
            Metal, aluminium, nylon and Vislon zippers with selected garment
            accessories — tape, teeth, finishing, assembly and inspection
            managed under one roof.
          </motion.p>

          <motion.dl className="hero__facts" {...fadeIn(0.9)}>
            {FACTS.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.button
            className="hero__scroll"
            onClick={() => scrollToId("about")}
            aria-label="Scroll to About"
            {...fadeIn(1.05)}
          >
            <ArrowDown size={18} strokeWidth={1.4} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
