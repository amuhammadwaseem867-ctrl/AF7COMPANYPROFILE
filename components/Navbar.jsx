"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import "./Navbar.css";

const navItems = [
  { number: "01", label: "Profile", href: "#profile" },
  { number: "02", label: "Products", href: "#products" },
  { number: "03", label: "Manufacturing", href: "#manufacturing" },
  { number: "04", label: "Applications", href: "#applications" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="profile-nav">
        <div className="profile-nav__inner">
          {/* BRAND */}
          <motion.a
            href="#home"
            className="profile-nav__brand"
            aria-label="AF7 Apparel Fastener"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Image
              src="/af7logowhite.svg"
              alt="AF7"
              className="profile-nav__logo"
              width={390}
              height={234}
            />

            <span className="profile-nav__divider" />

            <span className="profile-nav__name">
              APPAREL
              <br />
              FASTENER
            </span>
          </motion.a>

          {/* DESKTOP NAV */}
          <nav className="profile-nav__links">
            {navItems.map((item, index) => (
              <motion.a
                key={item.number}
                href={item.href}
                className="profile-nav__link"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.35 + index * 0.08,
                }}
              >
                <span className="profile-nav__link-number">
                  {item.number}
                </span>

                <span>{item.label}</span>
              </motion.a>
            ))}
          </nav>

          {/* RIGHT */}
          <motion.div
            className="profile-nav__right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="profile-nav__location">
              LAHORE · PAKISTAN
            </span>

            <a href="#contact" className="profile-nav__contact">
              CONTACT
              <ArrowUpRight size={14} strokeWidth={1.4} />
            </a>

            <button
              type="button"
              className="profile-nav__menu"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
            </button>
          </motion.div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="profile-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="profile-mobile__panel"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="profile-mobile__header">
                <a
                  href="#home"
                  className="profile-mobile__brand"
                  onClick={closeMenu}
                >
                  <Image
                    src="/af7logowhite.svg"
                    alt="AF7"
                    width={390}
                    height={234}
                  />

                  <span />

                  <div>
                    APPAREL
                    <br />
                    FASTENER
                  </div>
                </a>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="profile-mobile__close"
                  aria-label="Close navigation"
                >
                  <X size={22} strokeWidth={1.3} />
                </button>
              </div>

              <nav className="profile-mobile__links">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.number}
                    href={item.href}
                    onClick={closeMenu}
                    className="profile-mobile__link"
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.07,
                    }}
                  >
                    <span>{item.number}</span>

                    <strong>{item.label}</strong>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.2}
                    />
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  onClick={closeMenu}
                  className="profile-mobile__link profile-mobile__link--contact"
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.42,
                  }}
                >
                  <span>05</span>
                  <strong>Contact</strong>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.2}
                  />
                </motion.a>
              </nav>

              <div className="profile-mobile__footer">
                <span>AF7 / APPAREL FASTENER</span>
                <span>LAHORE · PAKISTAN</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

