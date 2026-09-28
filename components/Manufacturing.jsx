"use client";

import { motion } from "framer-motion";
import "./Manufacturing.css";

const LOGO = "/af7logo-27.svg";

const photos = {
  hero: "/manufacturing/factory.webp",
  machinery: "/manufacturing/machinery.webp",
  production: "/manufacturing/production.webp",
  five: "/manufacturing/5.webp",
  six: "/manufacturing/6.webp",
  seven: "/manufacturing/7.webp",
  nine: "/manufacturing/9.webp",
  eleven: "/manufacturing/11.webp",
  thirteen: "/manufacturing/13.webp",
  fourteen: "/manufacturing/14.webp",
};

const processSteps = [
  {
    no: "01",
    title: "MATERIAL",
    text: "Production begins with the components and materials required for the selected fastening construction.",
  },
  {
    no: "02",
    title: "FORMATION",
    text: "Components move through the relevant production stages to form the required zipper or slider construction.",
  },
  {
    no: "03",
    title: "ASSEMBLY",
    text: "Individual fastening components are brought together into finished product configurations.",
  },
  {
    no: "04",
    title: "CHECKING",
    text: "Finished components are checked as part of the production and quality-control process.",
  },
];

function Photo({ src, alt = "AF7 manufacturing documentation", className = "", priority = false }) {
  return (
    <motion.figure
      className={`mf-photo ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </motion.figure>
  );
}

export default function Manufacturing() {
  return (
    <section className="mf-section" id="manufacturing">

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <header className="mf-topbar">
        <div className="mf-topbar-left">
          <span>MANUFACTURING</span>
          <i />
          <img src={LOGO} alt="AF7 Apparel Fastener" />
        </div>

        <span className="mf-location">
          LAHORE · PAKISTAN
        </span>
      </header>


      {/* =====================================================
          OPENING
      ===================================================== */}

      <section className="mf-opening">
        <div className="mf-opening-label">
          <span className="mf-line" />
          <span>MANUFACTURING APPROACH</span>
        </div>

        <div className="mf-opening-main">
          <h1>
            Made with
            <br />
            precision.
          </h1>

          <div className="mf-opening-copy">
            <p>
              AF7 manufacturing brings together materials, machinery,
              production and assembly within a focused manufacturing
              environment in Lahore, Pakistan.
            </p>

            <p>
              Every stage contributes to the transformation of individual
              fastening components into finished product constructions.
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          HERO IMAGE
      ===================================================== */}

      <section className="mf-hero">
        <Photo
          src={photos.hero}
          alt="AF7 manufacturing facility"
          priority
        />

        <div className="mf-image-meta">
          <span>AF7 / MANUFACTURING</span>
          <span>01</span>
        </div>
      </section>


      {/* =====================================================
          EDITORIAL STATEMENT
      ===================================================== */}

      <section className="mf-statement">
        <div className="mf-statement-number">
          02
        </div>

        <div className="mf-statement-content">
          <span>THE MANUFACTURING FLOOR</span>

          <h2>
            Where components
            <br />
            become product.
          </h2>

          <p>
            The manufacturing environment is built around a sequence of
            processes that connect materials, equipment and people. Each
            stage plays a role in bringing a fastening construction
            together.
          </p>
        </div>
      </section>


      {/* =====================================================
          MACHINERY FEATURE
      ===================================================== */}

      <section className="mf-machinery">

        <div className="mf-machinery-copy">
          <span>03 / MACHINERY</span>

          <h2>
            Process,
            <br />
            equipment,
            <br />
            control.
          </h2>

          <p>
            Purpose-driven equipment supports the production process,
            allowing individual components to move through the stages
            required for finished fastening constructions.
          </p>
        </div>

        <Photo
          src={photos.machinery}
          alt="AF7 production machinery"
          className="mf-machinery-image"
        />

      </section>


      {/* =====================================================
          DOCUMENTARY SECTION
      ===================================================== */}

      <section className="mf-documentary">

        <div className="mf-documentary-head">
          <span>04 / PRODUCTION DOCUMENTATION</span>

          <h2>
            Inside the
            <br />
            process.
          </h2>
        </div>

        <div className="mf-documentary-grid">

          <Photo
            src={photos.five}
            alt="AF7 manufacturing documentation"
            className="mf-doc-primary"
          />

          <div className="mf-doc-side">
            <Photo
              src={photos.six}
              alt="AF7 manufacturing documentation"
            />

            <div className="mf-doc-note">
              <span>AF7</span>
              <p>
                Production is shaped by the relationship between people,
                machinery and process.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTION IMAGE
      ===================================================== */}

      <section className="mf-production">

        <Photo
          src={photos.production}
          alt="AF7 production process"
        />

        <div className="mf-production-caption">
          <span>PRODUCTION / AF7</span>
          <span>LAHORE · PAKISTAN</span>
        </div>

      </section>


      {/* =====================================================
          FACTORY DOCUMENTARY
      ===================================================== */}

      <section className="mf-documentary-two">

        <div className="mf-documentary-two-head">
          <div className="mf-index">05</div>

          <div>
            <span>FACTORY DOCUMENTARY</span>

            <h2>
              People behind
              <br />
              the process.
            </h2>
          </div>
        </div>


        <div className="mf-editorial-grid">

          <Photo
            src={photos.seven}
            alt="AF7 manufacturing documentation"
            className="mf-editorial-a"
          />

          <Photo
            src={photos.nine}
            alt="AF7 manufacturing documentation"
            className="mf-editorial-b"
          />

          <Photo
            src={photos.eleven}
            alt="AF7 manufacturing documentation"
            className="mf-editorial-c"
          />

          <Photo
            src={photos.thirteen}
            alt="AF7 manufacturing documentation"
            className="mf-editorial-d"
          />

          <Photo
            src={photos.fourteen}
            alt="AF7 manufacturing documentation"
            className="mf-editorial-e"
          />

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="mf-process">

        <div className="mf-process-intro">
          <span>06 / PRODUCTION FLOW</span>

          <h2>
            A structured path
            <br />
            through production.
          </h2>
        </div>

        <div className="mf-process-list">

          {processSteps.map((step) => (
            <motion.div
              className="mf-process-row"
              key={step.no}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mf-process-number">
                {step.no}
              </span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </motion.div>
          ))}

        </div>

      </section>


      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="mf-closing">

        <div className="mf-closing-logo">
          <img
            src={LOGO}
            alt="AF7 Apparel Fastener"
          />
        </div>

        <div className="mf-closing-content">
          <span>MANUFACTURING / AF7</span>

          <h2>
            Made in Lahore.
            <br />
            Built for the world.
          </h2>

          <p>
            AF7 connects its manufacturing foundation in Lahore with
            customers and applications across the global fastening
            industry.
          </p>
        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="mf-footer">

        <img
          src={LOGO}
          alt="AF7 Apparel Fastener"
        />

        <span>LAHORE · PAKISTAN</span>

      </footer>

    </section>
  );
}