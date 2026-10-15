"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, LayoutGrid, List, X } from "lucide-react";
import { FINISHES, PRODUCT_FILTERS, PRODUCTS } from "./content";
import { EASE, MaskLines, Reveal, scrollToId, setScrollLocked } from "./motion";
import "./Products.css";

const productTitle = (p) => (p.size ? `${p.size} ${p.name}` : p.name);

function Plate({ product, large = false, image }) {
  const src = image ?? product.images[0];

  if (!src) {
    return (
      <div className={`plate plate--mono ${large ? "plate--large" : ""}`}>
        <span className="plate__code label">{product.code}</span>
        <span className="plate__monogram serif">{product.monogram}</span>
        <span className="plate__note label">Garment accessory</span>
      </div>
    );
  }

  return (
    <div className={`plate ${large ? "plate--large" : ""}`}>
      <span className="plate__code label">{product.code}</span>
      {product.size && <span className="plate__size">{product.size}</span>}
      <div className="plate__img">
        <Image
          src={src}
          alt={productTitle(product)}
          fill
          sizes={large ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 600px) 50vw, 25vw"}
        />
      </div>
      {!large && product.images[1] && (
        <div className="plate__img plate__img--alt" aria-hidden="true">
          <Image src={product.images[1]} alt="" fill sizes="25vw" />
        </div>
      )}
    </div>
  );
}

function ProductDrawer({ product, onClose }) {
  const [shot, setShot] = useState(0);
  const closeRef = useRef(null);
  const isMetal = product.family === "metal" || product.family === "aluminium";
  const index = PRODUCTS.indexOf(product);

  useEffect(() => {
    closeRef.current?.focus();
    setScrollLocked(true);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      setScrollLocked(false);
    };
  }, [onClose]);

  return (
    <motion.div
      className="drawer"
      role="dialog"
      aria-modal="true"
      aria-label={productTitle(product)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.2 } }}
    >
      <div className="drawer__scrim" onClick={onClose} />
      <motion.div
        className="drawer__panel"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        data-lenis-prevent
      >
        <div className="drawer__bar">
          <span className="label">
            {String(index + 1).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")} — Catalogue
          </span>
          <button ref={closeRef} className="drawer__close" onClick={onClose} aria-label="Close">
            <X size={18} strokeWidth={1.4} />
          </button>
        </div>

        <div className="drawer__gallery">
          <AnimatePresence mode="wait">
            <motion.div
              key={shot}
              className="drawer__shot"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <Plate product={product} large image={product.images[shot]} />
            </motion.div>
          </AnimatePresence>

          {product.images.length > 1 && (
            <div className="drawer__thumbs">
              {product.images.map((src, i) => (
                <button
                  key={src}
                  className={i === shot ? "is-active" : ""}
                  onClick={() => setShot(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <Image src={src} alt="" fill sizes="80px" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="drawer__body">
          <span className="label label--dot">{product.familyLabel}</span>
          <h3 className="drawer__title">{productTitle(product)}</h3>
          <p className="drawer__text">{product.text}</p>

          <dl className="drawer__specs">
            <div>
              <dt>Reference</dt>
              <dd>{product.code}</dd>
            </div>
            <div>
              <dt>Construction</dt>
              <dd>{product.familyLabel}</dd>
            </div>
            {product.size && (
              <div>
                <dt>Size</dt>
                <dd>{product.size}</dd>
              </div>
            )}
            <div>
              <dt>Customization</dt>
              <dd>On request</dd>
            </div>
          </dl>

          {isMetal && (
            <div className="drawer__finishes">
              <span className="label">Applicable finishes</span>
              <ul>
                {FINISHES.map((f) => (
                  <li key={f.name} title={f.name}>
                    <i
                      style={{
                        background: `linear-gradient(135deg, ${f.g.join(", ")})`,
                      }}
                    />
                    {f.name}
                  </li>
                ))}
              </ul>
              <p className="drawer__note">
                Finish availability may vary according to zipper type, material,
                and production requirements.
              </p>
            </div>
          )}

          <button
            className="btn btn--dark"
            onClick={() => {
              onClose();
              setTimeout(() => scrollToId("contact"), 600);
            }}
          >
            Enquire about this product
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("grid");
  const [selected, setSelected] = useState(null);

  const counts = useMemo(() => {
    const c = { all: PRODUCTS.length };
    PRODUCTS.forEach((p) => (c[p.family] = (c[p.family] ?? 0) + 1));
    return c;
  }, []);

  const close = useCallback(() => setSelected(null), []);

  const visible = PRODUCTS.filter((p) => filter === "all" || p.family === filter);

  return (
    <section className="products" id="products">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__index">02</span>
            <span className="label label--dot">Our Product Range</span>
          </div>
          <MaskLines
            className="section-head__title"
            lines={[
              "Zippers and garment",
              <>
                accessories, <em className="serif">by line.</em>
              </>,
            ]}
          />
          <Reveal as="p" className="section-head__lead">
            Metal, aluminium, nylon and Vislon zippers, supported by tag strings
            and tipping solutions — each specified to the intended application.
          </Reveal>
        </div>

        <Reveal className="catalog__bar">
          <LayoutGroup id="filters">
            <div className="catalog__filters" role="tablist" aria-label="Filter products">
              {PRODUCT_FILTERS.map((f) => (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={filter === f.id}
                  className={filter === f.id ? "is-active" : ""}
                  onClick={() => setFilter(f.id)}
                >
                  {filter === f.id && (
                    <motion.span
                      layoutId="filter-pill"
                      className="catalog__pill"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="catalog__filter-label">{f.label}</span>
                  <sup>{counts[f.id] ?? 0}</sup>
                </button>
              ))}
            </div>
          </LayoutGroup>

          <div className="catalog__views" aria-label="Catalogue view">
            <button
              className={view === "grid" ? "is-active" : ""}
              onClick={() => setView("grid")}
              aria-pressed={view === "grid"}
            >
              <LayoutGrid size={15} strokeWidth={1.5} /> Grid
            </button>
            <button
              className={view === "index" ? "is-active" : ""}
              onClick={() => setView("index")}
              aria-pressed={view === "index"}
            >
              <List size={15} strokeWidth={1.5} /> Index
            </button>
          </div>
        </Reveal>

        <AnimatePresence mode="wait" initial={false}>
          {view === "grid" ? (
            <motion.ul
              key="grid"
              className="catalog__grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <AnimatePresence mode="popLayout">
                {visible.map((p, i) => (
                  <motion.li
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
                    transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: EASE }}
                  >
                    <article className="card">
                      <Plate product={p} />
                      <div className="card__meta">
                        <span className="card__no">{String(PRODUCTS.indexOf(p) + 1).padStart(2, "0")}</span>
                        <div>
                          <h3 className="card__title">{productTitle(p)}</h3>
                          <p className="card__text">{p.text}</p>
                        </div>
                      </div>
                      <span className="card__more">
                        View details <ArrowRight size={14} strokeWidth={1.5} />
                      </span>
                      <button
                        className="card__hit"
                        onClick={() => setSelected(p)}
                        aria-label={`View details: ${productTitle(p)}`}
                      />
                    </article>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          ) : (
            <motion.div
              key="index"
              className="catalog__index"
                            initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="index__head" aria-hidden="true">
                <span>No.</span>
                <span>Ref.</span>
                <span>Product</span>
                <span>Construction</span>
                <span>Description</span>
                <span />
              </div>
              <AnimatePresence mode="popLayout">
                {visible.map((p, i) => (
                  <motion.button
                    key={p.id}
                    layout
                   
                    className="index__row"
                    onClick={() => setSelected(p)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.04, ease: EASE }}
                  >
                    <span className="index__no">
                      {String(PRODUCTS.indexOf(p) + 1).padStart(2, "0")}
                    </span>
                    <span className="index__code">{p.code}</span>
                    <span className="index__name">
                      <span className="index__thumb">
                        {p.images[0] ? (
                          <Image src={p.images[0]} alt="" fill sizes="56px" />
                        ) : (
                          <em className="serif">{p.monogram}</em>
                        )}
                      </span>
                      {productTitle(p)}
                    </span>
                    <span className="index__family">{p.familyLabel}</span>
                    <span className="index__text">{p.text}</span>
                    <span className="index__arrow">
                      <ArrowUpRight size={18} strokeWidth={1.4} />
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && (
          <ProductDrawer
            key={selected.id}
            product={selected}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
