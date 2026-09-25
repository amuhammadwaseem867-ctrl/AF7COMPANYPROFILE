"use client";

import { motion } from "framer-motion";
import "./Products.css";

const products = [
  {
    name: "METAL ZIPPER",
    size: "#3",
    image: "/products/metal-zipper-3.jpg.webp",
  },
  {
    name: "METAL ZIPPER",
    size: "#4.5",
    image: "/products/metal-zipper-4-5.jpg.webp",
  },
  {
    name: "METAL ZIPPER",
    size: "#5",
    image: "/products/metal-zipper-5.jpg.webp",
  },
  {
    name: "BRASS SLIDER",
    size: "SLIDER",
    image: "/products/brass-slider.jpg.webp",
  },
  {
    name: "SS SLIDER",
    size: "SLIDER",
    image: "/products/ss-slider.jpg.webp",
  },
  {
    name: "ALUMINIUM ZIPPER",
    size: "#4.5",
    image: "/products/aluminium-zipper-4-5.jpg.webp",
  },
  {
    name: "ALUMINIUM ZIPPER",
    size: "#5",
    image: "/products/aluminium-zipper-5.jpg.webp",
  },
  {
    name: "NYLON ZIPPER",
    size: "ZIPPER",
    image: "/products/nylon-zipper.jpg.webp",
  },
  {
    name: "VISLON ZIPPER",
    size: "ZIPPER",
    image: "/products/vislon-zipper.jpg.webp",
  },
];

export default function Products() {
  return (
    <section className="products-section" id="products">
      {/* =========================================
          HEADER
      ========================================= */}
      <header className="products-section__header">
        <div className="products-section__header-inner">
          <div className="products-section__header-left">
            <span>OUR PRODUCTS</span>
            <i />
            <span>AF7 / APPAREL FASTENER</span>
          </div>

          <span className="products-section__header-location">
            LAHORE Â· PAKISTAN
          </span>
        </div>
      </header>

      {/* =========================================
          INTRODUCTION
      ========================================= */}
      <div className="products-section__intro">
        <div className="products-section__intro-inner">
          <div className="products-section__intro-title">
            <span>PRODUCT RANGE</span>

            <h2>
              A focused range
              <br />
              of fastening components.
            </h2>
          </div>

          <div className="products-section__intro-text">
            <p>
              AF7 brings together a defined selection of zippers and sliders
              for apparel and related product applications. The range covers
              metal, aluminium, nylon and Vislon zippers alongside brass and
              stainless steel sliders.
            </p>

            <div className="products-section__intro-line" />

            <span>
              ZIPPER COMPONENTS
              <br />
              SLIDER COMPONENTS
            </span>
          </div>
        </div>
      </div>

      {/* =========================================
          PRODUCT RANGE VISUAL INDEX
      ========================================= */}
      <div className="products-section__range">
        <div className="products-section__range-inner">
          <div className="products-section__range-label">
            <span>AF7 PRODUCT RANGE</span>
            <p>
              Product categories presented through their actual AF7
              components.
            </p>
          </div>

          <div className="products-section__range-line" />
        </div>
      </div>

      {/* =========================================
          PRODUCT CATALOGUE
      ========================================= */}
      <div className="products-section__catalog">
        {products.map((product, index) => (
          <motion.article
            className={`product-spread ${
              index % 2 !== 0 ? "product-spread--reverse" : ""
            }`}
            key={`${product.name}-${product.size}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* IMAGE */}
            <div className="product-spread__visual">
              <img
                src={product.image}
                alt={`${product.name} ${product.size}`}
              />

              <div className="product-spread__visual-overlay" />

              <span className="product-spread__crop product-spread__crop--tl" />
              <span className="product-spread__crop product-spread__crop--tr" />
              <span className="product-spread__crop product-spread__crop--bl" />
              <span className="product-spread__crop product-spread__crop--br" />

              <div className="product-spread__visual-label">
                <span>AF7</span>
                <i />
                <span>APPAREL FASTENER</span>
              </div>
            </div>

            {/* INFORMATION */}
            <div className="product-spread__info">
              <div className="product-spread__category">
                <span>PRODUCT</span>
                <i />
                <strong>{product.size}</strong>
              </div>

              <h3>{product.name}</h3>

              <p>
                {product.name === "METAL ZIPPER" &&
                  "Metal zipper components within the AF7 product range, available in multiple size formats for apparel applications."}

                {product.name === "BRASS SLIDER" &&
                  "Brass slider components forming part of the AF7 fastening range."}

                {product.name === "SS SLIDER" &&
                  "Stainless steel slider components within the AF7 fastening range."}

                {product.name === "ALUMINIUM ZIPPER" &&
                  "Aluminium zipper components included within the AF7 product range for apparel applications."}

                {product.name === "NYLON ZIPPER" &&
                  "Nylon zipper components forming part of the AF7 apparel fastening range."}

                {product.name === "VISLON ZIPPER" &&
                  "Vislon zipper components included within the AF7 apparel fastening range."}
              </p>

              <div className="product-spread__info-rule" />

              <div className="product-spread__meta">
                <div>
                  <span>TYPE</span>
                  <strong>{product.name}</strong>
                </div>

                <div>
                  <span>FORMAT</span>
                  <strong>{product.size}</strong>
                </div>
              </div>

              <div className="product-spread__mark">
                <span>AF7</span>
                <div />
                <span>PRODUCT RANGE</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* =========================================
          CLOSING STATEMENT
      ========================================= */}
      <div className="products-section__closing">
        <div className="products-section__closing-inner">
          <div>
            <span>PRODUCT RANGE</span>

            <h3>
              Defined components.
              <br />
              One consistent system.
            </h3>
          </div>

          <p>
            AF7's product range brings together multiple zipper constructions
            and slider components under one focused apparel fastening
            identity.
          </p>
        </div>
      </div>

      {/* =========================================
          FOOTER
      ========================================= */}
      <footer className="products-section__footer">
        <div className="products-section__footer-inner">
          <span>AF7 / APPAREL FASTENER</span>

          <div className="products-section__footer-mark">
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

