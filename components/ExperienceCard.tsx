import Image from "next/image";
import type { Experience } from "@/data/experiences";
import { ExternalLink } from "lucide-react";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="group grid gap-5 rounded-xl border border-zinc-200/80 bg-white/70 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-[#1db954]/60 min-[520px]:grid-cols-[56px_1fr]">
      <div
        className={`relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-zinc-300/80 text-sm font-semibold text-zinc-700 dark:border-white/10 dark:text-[#1db954] ${
          experience.logoBackground === "navy"
            ? "bg-[#071b3a]"
            : "bg-zinc-100 dark:bg-[#1db954]/15"
        }`}
      >
        {experience.logo ? (
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            fill
            sizes="56px"
            className={experience.logoBackground === "navy" ? "object-contain p-1.5" : "object-cover"}
          />
        ) : (
          experience.initials
        )}
      </div>
      <div>
        <div className="flex flex-col gap-2 min-[520px]:flex-row min-[520px]:items-start min-[520px]:justify-between">
          <div>
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-zinc-950 transition hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-[#1db954]"
            >
              {experience.company}
              <ExternalLink
                aria-hidden="true"
                size={15}
                className="opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">{experience.role}</p>
          </div>
          <div className="shrink-0 text-left text-sm leading-6 text-zinc-500 dark:text-zinc-400 min-[520px]:text-right">
            {experience.location && <p>{experience.location}</p>}
            <p>{experience.dates}</p>
          </div>
        </div>
        <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">{experience.description}</p>
      </div>
    </article>
  );
}
