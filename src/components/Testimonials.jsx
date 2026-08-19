import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="section section--dark testimonials" id="testimonials">
      <div className="container">
        <div className="section-head" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          <span className="eyebrow reveal" style={{ justifyContent: "center" }}>
            Client Voices
          </span>
          <h2 className="section-title reveal" data-delay="1">
            What our clients say
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="testimonial reveal"
              data-delay={String(i + 1)}
            >
              <Quote size={34} className="testimonial__quote-icon" strokeWidth={1.4} />
              <div className="testimonial__stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="testimonial__text">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="testimonial__author">
                <span className="testimonial__avatar">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
