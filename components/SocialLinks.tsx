import { Github, Linkedin, Mail, ScrollText } from "lucide-react";

const links = [
  {
    label: "Email",
    href: "/contact",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aimaan-dalvi",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/aimaandalvi",
    icon: Github,
  },
  {
    label: "Resume",
    href: "/resume.pdf", // TODO: Replace public/resume.pdf with your current resume.
    icon: ScrollText,
  },
];

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
          rel={href.startsWith("http") || href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
          className={
            compact
              ? "inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300/70 bg-white/70 text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:border-white/25 dark:hover:text-white"
              : "inline-flex items-center gap-2 rounded-full border border-zinc-300/70 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:border-white/25 dark:hover:text-white"
          }
          aria-label={label}
          title={label}
        >
          <Icon aria-hidden="true" size={16} />
          {!compact && <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}
