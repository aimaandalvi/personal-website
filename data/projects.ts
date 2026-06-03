export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "SnapRSVP",
    description:
      "Built a macOS RSVP reading app that converts screen or PDF text into a fast focus overlay.",
    tags: ["Python", "PyQt6", "MSS", "Tesseract OCR", "PyInstaller"],
    href: "#",
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
