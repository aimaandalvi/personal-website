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
    role: "Incoming Data Engineer, Data Analytics and Automation",
    location: "Toronto, Canada",
    dates: "September 2026 - December 2026",
    description: "Incoming Fall 2026 co-op.",
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
      "Built Power BI reporting infrastructure with Salesforce, Databricks SQL, SharePoint, and Power Automate.",
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
      "Built workforce planning and forecasting models for demand, capacity, shrinkage, and multi-year FTE needs.",
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
      "Built market research dashboards with Excel, Power Query, Shopify exports, external benchmarks, and Power BI.",
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
