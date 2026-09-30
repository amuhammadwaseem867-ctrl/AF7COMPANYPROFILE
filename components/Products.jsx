"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./Products.css";

const productCategories = [
  {
    id: "2way",
    title: "2-Way Zippers",
    description:
      "Two-way zipper systems designed for applications requiring flexible opening, controlled movement and dependable fastening performance.",
    images: [
      "/products/2wayzippers/1.webp",
      "/products/2wayzippers/2.webp",
      "/products/2wayzippers/2way.webp",
      "/products/2wayzippers/2wayzipper.webp",
      "/products/2wayzippers/3.webp",
      "/products/2wayzippers/4.webp",
      "/products/2wayzippers/5brxxred_1024x1024.webp",
      "/products/2wayzippers/6.webp",
      "/products/2wayzippers/IMG_2104-optimized.webp",
      "/products/2wayzippers/silver-two-ways-zipper.webp",
    ],
  },

  {
    id: "aluminium",
    title: "Aluminium Zippers",
    description:
      "Aluminium zipper constructions combining a refined metallic appearance with dependable fastening performance for contemporary applications.",
    images: [
      "/products/alumuniumzippers/3.webp",
      "/products/alumuniumzippers/4.webp",
      "/products/alumuniumzippers/5.webp",
      "/products/alumuniumzippers/6.webp",
      "/products/alumuniumzippers/7.webp",
      "/products/alumuniumzippers/8.webp",
      "/products/alumuniumzippers/alumunium zipper.webp",
      "/products/alumuniumzippers/alumunium.webp",
      "/products/alumuniumzippers/alumuniumzipper2.webp",
    ],
  },

  {
    id: "brass45",
    title: "Brass Zippers 4.5",
    description:
      "Brass zipper constructions developed for applications where durability, finish and precise fastening are essential.",
    images: [
      "/products/brasszippers4.5/4.5.webp",
      "/products/brasszippers4.5/IMG_2089.webp",
      "/products/brasszippers4.5/IMG_2091.webp",
      "/products/brasszippers4.5/IMG_2095.webp",
      "/products/brasszippers4.5/IMG_2100.webp",
      "/products/brasszippers4.5/IMG_2101.webp",
      "/products/brasszippers4.5/IMG_2102.webp",
    ],
  },

  {
    id: "brass5",
    title: "Brass Zippers 5",
    description:
      "Size 5 zipper components offering a balance of structure, durability and refined finishing for a range of product applications.",
    images: [
      "/products/brasszippers5/71sPgkXBneL.jpg",
      "/products/brasszippers5/alumunium.webp",
      "/products/brasszippers5/IMG_2071.webp",
      "/products/brasszippers5/IMG_2074.webp",
      "/products/brasszippers5/IMG_2076.webp",
      "/products/brasszippers5/IMG_2077.webp",
      "/products/brasszippers5/IMG_2078.webp",
      "/products/brasszippers5/IMG_2079.webp",
      "/products/brasszippers5/IMG_2080.webp",
      "/products/brasszippers5/IMG_2083.webp",
      "/products/brasszippers5/IMG_2085.webp",
      "/products/brasszippers5/IMG_2086.webp",
      "/products/brasszippers5/IMG_2087.webp",
      "/products/brasszippers5/IMG_2092.webp",
      "/products/brasszippers5/IMG_2093.webp",
      "/products/brasszippers5/IMG_2094.webp",
      "/products/brasszippers5/IMG_2103.webp",
    ],
  },

  {
    id: "nylon",
    title: "Nylon Zippers",
    description:
      "Lightweight nylon zipper solutions designed for versatile apparel and product applications, including reversible and waterproof constructions.",
    images: [
      "/products/nylonzippers/2.webp",
      "/products/nylonzippers/3.webp",
      "/products/nylonzippers/4.webp",
      "/products/nylonzippers/5.webp",
      "/products/nylonzippers/6.webp",
      "/products/nylonzippers/reversible nylon zipper.webp",
      "/products/nylonzippers/waterproofnylon zipper 2.webp",
      "/products/nylonzippers/waterproofnylonzipper.webp",
      "/products/nylonzippers/Zip003-edited.webp",
    ],
  },

  {
    id: "slider5",
    title: "Sliders 5",
    description:
      "Size 5 sliders designed to complement zipper systems with reliable movement, secure engagement and consistent finishing.",
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
    id: "yg45",
    title: "Y/G Sliders 4.5",
    description:
      "Y/G sliders in size 4.5, designed for dependable zipper operation with a clean and precise component profile.",
    images: [
      "/products/sliders4.5/slider.webp",
      "/products/sliders4.5/slider3.webp",
      "/products/sliders4.5/slider6.webp",
      "/products/sliders4.5/slider7.webp",
      "/products/sliders4.5/slider8.webp",
      "/products/sliders4.5/slider9.webp",
      "/products/sliders4.5/slider13.webp",
      "/products/sliders4.5/slider15.webp",
      "/products/sliders4.5/slider16.webp",
      "/products/sliders4.5/slider17.webp",
    ],
  },

  {
    id: "vislon",
    title: "Vislon Zippers",
    description:
      "Vislon zipper systems offering a structured appearance and dependable fastening performance across apparel and related applications.",
    images: [
      "/products/vislonzipper/1.webp",
      "/products/vislonzipper/2.webp",
      "/products/vislonzipper/3.webp",
      "/products/vislonzipper/4.webp",
      "/products/vislonzipper/5.webp",
      "/products/vislonzipper/7.webp",
      "/products/vislonzipper/8.webp",
      "/products/vislonzipper/9.webp",
      "/products/vislonzipper/10.webp",
      "/products/vislonzipper/vislon zip.webp",
      "/products/vislonzipper/vislon zip2.png",
      "/products/vislonzipper/vislon0.png",
      "/products/vislonzipper/vislon3.png",
      "/products/vislonzipper/vislon4.png",
      "/products/vislonzipper/vislon5.png",
      "/products/vislonzipper/vislon6.png",
      "/products/vislonzipper/vislon7.png",
      "/products/vislonzipper/vislon8.png",
      "/products/vislonzipper/vislon9.png",
    ],
  },
];
export default function Products() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0]);
  const [activeImage, setActiveImage] = useState(0);

  const changeCategory = (category) => {
    setActiveCategory(category);
    setActiveImage(0);
  };

  return (
    <section className="products" id="products">
      <div className="productsInner">
        <motion.div
          className="productsHeader"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="productsEyebrow">PRODUCT RANGE</div>

          <div className="productsHeadingRow">
            <h2>
              Components
              <br />
              <span>Built to Perform.</span>
            </h2>

            <p>
              A focused range of zipper systems and fastening components
              developed for apparel, bags, footwear, denim and other product
              applications.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="productsCategories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {productCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`categoryButton ${
                activeCategory.id === category.id ? "active" : ""
              }`}
              onClick={() => changeCategory(category)}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="productContent"
          key={activeCategory.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="productInfo">
            <div className="productCount">
              {String(productCategories.indexOf(activeCategory) + 1).padStart(
                2,
                "0"
              )}
              <span>/</span>
              {String(productCategories.length).padStart(2, "0")}
            </div>

            <h3>{activeCategory.title}</h3>

            <p>{activeCategory.description}</p>

            <div className="productMeta">
              <span>AF7</span>
              <span>APPAREL FASTENER</span>
            </div>
          </div>

          <div className="productShowcase">
            <div className="productImageStage">
              <motion.div
                key={`${activeCategory.id}-${activeImage}`}
                className="productImageWrap"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
              >
                <Image
                  src={activeCategory.images[activeImage]}
                  alt={`${activeCategory.title} product`}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 55vw"
                  className="productImage"
                />
              </motion.div>
            </div>

            <div className="imageIndex">
              <span>{String(activeImage + 1).padStart(2, "0")}</span>
              <span className="indexLine" />
              <span>
                {String(activeCategory.images.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="productThumbnails">
            {activeCategory.images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                className={`thumbnail ${
                  activeImage === index ? "selected" : ""
                }`}
                onClick={() => setActiveImage(index)}
                aria-label={`View ${activeCategory.title} image ${index + 1}`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="90px"
                  className="thumbnailImage"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}