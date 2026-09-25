"use client";

import { motion } from "framer-motion";
import "./Applications.css";

const applications = [
  {
    title: "APPAREL",
    description:
      "Fastening components integrated into apparel products where construction, appearance and finishing work together.",
    image: "/applications/apparel.webp",
  },
  {
    title: "DENIM",
    description:
      "Zipper and slider applications across denim garments, from everyday construction to premium product detailing.",
    image: "/applications/denim.webp",
  },
  {
    title: "JACKETS",
    description:
      "Fastening components used across jackets and outerwear where the zipper becomes an important part of the garment.",
    image: "/applications/jackets.webp",
  },
  {
    title: "BAGS",
    description:
      "Zipper applications for bags and accessories, bringing fastening functionality into finished product design.",
    image: "/applications/bags.webp",
  },
  {
    title: "FOOTWEAR",
    description:
      "Fastening components integrated into footwear and related product constructions.",
    image: "/applications/footwear.webp",
  },
  {
    title: "SPORTSWEAR",
    description:
      "Zipper applications across performance-inspired apparel and sportswear products.",
    image: "/applications/sportswear.webp",
  },
];

export default function Applications() {
  return (
    <section className="applications-section" id="applications">
      {/* =========================================
          HEADER
      ========================================= */}
      <header className="applications-section__header">
        <div className="applications-section__header-inner">
          <div className="applications-section__header-left">
            <span>APPLICATIONS</span>
            <i />
            <span>AF7 / APPAREL FASTENER</span>
          </div>

          <span className="applications-section__header-right">
            LAHORE Â· PAKISTAN
          </span>
        </div>
      </header>

      {/* =========================================
          INTRO
      ========================================= */}
      <div className="applications-section__intro">
        <div className="applications-section__intro-inner">
          <div className="applications-section__intro-title">
            <span>APPLICATION RANGE</span>

            <h2>
              Designed to become
              <br />
              part of the product.
            </h2>
          </div>

          <div className="applications-section__intro-copy">
            <p>
              AF7 fastening components are intended for use across apparel and
              related product categories. The zipper becomes part of the final
              product â€” contributing to its construction, appearance and
              everyday use.
            </p>

            <div className="applications-section__intro-rule" />

            <div className="applications-section__intro-meta">
              <span>APPAREL</span>
              <span>DENIM</span>
              <span>JACKETS</span>
              <span>BAGS</span>
              <span>FOOTWEAR</span>
              <span>SPORTSWEAR</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          FEATURED APPLICATION
      ========================================= */}
      <div className="applications-section__featured">
        <div className="applications-section__featured-image">
          <img
            src="/applications/apparel.webp"
            alt="AF7 apparel application"
          />

          <div className="applications-section__featured-overlay" />

          <div className="applications-section__featured-label">
            <span>APPLICATION</span>
            <i />
            <strong>APPAREL</strong>
          </div>

          <span className="applications-section__crop applications-section__crop--tl" />
          <span className="applications-section__crop applications-section__crop--tr" />
          <span className="applications-section__crop applications-section__crop--bl" />
          <span className="applications-section__crop applications-section__crop--br" />
        </div>

        <div className="applications-section__featured-info">
          <span className="applications-section__featured-kicker">
            PRIMARY APPLICATION
          </span>

          <h3>
            APPAREL
            <br />
            FASTENING
          </h3>

          <p>
            From garment construction to visible product detailing, fastening
            components form an important part of how an apparel product comes
            together.
          </p>

          <div className="applications-section__featured-rule" />

          <div className="applications-section__featured-detail">
            <span>PRODUCT</span>
            <strong>ZIPPER + SLIDER</strong>
          </div>

          <div className="applications-section__featured-detail">
            <span>APPLICATION</span>
            <strong>APPAREL PRODUCTS</strong>
          </div>
        </div>
      </div>

      {/* =========================================
          APPLICATION GRID
      ========================================= */}
      <div className="applications-section__catalog">
        <div className="applications-section__catalog-heading">
          <span>APPLICATIONS</span>

          <p>
            A selection of product categories where fastening components form
            part of the finished construction.
          </p>
        </div>

        <div className="applications-section__grid">
          {applications.slice(1).map((application, index) => (
            <motion.article
              className="application-card"
              key={application.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="application-card__image">
                <img
                  src={application.image}
                  alt={`AF7 ${application.title}`}
                />

                <div className="application-card__overlay" />

                <span className="application-card__label">
                  AF7
                </span>
              </div>

              <div className="application-card__content">
                <div className="application-card__heading">
                  <span>APPLICATION</span>
                  <h3>{application.title}</h3>
                </div>

                <div className="application-card__rule" />

                <p>{application.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* =========================================
          APPLICATION STATEMENT
      ========================================= */}
      <div className="applications-section__statement">
        <div className="applications-section__statement-inner">
          <div className="applications-section__statement-mark">
            <span>AF7</span>
            <i />
            <span>APPLICATION</span>
          </div>

          <h3>
            From component
            <br />
            to finished product.
          </h3>

          <p>
            AF7 components are developed as part of a wider product
            construction, connecting fastening functionality with the visual
            language of the finished garment or accessory.
          </p>
        </div>
      </div>

      {/* =========================================
          FOOTER
      ========================================= */}
      <footer className="applications-section__footer">
        <div className="applications-section__footer-inner">
          <span>AF7 / APPAREL FASTENER</span>

          <div className="applications-section__footer-mark">
            <i />
            <b />
            <i />
          </div>

          <span>LAHORE Â· PAKISTAN</span>
        </div>
      </footer>
    </section>
  );
}

