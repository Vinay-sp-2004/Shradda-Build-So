import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { navLinks } from "../data/content";

const services = [
  "Residential Construction",
  "Commercial Construction",
  "Interior Design",
  "Renovation & Remodeling",
  "Turnkey Projects",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col footer__brand">
          <a href="#home" className="footer__logo">
            <span className="footer__mark">S</span>
            <span className="footer__name">
              Shraddha <span>Build Solutions</span>
            </span>
          </a>
          <p className="footer__tag">
            Building dreams into reality across India since 2007. Premium
            construction, delivered with trust.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook" className="footer__social-link">
              <FacebookIcon size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="footer__social-link">
              <InstagramIcon size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="footer__social-link">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Services</h4>
          <ul className="footer__links">
            {services.map((s) => (
              <li key={s}>
                <a href="#services">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Reach Us</h4>
          <ul className="footer__contact">
            <li>
              <MapPin size={17} strokeWidth={1.8} />
              42, Jayanagar 4th Block, Bengaluru 560011
            </li>
            <li>
              <Phone size={17} strokeWidth={1.8} />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li>
              <Mail size={17} strokeWidth={1.8} />
              <a href="mailto:hello@shraddhabuild.in">hello@shraddhabuild.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>
            © {new Date().getFullYear()} Shraddha Build Solutions. All rights
            reserved.
          </p>
          <a href="#home" className="footer__top" aria-label="Back to top">
            <ArrowUp size={16} strokeWidth={2.2} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
