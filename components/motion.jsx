"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Lenis from "lenis";

export const EASE = [0.16, 1, 0.3, 1];

let lenisInstance = null;

/* Smooth scroll for the whole page; disabled when reduced motion is preferred. */
export function SmoothScroll() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.95,
    });
    lenisInstance = lenis;

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisInstance = null;
    };
  }, [reduce]);

  return null;
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: 0, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function setScrollLocked(locked) {
  if (lenisInstance) {
    if (locked) lenisInstance.stop();
    else lenisInstance.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

/* Fade + rise when the element enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  as = "div",
  className,
  amount = 0.25,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 1.1, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* Heading whose lines slide up from behind a mask. `lines` is an array of nodes. */
export function MaskLines({
  lines,
  as = "h2",
  className,
  delay = 0,
  stagger = 0.09,
  immediate = false,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const Tag = as;
  const show = immediate || inView;

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <motion.span
            initial={reduce ? false : { y: "110%" }}
            animate={show ? { y: "0%" } : undefined}
            transition={{ duration: 1.2, delay: delay + i * stagger, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* Paragraph whose words brighten as it scrolls through the viewport. */
export function ScrollWords({ text, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        >
          {word}
        </Word>
      ))}
    </p>
  );
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{" "}
    </>
  );
}

/* Frame that drifts gently against scroll for depth. The whole frame moves,
   so the image inside is never cropped. */
export function Parallax({ children, className, style, distance = 40 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, position: "relative", overflow: "hidden", y: reduce ? 0 : y }}
    >
      {children}
    </motion.div>
  );
}
