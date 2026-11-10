"use client";

import Image from "next/image";
import { PACKAGING } from "./content";
import { ratio } from "./dims";
import { MaskLines, Parallax, Reveal } from "./motion";
import "./Packaging.css";

function Specs({ rows }) {
  return (
    <dl className="pack__specs">
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Art({ src, alt, sizes, className = "" }) {
  return (
    <div className={`pack__art ${className}`} style={{ aspectRatio: ratio(src) }}>
      <Image src={src} alt={alt} fill sizes={sizes} />
    </div>
  );
}

export default function Packaging() {
  const { carton, boards, details, productSticker, dieline } = PACKAGING;

  return (
    <section className="pack" id="packaging">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__index">10</span>
            <span className="label label--dot">Packaging & Delivery</span>
          </div>
          <MaskLines
            className="section-head__title"
            lines={["Built to protect.", <em className="serif" key="r">Made to be recognised.</em>]}
          />
          <Reveal as="p" className="section-head__lead">
            {PACKAGING.intro}
          </Reveal>
        </div>

        {/* Corrugated carton */}
        <div className="pack__hero">
          <Reveal className="pack__hero-art">
            <Parallax distance={24}>
              <Art src={carton.image} alt="AF7 corrugated shipping carton with carton sticker" sizes="(max-width: 900px) 100vw, 60vw" />
            </Parallax>
          </Reveal>
          <div className="pack__hero-copy">
            <Reveal as="span" className="label">Corrugated carton</Reveal>
            <Reveal as="p" className="pack__lead" delay={0.05}>
              {carton.text}
            </Reveal>
            <Reveal delay={0.1}>
              <Specs rows={carton.specs} />
            </Reveal>
          </div>
        </div>

        {/* Board options */}
        <div className="pack__boards">
          <div className="pack__boards-head">
            <Reveal as="h3" className="pack__title">{boards.title}</Reveal>
            <Reveal as="p" className="pack__text" delay={0.05}>{boards.text}</Reveal>
          </div>
          <ol className="pack__board-list">
            {boards.items.map((b, i) => (
              <Reveal as="li" key={b.name} delay={i * 0.1} className="pack__board">
                <Art src={b.image} alt={`AF7 carton in ${b.name.toLowerCase()}`} sizes="(max-width: 900px) 100vw, 33vw" />
                <div className="pack__board-name">
                  <i style={{ background: b.swatch }} />
                  <span>{String(i + 1).padStart(2, "0")} {b.name}</span>
                  {b.tag && <em className="pack__tag">{b.tag}</em>}
                </div>
                <Specs rows={b.specs} />
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Sticker and polybag */}
        <div className="pack__details">
          {details.map((d, i) => (
            <Reveal as="article" className="pack__detail" key={d.label} delay={i * 0.1}>
              <Art src={d.image} alt={`AF7 ${d.label.toLowerCase()}`} sizes="(max-width: 900px) 100vw, 50vw" />
              <span className="label">{d.label}</span>
              <h3 className="pack__title">{d.title}</h3>
              <p className="pack__text">{d.text}</p>
              <Specs rows={d.specs} />
            </Reveal>
          ))}
        </div>

        <div className="pack__extras">
          <Reveal as="figure" className="pack__sticker">
            <Art src={productSticker.image} alt="AF7 product sticker" sizes="(max-width: 900px) 100vw, 25vw" />
            <figcaption className="label">{productSticker.caption}</figcaption>
          </Reveal>
          <Reveal as="figure" className="pack__dieline" delay={0.1}>
            <Art src={dieline.image} alt="AF7 corrugated carton die line" sizes="(max-width: 900px) 100vw, 70vw" />
            <figcaption className="label">{dieline.caption}</figcaption>
          </Reveal>
        </div>

        <Reveal as="p" className="pack__note">
          {PACKAGING.closing}
        </Reveal>
      </div>
    </section>
  );
}
