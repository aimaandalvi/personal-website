export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const builtProjects: Project[] = [
  {
    title: "RecipeFlow",
    description:
      "Built a local-first Chrome extension with a TypeScript/Express AI backend that turns messy recipe pages into structured cooking workspaces.",
    tags: ["React", "TypeScript", "Chrome Extension MV3", "Express", "Zod", "Tailwind CSS"],
    href: "https://github.com/aimaandalvi/RecipeFlow",
  },
  {
    title: "SnapRSVP",
    description:
      "Built a macOS RSVP reading app that captures on-screen or PDF text and converts it into a fast focus overlay.",
    tags: ["Python", "PyQt6", "MSS", "Tesseract OCR", "PDF Parsing", "PyInstaller"],
    href: "https://github.com/aimaandalvi/SnapRSVP",
  },
  {
    title: "Financial Planning Tool",
    description:
      "Built an Excel/VBA planning workbook for expense tracking, budgeting, dashboards, goals, and What-If analysis.",
    tags: ["Excel", "VBA", "What-If Analysis"],
    href: "https://github.com/aimaandalvi/student-financial-planning-tool",
  },
  {
    title: "Student Scheduling Decision Support System",
    description:
      "Developed an Excel/VBA scheduler that recommends study plans and visualizes weekly workload.",
    tags: ["Excel", "VBA"],
    href: "#",
  },
];

export const workingProjects: Project[] = [];
