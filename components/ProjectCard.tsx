import type { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const hasLink = project.href !== "#";
  const cardClassName = `group flex h-full flex-col rounded-xl border border-zinc-200/80 bg-white/70 shadow-sm transition duration-200 dark:border-white/10 dark:bg-white/[0.035] ${
    hasLink
      ? "hover:-translate-y-1 hover:border-zinc-400 hover:shadow-soft dark:hover:border-[#1db954]/60"
      : ""
  } ${featured ? "min-h-[320px] p-8 sm:p-10" : "p-5"}`;

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h2
          className={`font-semibold text-zinc-950 dark:text-zinc-50 ${
            featured ? "text-3xl leading-tight sm:text-4xl" : "text-lg leading-7"
          }`}
        >
          {project.title}
        </h2>
        {hasLink && (
          <ExternalLink
            aria-hidden="true"
            size={featured ? 22 : 17}
            className="mt-1 shrink-0 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-700 dark:group-hover:text-[#1db954]"
          />
        )}
      </div>
      <p
        className={`mt-5 flex-1 text-zinc-600 dark:text-zinc-400 ${
          featured ? "text-lg leading-8" : "leading-7"
        }`}
      >
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-300/70 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-white/10 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (!hasLink) {
    return <article className={cardClassName}>{content}</article>;
  }

  return (
    <a href={project.href} target="_blank" rel="noopener noreferrer" className={cardClassName}>
      {content}
    </a>
  );
}
