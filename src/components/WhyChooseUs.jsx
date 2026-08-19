import { Gem, Clock, HardHat, ReceiptIndianRupee } from "lucide-react";
import { whyChooseUs } from "../data/content";

const iconMap = { Gem, Clock, HardHat, ReceiptIndianRupee };

export default function WhyChooseUs() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <div className="section-head why__head">
          <span className="eyebrow reveal">Why Shraddha</span>
          <h2 className="section-title reveal" data-delay="1">
            Built on trust, delivered with excellence
          </h2>
          <p className="section-subtitle reveal" data-delay="2">
            Four commitments that have earned us the confidence of 180+
            families and businesses across India.
          </p>
        </div>

        <div className="why__grid">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="why-card reveal"
                data-delay={String((i % 4) + 1)}
              >
                <div className="why-card__num">0{i + 1}</div>
                <div className="why-card__icon">
                  <Icon size={30} strokeWidth={1.6} />
                </div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
