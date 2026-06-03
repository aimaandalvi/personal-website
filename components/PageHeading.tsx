export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-[#1db954]">
        {eyebrow}
      </p>
      <h1 className="font-serif text-5xl font-semibold italic leading-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </header>
  );
}
