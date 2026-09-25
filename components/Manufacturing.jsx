"use client";

import { motion } from "framer-motion";
import "./Manufacturing.css";

const processSteps = [
  {
    title: "MATERIAL",
    text: "Production begins with the components and materials required for the selected fastening construction.",
  },
  {
    title: "FORMATION",
    text: "Components move through the relevant production stages to form the required zipper or slider construction.",
  },
  {
    title: "ASSEMBLY",
    text: "Individual fastening components are brought together into finished product configurations.",
  },
  {
    title: "CHECKING",
    text: "Finished components are checked as part of the production and quality-control process.",
  },
];

const productionImages = [
  {
    image: "/manufacturing/factory.jpg",
    label: "PRODUCTION ENVIRONMENT",
  },
  {
    image: "/manufacturing/machinery.jpg",
    label: "MACHINERY",
  },
  {
    image: "/manufacturing/production.jpg",
    label: "PRODUCTION PROCESS",
  },
];

export default function Manufacturing() {
  return (
    <section className="manufacturing-section" id="manufacturing">
      {/* =========================================
          HEADER
      ========================================= */}
      <header className="manufacturing-section__header">
        <div className="manufacturing-section__header-inner">
          <div className="manufacturing-section__header-left">
            <span>MANUFACTURING</span>
            <i />
            <span>AF7 / APPAREL FASTENER</span>
          </div>

          <span className="manufacturing-section__header-right">
            LAHORE · PAKISTAN
          </span>
        </div>
      </header>

      {/* =========================================
          INTRO
      ========================================= */}
      <div className="manufacturing-section__intro">
        <div className="manufacturing-section__intro-inner">
          <div className="manufacturing-section__intro-title">
            <span>MANUFACTURING APPROACH</span>

            <h2>
              Production built
              <br />
              around precision.
            </h2>
          </div>

          <div className="manufacturing-section__intro-copy">
            <p>
              AF7's manufacturing approach brings together production,
              assembly and checking processes around a focused range of
              apparel fastening components.
            </p>

            <p>
              Based in Lahore, Pakistan, the manufacturing environment supports
              the production of zipper and slider components for apparel and
              related product applications.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          FEATURED FACTORY SPREAD
      ========================================= */}
      <div className="manufacturing-section__featured">
        <div className="manufacturing-section__featured-image">
          <img
            src="/manufacturing/factory.jpg"
            alt="AF7 manufacturing environment"
          />

          <div className="manufacturing-section__featured-overlay" />

          <div className="manufacturing-section__featured-label">
            <span>AF7</span>
            <i />
            <strong>MANUFACTURING / LAHORE</strong>
          </div>

          <span className="manufacturing-section__crop manufacturing-section__crop--tl" />
          <span className="manufacturing-section__crop manufacturing-section__crop--tr" />
          <span className="manufacturing-section__crop manufacturing-section__crop--bl" />
          <span className="manufacturing-section__crop manufacturing-section__crop--br" />
        </div>

        <div className="manufacturing-section__featured-info">
          <span className="manufacturing-section__featured-kicker">
            PRODUCTION ENVIRONMENT
          </span>

          <h3>
            FROM
            <br />
            COMPONENT
            <br />
            TO PRODUCT.
          </h3>

          <p>
            Manufacturing at AF7 is structured around the stages required to
            turn fastening components into consistent finished products.
          </p>

          <div className="manufacturing-section__featured-rule" />

          <div className="manufacturing-section__featured-detail">
            <span>LOCATION</span>
            <strong>LAHORE, PAKISTAN</strong>
          </div>

          <div className="manufacturing-section__featured-detail">
            <span>FOCUS</span>
            <strong>APPAREL FASTENERS</strong>
          </div>

          <div className="manufacturing-section__featured-detail">
            <span>PROCESS</span>
            <strong>PRODUCTION / ASSEMBLY / CHECKING</strong>
          </div>
        </div>
      </div>

      {/* =========================================
          PRODUCTION IMAGES
      ========================================= */}
      <div className="manufacturing-section__visuals">
        <div className="manufacturing-section__visuals-heading">
          <span>PRODUCTION ENVIRONMENT</span>

          <p>
            Manufacturing is represented through the spaces, equipment and
            production stages behind the finished fastening component.
          </p>
        </div>

        <div className="manufacturing-section__visual-grid">
          {productionImages.slice(1).map((item, index) => (
            <motion.figure
              className={`manufacturing-visual ${
                index === 1 ? "manufacturing-visual--wide" : ""
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
              <div className="manufacturing-visual__image">
                <img src={item.image} alt={item.label} />

                <span className="manufacturing-visual__crop manufacturing-visual__crop--tl" />
                <span className="manufacturing-visual__crop manufacturing-visual__crop--br" />
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

      {/* =========================================
          PROCESS
      ========================================= */}
      <div className="manufacturing-section__process">
        <div className="manufacturing-section__process-inner">
          <div className="manufacturing-section__process-title">
            <span>PRODUCTION FLOW</span>

            <h3>
              A structured path
              <br />
              through production.
            </h3>
          </div>

          <div className="manufacturing-section__steps">
            {processSteps.map((step) => (
              <div
                className="manufacturing-step"
                key={step.title}
              >
                <div className="manufacturing-step__top">
                  <span>{step.title}</span>
                  <i />
                </div>

                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          TECHNICAL STATEMENT
      ========================================= */}
      <div className="manufacturing-section__statement">
        <div className="manufacturing-section__statement-inner">
          <div className="manufacturing-section__statement-mark">
            <span>AF7</span>
            <i />
            <span>PRODUCTION</span>
          </div>

          <h3>
            Manufacturing
            <br />
            with purpose.
          </h3>

          <p>
            A focused production approach keeps the attention on the fastening
            component — its construction, assembly, consistency and role in
            the finished product.
          </p>
        </div>
      </div>

      {/* =========================================
          FOOTER
      ========================================= */}
      <footer className="manufacturing-section__footer">
        <div className="manufacturing-section__footer-inner">
          <span>AF7 / APPAREL FASTENER</span>

          <div className="manufacturing-section__footer-mark">
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