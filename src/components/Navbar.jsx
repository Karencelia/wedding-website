import { useState, useEffect } from "react";
import weddingData from "../data/weddingData";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Names */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className={`font-heading text-2xl md:text-3xl transition-colors duration-300 ${
              scrolled ? "text-charcoal hover:text-gold" : "text-white hover:text-gold-light"
            }`}
          >
            {weddingData.groom.firstName.charAt(0)} & {weddingData.bride.firstName.charAt(0)}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-body text-xs uppercase tracking-[0.15em] transition-colors duration-300 relative group ${
                  scrolled
                    ? "text-warm-gray hover:text-gold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                  scrolled ? "bg-gold" : "bg-white"
                }`} />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`w-6 h-[1.5px] transition-all duration-300 ${
                scrolled ? "bg-charcoal" : "bg-white"
              } ${isOpen ? "rotate-45 translate-y-[4.5px]" : ""}`}
            />
            <span
              className={`w-6 h-[1.5px] transition-all duration-300 ${
                scrolled ? "bg-charcoal" : "bg-white"
              } ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-[1.5px] transition-all duration-300 ${
                scrolled ? "bg-charcoal" : "bg-white"
              } ${isOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 pb-4 pt-2 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gold-light/30">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 px-6 font-body text-sm uppercase tracking-[0.15em] text-charcoal hover:text-gold hover:bg-gold/5 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
