"use client";

import Image from "next/image";
import { PACKAGING } from "./content";
import { ratio } from "./dims";
import { MaskLines, Reveal } from "./motion";
import "./Packaging.css";

export default function Packaging() {
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
            lines={["Packed with care,", <em className="serif" key="d">ready for dispatch.</em>]}
          />
          <Reveal as="p" className="section-head__lead">
            {PACKAGING.body[0]}
          </Reveal>
        </div>

        <div className="pack__grid">
          {PACKAGING.images.map((img, i) => (
            <Reveal as="figure" className="pack__item" key={img.src} delay={i * 0.1}>
              <div className="pack__img" style={{ aspectRatio: ratio(img.src) }}>
                <Image src={img.src} alt={img.caption} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <figcaption className="label">{img.caption}</figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="pack__note">
          {PACKAGING.body[1]}
        </Reveal>
      </div>
    </section>
  );
}
