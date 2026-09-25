"use client";

import { motion } from "framer-motion";
import "./CompanyProfile.css";

const facts = [
  ["LOCATION", "LAHORE · PAKISTAN"],
  ["CATEGORY", "APPAREL FASTENER"],
  ["PRODUCT RANGE", "ZIPPERS + SLIDERS"],
  ["FOCUS", "MANUFACTURING"],
];

export default function CompanyProfile() {
  return (
    <section className="company-profile" id="profile">
      {/* =========================================
          NAV / PAGE HEADER
      ========================================= */}
      <div className="company-profile__nav">
        <div className="company-profile__nav-inner">
          <div className="company-profile__nav-left">
            <span>COMPANY PROFILE</span>
            <i />
            <span>AF7</span>
          </div>

          <div className="company-profile__nav-right">
            <span>APPAREL FASTENER</span>
            <span>LAHORE · PAKISTAN</span>
          </div>
        </div>
      </div>

      {/* =========================================
          MAIN NAVY PAGE
      ========================================= */}
      <div className="company-profile__hero">
        <div className="company-profile__grid" />

        <div className="company-profile__hero-inner">
          {/* LEFT CONTENT */}
          <motion.div
            className="company-profile__copy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="company-profile__eyebrow">
              <span>AF7</span>
              <i />
              <span>APPAREL FASTENER</span>
            </div>

            <h2>
              BUILT FOR
              <br />
              WHAT CONNECTS.
            </h2>

            <p className="company-profile__lead">
              AF7 is an apparel fastener brand based in Lahore, Pakistan,
              focused on fastening components for apparel and related product
              applications.
            </p>

            <div className="company-profile__copy-rule" />

            <p className="company-profile__body">
              Our product range brings together zippers and sliders developed
              for different apparel requirements, including metal, aluminium,
              nylon and Vislon zippers alongside brass and stainless steel
              sliders. AF7 brings these fastening components together through
              a focused manufacturing approach and clear product standards.
            </p>

            <div className="company-profile__location">
              <span className="company-profile__location-dot" />

              <div>
                <small>BASED IN</small>
                <strong>LAHORE, PAKISTAN</strong>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="company-profile__media"
            initial={{ opacity: 0, scale: 0.975 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="company-profile__media-top">
              <span>PRODUCT / FASTENING COMPONENT</span>
              <span>AF7</span>
            </div>

            <div className="company-profile__image">
              <img
                src="/hero.jpeg"
                alt="AF7 apparel fastener"
              />

              <div className="company-profile__image-overlay" />

              <span className="company-profile__crop company-profile__crop--tl" />
              <span className="company-profile__crop company-profile__crop--tr" />
              <span className="company-profile__crop company-profile__crop--bl" />
              <span className="company-profile__crop company-profile__crop--br" />

              <span className="company-profile__marker company-profile__marker--one">
                <i />
              </span>

              <span className="company-profile__marker company-profile__marker--two">
                <i />
              </span>

              <div className="company-profile__media-caption">
                <span>AF7</span>
                <span>APPAREL FASTENER</span>
              </div>
            </div>

            <div className="company-profile__media-bottom">
              <span>PRECISION COMPONENT</span>
              <i />
              <span>APPAREL APPLICATION</span>
            </div>
          </motion.div>
        </div>

        {/* SIDE DETAIL */}
        <div className="company-profile__vertical">
          <span>AF7 / APPAREL FASTENER</span>
          <i />
          <span>LAHORE · PAKISTAN</span>
        </div>
      </div>

      {/* =========================================
          FULL-WIDTH WHITE INFORMATION PAGE
      ========================================= */}
      <div className="company-profile__information">
        <div className="company-profile__information-inner">
          <div className="company-profile__information-title">
            <span>COMPANY OVERVIEW</span>

            <h3>
              A focused approach to
              <br />
              apparel fastening.
            </h3>
          </div>

          <div className="company-profile__information-copy">
            <p>
              AF7 / Apparel Fastener represents a focused range of fastening
              components for apparel and related product applications. Based
              in Lahore, Pakistan, the company brings together a defined
              selection of zipper and slider products under one consistent
              identity.
            </p>

            <p>
              From metal and aluminium constructions to nylon and Vislon
              zippers, supported by brass and stainless steel sliders, the
              range is structured around the practical fastening requirements
              of modern apparel and accessories.
            </p>
          </div>
        </div>

        {/* FACTS INSIDE SAME WHITE PAGE */}
        <div className="company-profile__facts">
          {facts.map(([label, value]) => (
            <div className="company-profile__fact" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          PAGE FOOTER
      ========================================= */}
      <div className="company-profile__footer">
        <div className="company-profile__footer-inner">
          <span>AF7 / APPAREL FASTENER</span>

          <div className="company-profile__footer-mark">
            <i />
            <b />
            <i />
          </div>

          <span>LAHORE · PAKISTAN</span>
        </div>
      </div>
    </section>
  );
}