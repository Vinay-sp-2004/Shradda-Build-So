import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" onClick={close}>
          <span className="nav__mark">S</span>
          <span className="nav__name">
            Shraddha <span>Build Solutions</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav__cta btn btn--gold">
          <Phone size={16} strokeWidth={2.4} />
          <span>Free Consultation</span>
        </a>

        <button
          className="nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`nav__drawer ${open ? "is-open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="nav__drawer-link" onClick={close}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--gold nav__drawer-cta" onClick={close}>
          Get Free Consultation
        </a>
      </div>
      {open && <div className="nav__overlay" onClick={close} />}
    </header>
  );
}
