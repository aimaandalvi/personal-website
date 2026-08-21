import { ContactForm } from "@/components/ContactForm";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const contactLinks = [
  {
    label: "Phone",
    value: "+1 (437) 249-2186",
    href: "tel:+14372492186",
    icon: Phone,
  },
  {
    label: "Email",
    value: "a4dalvi@uwaterloo.ca",
    href: "/contact",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Waterloo, Ontario, Canada",
    href: "https://www.google.com/maps/place/Waterloo,+ON",
    icon: MapPin,
  },
  {
    label: "GitHub",
    value: "aimaandalvi",
    href: "https://github.com/aimaandalvi",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "aimaan-dalvi",
    href: "https://www.linkedin.com/in/aimaan-dalvi",
    icon: Linkedin,
  },
];

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div>
      <header className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-[#1db954]">
          Contact
        </p>
        <h1 className="font-serif text-5xl font-semibold italic leading-tight text-zinc-950 dark:text-zinc-50 sm:text-7xl">
          Let&apos;s connect
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
          Open to internships, collaborations, and useful technical projects.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]" aria-label="Contact options">
        <div className="space-y-4">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-xl border border-zinc-200/80 bg-white/70 p-5 transition hover:-translate-y-0.5 hover:border-zinc-400 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-[#1db954]/60"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-300/70 bg-zinc-100 text-zinc-700 dark:border-white/10 dark:bg-[#1db954]/15 dark:text-[#1db954]">
                <Icon aria-hidden="true" size={20} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">
                  {label}
                </span>
                <span className="mt-1 block font-semibold text-zinc-950 dark:text-zinc-100">{value}</span>
              </span>
            </a>
          ))}
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
