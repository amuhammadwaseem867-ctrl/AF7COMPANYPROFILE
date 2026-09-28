"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./CompanyProfile.css";

const facts = [
  {
    number: "01",
    label: "Based In",
    value: "Lahore, Pakistan",
  },
  {
    number: "02",
    label: "Focus",
    value: "Apparel Fastening",
  },
  {
    number: "03",
    label: "Serving",
    value: "Global Product Industries",
  },
  {
    number: "04",
    label: "Profile",
    value: "Manufacturing & Supply",
  },
];

export default function CompanyProfile() {
  return (
    <section className="company-profile" id="profile">

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <div className="company-profile__intro">
        <motion.div
          className="company-profile__eyebrow"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="company-profile__eyebrow-number">
            01
          </span>

          <span className="company-profile__eyebrow-line" />

          <span>Company Profile</span>
        </motion.div>

        <div className="company-profile__intro-grid">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Built Around
            <br />
            What Connects
          </motion.h2>

          <motion.div
            className="company-profile__intro-copy"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p>
              AF7 is a fastening-focused manufacturing company based
              in Lahore, Pakistan, serving apparel, fashion and related
              product industries.
            </p>

            <p>
              Our work is centered on dependable construction,
              consistent production and fastening solutions designed
              to become part of the finished product.
            </p>
          </motion.div>

        </div>
      </div>


      {/* =====================================================
          VISUAL SPREAD
      ===================================================== */}

      <motion.div
        className="company-profile__visual"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        {/* IMAGE */}

        <div className="company-profile__visual-image">
          <Image
            src="/hero.webp"
            alt="AF7 Apparel Fastener"
            fill
            sizes="(max-width: 800px) 100vw, 65vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          <div className="company-profile__image-caption">
            <span>AF7</span>
            <span>Apparel Fastener</span>
          </div>
        </div>


        {/* NAVY INFORMATION PANEL */}

        <div className="company-profile__visual-panel">

          <div className="company-profile__panel-content">

            <span className="company-profile__panel-label">
              Our Approach
            </span>

            <h3 className="company-profile__panel-title">
              <span>Focused</span>
              <span>Manufacturing</span>
            </h3>

            <p>
              We focus on the details that define dependable
              fastening — construction, consistency, finishing
              and controlled manufacturing.
            </p>

          </div>


          <div className="company-profile__panel-bottom">

            <div className="company-profile__panel-detail">
              <span>Location</span>
              <strong>Lahore · Pakistan</strong>
            </div>

            <div className="company-profile__panel-detail">
              <span>Company</span>
              <strong>AF7</strong>
            </div>

          </div>

        </div>

      </motion.div>


      {/* =====================================================
          COMPANY OVERVIEW
      ===================================================== */}

      <div className="company-profile__overview">

        <motion.div
          className="company-profile__section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Company Overview
        </motion.div>


        <div className="company-profile__overview-grid">

          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            Built For
            <br />
            Everyday Use
          </motion.h3>


          <motion.div
            className="company-profile__overview-copy"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <p>
              From individual fastening components to finished
              zipper constructions, AF7 works across the details
              that help garments and related products come together.
            </p>

            <p>
              Based in Lahore, our company combines product
              understanding, manufacturing experience and a
              practical approach to serving customers across
              different product categories.
            </p>
          </motion.div>

        </div>

      </div>


      {/* =====================================================
          COMPANY FACTS
      ===================================================== */}

      <div className="company-profile__facts">

        <div className="company-profile__facts-inner">

          {facts.map((fact, index) => (
            <motion.div
              className="company-profile__fact"
              key={fact.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
              }}
            >

              <span className="company-profile__fact-number">
                {fact.number}
              </span>

              <span className="company-profile__fact-label">
                {fact.label}
              </span>

              <strong>
                {fact.value}
              </strong>

            </motion.div>
          ))}

        </div>

      </div>


      {/* =====================================================
          CLOSING
      ===================================================== */}

      <div className="company-profile__closing">

        <div className="company-profile__closing-inner">

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AF7 · Apparel Fastener
          </motion.span>


          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Precision In Every Detail
          </motion.h3>


          <div className="company-profile__closing-meta">
            <span>
              Lahore · Pakistan
            </span>

            <span>
              2026
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}