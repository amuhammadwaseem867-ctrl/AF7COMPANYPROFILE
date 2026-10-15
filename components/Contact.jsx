"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { COMPANY, CONTACT, NAV } from "./content";
import { MaskLines, Reveal, scrollToId } from "./motion";
import "./Contact.css";

export default function Contact() {
  const footRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: footRef, offset: ["start end", "end end"] });
  const markY = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);

  return (
    <section className="contact is-dark" id="contact">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head__meta">
            <span className="section-head__index">11</span>
            <span className="label label--dot">Contact AF7</span>
          </div>
          <MaskLines
            className="section-head__title contact__title"
            lines={["Let’s create the", <em className="serif" key="r">right connection.</em>]}
          />
          <Reveal as="p" className="section-head__lead">
            {CONTACT.intro}
          </Reveal>
        </div>

        <div className="contact__grid">
          <Reveal className="contact__card contact__card--phone">
            <span className="label">Phone</span>
            <a href={COMPANY.phoneHref} className="contact__big">
              {COMPANY.phone}
            </a>
            <a href={COMPANY.phoneHref} className="btn btn--light">
              <Phone size={16} strokeWidth={1.5} />
              Call the AF7 team
            </a>
          </Reveal>

          <Reveal className="contact__card" delay={0.1}>
            <span className="label">Factory address</span>
            <address className="contact__address">{COMPANY.address}</address>
            <a href={COMPANY.maps} target="_blank" rel="noopener noreferrer" className="contact__link">
              <MapPin size={15} strokeWidth={1.5} />
              Open in Google Maps
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </a>
          </Reveal>

          <Reveal className="contact__card" delay={0.2}>
            <span className="label">Follow</span>
            <div className="contact__socials">
              <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer">
                Instagram <ArrowUpRight size={18} strokeWidth={1.4} />
              </a>
              <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer">
                Facebook <ArrowUpRight size={18} strokeWidth={1.4} />
              </a>
            </div>
            <p className="contact__topics">
              Product enquiries · Samples · Specifications · Customization ·
              Manufacturing requirements
            </p>
          </Reveal>
        </div>

        <Reveal className="contact__map">
          <iframe
            src={COMPANY.mapsEmbed}
            title="AF7 factory location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>

      <footer className="footer" ref={footRef}>
        <div className="wrap">
          <div className="footer__top">
            <p className="footer__tagline">
              AF7 — <em className="serif">Precision in every detail.</em>
            </p>
            <nav className="footer__nav" aria-label="Footer">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(n.id);
                  }}
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <button className="footer__top-btn" onClick={() => scrollToId("top")} aria-label="Back to top">
              <ArrowUp size={18} strokeWidth={1.4} />
            </button>
          </div>

          <div className="footer__mark">
            <motion.div style={{ y: markY }}>
              <Image src="/af7logowhite.svg" alt="AF7" width={1560} height={936} />
            </motion.div>
          </div>

          <div className="footer__base">
            <span>{COMPANY.descriptor}</span>
            <span>{COMPANY.city}</span>
            <span>© {new Date().getFullYear()} AF7</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
