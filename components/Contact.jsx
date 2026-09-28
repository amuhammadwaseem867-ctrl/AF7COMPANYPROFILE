"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import "./Contact.css";

const enquiryTypes = [
  "PRODUCT ENQUIRY",
  "CUSTOM REQUIREMENT",
  "SAMPLE REQUEST",
  "BUSINESS ENQUIRY",
];

const contactLinks = [
  {
    label: "CALL",
    type: "phone",
    href: "tel:+923134710325",
  },
  {
    label: "INSTAGRAM",
    type: "instagram",
    href: "https://www.instagram.com/af7trims?stkn=ZmVyNscHJrY2J1",
  },
  {
    label: "FACEBOOK",
    type: "facebook",
    href: "https://www.facebook.com/profile.php?id=61584996430125&mibextid=wwXIfr",
  },
  {
    label: "LOCATION",
    type: "location",
    href: "https://www.google.com/maps/search/?api=1&query=33B%20Punjab%20Small%20Industries%20Corporation%20Sunder%20II%20Lahore%20Pakistan",
  },
];

function SocialIcon({ type }) {
  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        aria-hidden="true"
      >
        <path
          d="M14.5 21v-8h2.8l.5-3.2h-3.3V7.7c0-.9.3-1.7 1.7-1.7h1.8V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.5H8.5V13h2.8v8h3.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "phone") {
    return <Phone size={18} strokeWidth={1.35} />;
  }

  return <MapPin size={18} strokeWidth={1.35} />;
}

export default function Contact() {
  return (
    <section className="contact-section" id="contact">

      {/* =========================================
          FLOATING CONTACT BUTTONS
      ========================================= */}

      <aside className="contact-floating">
        {contactLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.type === "phone" ? undefined : "_blank"}
            rel={
              item.type === "phone"
                ? undefined
                : "noopener noreferrer"
            }
            className="contact-floating__item"
            aria-label={item.label}
          >
            <SocialIcon type={item.type} />

            <span>{item.label}</span>
          </a>
        ))}
      </aside>

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="contact-section__header">
        <div className="contact-section__header-inner">

          <div className="contact-section__header-left">
            <span>CONTACT / ENQUIRIES</span>
            <i />
            <span>AF7 / APPAREL FASTENER</span>
          </div>

          <span className="contact-section__header-right">
            LAHORE · PAKISTAN
          </span>

        </div>
      </header>

      {/* =========================================
          CONTACT INTRO
      ========================================= */}

      <div className="contact-section__main">
        <div className="contact-section__main-inner">

          <motion.div
            className="contact-section__copy"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <span className="contact-section__kicker">
              GET IN TOUCH
            </span>

            <h2>
              Let&apos;s talk
              <br />
              fastening.
            </h2>

            <p>
              For product enquiries, custom requirements, samples or business
              discussions, connect with AF7 / Apparel Fastener.
            </p>

            {/* ADDRESS */}

            <div className="contact-section__location">

              <div className="contact-section__location-mark">
                <MapPin
                  size={17}
                  strokeWidth={1.25}
                />
              </div>

              <div>
                <small>ADDRESS</small>

                <strong>
                  33B, PUNJAB SMALL INDUSTRIES
                  <br />
                  CORPORATION, SUNDER II,
                  <br />
                  LAHORE, PAKISTAN
                </strong>
              </div>

            </div>

            {/* PHONE */}

            <a
              href="tel:+923134710325"
              className="contact-section__phone"
            >
              <Phone
                size={16}
                strokeWidth={1.25}
              />

              <span>
                <small>CALL US</small>
                <strong>+92 313 4710325</strong>
              </span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.2}
              />
            </a>

          </motion.div>

          {/* =========================================
              ENQUIRY PANEL
          ========================================= */}

          <motion.div
            className="contact-section__panel"
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <div className="contact-section__panel-top">
              <span>ENQUIRY TYPE</span>
              <span>AF7</span>
            </div>

            <div className="contact-section__enquiries">

              {enquiryTypes.map((type, index) => (
                <div
                  className="contact-enquiry"
                  key={type}
                >
                  <span>
                    0{index + 1}
                  </span>

                  <strong>
                    {type}
                  </strong>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.2}
                  />
                </div>
              ))}

            </div>

            <div className="contact-section__panel-bottom">
              <span>APPAREL FASTENER</span>
              <i />
              <span>LAHORE · PAKISTAN</span>
            </div>

          </motion.div>

        </div>
      </div>

      {/* =========================================
          REAL GOOGLE MAP
      ========================================= */}

      <section className="contact-section__map">

        <div className="contact-section__map-inner">

          <div className="contact-section__map-heading">

            <span>OUR LOCATION</span>

            <h3>
              Find us
              <br />
              in Lahore.
            </h3>

            <p>
              AF7 / Apparel Fastener is located at Punjab Small Industries
              Corporation, Sunder II, Lahore, Pakistan.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=33B%20Punjab%20Small%20Industries%20Corporation%20Sunder%20II%20Lahore%20Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-section__map-link"
            >
              <span>OPEN IN GOOGLE MAPS</span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.2}
              />
            </a>

          </div>

          <div className="contact-section__map-frame">

            <iframe
              title="AF7 Apparel Fastener Location"
              src="https://www.google.com/maps?q=33B%20Punjab%20Small%20Industries%20Corporation%20Sunder%20II%20Lahore%20Pakistan&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="contact-section__map-label">

              <MapPin
                size={15}
                strokeWidth={1.3}
              />

              <div>
                <span>AF7 / APPAREL FASTENER</span>
                <strong>
                  33B · SUNDER II · LAHORE
                </strong>
              </div>

            </div>

            <span className="contact-section__map-corner contact-section__map-corner--tl" />
            <span className="contact-section__map-corner contact-section__map-corner--tr" />
            <span className="contact-section__map-corner contact-section__map-corner--bl" />
            <span className="contact-section__map-corner contact-section__map-corner--br" />

          </div>

        </div>

      </section>

      {/* =========================================
          BUSINESS INFORMATION
      ========================================= */}

      <section className="contact-section__information">

        <div className="contact-section__information-inner">

          <div className="contact-section__information-heading">

            <span>BUSINESS ENQUIRIES</span>

            <h3>
              Start with
              <br />
              the requirement.
            </h3>

          </div>

          <div className="contact-section__information-copy">

            <p>
              Share the product category, fastening requirement or
              customization need. AF7 can then direct the enquiry toward the
              appropriate product range or business discussion.
            </p>

            <div className="contact-section__information-rule" />

            <div className="contact-section__information-meta">

              <div>
                <span>PRODUCTS</span>
                <strong>
                  ZIPPER + SLIDER
                </strong>
              </div>

              <div>
                <span>APPLICATIONS</span>
                <strong>
                  APPAREL + RELATED PRODUCTS
                </strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>
                  LAHORE · PAKISTAN
                </strong>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          FINAL AF7 CLOSING
      ========================================= */}

      <section className="contact-section__closing">

        <div className="contact-section__closing-grid" />

        <div className="contact-section__closing-inner">

          <div className="contact-section__closing-top">
            <span>
              AF7 / APPAREL FASTENER
            </span>

            <span>
              COMPANY PROFILE · 2026
            </span>
          </div>

          <div className="contact-section__closing-center">

            <motion.div
              className="contact-section__closing-logo"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Image
                src="/af7logowhite.svg"
                alt="AF7 Apparel Fastener"
                width={390}
                height={234}
              />
            </motion.div>

            <div className="contact-section__closing-rule">
              <i />
              <span>APPAREL FASTENER</span>
              <i />
            </div>

            <h3>
              PRECISION
              <br />
              IN EVERY
              <br />
              DETAIL.
            </h3>

          </div>

          <div className="contact-section__closing-bottom">

            <span>
              LAHORE · PAKISTAN
            </span>

            <div className="contact-section__closing-mark">
              <i />
              <b />
              <i />
            </div>

            <span>
              END OF PROFILE
            </span>

          </div>

        </div>

      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="contact-section__footer">

        <div className="contact-section__footer-inner">

          <span>
            AF7 / APPAREL FASTENER
          </span>

          <span>
            LAHORE · PAKISTAN
          </span>

          <span>
            2026
          </span>

        </div>

      </footer>

    </section>
  );
}

