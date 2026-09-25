"use client";

import { motion } from "framer-motion";
import "./GlobalBusiness.css";

const businessPoints = [
  {
    title: "LAHORE BASE",
    text: "AF7 / Apparel Fastener is based in Lahore, Pakistan, with its business identity centered around apparel fastening products.",
  },
  {
    title: "APPAREL FOCUS",
    text: "The product range is structured around fastening components used across apparel and related product applications.",
  },
  {
    title: "PRODUCT RANGE",
    text: "Metal, aluminium, nylon and Vislon zippers are supported by brass and stainless steel slider components.",
  },
  {
    title: "BUSINESS APPROACH",
    text: "A focused product range allows AF7 to communicate clearly with manufacturers, designers and product businesses.",
  },
];

const regions = [
  "APPAREL",
  "DENIM",
  "OUTERWEAR",
  "BAGS",
  "FOOTWEAR",
  "SPORTSWEAR",
];

export default function GlobalBusiness() {
  return (
    <section className="global-business" id="global">
      {/* HEADER */}
      <header className="global-business__header">
        <div className="global-business__header-inner">
          <div className="global-business__header-left">
            <span>GLOBAL / BUSINESS</span>
            <i />
            <span>AF7 / APPAREL FASTENER</span>
          </div>

          <span className="global-business__header-right">
            LAHORE · PAKISTAN
          </span>
        </div>
      </header>

      {/* INTRO */}
      <div className="global-business__intro">
        <div className="global-business__intro-inner">
          <div className="global-business__intro-title">
            <span>BUSINESS PROFILE</span>

            <h2>
              Built in Lahore.
              <br />
              Connected to product.
            </h2>
          </div>

          <div className="global-business__intro-copy">
            <p>
              AF7 / Apparel Fastener is a Lahore-based fastening brand focused
              on zipper and slider components for apparel and related product
              applications.
            </p>

            <p>
              The business profile is built around a defined product range,
              manufacturing focus and a clear understanding of where fastening
              components become part of the finished product.
            </p>
          </div>
        </div>
      </div>

      {/* LOCATION / BUSINESS SPREAD */}
      <section className="global-business__spread">
        <div className="global-business__spread-panel">
          <div className="global-business__spread-top">
            <span>01</span>
            <span>BUSINESS BASE</span>
          </div>

          <div className="global-business__spread-main">
            <span className="global-business__location-label">
              BASED IN
            </span>

            <h3>
              LAHORE
              <br />
              PAKISTAN
            </h3>

            <div className="global-business__coordinates">
              <span>AF7 / APPAREL FASTENER</span>
              <i />
              <span>MANUFACTURING</span>
            </div>
          </div>

          <div className="global-business__spread-bottom">
            <span>BUSINESS PROFILE</span>
            <span>AF7</span>
          </div>
        </div>

        <div className="global-business__map">
          <div className="global-business__map-grid" />

          <div className="global-business__map-outline">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="global-business__map-marker">
            <div className="global-business__map-pulse" />
            <div className="global-business__map-dot" />
          </div>

          <div className="global-business__map-label">
            <span>AF7 BASE</span>
            <strong>LAHORE · PAKISTAN</strong>
          </div>

          <div className="global-business__map-caption">
            <span>LOCATION</span>
            <i />
            <span>PAKISTAN</span>
          </div>

          <div className="global-business__map-corner global-business__map-corner--tl" />
          <div className="global-business__map-corner global-business__map-corner--br" />
        </div>
      </section>

      {/* BUSINESS AREAS */}
      <section className="global-business__areas">
        <div className="global-business__areas-inner">
          <div className="global-business__areas-heading">
            <span>BUSINESS AREAS</span>

            <h3>
              A focused product
              <br />
              system for industry.
            </h3>

            <p>
              AF7's fastening components can be considered across a range of
              finished product categories where zipper and slider components
              form part of the construction.
            </p>
          </div>

          <div className="global-business__areas-list">
            {businessPoints.map((item, index) => (
              <motion.article
                className="business-point"
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="business-point__top">
                  <span>0{index + 1}</span>
                  <i />
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FIELD */}
      <section className="global-business__field">
        <div className="global-business__field-inner">
          <div className="global-business__field-header">
            <span>APPLICATION FIELD</span>

            <p>
              AF7 fastening components are positioned within product
              categories where construction and fastening requirements meet.
            </p>
          </div>

          <div className="global-business__field-list">
            {regions.map((region, index) => (
              <motion.div
                className="business-region"
                key={region}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >
                <span>0{index + 1}</span>
                <strong>{region}</strong>
                <i />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS CONNECTION */}
      <section className="global-business__connection">
        <div className="global-business__connection-inner">
          <div className="global-business__connection-copy">
            <span>BUSINESS CONNECTION</span>

            <h3>
              From fastening
              <br />
              component to
              <br />
              finished product.
            </h3>

            <p>
              AF7 operates within the wider apparel product ecosystem, where
              fastening components become part of garments, accessories and
              related products.
            </p>

            <div className="global-business__connection-rule" />

            <div className="global-business__connection-meta">
              <span>AF7 / APPAREL FASTENER</span>
              <span>LAHORE · PAKISTAN</span>
            </div>
          </div>

          <div className="global-business__connection-graphic">
            <div className="connection-ring connection-ring--outer" />
            <div className="connection-ring connection-ring--middle" />
            <div className="connection-ring connection-ring--inner" />

            <div className="connection-core">
              <span>AF7</span>
              <small>APPAREL<br />FASTENER</small>
            </div>

            <div className="connection-node connection-node--top">
              <span>PRODUCT</span>
            </div>

            <div className="connection-node connection-node--right">
              <span>APPLICATION</span>
            </div>

            <div className="connection-node connection-node--bottom">
              <span>BUSINESS</span>
            </div>

            <div className="connection-node connection-node--left">
              <span>MANUFACTURING</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <div className="global-business__statement">
        <div className="global-business__statement-inner">
          <div className="global-business__statement-mark">
            <span>AF7</span>
            <i />
            <span>GLOBAL / BUSINESS</span>
          </div>

          <h3>
            A clear product
            <br />
            identity, built from Lahore.
          </h3>

          <p>
            AF7 brings its apparel fastening range together through a focused
            business identity rooted in Lahore, Pakistan.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="global-business__footer">
        <div className="global-business__footer-inner">
          <span>AF7 / APPAREL FASTENER</span>

          <div className="global-business__footer-mark">
            <i />
            <b />
            <i />
          </div>

          <span>LAHORE · PAKISTAN</span>
        </div>
      </footer>
    </section>
  );
}