import {
  MessageCircle, Map, PencilRuler, HardHat, KeyRound,
} from "lucide-react";
import { processSteps } from "../data/content";

const iconMap = { MessageCircle, Map, PencilRuler, HardHat, KeyRound };

export default function Process() {
  return (
    <section className="section section--alt process" id="process">
      <div className="container">
        <div className="section-head" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          <span className="eyebrow reveal" style={{ justifyContent: "center" }}>
            How We Work
          </span>
          <h2 className="section-title reveal" data-delay="1">
            Our five-step construction process
          </h2>
          <p className="section-subtitle reveal" data-delay="2" style={{ marginLeft: "auto", marginRight: "auto" }}>
            A clear, proven path from first conversation to the keys in your hand.
          </p>
        </div>

        <div className="process__steps">
          <div className="process__line" />
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.number}
                className="process-step reveal"
                data-delay={String((i % 5) + 1)}
              >
                <div className="process-step__top">
                  <div className="process-step__icon">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>
                  <span className="process-step__num">{step.number}</span>
                </div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
