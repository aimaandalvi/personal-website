import { coursework, education } from "@/data/education";

export const metadata = {
  title: "Education",
};

export default function EducationPage() {
  return (
    <div>
      <header className="mb-10">
        <h1 className="font-serif text-5xl font-semibold italic leading-tight text-zinc-950 dark:text-zinc-50 sm:text-7xl">
          Education
        </h1>
      </header>

      <section className="rounded-xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.035] sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-[#1db954]">
              {education.school}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
              {education.program}
            </h2>
            <p className="mt-5 text-base text-zinc-600 dark:text-zinc-400">{education.dates}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[360px]">
            <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-5 dark:border-white/10 dark:bg-white/[0.035]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">
                Average
              </p>
              <p className="mt-3 text-3xl font-semibold leading-none text-zinc-950 dark:text-zinc-50">
                {education.cumulativeAverage}
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-5 dark:border-white/10 dark:bg-white/[0.035]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">
                GPA
              </p>
              <p className="mt-3 text-3xl font-semibold leading-none text-zinc-950 dark:text-zinc-50">
                {education.fourPointGpa}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="relevant-coursework">
        <h2 id="relevant-coursework" className="mb-5 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          Relevant Coursework
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coursework.map((course) => (
            <div
              key={course.title}
              className="rounded-full border border-zinc-200/80 bg-white/70 px-5 py-4 text-center text-base font-semibold text-zinc-950 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.035] dark:text-zinc-50 dark:hover:border-[#1db954]/60"
            >
              {course.title}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
