"use client";

import { motion } from "framer-motion";
import "./Quality.css";

const qualityPoints = [
  {
    title: "VISUAL CHECKING",
    text: "Finished fastening components are visually reviewed for overall appearance, construction and finishing.",
  },
  {
    title: "COMPONENT CHECK",
    text: "Zippers and sliders are checked as individual components before becoming part of the finished product.",
  },
  {
    title: "CONSISTENCY",
    text: "Attention to consistency supports a more uniform product across the fastening range.",
  },
  {
    title: "FINISHED PRODUCT",
    text: "The final component is considered as part of the wider apparel or accessory construction.",
  },
];

const qualityImages = [
  {
    image: "/quality/zipper-check.webp",
    label: "ZIPPER CHECKING",
  },
  {
    image: "/quality/slider-check.webp",
    label: "SLIDER CHECKING",
  },
];

export default function Quality() {
  return (
    <section className="quality-section" id="quality">
      {/* HEADER */}
      <header className="quality-section__header">
        <div className="quality-section__header-inner">
          <div className="quality-section__header-left">
            <span>QUALITY</span>
            <i />
            <span>AF7 / APPAREL FASTENER</span>
          </div>

          <span className="quality-section__header-right">
            LAHORE · PAKISTAN
          </span>
        </div>
      </header>

      {/* INTRO */}
      <div className="quality-section__intro">
        <div className="quality-section__intro-inner">
          <div className="quality-section__intro-title">
            <span>QUALITY APPROACH</span>

            <h2>
              Attention to
              <br />
              every component.
            </h2>
          </div>

          <div className="quality-section__intro-copy">
            <p>
              Quality at AF7 is approached through attention to the fastening
              component at different stages of production and checking.
            </p>

            <p>
              From individual zippers and sliders to finished components,
              consistent inspection helps maintain focus on construction,
              appearance and finishing.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURED QUALITY */}
      <div className="quality-section__featured">
        <motion.div
          className="quality-featured__image"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <img
            src="/quality/inspection.webp"
            alt="AF7 quality inspection"
          />

          <div className="quality-featured__gradient" />

          <div className="quality-featured__label">
            <span>AF7</span>
            <i />
            <strong>QUALITY / INSPECTION</strong>
          </div>

          <span className="quality-featured__crop quality-featured__crop--tl" />
          <span className="quality-featured__crop quality-featured__crop--tr" />
          <span className="quality-featured__crop quality-featured__crop--bl" />
          <span className="quality-featured__crop quality-featured__crop--br" />
        </motion.div>

        <motion.div
          className="quality-section__featured-info"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="quality-section__featured-kicker">
            QUALITY CONTROL
          </span>

          <h3>
            CHECK
            <br />
            EVERY
            <br />
            DETAIL.
          </h3>

          <p>
            A fastening component is only effective when its construction,
            appearance and finishing work together. AF7 keeps these details
            within the focus of its checking process.
          </p>

          <div className="quality-section__featured-rule" />

          <div className="quality-section__featured-detail">
            <span>FOCUS</span>
            <strong>ZIPPER + SLIDER</strong>
          </div>

          <div className="quality-section__featured-detail">
            <span>CHECK</span>
            <strong>COMPONENT / FINISH / APPEARANCE</strong>
          </div>

          <div className="quality-section__featured-detail">
            <span>APPLICATION</span>
            <strong>APPAREL + RELATED PRODUCTS</strong>
          </div>
        </motion.div>
      </div>

      {/* QUALITY IN PRACTICE */}
      <div className="quality-section__visuals">
        <div className="quality-section__visuals-heading">
          <div>
            <span>QUALITY IN PRACTICE</span>

            <h3>
              Inspection at
              <br />
              component level.
            </h3>
          </div>

          <p>
            Inspection and checking bring attention back to the physical
            component — its details, construction and finished appearance.
          </p>
        </div>

        <div className="quality-section__visual-grid">
          {qualityImages.map((item, index) => (
            <motion.figure
              className="quality-visual"
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="quality-visual__image">
                <img src={item.image} alt={item.label} />

                <span className="quality-visual__crop quality-visual__crop--tl" />
                <span className="quality-visual__crop quality-visual__crop--br" />
              </div>

              <figcaption>
                <span>AF7</span>
                <i />
                <strong>{item.label}</strong>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* QUALITY SYSTEM */}
      <div className="quality-section__system">
        <div className="quality-section__system-inner">
          <div className="quality-section__system-title">
            <span>CHECKING POINTS</span>

            <h3>
              Quality is built
              <br />
              into the process.
            </h3>
          </div>

          <div className="quality-section__points">
            {qualityPoints.map((point, index) => (
              <motion.div
                className="quality-point"
                key={point.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="quality-point__top">
                  <span>{point.title}</span>
                  <i />
                </div>

                <p>{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCT DETAIL */}
      <div className="quality-section__detail">
        <motion.div
          className="quality-section__detail-image"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <img
            src="/quality/detail.webp"
            alt="AF7 fastening component detail"
          />

          <div className="quality-section__detail-overlay" />

          <div className="quality-section__detail-label">
            <span>AF7</span>
            <i />
            <span>COMPONENT DETAIL</span>
          </div>
        </motion.div>

        <motion.div
          className="quality-section__detail-copy"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span>FINISHED COMPONENT</span>

          <h3>
            Precision
            <br />
            at component level.
          </h3>

          <p>
            The quality of a finished product begins with attention to the
            individual fastening component. AF7 keeps the zipper and slider
            at the centre of the checking process.
          </p>

          <div className="quality-section__detail-line" />

          <div className="quality-section__detail-meta">
            <span>AF7 / APPAREL FASTENER</span>
            <span>LAHORE · PAKISTAN</span>
          </div>
        </motion.div>
      </div>

      {/* STATEMENT */}
      <div className="quality-section__statement">
        <div className="quality-section__statement-inner">
          <div className="quality-section__statement-mark">
            <span>AF7</span>
            <i />
            <span>QUALITY</span>
          </div>

          <h3>
            Detail is not
            <br />
            an afterthought.
          </h3>

          <p>
            Every fastening component becomes part of a finished product.
            Attention to its details helps maintain the consistency expected
            from the AF7 product range.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="quality-section__footer">
        <div className="quality-section__footer-inner">
          <span>AF7 / APPAREL FASTENER</span>

          <div className="quality-section__footer-mark">
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