import { ProjectDeck } from "@/components/ProjectDeck";
import { projects } from "@/data/projects";

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
      <ProjectDeck projects={projects} />
    </div>
  );
}
