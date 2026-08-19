import { ArrowRight, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="container hero__content">
        <div className="hero__badge reveal">
          <Star size={14} fill="currentColor" strokeWidth={0} />
          <span>18+ Years of Trusted Construction Excellence</span>
        </div>

        <h1 className="hero__title reveal" data-delay="1">
          Building Dreams
          <br />
          <span className="hero__title-accent">Into Reality</span>
        </h1>

        <p className="hero__subtitle reveal" data-delay="2">
          Shraddha Build Solutions crafts premium residential and commercial
          spaces across India — engineered with precision, delivered with
          integrity, and finished to perfection.
        </p>

        <div className="hero__actions reveal" data-delay="3">
          <a href="#contact" className="btn btn--gold">
            Get Free Consultation
            <ArrowRight size={18} strokeWidth={2.4} />
          </a>
          <a href="#projects" className="btn btn--outline">
            View Our Projects
          </a>
        </div>

        <div className="hero__stats reveal" data-delay="4">
          <div className="hero__stat">
            <span className="hero__stat-num">240+</span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <span className="hero__divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">180+</span>
            <span className="hero__stat-label">Happy Clients</span>
          </div>
          <span className="hero__divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">18+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}
