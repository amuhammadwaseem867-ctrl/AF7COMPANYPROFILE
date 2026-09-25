"use client";

import { motion } from "framer-motion";
import "./PackagingDispatch.css";

const corrugatedBoxes = [
  "20 × 11 × 12",
  "18 × 12 × 8",
  "18 × 12 × 8",
  "15 × 10 × 6",
];

const lldBags = [
  "6.5 × 11.5",
  "6.5 × 8.8",
  "9.5 × 14",
  "10.5 × 32.5",
];

const packingSteps = [
  {
    title: "PRODUCT PREPARATION",
    text: "Fastening components are prepared according to the required product and packing format.",
  },
  {
    title: "PACKING",
    text: "Products are organized into the appropriate packaging format for clear and practical handling.",
  },
  {
    title: "IDENTIFICATION",
    text: "Packaging provides a defined format for product and order identification where required.",
  },
  {
    title: "DISPATCH",
    text: "Packed products are prepared for the next stage of handling and movement.",
  },
];

export default function PackagingDispatch() {
  return (
    <section className="packaging-section" id="packaging">
      {/* HEADER */}
      <header className="packaging-section__header">
        <div className="packaging-section__header-inner">
          <div className="packaging-section__header-left">
            <span>PACKAGING & DISPATCH</span>
            <i />
            <span>AF7 / APPAREL FASTENER</span>
          </div>

          <span className="packaging-section__header-right">
            LAHORE · PAKISTAN
          </span>
        </div>
      </header>

      {/* INTRO */}
      <div className="packaging-section__intro">
        <div className="packaging-section__intro-inner">
          <div className="packaging-section__intro-title">
            <span>PACKAGING SYSTEM</span>

            <h2>
              Packed with
              <br />
              clear purpose.
            </h2>
          </div>

          <div className="packaging-section__intro-copy">
            <p>
              AF7 packaging provides defined formats for organizing,
              identifying and handling fastening components.
            </p>

            <p>
              The packaging range includes corrugated boxes and LLD poly bags
              in multiple supplied dimensions, supporting different product
              and packing requirements.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURED SINGLE BOX */}
      <div className="packaging-section__featured">
        <div className="packaging-section__featured-image">
          <img
            src="/packaging/corrugated-box.jpg"
            alt="AF7 corrugated box"
          />

          <div className="packaging-section__featured-overlay" />

          <div className="packaging-section__featured-label">
            <span>AF7</span>
            <i />
            <strong>CORRUGATED BOX</strong>
          </div>

          <span className="packaging-section__crop packaging-section__crop--tl" />
          <span className="packaging-section__crop packaging-section__crop--tr" />
          <span className="packaging-section__crop packaging-section__crop--bl" />
          <span className="packaging-section__crop packaging-section__crop--br" />
        </div>

        <div className="packaging-section__featured-info">
          <span className="packaging-section__featured-kicker">
            PACKAGING FORMAT
          </span>

          <h3>
            CORRUGATED
            <br />
            BOXES
          </h3>

          <p>
            Corrugated boxes provide a structured format for packing and
            organizing AF7 fastening products.
          </p>

          <div className="packaging-section__featured-rule" />

          <div className="packaging-section__featured-detail">
            <span>FORMAT</span>
            <strong>BOX PACKAGING</strong>
          </div>

          <div className="packaging-section__featured-detail">
            <span>RANGE</span>
            <strong>4 DIMENSIONS</strong>
          </div>

          <div className="packaging-section__featured-detail">
            <span>USE</span>
            <strong>PRODUCT PACKING</strong>
          </div>
        </div>
      </div>

      {/* PACKAGING FORMATS */}
      <section className="packaging-section__formats">
        <div className="packaging-section__formats-inner">
          <div className="packaging-section__formats-heading">
            <div>
              <span>PACKAGING FORMATS</span>

              <h3>
                Two formats.
                <br />
                Multiple dimensions.
              </h3>
            </div>

            <p>
              AF7 packaging is presented through two defined formats:
              corrugated boxes and LLD poly bags.
            </p>
          </div>

          <div className="packaging-section__format-list">
            {/* CORRUGATED */}
            <article className="packaging-format">
              <div className="packaging-format__top">
                <span>01</span>

                <div>
                  <small>CORRUGATED</small>
                  <h4>BOXES</h4>
                </div>
              </div>

              <div className="packaging-format__image">
                <img
                  src="/packaging/corrugated-box.jpg"
                  alt="AF7 corrugated box packaging"
                />

                <span className="packaging-format__corner packaging-format__corner--tl" />
                <span className="packaging-format__corner packaging-format__corner--br" />
              </div>

              <div className="packaging-format__bottom">
                <div className="packaging-format__bottom-title">
                  <span>SUPPLIED DIMENSIONS</span>
                  <i />
                </div>

                <div className="packaging-format__dimensions">
                  {corrugatedBoxes.map((dimension, index) => (
                    <div key={`${dimension}-${index}`}>
                      <span>BOX {String(index + 1).padStart(2, "0")}</span>
                      <strong>{dimension}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* LLD */}
            <article className="packaging-format packaging-format--lld">
              <div className="packaging-format__top">
                <span>02</span>

                <div>
                  <small>LLD</small>
                  <h4>POLY BAGS</h4>
                </div>
              </div>

              <div className="packaging-format__image">
                <img
                  src="/packaging/lld-bag.jpg"
                  alt="AF7 LLD poly bag"
                />

                <span className="packaging-format__corner packaging-format__corner--tl" />
                <span className="packaging-format__corner packaging-format__corner--br" />
              </div>

              <div className="packaging-format__bottom">
                <div className="packaging-format__bottom-title">
                  <span>SUPPLIED DIMENSIONS</span>
                  <i />
                </div>

                <div className="packaging-format__dimensions">
                  {lldBags.map((dimension, index) => (
                    <div key={`${dimension}-${index}`}>
                      <span>BAG {String(index + 1).padStart(2, "0")}</span>
                      <strong>{dimension}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* STACK IMAGE */}
      <section className="packaging-section__stack">
        <div className="packaging-section__stack-inner">
          <div className="packaging-section__stack-copy">
            <span>PACKAGING IN PRACTICE</span>

            <h3>
              Organized for
              <br />
              clear handling.
            </h3>

            <p>
              Packaging brings individual fastening components into an
              organized format for product handling and the next stage of the
              supply process.
            </p>

            <div className="packaging-section__stack-rule" />

            <div className="packaging-section__stack-meta">
              <span>AF7 / APPAREL FASTENER</span>
              <span>CORRUGATED PACKAGING</span>
            </div>
          </div>

          <motion.div
            className="packaging-section__stack-image"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <img
              src="/packaging/box-stack.jpg"
              alt="AF7 corrugated boxes stacked for packaging"
            />

            <div className="packaging-section__stack-overlay" />

            <div className="packaging-section__stack-label">
              <span>AF7</span>
              <i />
              <strong>PACKAGED PRODUCT</strong>
            </div>

            <span className="packaging-section__crop packaging-section__crop--tl" />
            <span className="packaging-section__crop packaging-section__crop--tr" />
            <span className="packaging-section__crop packaging-section__crop--bl" />
            <span className="packaging-section__crop packaging-section__crop--br" />
          </motion.div>
        </div>
      </section>

      {/* PACKING FLOW */}
      <section className="packaging-section__workflow">
        <div className="packaging-section__workflow-inner">
          <div className="packaging-section__workflow-title">
            <span>PACKING FLOW</span>

            <h3>
              From product
              <br />
              to dispatch.
            </h3>

            <p>
              A straightforward sequence connects the finished fastening
              component with its packaging and subsequent handling.
            </p>
          </div>

          <div className="packaging-section__workflow-list">
            {packingSteps.map((step, index) => (
              <motion.div
                className="packing-step"
                key={step.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                <div className="packing-step__number">
                  0{index + 1}
                </div>

                <div className="packing-step__content">
                  <div className="packing-step__top">
                    <span>{step.title}</span>
                    <i />
                  </div>

                  <p>{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <div className="packaging-section__statement">
        <div className="packaging-section__statement-inner">
          <div className="packaging-section__statement-mark">
            <span>AF7</span>
            <i />
            <span>PACKAGING SYSTEM</span>
          </div>

          <h3>
            Clear packaging.
            <br />
            Clear handling.
          </h3>

          <p>
            AF7 packaging brings fastening components into defined formats
            designed around product organization, identification and handling.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="packaging-section__footer">
        <div className="packaging-section__footer-inner">
          <span>AF7 / APPAREL FASTENER</span>

          <div className="packaging-section__footer-mark">
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