import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";

const skillRows = [
  ["Power BI", "DAX", "Power Query", "Excel VBA", "SQL", "Databricks", "Salesforce"],
  ["SharePoint", "Data Visualization", "Power Automate", "Python", "R", "Git", "GitHub"],
  ["JavaScript", "React", "Node.js", "Tailwind CSS", "TypeScript", "Process Improvement Methodologies"],
];

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div>
      <section className="grid gap-10 lg:grid-cols-[1fr_240px] lg:items-center">
        <div>
          <header className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-[#1db954]">
              About
            </p>
            <h1 className="font-serif text-5xl font-semibold italic leading-tight text-zinc-950 dark:text-zinc-50 sm:text-7xl">
              Aimaan Dalvi
            </h1>
            <p className="mt-4 text-xl font-medium text-zinc-700 dark:text-zinc-300">
              Management Engineering @ UWaterloo
            </p>
          </header>
          <div className="max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m interested in building practical systems across data engineering, SQL-backed analysis, software,
              and AI-powered automation. Right now, I&apos;m focused on tools that turn messy workflows into clearer
              reporting, faster decisions, and better operations.
            </p>
          </div>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-full shadow-soft">
          <Image
            src="/avatar.jpg"
            alt="Portrait of Aimaan Dalvi"
            fill
            priority
            sizes="(min-width: 1024px) 240px, 70vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-[#1db954]">
              Skills
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold italic text-zinc-950 dark:text-zinc-50">
              High-Level Toolkit
            </h2>
          </div>
        </div>
        <div className="skill-marquee touch-pan-y select-none rounded-xl border border-zinc-200/80 bg-white/50 py-8 dark:border-white/10 dark:bg-white/[0.025]">
          <div className="space-y-4">
            {skillRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`skill-marquee-track will-change-transform ${rowIndex === 1 ? "skill-marquee-track-reverse" : ""}`}
              >
                {[0, 1].map((groupIndex) => (
                  <div key={groupIndex} className="skill-marquee-group" aria-hidden={groupIndex === 1}>
                    {row.map((skill) => (
                      <span
                        key={`${skill}-${rowIndex}-${groupIndex}`}
                        className="rounded-full border border-zinc-200/80 bg-white/70 px-5 py-3 text-sm font-medium text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
