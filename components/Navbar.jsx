"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import "./Navbar.css";

const navItems = [
  { number: "01", label: "Profile", href: "#profile" },
  { number: "02", label: "Products", href: "#products" },
  { number: "03", label: "Applications", href: "#applications" },
  { number: "04", label: "Manufacturing", href: "#manufacturing" },
  { number: "05", label: "Quality", href: "#quality" },
  { number: "06", label: "Customization", href: "#customization" },
  { number: "07", label: "Packaging", href: "#packaging" },
  { number: "08", label: "Global Business", href: "#global" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="profile-nav">
        <div className="profile-nav__inner">
          {/* BRAND */}
          <motion.a
            href="#home"
            className="profile-nav__brand"
            aria-label="AF7"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Image
              src="/af7logo-27.svg"
              alt="AF7"
              width={390}
              height={234}
              priority
              className="profile-nav__logo"
            />
          </motion.a>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="profile-nav__links"
            aria-label="Primary navigation"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.number}
                href={item.href}
                className="profile-nav__link"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.08 + index * 0.045,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="profile-nav__link-number">
                  {item.number}
                </span>

                <span className="profile-nav__link-label">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </nav>

          {/* RIGHT */}
          <motion.div
            className="profile-nav__right"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="profile-nav__location">
              LAHORE · PAKISTAN
            </span>

            <a
              href="#contact"
              className="profile-nav__contact"
            >
              <span>CONTACT</span>
              <ArrowUpRight
                size={14}
                strokeWidth={1.3}
              />
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
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* MOBILE HEADER */}
              <div className="profile-mobile__header">
                <a
                  href="#home"
                  className="profile-mobile__brand"
                  onClick={closeMenu}
                  aria-label="AF7"
                >
                  <Image
                    src="/af7logowhite.svg"
                    alt="AF7"
                    width={390}
                    height={234}
                    priority
                    className="profile-mobile__logo"
                  />
                </a>

                <button
                  type="button"
                  className="profile-mobile__close"
                  onClick={closeMenu}
                  aria-label="Close navigation"
                >
                  <X
                    size={21}
                    strokeWidth={1.3}
                  />
                </button>
              </div>

              {/* MOBILE LINKS */}
              <nav
                className="profile-mobile__links"
                aria-label="Mobile navigation"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.number}
                    href={item.href}
                    onClick={closeMenu}
                    className="profile-mobile__link"
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: 0.08 + index * 0.045,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span className="profile-mobile__number">
                      {item.number}
                    </span>

                    <strong>{item.label}</strong>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.2}
                    />
                  </motion.a>
                ))}

                {/* CONTACT */}
                <motion.a
                  href="#contact"
                  onClick={closeMenu}
                  className="profile-mobile__link profile-mobile__link--contact"
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: 0.46,
                    ease: [0.16, 1, 1, 0.3],
                  }}
                >
                  <span className="profile-mobile__number">
                    09
                  </span>

                  <strong>Contact</strong>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.2}
                  />
                </motion.a>
              </nav>

              {/* MOBILE FOOTER */}
              <div className="profile-mobile__footer">
                <span>AF7</span>
                <span>LAHORE · PAKISTAN</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}