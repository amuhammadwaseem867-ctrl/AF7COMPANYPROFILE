"use client";

import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="profile-hero" id="home">
      {/* Background */}
      <div className="profile-hero__media">
        <img
          src="/hero.webp"
          alt="AF7 Apparel Fastener"
        />
        <div className="profile-hero__overlay" />
      </div>

      {/* Technical top line â€” intentionally below navbar */}
      <div className="profile-hero__topline">
        <span>COMPANY PROFILE</span>
        <span>01 / 12</span>
      </div>

      {/* Main content */}
      <div className="profile-hero__content">
        <motion.div
          className="profile-hero__eyebrow"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span>01</span>
          <i />
          <span>APPAREL FASTENER</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          PRECISION
          <br />
          IN EVERY
          <br />
          DETAIL.
        </motion.h1>

        <motion.div
          className="profile-hero__description"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
        >
          <span className="profile-hero__description-line" />

          <p>
            Apparel fastening solutions shaped by
            precision, consistency and dependable
            manufacturing.
          </p>
        </motion.div>
      </div>

      {/* Bottom information */}
      <div className="profile-hero__footer">
        <div className="profile-hero__footer-left">
          <span>AF7</span>
          <i />
          <span>APPAREL FASTENER</span>
        </div>

        <div className="profile-hero__footer-center">
          <span>LAHORE Â· PAKISTAN</span>
        </div>

        <div className="profile-hero__footer-right">
          <span>2026</span>
        </div>
      </div>

      {/* Corner details */}
      <span className="profile-hero__corner profile-hero__corner--tl" />
      <span className="profile-hero__corner profile-hero__corner--tr" />
      <span className="profile-hero__corner profile-hero__corner--bl" />
      <span className="profile-hero__corner profile-hero__corner--br" />
    </section>
  );
}

