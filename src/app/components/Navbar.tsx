"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const contactInfo = (
    <div className="hidden lg:flex items-center gap-4 text-sm">
      <a
        href="tel:0878222541"
        className="text-white/90 hover:text-white flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        087 822 2541
      </a>
      <a
        href="mailto:info@datamass.africa"
        className="text-white/90 hover:text-white flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        info@datamass.africa
      </a>
    </div>
  );

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top bar with contact info */}
      <div className="bg-blue-950/80 backdrop-blur-sm py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {contactInfo}
          <div className="hidden lg:flex items-center gap-4 text-sm">
            <Link href="/banking" className="text-white/90 hover:text-white">
              Banking Details
            </Link>
            <Link href="/signup" className="text-white/90 hover:text-white">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/">
              {/* <img
                src="https://datamass.africa/wp-content/uploads/2020/04/cropped-DATAMASS-LOGO-1.png"
                alt="Datamass Logo"
                className="h-10"
              /> */}
              <span className="text-blue-400">Data</span>mass
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {[
                {
                  name: "Internet Services",
                  submenu: ["Fibre", "LTE", "DSL", "Wireless"],
                },
                {
                  name: "Other Services",
                  submenu: ["WIFI", "VOIP", "Security", "Hosting"],
                },
                { name: "Our Work", href: "/our-work" },
              ].map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href || "#"}
                    className="text-white/90 hover:text-white transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-blue-900/95 backdrop-blur-md rounded-md shadow-lg hidden group-hover:block">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem}
                          href={`#${subItem.toLowerCase()}`}
                          className="block px-4 py-2 text-white/90 hover:text-white hover:bg-blue-800/50 transition-colors"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-blue-900/95 backdrop-blur-md md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="p-4">
            {contactInfo}
            <div className="border-t border-white/10 my-4" />
            {[
              {
                name: "Internet Services",
                submenu: ["Fibre", "LTE", "DSL", "Wireless"],
              },
              {
                name: "Other Services",
                submenu: ["WIFI", "VOIP", "Security", "Hosting"],
              },
              { name: "Our Work", href: "/our-work" },
              { name: "Banking Details", href: "/banking" },
              { name: "Sign Up", href: "/signup" },
            ].map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  href={item.href || "#"}
                  className="text-white/90 hover:text-white block py-2"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem}
                        href={`#${subItem.toLowerCase()}`}
                        className="text-white/80 hover:text-white block py-2"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
