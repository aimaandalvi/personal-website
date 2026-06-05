import { ProjectDeck } from "@/components/ProjectDeck";
import { builtProjects, workingProjects } from "@/data/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div>
      <header className="mb-10">
        <h1 className="font-serif text-5xl font-semibold italic leading-tight text-zinc-950 dark:text-zinc-50 sm:text-7xl">
          Projects
        </h1>
      </header>
      <section aria-labelledby="built-projects">
        <h2 id="built-projects" className="mb-5 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          Built
        </h2>
        <ProjectDeck projects={builtProjects} />
      </section>

      <section aria-labelledby="working-projects" className="mt-14">
        <h2 id="working-projects" className="mb-5 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          Working On
        </h2>
        <ProjectDeck projects={workingProjects} />
      </section>
    </div>
  );
}
