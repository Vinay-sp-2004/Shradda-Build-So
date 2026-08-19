import {
  Home, Building2, Sofa, Hammer, KeyRound, ShieldCheck, ArrowUpRight,
} from "lucide-react";
import { services } from "../data/content";

const iconMap = { Home, Building2, Sofa, Hammer, KeyRound, ShieldCheck };

export default function Services() {
  return (
    <section className="section section--alt services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">What We Do</span>
          <h2 className="section-title reveal" data-delay="1">
            Comprehensive construction services
          </h2>
          <p className="section-subtitle reveal" data-delay="2">
            From foundation to finishing, we manage every stage of your build
            with a single point of accountability.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.title}
                className="service-card reveal"
                data-delay={String((i % 3) + 1)}
              >
                <div className="service-card__icon">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <span className="service-card__link">
                  Learn more
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
