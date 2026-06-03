import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

export function ProjectDeck({ projects }: { projects: Project[] }) {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <section aria-label="Selected projects">
      <div className="grid gap-4">
        {featuredProject && <ProjectCard project={featuredProject} featured />}
        <div className="grid gap-4 md:grid-cols-2">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
