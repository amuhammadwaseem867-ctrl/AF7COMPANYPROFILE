"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="profile-hero" id="home">

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="profile-hero__image">

        <Image
          src="/hero.webp"
          alt="AF7 Apparel Fastener"
          fill
          priority
          sizes="(max-width: 800px) 100vw, 58vw"
          className="profile-hero__image-element"
        />

        <div className="profile-hero__image-caption">
          <span>AF7 / APPAREL FASTENER</span>
          <span>LAHORE · PAKISTAN</span>
        </div>

      </div>


      {/* =====================================================
          INFORMATION PANEL
      ===================================================== */}

      <div className="profile-hero__panel">

        {/* TOP */}
        <motion.div
          className="profile-hero__panel-top"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span>COMPANY PROFILE</span>

          <span>2026</span>
        </motion.div>


        {/* MAIN */}
        <div className="profile-hero__main">

          <motion.div
            className="profile-hero__eyebrow"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span>01</span>

            <i />

            <span>APPAREL FASTENER</span>
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Precision
            <br />
            In Every
            <br />
            Detail.
          </motion.h1>


          <motion.div
            className="profile-hero__intro"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <span className="profile-hero__intro-line" />

            <p>
              A closer look at AF7 — our products,
              manufacturing capabilities, applications
              and the people behind every fastening
              solution.
            </p>

          </motion.div>

        </div>


        {/* BOTTOM */}
        <motion.div
          className="profile-hero__panel-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.9,
          }}
        >

          <div className="profile-hero__location">
            <span className="profile-hero__location-label">
              BASED IN
            </span>

            <strong>
              LAHORE, PAKISTAN
            </strong>
          </div>


          <div className="profile-hero__scroll">

            <span>
              EXPLORE PROFILE
            </span>

            <ArrowDownRight
              size={17}
              strokeWidth={1.2}
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}