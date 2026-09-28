"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./Applications.css";

const applications = [
  {
    title: "Apparel",
    description:
      "Fastening components integrated into apparel products where construction, appearance and finishing work together.",
    image: "/applications/apparel.webp",
    width: 2752,
    height: 1536,
    ratio: "landscape",
  },
  {
    title: "Denim",
    description:
      "Zipper and slider applications across denim garments, from everyday construction to premium product detailing.",
    image: "/applications/denim.webp",
    width: 1920,
    height: 1072,
    ratio: "landscape",
  },
  {
    title: "Jackets",
    description:
      "Fastening components used across jackets and outerwear where the zipper becomes an important part of the garment.",
    image: "/applications/jackets.webp",
    width: 1536,
    height: 2752,
    ratio: "portrait",
  },
  {
    title: "Bags",
    description:
      "Zipper applications for bags and accessories, bringing fastening functionality into finished product design.",
    image: "/applications/bags.webp",
    width: 1920,
    height: 1072,
    ratio: "landscape",
  },
  {
    title: "Footwear",
    description:
      "Fastening components integrated into footwear and related product constructions.",
    image: "/applications/footwear.webp",
    width: 1920,
    height: 1072,
    ratio: "landscape",
  },
  {
    title: "Sportswear",
    description:
      "Zipper applications across performance-inspired apparel and sportswear products.",
    image: "/applications/sportswear.webp",
    width: 1920,
    height: 1072,
    ratio: "landscape",
  },
];

const featuredApplication = applications[0];

export default function Applications() {
  return (
    <section className="applications-page" id="applications">

      {/* HEADER */}
      <header className="applications-header">
        <div className="applications-header-inner">
          <div className="applications-kicker">
            AF7 / APPLICATIONS
          </div>

          <div className="applications-location">
            LAHORE · PAKISTAN
          </div>
        </div>
      </header>


      {/* INTRO */}
      <section className="applications-intro">
        <div className="applications-container">
          <div className="applications-intro-grid">

            <div className="applications-intro-label">
              APPLICATIONS
            </div>

            <div className="applications-intro-content">
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
              >
                Built Into The Products
                <br />
                People Use Every Day.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
              >
                AF7 fastening components are developed for a wide range of
                finished products. From apparel and denim to bags, footwear,
                jackets and sportswear, our components become part of the
                construction, function and final appearance of the product.
              </motion.p>
            </div>

          </div>
        </div>
      </section>


      {/* FEATURED */}
      <section className="applications-featured">

        <div className="applications-featured-media">
          <Image
            src={featuredApplication.image}
            alt="AF7 apparel application"
            width={featuredApplication.width}
            height={featuredApplication.height}
            priority
            sizes="(max-width: 760px) 100vw, 58vw"
            className="applications-featured-img"
          />
        </div>

        <div className="applications-featured-panel">

          <div className="applications-panel-top">
            <span>01</span>
            <span>APPAREL</span>
          </div>

          <div className="applications-panel-content">
            <span className="applications-panel-eyebrow">
              APPLICATION / 01
            </span>

            <h2>Apparel</h2>

            <p>
              Fastening components integrated into apparel products where
              construction, appearance and finishing work together.
            </p>
          </div>

          <div className="applications-panel-bottom">
            AF7 / APPAREL FASTENER
          </div>

        </div>

      </section>


      {/* APPLICATION RANGE */}
      <section className="applications-catalog">
        <div className="applications-container">

          <div className="applications-catalog-header">

            <div>
              <span className="applications-section-label">
                APPLICATION RANGE
              </span>

              <h2>
                Across Categories.
                <br />
                Across Products.
              </h2>
            </div>

            <p>
              A selection of product environments where AF7 fastening
              components become part of the finished construction.
            </p>

          </div>


          <div className="applications-grid">

            {applications.slice(1).map((application, index) => (
              <motion.article
                className={`application-card ${
                  application.ratio === "portrait"
                    ? "application-card-portrait"
                    : ""
                }`}
                key={application.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                }}
              >

                <div className="application-card-meta">
                  <span>
                    {String(index + 2).padStart(2, "0")}
                  </span>

                  <span>AF7</span>
                </div>


                <div className="application-image-frame">

                  <Image
                    src={application.image}
                    alt={`AF7 ${application.title}`}
                    width={application.width}
                    height={application.height}
                    sizes="(max-width: 760px) 100vw, 42vw"
                    className="application-card-img"
                  />

                </div>


                <div className="application-card-content">

                  <div>
                    <span className="application-card-category">
                      APPLICATION
                    </span>

                    <h3>{application.title}</h3>
                  </div>

                  <p>
                    {application.description}
                  </p>

                </div>

              </motion.article>
            ))}

          </div>

        </div>
      </section>


      {/* STATEMENT */}
      <section className="applications-statement">
        <div className="applications-container">

          <div className="applications-statement-grid">

            <span className="applications-section-label">
              AF7 / APPLICATION
            </span>

            <div>
              <h2>
                The Right Fastening
                <br />
                Becomes Part Of The Product.
              </h2>

              <p>
                Whether visible as a design detail or integrated into the
                construction, AF7 fastening components are made to work
                within the finished product.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="applications-footer">

        <div className="applications-footer-inner">

          <div className="applications-footer-brand">
            AF7
          </div>

          <div className="applications-footer-info">
            <span>APPAREL FASTENER</span>
            <span>LAHORE · PAKISTAN</span>
          </div>

          <div className="applications-footer-mark">
            APPLICATIONS / 2026
          </div>

        </div>

      </footer>

    </section>
  );
}