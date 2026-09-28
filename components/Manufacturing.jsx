﻿"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./Manufacturing.css";

const LOGO = "/af7logo-27.svg";

const gallery = [
  {
    src: "/manufacturing/machinery.webp",
    title: "Machinery",
    type: "Production Environment",
  },
  {
    src: "/manufacturing/production.webp",
    title: "Production",
    type: "Production Environment",
  },
  {
    src: "/manufacturing/5.webp",
    title: "Production",
    type: "Factory Floor",
  },
  {
    src: "/manufacturing/6.webp",
    title: "Production",
    type: "Factory Floor",
  },
  {
    src: "/manufacturing/7.webp",
    title: "Factory Floor",
    type: "Manufacturing",
  },
  {
    src: "/manufacturing/9.webp",
    title: "Production",
    type: "Manufacturing",
  },
  {
    src: "/manufacturing/11.webp",
    title: "Production",
    type: "Manufacturing",
  },
  {
    src: "/manufacturing/13.webp",
    title: "Production",
    type: "Manufacturing",
  },
  {
    src: "/manufacturing/14.webp",
    title: "Factory Floor",
    type: "Manufacturing",
  },
];

const process = [
  {
    number: "01",
    title: "Material",
    text: "The manufacturing process begins with the components and materials required for the selected fastening construction.",
  },
  {
    number: "02",
    title: "Formation",
    text: "Individual components move through the relevant production stages to achieve their required form and construction.",
  },
  {
    number: "03",
    title: "Assembly",
    text: "Components are brought together through the production process to create finished zipper and slider constructions.",
  },
  {
    number: "04",
    title: "Checking",
    text: "Finished products pass through checking stages before moving forward as completed fastening components.",
  },
];

function GalleryItem({ item, index }) {
  return (
    <motion.article
      className={`mfg-gallery-item mfg-gallery-item-${index + 1}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.035, 0.2),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="mfg-gallery-image">
        <Image
          src={item.src}
          alt={`AF7 ${item.title}`}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </div>

      <div className="mfg-gallery-caption">
        <span>{String(index + 1).padStart(2, "0")}</span>

        <div>
          <strong>{item.title}</strong>
          <small>{item.type}</small>
        </div>
      </div>
    </motion.article>
  );
}

export default function Manufacturing() {
  return (
    <section className="mfg-section" id="manufacturing">

      {/* HEADER */}

      <div className="mfg-header">
        <div className="mfg-header-brand">
          <span>MANUFACTURING</span>
          <i />
          <Image
            src={LOGO}
            alt="AF7 Apparel Fastener"
            width={100}
            height={32}
          />
        </div>

        <span>LAHORE · PAKISTAN</span>
      </div>


      {/* HERO */}

      <section className="mfg-hero">

        <div className="mfg-hero-image">
          <Image
            src="/manufacturing/factory.webp"
            alt="AF7 manufacturing facility in Lahore"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 58vw"
          />

          <div className="mfg-hero-image-label">
            <span>01</span>
            <span>AF7 FACTORY</span>
          </div>
        </div>

        <div className="mfg-hero-panel">

          <div className="mfg-panel-top">
            <span>MANUFACTURING</span>
            <span>LAHORE · PAKISTAN</span>
          </div>

          <div className="mfg-panel-main">
            <span className="mfg-kicker">
              OUR MANUFACTURING FOUNDATION
            </span>

            <h1>
              Built Around
              <br />
              The Product.
            </h1>

            <p>
              AF7&apos;s manufacturing foundation is based in Lahore,
              Pakistan, bringing together the production environment,
              machinery, assembly and checking processes behind our
              fastening products.
            </p>

            <p>
              Every stage contributes to the construction of finished
              zipper and slider components for apparel and related
              applications.
            </p>
          </div>

          <div className="mfg-panel-bottom">
            <span>AF7 / APPAREL FASTENER</span>
            <span>01 — MANUFACTURING</span>
          </div>

        </div>

      </section>


      {/* INFORMATION */}

      <section className="mfg-information">

        <div className="mfg-section-intro">
          <span className="mfg-small-label">
            MANUFACTURING APPROACH
          </span>

          <h2>
            A Connected Process
            <br />
            From Component To Product.
          </h2>
        </div>

        <div className="mfg-information-copy">

          <p className="mfg-copy-lead">
            Manufacturing is an important part of the AF7 product
            foundation. Our production environment connects the
            different stages involved in forming, assembling and
            checking fastening components.
          </p>

          <p>
            The process is structured around the physical construction
            of the product, allowing individual components to move
            through the required stages before becoming finished
            zipper and slider constructions.
          </p>

          <p>
            From the factory floor to the final product, the focus
            remains on controlled production and consistent
            workmanship.
          </p>

        </div>

      </section>


      {/* PROCESS */}

      <section className="mfg-process">

        <div className="mfg-process-heading">
          <span className="mfg-small-label">
            PRODUCTION FLOW
          </span>

          <h2>
            From Material
            <br />
            To Finished Product.
          </h2>
        </div>

        <div className="mfg-process-list">

          {process.map((item) => (
            <div
              className="mfg-process-row"
              key={item.number}
            >
              <span className="mfg-process-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}

        </div>

      </section>


      {/* FACTORY TOUR */}

      <section className="mfg-tour">

        <div className="mfg-tour-head">

          <div>
            <span className="mfg-small-label">
              FACTORY DOCUMENTATION
            </span>

            <h2>
              Tour Our
              <br />
              Factory.
            </h2>
          </div>

          <div className="mfg-tour-description">
            <span>02</span>

            <p>
              A closer look at the manufacturing environment behind
              AF7 — from machinery and production areas to the people
              and spaces that make up our factory in Lahore.
            </p>
          </div>

        </div>


        <div className="mfg-gallery">

          {gallery.map((item, index) => (
            <GalleryItem
              key={item.src}
              item={item}
              index={index}
            />
          ))}

        </div>


        <div className="mfg-gallery-footer">
          <span>AF7 / FACTORY TOUR</span>
          <span>LAHORE · PAKISTAN</span>
          <span>09 DOCUMENTED VIEWS</span>
        </div>

      </section>


      {/* CLOSING */}

      <section className="mfg-closing">

        <div className="mfg-closing-label">
          <span>03</span>
          <span>MANUFACTURING / AF7</span>
        </div>

        <div className="mfg-closing-content">

          <h2>
            Made In Lahore.
            <br />
            Connected To The World.
          </h2>

          <p>
            From our manufacturing foundation in Lahore, AF7 supports
            fastening requirements across apparel and related product
            applications.
          </p>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="mfg-footer">

        <Image
          src={LOGO}
          alt="AF7 Apparel Fastener"
          width={100}
          height={32}
        />

        <span>LAHORE · PAKISTAN</span>

      </footer>

    </section>
  );
}