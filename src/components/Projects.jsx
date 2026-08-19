import { useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";

const categories = ["All", "Residential", "Commercial", "Interior", "Turnkey"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects__head">
          <div>
            <span className="eyebrow reveal">Our Work</span>
            <h2 className="section-title reveal" data-delay="1">
              Projects we&apos;re proud of
            </h2>
            <p className="section-subtitle reveal" data-delay="2">
              A selection of homes, offices, and interiors delivered across
              India.
            </p>
          </div>
          <div className="projects__filters reveal" data-delay="2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`projects__filter ${filter === cat ? "is-active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {visible.map((project, i) => (
            <article
              key={project.title}
              className="project-card reveal"
              data-delay={String((i % 3) + 1)}
            >
              <div className="project-card__media">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category} project in ${project.location}`}
                  loading="lazy"
                />
                <span className="project-card__tag">{project.category}</span>
                <div className="project-card__hover">
                  <span className="project-card__arrow">
                    <ArrowUpRight size={22} strokeWidth={2} />
                  </span>
                </div>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <span className="project-card__loc">
                  <MapPin size={15} strokeWidth={2} />
                  {project.location}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
