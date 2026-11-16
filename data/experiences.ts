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
      "Built AI incident workflows, consolidated 60 reconciliation flows into 4, and delivered Snowflake data extracts with Workato.",
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
      "Centralized Salesforce and Databricks SQL reporting in Power BI and automated recurring reporting and document reviews.",
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
      "Built Excel and Power Query models for workforce forecasting, process efficiency, capacity, and multi-year staffing needs.",
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
      "Led a Power BI market dashboard with Excel and Power Query pipelines to assess wholesale growth opportunities.",
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
      "Led and trained team members while supporting patrol, incident response, and operations.",
    link: "https://www.police.gov.sg/",
    initials: "SP",
    logo: "/spf-logo.png",
    logoBackground: "navy",
  },
];
