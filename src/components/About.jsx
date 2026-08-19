import { CheckCircle2, Target, Eye } from "lucide-react";

const highlights = [
  "ISO-certified construction practices",
  "In-house architects & structural engineers",
  "18+ years across 4 Indian states",
  "End-to-end turnkey project delivery",
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__media reveal">
          <div className="about__img-main">
            <img
              src="https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&h=750&w=900"
              alt="Contemporary two-story luxury home built by Shraddha Build Solutions"
              loading="lazy"
            />
          </div>
          <div className="about__img-sub">
            <img
              src="https://images.pexels.com/photos/6614837/pexels-photo-6614837.jpeg?auto=compress&cs=tinysrgb&h=400&w=500"
              alt="Architect reviewing blueprints"
              loading="lazy"
            />
          </div>
          <div className="about__exp glass">
            <span className="about__exp-num">18+</span>
            <span className="about__exp-text">Years of<br />Excellence</span>
          </div>
        </div>

        <div className="about__body">
          <span className="eyebrow reveal">About Shraddha</span>
          <h2 className="section-title reveal" data-delay="1">
            Crafting spaces that stand the test of time
          </h2>
          <p className="about__intro reveal" data-delay="2">
            Founded in 2007, Shraddha Build Solutions is a full-service
            construction firm headquartered in Bengaluru. We bring together
            skilled architects, engineers, and craftsmen to deliver homes and
            commercial spaces that blend structural integrity with timeless
            design.
          </p>

          <ul className="about__highlights reveal" data-delay="3">
            {highlights.map((item) => (
              <li key={item}>
                <CheckCircle2 size={20} className="about__check" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="about__mv">
            <div className="about__card reveal" data-delay="3">
              <Target size={26} className="about__card-icon" strokeWidth={1.8} />
              <h3 className="about__card-title">Our Mission</h3>
              <p>
                To deliver construction projects of uncompromising quality,
                on time and within budget, while building lasting relationships
                founded on trust.
              </p>
            </div>
            <div className="about__card reveal" data-delay="4">
              <Eye size={26} className="about__card-icon" strokeWidth={1.8} />
              <h3 className="about__card-title">Our Vision</h3>
              <p>
                To be India&apos;s most respected construction partner —
                recognised for innovation, transparency, and spaces that
                inspire generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
