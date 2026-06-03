import { SocialLinks } from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Footer() {
  return (
    <footer className="mx-auto mt-20 flex max-w-4xl flex-col gap-5 border-t border-zinc-200/80 px-5 py-8 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div>
        <p className="text-sm font-medium text-zinc-950 dark:text-zinc-100">Get in Touch</p>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
          Open to internships across data, operations, product, software, and business technology.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <SocialLinks compact />
        <ThemeToggle />
      </div>
    </footer>
  );
}
