export type Coursework = {
  title: string;
  description: string;
};

export const education = {
  school: "University of Waterloo",
  program: "Bachelor of Applied Science in Management Engineering",
  dates: "2024 - Present",
  cumulativeGpa: "89.48% / 3.9 out of 4",
  standing: "Excellent Standing",
};

export const coursework: Coursework[] = [
  {
    title: "Economics",
    description:
      "Financial and managerial economics, including engineering financial management, microeconomic decision-making, cost tradeoffs, and business context for technical work.",
  },
  {
    title: "Probability and Statistics",
    description:
      "Probability models, statistical reasoning, uncertainty, distributions, estimation, and data-driven analysis for engineering and operations decisions.",
  },
  {
    title: "Circuits",
    description:
      "Electrical circuits and instrumentation fundamentals, including circuit behaviour, measurement, lab work, and engineering analysis of physical systems.",
  },
  {
    title: "Programming and Software Systems",
    description:
      "Python fundamentals, object-oriented programming, data structures, algorithms, sorting, relational databases, SQL, full-stack web development, React, Node.js, and TypeScript.",
  },
  {
    title: "Modelling, Optimization, and Operations",
    description:
      "Operations research, optimization modelling, workflow analysis, work design, facilities planning, process flow, layout, and capacity-focused operational improvement.",
  },
];
