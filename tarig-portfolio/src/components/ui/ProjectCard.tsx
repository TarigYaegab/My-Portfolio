import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="group flex flex-col rounded-lg border border-line bg-bg-surface overflow-hidden transition-colors hover:border-accent/60">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-line bg-bg-alt">
        <span className="h-2 w-2 rounded-full bg-[#F56A5B]" />
        <span className="h-2 w-2 rounded-full bg-[#F5BD4F]" />
        <span className="h-2 w-2 rounded-full bg-[#59C97A]" />
        <span className="ml-2 text-[11px] text-ink-faint font-mono truncate">{project.slug}.tsx</span>
      </div>

      {project.image && (
        <div className="aspect-[16/9] bg-bg-alt overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed flex-1">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded border border-line text-ink-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4 text-sm">
          <button
            onClick={() => onOpen(project)}
            className="text-accent hover:text-accent-soft font-medium transition-colors"
          >
            View details
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted hover:text-ink transition-colors"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted hover:text-ink transition-colors"
            >
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
