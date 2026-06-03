"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-zinc-50/75 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/80">
      <nav
        className="mx-auto flex max-w-4xl items-center justify-center px-5 py-4 sm:px-6"
        aria-label="Main navigation"
      >
        <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-zinc-300/70 bg-white/70 p-1 dark:border-white/10 dark:bg-white/[0.04]">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (pathname === "/" && item.href === "/about");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition sm:px-6 sm:text-base ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-sm dark:bg-[#1db954] dark:text-ink-950"
                    : "text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
