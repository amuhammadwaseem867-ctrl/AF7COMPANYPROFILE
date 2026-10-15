"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COMPANY, NAV } from "./content";
import { EASE, scrollToId, setScrollLocked } from "./motion";
import { useIntroDone } from "./Preloader";
import "./Navbar.css";

export default function Navbar() {
  const ready = useIntroDone();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > window.innerHeight * 0.85);
    setHidden(y > prev && y > 240 && !open);
  });

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    setScrollLocked(open);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 450 : 0);
  };

  return (
    <>
      <motion.header
        className={`nav ${solid ? "nav--solid" : ""} ${open ? "nav--open" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: ready && !hidden ? 0 : -100 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="nav__inner wrap">
          <a href="#top" className="nav__logo" onClick={go("top")} aria-label="AF7 home">
            <Image
              src={solid && !open ? "/af7logo-27.svg" : "/af7logowhite.svg"}
              alt="AF7"
              width={84}
              height={50}
              preload
            />
          </a>

          <nav className="nav__links" aria-label="Primary">
            {NAV.slice(0, -1).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={go(item.id)}
                className={active === item.id ? "is-active" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav__end">
            <a href="#contact" onClick={go("contact")} className="nav__cta">
              Get in touch
              <ArrowUpRight size={15} strokeWidth={1.6} />
            </a>

            <button
              className="nav__toggle"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <motion.div className="nav__progress" style={{ scaleX: progress }} />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="menu__links wrap" aria-label="Mobile">
              {NAV.map((item, i) => (
                <div className="line-mask" key={item.id}>
                  <motion.a
                    href={`#${item.id}`}
                    onClick={go(item.id)}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.8, delay: 0.15 + i * 0.05, ease: EASE }}
                  >
                    <span className="menu__no">0{i + 1}</span>
                    {item.label}
                  </motion.a>
                </div>
              ))}
            </nav>

            <motion.div
              className="menu__foot wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
              <span>{COMPANY.city}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
