"use client";

import Image from "next/image";
import { useState } from "react";
import "./Products.css";

const productGroups = [
  {
    number: "01",
    title: "METAL ZIPPERS",
    format: "#5",
    note: "Also available in #4.5",
    description:
      "Metal zippers engineered for dependable performance and a refined finish across apparel, denim, bags and other demanding applications.",
    images: [
      {
        src: "/products/metalzippers/IMG_2071.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2074.webp",
        alt: "AF7 metal zipper detail",
      },
      {
        src: "/products/metalzippers/IMG_2076.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2077.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2078.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2079.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2080.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2083.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2085.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2086.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2087.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2089.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2091.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2092.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2093.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2094.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2095.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2096.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2099.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2100.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2101.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2102.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/IMG_2103.webp",
        alt: "AF7 metal zipper",
      },
      {
        src: "/products/metalzippers/4.5.webp",
        alt: "AF7 metal zipper #4.5",
      },
    ],
  },

  {
    number: "02",
    title: "2-WAY ZIPPERS",
    format: "#5",
    description:
      "Two-way zipper construction designed for flexible opening and closing, bringing practical movement and controlled functionality to modern garments.",
    images: [
      {
        src: "/products/2wayzippers/IMG_2081.webp",
        alt: "AF7 two-way zipper",
      },
      {
        src: "/products/2wayzippers/IMG_2104.webp",
        alt: "AF7 two-way zipper detail",
      },
    ],
  },

  {
    number: "03",
    title: "ALUMINIUM ZIPPERS",
    format: "#5",
    description:
      "Lightweight aluminium zipper solutions with a distinctive technical character, developed for applications where weight, appearance and performance matter.",
    images: [
      {
        src: "/products/alumuniumzippers/alumunium zipper.webp",
        alt: "AF7 aluminium zipper",
      },
      {
        src: "/products/alumuniumzippers/alumunium.webp",
        alt: "AF7 aluminium zipper",
      },
      {
        src: "/products/alumuniumzippers/alumuniumzipper2.webp",
        alt: "AF7 aluminium zipper detail",
      },
    ],
  },

  {
    number: "04",
    title: "NYLON ZIPPERS",
    format: "#5",
    description:
      "Flexible nylon zipper constructions suited to everyday apparel and technical applications, with smooth operation and a clean finished appearance.",
    images: [
      {
        src: "/products/nylonzippers/reversible nylon zipper.webp",
        alt: "AF7 reversible nylon zipper",
      },
      {
        src: "/products/nylonzippers/reversible nylon zipper2.webp",
        alt: "AF7 reversible nylon zipper detail",
      },
      {
        src: "/products/nylonzippers/waterproofnylon zipper 2.webp",
        alt: "AF7 waterproof nylon zipper",
      },
      {
        src: "/products/nylonzippers/waterproofnylonzipper.webp",
        alt: "AF7 waterproof nylon zipper detail",
      },
    ],
  },

  {
    number: "05",
    title: "VISLON ZIPPERS",
    format: "#5",
    description:
      "Vislon zipper systems combining lightweight construction with dependable everyday performance for sportswear, outerwear and contemporary apparel.",
    images: [
      {
        src: "/products/vislonzipper/1.webp",
        alt: "AF7 Vislon zipper",
      },
      {
        src: "/products/vislonzipper/6626d5fa8038c74ef5c8be7e7b324a84_271d730c-79bf-4656-936e-18097c9347ba.webp",
        alt: "AF7 Vislon zipper detail",
      },
      {
        src: "/products/vislonzipper/IMG_9558.webp",
        alt: "AF7 Vislon zipper",
      },
    ],
  },

  {
    number: "06",
    title: "SLIDERS",
    format: "#5",
    description:
      "A focused range of zipper sliders designed to complement different zipper constructions while maintaining smooth movement and a precise finished look.",
    images: [
      {
        src: "/products/sliders/slider.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider2 (2).webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider3.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider4.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider5.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider6.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider7.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider8.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider9.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider10.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider11.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider12.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider13.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider14.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider15.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider16.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider17.webp",
        alt: "AF7 zipper slider",
      },
      {
        src: "/products/sliders/slider18.webp",
        alt: "AF7 zipper slider",
      },
    ],
  },
];

function ProductGallery({ images, title }) {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const next = () => {
    setActive((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="product-gallery">
      <div className="product-main-image">
        <Image
          src={images[active].src}
          alt={images[active].alt || title}
          fill
          sizes="(max-width: 768px) 100vw, 62vw"
          priority={active === 0}
        />

        {images.length > 1 && (
          <div className="product-gallery-controls">
            <button
              type="button"
              onClick={previous}
              aria-label={`Previous ${title} image`}
            >
              ←
            </button>

            <span>
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={next}
              aria-label={`Next ${title} image`}
            >
              →
            </button>
          </div>
        )}

        {images.length > 1 && (
          <button
            type="button"
            className="product-image-arrow"
            onClick={next}
            aria-label={`Next ${title} image`}
          >
            →
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="product-thumbnails">
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              className={`product-thumbnail ${
                index === active ? "is-active" : ""
              }`}
              onClick={() => setActive(index)}
              aria-label={`View ${title} image ${index + 1}`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="90px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Products() {
  return (
    <section className="products-section" id="products">
      <header className="products-intro">
        <div className="products-intro-line">
          <span>PRODUCT RANGE</span>
          <span>AF7 / APPAREL FASTENER</span>
        </div>

        <div className="products-intro-content">
          <h2>
            Built around
            <br />
            the details.
          </h2>

          <p>
            A focused range of zipper systems and components developed for
            apparel, denim, bags, footwear and performance applications.
          </p>
        </div>
      </header>

      <div className="products-list">
        {productGroups.map((product, index) => (
          <article
            className={`product-spread ${
              index % 2 !== 0 ? "product-spread-reverse" : ""
            }`}
            key={product.title}
          >
            <div className="product-information">
              <div className="product-index">
                {product.number}
              </div>

              <div className="product-copy">
                <div className="product-label">
                  PRODUCT CATEGORY
                </div>

                <h3>{product.title}</h3>

                <div className="product-meta">
                  <span>FORMAT</span>
                  <strong>{product.format}</strong>

                  {product.note && (
                    <>
                      <span className="product-meta-separator">/</span>
                      <em>{product.note}</em>
                    </>
                  )}
                </div>

                <p>{product.description}</p>
              </div>
            </div>

            <ProductGallery
              images={product.images}
              title={product.title}
            />
          </article>
        ))}
      </div>

      <footer className="products-footer">
        <span>AF7 / PRODUCT RANGE</span>
        <span>APPAREL FASTENER · LAHORE · PAKISTAN</span>
      </footer>
    </section>
  );
}