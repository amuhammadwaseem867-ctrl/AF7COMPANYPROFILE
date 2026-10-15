"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { TECHNOLOGY } from "./content";
import { MaskLines, Reveal } from "./motion";
import "./Technology.css";

export default function Technology() {
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const measure = () => {
      const enabled = mq.matches && !reduce;
      setPinned(enabled);
      if (trackRef.current) {
        setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, [reduce]);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="tech is-dark" id="technology">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__index">04</span>
            <span className="label label--dot">Technology & Machinery</span>
          </div>
          <MaskLines
            className="section-head__title"
            lines={["Modern machinery.", <em className="serif" key="c">Controlled manufacturing.</em>]}
          />
        </div>

        <div className="tech__copy">
          {TECHNOLOGY.body.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 0.1}>
              {p}
            </Reveal>
          ))}
        </div>
      </div>

      <div
        ref={pinRef}
        className={`tech__pin ${pinned ? "is-pinned" : ""}`}
        style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
      >
        <div className="tech__sticky">
          <motion.div
            ref={trackRef}
            className="tech__track"
            style={pinned ? { x } : undefined}
          >
            {TECHNOLOGY.gallery.map((g, i) => (
              <figure className="tech__item" key={g.src}>
                <div className="tech__img">
                  <Image src={g.src} alt={g.caption} fill sizes="(max-width: 900px) 80vw, 36vw" />
                </div>
                <figcaption>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </motion.div>

          {pinned && (
            <div className="tech__progress wrap" aria-hidden="true">
              <span className="label">Scroll</span>
              <div className="tech__bar">
                <motion.span style={{ scaleX: bar }} />
              </div>
              <span className="label">{String(TECHNOLOGY.gallery.length).padStart(2, "0")}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
