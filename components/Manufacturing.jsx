"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { PROCESS } from "./content";
import { DIMS, ratio } from "./dims";
import { EASE, MaskLines, Reveal } from "./motion";
import "./Manufacturing.css";

export default function Manufacturing() {
  const [active, setActive] = useState(0);
  const listRef = useRef(null);
  const stepRefs = useRef([]);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 60%", "end 60%"],
  });
  const rail = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { rootMargin: "-48% 0px -48% 0px" }
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const step = PROCESS[active];

  // The frame takes the exact proportions of the current photo, capped by
  // the column width and the viewport height, and morphs between steps.
  const stageRef = useRef(null);
  const [bounds, setBounds] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () =>
      setBounds({
        w: el.clientWidth,
        h: Math.min(window.innerHeight * 0.72, 780),
      });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const [iw, ih] = DIMS[step.image] ?? [4, 3];
  const frameW = Math.min(bounds.w, bounds.h * (iw / ih));
  const frameH = frameW * (ih / iw);

  return (
    <section className="process" id="manufacturing">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__index">03</span>
            <span className="label label--dot">Manufacturing</span>
          </div>
          <MaskLines
            className="section-head__title"
            lines={["From tape to", <em className="serif" key="f">finished zipper.</em>]}
          />
          <Reveal as="p" className="section-head__lead">
            AF7 operates an integrated manufacturing process that provides
            greater control over production, finishing, and product consistency.
          </Reveal>
        </div>

        <div className="process__grid">
          <div className="process__stage" ref={stageRef}>
            <div
              className="process__sticky"
              style={{ top: `max(96px, calc(50vh - ${frameH / 2}px))` }}
            >
            <motion.div
              className="process__frame"
              initial={false}
              animate={bounds.w ? { width: frameW, height: frameH } : undefined}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={step.image}
                  className="process__img"
                  initial={{ opacity: 0, scale: 1.08, clipPath: "inset(100% 0 0 0)" }}
                  animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0 0 0)" }}
                  exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.3 } }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                >
                  <Image
                    src={step.image}
                    alt={`${step.title} — AF7 production`}
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                    className="process__photo"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="process__badge">
                <span className="process__count">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={step.no}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.6, ease: EASE }}
                    >
                      {step.no}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="label">/ {String(PROCESS.length).padStart(2, "0")}</span>
              </div>
            </motion.div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={step.no}
                className="process__caption label"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {step.no} — {step.title}
              </motion.p>
            </AnimatePresence>
            </div>
          </div>

          <ol className="process__list" ref={listRef}>
            <motion.span className="process__rail" style={{ scaleY: rail }} aria-hidden="true" />
            {PROCESS.map((s, i) => (
              <li
                key={s.no}
                ref={(el) => (stepRefs.current[i] = el)}
                data-index={i}
                className={`process__step ${i === active ? "is-active" : ""}`}
              >
                <span className="process__no">{s.no}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="process__mobile-img" style={{ aspectRatio: ratio(s.image) }}>
                    <Image src={s.image} alt="" fill sizes="100vw" />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
