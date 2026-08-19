import { useEffect, useState } from "react";
import { MapPin, ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { projects } from "../data/content";

const categories = ["All", "Residential", "Commercial", "Interior", "Turnkey"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const gallery = selectedProject?.photos?.length
    ? selectedProject.photos
    : selectedProject
      ? [selectedProject.image]
      : [];

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
      if (event.key === "ArrowLeft") {
        setSelectedPhoto((current) => (current - 1 + gallery.length) % gallery.length);
      }
      if (event.key === "ArrowRight") {
        setSelectedPhoto((current) => (current + 1) % gallery.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, gallery.length]);

  const openProject = (project) => {
    setSelectedProject(project);
    setSelectedPhoto(0);
  };

  const closeProject = () => setSelectedProject(null);

  const showPreviousPhoto = () => {
    setSelectedPhoto((current) => (current - 1 + gallery.length) % gallery.length);
  };

  const showNextPhoto = () => {
    setSelectedPhoto((current) => (current + 1) % gallery.length);
  };

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
              role="button"
              tabIndex="0"
              onClick={() => openProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openProject(project);
                }
              }}
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

      {selectedProject && (
        <div
          className="project-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeProject();
          }}
        >
          <div
            className="project-modal__window"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              className="project-modal__close"
              type="button"
              aria-label="Close project details"
              onClick={closeProject}
            >
              <X size={22} />
            </button>

            <div className="project-modal__gallery">
              <img
                src={gallery[selectedPhoto]}
                alt={`${selectedProject.title} project detail ${selectedPhoto + 1}`}
              />
              {gallery.length > 1 && (
                <>
                  <button
                    className="project-modal__nav project-modal__nav--previous"
                    type="button"
                    aria-label="Previous project photo"
                    onClick={showPreviousPhoto}
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    className="project-modal__nav project-modal__nav--next"
                    type="button"
                    aria-label="Next project photo"
                    onClick={showNextPhoto}
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            <div className="project-modal__content">
              <span className="project-modal__eyebrow">Project Detail</span>
              <h2 id="project-modal-title">{selectedProject.title}</h2>
              <div className="project-modal__meta">
                <span>{selectedProject.category}</span>
                <span>
                  <MapPin size={15} />
                  {selectedProject.location}
                </span>
              </div>
              {gallery.length > 1 && (
                <div className="project-modal__thumbnails" aria-label="Project photos">
                  {gallery.map((photo, index) => (
                    <button
                      key={photo}
                      className={`project-modal__thumbnail ${selectedPhoto === index ? "is-active" : ""}`}
                      type="button"
                      aria-label={`View project photo ${index + 1}`}
                      onClick={() => setSelectedPhoto(index)}
                    >
                      <img src={photo} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
