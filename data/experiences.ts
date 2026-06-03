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
    company: "Manulife Wealth",
    role: "Data Analyst, Retail and Wealth Operations",
    location: "Waterloo, Canada",
    dates: "January 2026 - April 2026",
    description:
      "Improved reporting infrastructure with Power BI, SQL, Databricks, and automation workflows.",
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
      "Built workforce planning models to analyze capacity, forecasting, and headcount needs.",
    link: "https://www.manulife.ca/",
    initials: "MR",
    logo: "/manulife-logo.png",
  },
  {
    company: "Singapore Police Force",
    role: "Assistant Group Leader",
    location: "Singapore, Singapore",
    dates: "April 2022 - February 2024",
    description:
      "Led and trained team members while supporting patrol, incident response, and operations.",
    link: "https://www.police.gov.sg/",
    initials: "SP",
    logo: "/spf-logo.png",
    logoBackground: "navy",
  },
  {
    company: "Singapore Management University",
    role: "Marketing & Social Media Assistant",
    location: "Singapore, Singapore",
    dates: "January 2022 - April 2022",
    description:
      "Supported admissions outreach through social content, student engagement, and events.",
    link: "https://www.smu.edu.sg/",
    initials: "SM",
    logo: "/smu-logo.jpeg",
  },
];
