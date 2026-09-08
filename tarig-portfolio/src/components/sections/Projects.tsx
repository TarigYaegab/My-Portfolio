import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            label="featured-projects"
            title="Things I've built"
            description="Add new projects by editing src/data/projects.ts — no component changes needed."
          />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delayMs={(i % 3) * 80}>
              <ProjectCard project={project} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
