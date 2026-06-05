export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const builtProjects: Project[] = [
  {
    title: "SnapRSVP",
    description:
      "Built a macOS RSVP reading app that converts screen or PDF text into a fast focus overlay.",
    tags: ["Python", "PyQt6", "MSS", "Tesseract OCR", "PyInstaller"],
    href: "https://github.com/aimaandalvi/SnapRSVP",
  },
  {
    title: "Financial Planning Tool",
    description:
      "Built an Excel/VBA dashboard for budgets, goals, expenses, and purchase impact analysis.",
    tags: ["Excel", "VBA"],
    href: "#",
  },
  {
    title: "Student Scheduling Decision Support System",
    description:
      "Developed an Excel/VBA scheduler that recommends study plans and visualizes weekly workload.",
    tags: ["Excel", "VBA"],
    href: "#",
  },
];

export const workingProjects: Project[] = [
  {
    title: "RecipeFlow",
    description:
      "Full-stack Chrome extension that uses AI to turn messy recipe websites into clean, interactive cooking workspaces with scaled ingredients, timers, checklists, shopping lists, and substitutions.",
    tags: [
      "React",
      "TypeScript",
      "Chrome Extension MV3",
      "Node.js / Express",
      "REST APIs",
      "Tailwind CSS",
      "Vite",
      "Zod",
    ],
    href: "#",
  },
];
