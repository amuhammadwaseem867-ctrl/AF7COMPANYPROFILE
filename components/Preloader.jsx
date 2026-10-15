"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { setScrollLocked } from "./motion";
import "./Preloader.css";

const EVENT = "af7:intro-done";
let introDone = false;

/* Lets other components start their entrance once the preloader lifts. */
const subscribe = (cb) => {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
};

export function useIntroDone() {
  return useSyncExternalStore(subscribe, () => introDone, () => false);
}

const finishIntro = () => {
  introDone = true;
  window.dispatchEvent(new Event(EVENT));
};

export default function Preloader() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduce) {
      const id = requestAnimationFrame(() => {
        setVisible(false);
        finishIntro();
      });
      return () => cancelAnimationFrame(id);
    }

    setScrollLocked(true);
    const start = performance.now();
    const duration = 1700;
    let frame;

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          setScrollLocked(false);
          finishIntro();
        }, 280);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      setScrollLocked(false);
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          aria-hidden="true"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="loader__logo"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image src="/af7logowhite.svg" alt="" width={180} height={108} preload />
          </motion.div>

          <div className="loader__foot">
            <span className="label">Precision in every detail</span>
            <span className="loader__count">
              {String(count).padStart(3, "0")}
            </span>
          </div>

          <div className="loader__bar">
            <span style={{ transform: `scaleX(${count / 100})` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
