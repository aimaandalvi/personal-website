export type Experience = {
  company: string;
  role: string;
  location?: string;
  dates: string;
  description: string;
  link: string;
  initials: string;
  logo?: string;
  logoBackground?: string;
};

export const experiences: Experience[] = [
  {
    company: "Brookfield Asset Management",
    role: "AI & Data Engineer Intern, Data Analytics and Automation",
    location: "Toronto, Canada",
    dates: "September 2026 - December 2026",
    description:
      "Built AI-powered workflows and data pipelines to simplify internal operations and support business reporting.",
    link: "https://www.brookfield.com/",
    initials: "BA",
    logo: "/brookfield-logo.png",
    logoBackground: "white",
  },
  {
    company: "Manulife Wealth",
    role: "Data Analyst, Retail and Wealth Operations",
    location: "Waterloo, Canada",
    dates: "January 2026 - April 2026",
    description:
      "Built reporting systems and automated recurring workflows to help leaders understand advisor workloads and productivity.",
    link: "https://www.manulife.ca/",
    initials: "MW",
    logo: "/manulife-logo.png",
  },
  {
    company: "Manulife",
    role: "Business Analyst, Department of Regional Transformation",
    location: "Singapore, Singapore",
    dates: "May 2025 - August 2025",
    description:
      "Developed workforce planning models to align staffing with demand and uncover opportunities to improve operational efficiency.",
    link: "https://www.manulife.ca/",
    initials: "MR",
    logo: "/manulife-logo.png",
  },
  {
    company: "Harmony Meadows Alpaca",
    role: "Project Team Member - Data Analyst",
    location: "Waterloo, Canada",
    dates: "July 2025 - August 2025",
    description:
      "Led the development of a market research dashboard to help the farm evaluate wholesale expansion opportunities.",
    link: "https://www.harmonymeadowsalpaca.ca/",
    initials: "HM",
    logo: "/harmony-meadows-logo.png",
    logoBackground: "white",
  },
  {
    company: "Singapore Police Force",
    role: "Assistant Group Leader, Public Transport Security Command",
    location: "Singapore, Singapore",
    dates: "April 2022 - February 2024",
    description:
      "Led and trained team members while coordinating patrols and incident response to support public transport security.",
    link: "https://www.police.gov.sg/",
    initials: "SP",
    logo: "/spf-logo.png",
    logoBackground: "navy",
  },
];
