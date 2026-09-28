"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "./Customization.css";

const customizationPoints = [
  {
    title: "CUSTOM DETAILS",
    text: "Fastening components can be developed around the visual and functional requirements of the finished product.",
  },
  {
    title: "LOGO APPLICATION",
    text: "Brand identification can become part of the fastening component through appropriate logo and marking applications.",
  },
  {
    title: "COMPONENT OPTIONS",
    text: "Different zipper and slider constructions provide flexibility across apparel and related product applications.",
  },
  {
    title: "PRODUCT REQUIREMENTS",
    text: "The fastening component is considered in relation to the construction, appearance and requirements of the final product.",
  },
];

const customizationVisuals = [
  {
    image: "/customization/custom-zipper.webp",
    label: "CUSTOM ZIPPER DETAIL",
  },
  {
    image: "/customization/custom-slider.webp",
    label: "CUSTOM SLIDER",
  },
  {
    image: "/customization/logo-application.webp",
    label: "LOGO APPLICATION",
  },
];

export default function Customization() {
  return (
    <section className="customization-section" id="customization">
      {/* HEADER */}
      <header className="customization-section__header">
        <div className="customization-section__header-inner">
          <div className="customization-section__header-left">
            <span>CUSTOMIZATION</span>
            <i />
            <span>AF7 / APPAREL FASTENER</span>
          </div>

          <span className="customization-section__header-right">
            LAHORE · PAKISTAN
          </span>
        </div>
      </header>

      {/* INTRO */}
      <div className="customization-section__intro">
        <div className="customization-section__intro-inner">
          <div className="customization-section__intro-title">
            <span>CUSTOM FASTENING</span>

            <h2>
              Details shaped
              <br />
              around the product.
            </h2>
          </div>

          <div className="customization-section__intro-copy">
            <p>
              Every finished product has its own construction, visual language
              and fastening requirements. AF7 customization brings the
              fastening component into that wider product context.
            </p>

            <p>
              From component details and slider treatments to brand
              identification, customization focuses on creating fastening
              components that belong naturally within the finished product.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURED CUSTOMIZATION */}
      <div className="customization-section__featured">
        <div className="customization-section__featured-image">
          <Image
            src="/customization/custom-zipper.webp"
            alt="AF7 custom zipper detail"
            fill
            sizes="(max-width: 760px) 100vw, 60vw"
            style={{ objectFit: "cover", objectPosition: "center", aspectRatio: "1920 / 1072" }}
          />

          <div className="customization-section__featured-overlay" />

          <div className="customization-section__featured-label">
            <span>AF7</span>
            <i />
            <strong>CUSTOM FASTENING / DETAIL</strong>
          </div>

          <span className="customization-section__crop customization-section__crop--tl" />
          <span className="customization-section__crop customization-section__crop--tr" />
          <span className="customization-section__crop customization-section__crop--bl" />
          <span className="customization-section__crop customization-section__crop--br" />
        </div>

        <div className="customization-section__featured-info">
          <span className="customization-section__featured-kicker">
            PRODUCT DEVELOPMENT
          </span>

          <h3>
            MADE
            <br />
            FOR THE
            <br />
            PRODUCT.
          </h3>

          <p>
            Customization allows the fastening component to be considered as
            part of the final garment, accessory or product rather than as an
            isolated component.
          </p>

          <div className="customization-section__featured-rule" />

          <div className="customization-section__featured-detail">
            <span>FOCUS</span>
            <strong>ZIPPER + SLIDER</strong>
          </div>

          <div className="customization-section__featured-detail">
            <span>DETAIL</span>
            <strong>COMPONENT / BRANDING / FINISH</strong>
          </div>

          <div className="customization-section__featured-detail">
            <span>USE</span>
            <strong>APPAREL + RELATED PRODUCTS</strong>
          </div>
        </div>
      </div>

      {/* VISUALS */}
      <div className="customization-section__visuals">
        <div className="customization-section__visuals-heading">
          <span>CUSTOMIZATION DETAILS</span>

          <p>
            Product details can become part of the overall identity of the
            finished garment or accessory, from the fastening construction to
            visible brand application.
          </p>
        </div>

        <div className="customization-section__visual-grid">
          {customizationVisuals.slice(1).map((item, index) => (
            <motion.figure
              className={`customization-visual ${
                index === 1 ? "customization-visual--wide" : ""
              }`}
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="customization-visual__image">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 760px) 100vw, 45vw"
                  style={{ objectFit: "cover", objectPosition: "center", aspectRatio: "1920 / 1072" }}
                />

                <span className="customization-visual__crop customization-visual__crop--tl" />
                <span className="customization-visual__crop customization-visual__crop--br" />
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

      {/* CUSTOMIZATION POINTS */}
      <div className="customization-section__system">
        <div className="customization-section__system-inner">
          <div className="customization-section__system-title">
            <span>CUSTOMIZATION AREAS</span>

            <h3>
              The component
              <br />
              follows the product.
            </h3>
          </div>

          <div className="customization-section__points">
            {customizationPoints.map((point) => (
              <div
                className="customization-point"
                key={point.title}
              >
                <div className="customization-point__top">
                  <span>{point.title}</span>
                  <i />
                </div>

                <p>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DETAIL SPREAD */}
      <div className="customization-section__detail">
        <div className="customization-section__detail-copy">
          <span>BRAND IDENTIFICATION</span>

          <h3>
            Your brand
            <br />
            in the detail.
          </h3>

          <p>
            A fastening component can contribute to the identity of the final
            product. Logo and marking applications bring brand recognition
            directly into the product detail.
          </p>

          <div className="customization-section__detail-line" />

          <div className="customization-section__detail-meta">
            <span>AF7 / APPAREL FASTENER</span>
            <span>CUSTOM APPLICATION</span>
          </div>
        </div>

        <div className="customization-section__detail-image">
          <Image
            src="/customization/logo-application.webp"
            alt="AF7 logo application on fastening component"
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
            style={{ objectFit: "cover", objectPosition: "center", aspectRatio: "1536 / 2752" }}
          />

          <div className="customization-section__detail-overlay" />

          <div className="customization-section__detail-label">
            <span>AF7</span>
            <i />
            <span>LOGO APPLICATION</span>
          </div>
        </div>
      </div>

      {/* STATEMENT */}
      <div className="customization-section__statement">
        <div className="customization-section__statement-inner">
          <div className="customization-section__statement-mark">
            <span>AF7</span>
            <i />
            <span>CUSTOMIZATION</span>
          </div>

          <h3>
            The smallest
            <br />
            detail matters.
          </h3>

          <p>
            Custom fastening brings product construction, component detail and
            brand identity together at the point where the zipper becomes part
            of the finished product.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="customization-section__footer">
        <div className="customization-section__footer-inner">
          <span>AF7 / APPAREL FASTENER</span>

          <div className="customization-section__footer-mark">
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

