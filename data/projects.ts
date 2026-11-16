export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const builtProjects: Project[] = [
  {
    title: "2026 FIFA World Cup Schedule Optimization",
    description:
      "Optimized 72 matches across 16 venues, improving minimum recovery by 12.3% and reducing weather exposure by 37.5% versus FIFA's baseline.",
    tags: ["Python", "Gurobi", "pandas", "APIs", "Optimization Modeling"],
    // TODO: Add the optimization project's repository or case study URL.
    href: "#",
  },
  {
    title: "RecipeFlow",
    description:
      "Built a Chrome extension that validates unstructured recipes with Zod and turns them into an interactive React cooking workspace.",
    tags: ["React", "TypeScript", "Chrome Extension MV3", "Express", "Zod", "Tailwind CSS"],
    href: "https://github.com/aimaandalvi/RecipeFlow",
  },
  {
    title: "SnapRSVP",
    description:
      "Built a macOS reading app that captures screen or PDF text and displays it in a focused overlay at up to 800 WPM.",
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
