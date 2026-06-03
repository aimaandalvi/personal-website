import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";

export const metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div>
      <header className="mb-10">
        <h1 className="font-serif text-5xl font-semibold italic leading-tight text-zinc-950 dark:text-zinc-50 sm:text-7xl">
          Experience
        </h1>
      </header>
      <section className="space-y-4" aria-label="Professional experience">
        {experiences.map((experience) => (
          <ExperienceCard key={`${experience.company}-${experience.role}`} experience={experience} />
        ))}
      </section>
    </div>
  );
}
