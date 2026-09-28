"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./Products.css";

const LOGO = "/af7logo-27.svg";

const products = [
  {
    id: "metal-45",
    number: "01",
    category: "METAL ZIPPER",
    name: "Metal Zipper",
    size: "#4.5",
    description:
      "Metal zipper construction for apparel and fashion applications.",
    images: [
      "/products/metalzippers4.5/4.5.webp",
    ],
  },

  {
    id: "metal-5",
    number: "02",
    category: "METAL ZIPPER",
    name: "Metal Zipper",
    size: "#5",
    description:
      "A complete visual reference of the AF7 #5 metal zipper collection.",
    images: [
      "/products/metalzippers5/IMG_2071.webp",
      "/products/metalzippers5/IMG_2074.webp",
      "/products/metalzippers5/IMG_2076.webp",
      "/products/metalzippers5/IMG_2077.webp",
      "/products/metalzippers5/IMG_2078.webp",
      "/products/metalzippers5/IMG_2079.webp",
      "/products/metalzippers5/IMG_2080.webp",
      "/products/metalzippers5/IMG_2083.webp",
      "/products/metalzippers5/IMG_2085.webp",
      "/products/metalzippers5/IMG_2086.webp",
      "/products/metalzippers5/IMG_2087.webp",
      "/products/metalzippers5/IMG_2089.webp",
      "/products/metalzippers5/IMG_2091.webp",
      "/products/metalzippers5/IMG_2092.webp",
      "/products/metalzippers5/IMG_2093.webp",
      "/products/metalzippers5/IMG_2094.webp",
      "/products/metalzippers5/IMG_2095.webp",
      "/products/metalzippers5/IMG_2096.webp",
      "/products/metalzippers5/IMG_2099.webp",
      "/products/metalzippers5/IMG_2100.webp",
      "/products/metalzippers5/IMG_2101.webp",
      "/products/metalzippers5/IMG_2102.webp",
      "/products/metalzippers5/IMG_2103.webp",
    ],
  },

  {
    id: "aluminium-45",
    number: "03",
    category: "ALUMINIUM ZIPPER",
    name: "Aluminium Zipper",
    size: "#4.5",
    description:
      "Lightweight aluminium construction with a clean technical appearance.",
    images: [
      "/products/alumuniumzippers/alumunium zipper.webp",
      "/products/alumuniumzippers/alumuniumzipper2.webp",
    ],
  },

  {
    id: "aluminium-5",
    number: "04",
    category: "ALUMINIUM ZIPPER",
    name: "Aluminium Zipper",
    size: "#5",
    description:
      "Lightweight aluminium zipper construction for contemporary applications.",
    images: [
      "/products/alumuniumzippers/alumunium.webp",
    ],
  },

  {
    id: "slider-45",
    number: "05",
    category: "SLIDER",
    name: "Slider",
    size: "#4.5",
    description:
      "A detailed collection of #4.5 slider components and variations.",
    images: [
      "/products/sliders4.5/slider.webp",
      "/products/sliders4.5/slider10.webp",
      "/products/sliders4.5/slider11.webp",
      "/products/sliders4.5/slider12.webp",
      "/products/sliders4.5/slider13.webp",
      "/products/sliders4.5/slider14.webp",
      "/products/sliders4.5/slider15.webp",
      "/products/sliders4.5/slider16.webp",
      "/products/sliders4.5/slider17.webp",
      "/products/sliders4.5/slider18.webp",
      "/products/sliders4.5/slider2 (2).webp",
      "/products/sliders4.5/slider3.webp",
      "/products/sliders4.5/slider4.webp",
      "/products/sliders4.5/slider5.webp",
      "/products/sliders4.5/slider6.webp",
      "/products/sliders4.5/slider7.webp",
      "/products/sliders4.5/slider8.webp",
      "/products/sliders4.5/slider9.webp",
    ],
  },

  {
    id: "slider-5",
    number: "06",
    category: "SLIDER",
    name: "Slider",
    size: "#5",
    description:
      "The #5 slider collection presented through its available component forms.",
    images: [
      "/products/slider5/IMG_2028.webp",
      "/products/slider5/IMG_2029.webp",
      "/products/slider5/IMG_2033.webp",
      "/products/slider5/IMG_2045.webp",
      "/products/slider5/IMG_2053.webp",
      "/products/slider5/IMG_2054.webp",
      "/products/slider5/IMG_2055.webp.tmp.webp",
      "/products/slider5/IMG_2056.webp.tmp.webp",
      "/products/slider5/IMG_2058.webp.tmp.webp",
      "/products/slider5/IMG_2059.webp",
      "/products/slider5/IMG_2060.webp",
      "/products/slider5/IMG_2061.webp",
      "/products/slider5/IMG_2062.webp",
      "/products/slider5/IMG_2063.webp",
      "/products/slider5/IMG_2064.webp",
      "/products/slider5/IMG_2070.webp.tmp.webp",
    ],
  },

  {
    id: "nylon",
    number: "07",
    category: "NYLON ZIPPER",
    name: "Nylon Zipper",
    size: "",
    description:
      "Flexible nylon zipper solutions including reversible and waterproof constructions.",
    images: [
      "/products/nylonzippers/reversible nylon zipper.webp",
      "/products/nylonzippers/reversible nylon zipper2.webp",
      "/products/nylonzippers/waterproofnylon zipper 2.webp",
      "/products/nylonzippers/waterproofnylonzipper.webp",
    ],
  },

  {
    id: "vislon",
    number: "08",
    category: "VISLON ZIPPER",
    name: "Vislon Zipper",
    size: "",
    description:
      "Lightweight moulded zipper construction for apparel and outerwear.",
    images: [
      "/products/vislonzipper/1.webp",
      "/products/vislonzipper/6626d5fa8038c74ef5c8be7e7b324a84_271d730c-79bf-4656-936e-18097c9347ba.webp",
      "/products/vislonzipper/IMG_9558.webp",
    ],
  },
];


/* -------------------------------------------------------
   PRODUCT GALLERY
------------------------------------------------------- */

function ProductGallery({ product }) {
  return (
    <div className="product-gallery">
      {product.images.map((image, index) => (
        <motion.div
          className="product-image-frame"
          key={`${product.id}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.55,
            delay: Math.min(index * 0.04, 0.2),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src={image}
            alt={`${product.name} ${product.size || ""} - AF7`}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
          />
        </motion.div>
      ))}
    </div>
  );
}


/* -------------------------------------------------------
   PRODUCT SECTION
------------------------------------------------------- */

function ProductSection({ product }) {
  return (
    <section className="product-item">

      <div className="product-item-header">

        <div className="product-index">
          <span>{product.number}</span>
        </div>

        <div className="product-heading">
          <p className="product-category">
            {product.category}
          </p>

          <h2>{product.name}</h2>
        </div>

        {product.size && (
          <div className="product-size">
            {product.size}
          </div>
        )}

      </div>

      <div className="product-description-row">

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-rule" />

      </div>

      <ProductGallery product={product} />

    </section>
  );
}


/* -------------------------------------------------------
   MAIN
------------------------------------------------------- */

export default function Products() {

  /*
    IMPORTANT:
    products[3] = Aluminium Zipper #5
  */
  const heroProduct = products[3];

  return (
    <section className="products-section" id="products">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="products-header">

        <div className="products-header-logo">
          <Image
            src={LOGO}
            alt="AF7"
            width={100}
            height={38}
          />
        </div>

        <div className="products-header-meta">
          <span>PRODUCT COLLECTION</span>
          <span>AF7 / APPAREL FASTENER</span>
          <span>LAHORE · PAKISTAN</span>
        </div>

      </header>


      {/* =================================================
          HERO
      ================================================= */}

      <section className="products-hero">

        <div className="products-hero-image">

          <Image
            src={heroProduct.images[0]}
            alt="AF7 Aluminium #5 zipper product"
            fill
            priority
            sizes="(max-width: 700px) 100vw, 58vw"
          />

          <div className="hero-image-label">
            <span>AF7 PRODUCT 04</span>
            <span>ALUMINIUM / #5</span>
          </div>

        </div>


        <div className="products-hero-panel">

          <div className="hero-panel-top">
            <span>PRODUCTS</span>
            <span>04 / 08</span>
          </div>

          <div className="hero-panel-content">

            <p className="hero-panel-kicker">
              APPAREL FASTENER
            </p>

            <h1>
              Built Around
              <br />
              The Detail.
            </h1>

            <p className="hero-panel-copy">
              A focused collection of zipper and slider
              components developed for apparel, fashion,
              bags, footwear and performance applications.
            </p>

          </div>

          <div className="hero-panel-bottom">

            <div>
              <span className="panel-label">FEATURED</span>
              <strong>ALUMINIUM ZIPPER</strong>
            </div>

            <div>
              <span className="panel-label">SIZE</span>
              <strong>#5</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          INTRODUCTION
      ================================================= */}

      <section className="products-introduction">

        <div className="intro-label">
          <span>01</span>
          <span>THE COLLECTION</span>
        </div>

        <div className="intro-content">

          <h2>
            Components For
            <br />
            Considered Products.
          </h2>

          <div className="intro-copy">

            <p>
              AF7 develops zipper and slider components for
              products where construction, appearance and
              everyday performance matter.
            </p>

            <p>
              The collection brings together metal,
              aluminium, nylon and moulded zipper systems,
              alongside dedicated slider components in
              different sizes and configurations.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          CATEGORY STRIP
      ================================================= */}

      <section className="products-category-strip">

        <div>
          <span>01</span>
          <strong>METAL</strong>
        </div>

        <div>
          <span>02</span>
          <strong>ALUMINIUM</strong>
        </div>

        <div>
          <span>03</span>
          <strong>SLIDERS</strong>
        </div>

        <div>
          <span>04</span>
          <strong>NYLON</strong>
        </div>

        <div>
          <span>05</span>
          <strong>VISLON</strong>
        </div>

      </section>


      {/* =================================================
          PRODUCT LIBRARY
      ================================================= */}

      <main className="products-list">

        {products.map((product) => (
          <ProductSection
            key={product.id}
            product={product}
          />
        ))}

      </main>


      {/* =================================================
          CLOSING
      ================================================= */}

      <section className="products-closing">

        <div className="closing-line" />

        <div className="closing-content">

          <p>
            AF7 / APPAREL FASTENER
          </p>

          <h2>
            Components Made
            <br />
            To Connect.
          </h2>

          <span>
            LAHORE · PAKISTAN
          </span>

        </div>

        <div className="closing-line" />

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="products-footer">

        <div>
          <Image
            src={LOGO}
            alt="AF7"
            width={82}
            height={32}
          />
        </div>

        <p>
          AF7 / APPAREL FASTENER
        </p>

        <p>
          PRODUCT COLLECTION
        </p>

      </footer>

    </section>
  );
}