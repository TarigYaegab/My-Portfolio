import { useEffect } from "react";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-8"
    >
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto mini-scroll rounded-lg border border-line bg-bg-surface p-6 sm:p-8">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 h-8 w-8 grid place-items-center rounded-md text-ink-muted hover:text-ink hover:bg-bg-alt transition-colors"
        >
          ✕
        </button>

        <p className="section-label">{`// project-details`}</p>
        <h3 id="project-modal-title" className="mt-2 font-display text-2xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-3 text-ink-muted leading-relaxed">{project.description}</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-ink">Problem</h4>
            <p className="mt-1 text-sm text-ink-muted leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink">Solution</h4>
            <p className="mt-1 text-sm text-ink-muted leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-ink">Features</h4>
          <ul className="mt-2 space-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="text-sm text-ink-muted flex gap-2">
                <span className="text-accent">›</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-ink">Technologies</h4>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <li key={t} className="text-[11px] font-mono px-2 py-0.5 rounded border border-line text-ink-muted">
                {t}
              </li>
            ))}
          </ul>
        </div>

        {project.challenges && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-ink">Challenges</h4>
            <p className="mt-1 text-sm text-ink-muted leading-relaxed">{project.challenges}</p>
          </div>
        )}

        {project.learned && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-ink">What I learned</h4>
            <p className="mt-1 text-sm text-ink-muted leading-relaxed">{project.learned}</p>
          </div>
        )}

        <div className="mt-8 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-4 py-2 rounded-md border border-line text-ink hover:border-accent hover:text-accent transition-colors"
            >
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-4 py-2 rounded-md bg-accent text-bg font-medium hover:bg-accent-soft transition-colors"
            >
              Live demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
