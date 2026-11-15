export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  graduation: string;
  score: string;
  honors?: string;
}

export interface SkillCategory {
  name: string;
  tools: string[];
}

export interface Contact {
  email: string;
  linkedIn: string;
  location: string;
}

export interface ResumeData {
  name: string;
  headline: string;
  location: string;
  summary: string;
  quantitativeHighlights: string[];
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  contact: Contact;
}

export const resumeData: ResumeData = {
  name: "Sravani Samavedam",
  headline: "Qualified Cost and Management Accountant (CMA)",
  location: "Vijayawada, Andhra Pradesh, India",
  summary: "Qualified Cost and Management Accountant (CMA) with strong expertise in financial analysis, cost management, and budgeting. Solid foundation in accounting principles, business performance evaluation, and data-driven decision-making, backed by academic excellence and mentoring leadership.",
  quantitativeHighlights: [
    "All 4 CMA Groups Cleared Consecutively",
    "61.25% CMA Aggregate",
    "97.5% Class XII MEC",
    "600/600 Class X"
  ],
  experience: [
    {
      role: "Accounts & Costing Trainee",
      company: "MS Infra",
      location: "Vijayawada, AP",
      startDate: "July 2024",
      endDate: "Sept 2025",
      description: "Assisted in preparing Monthly MIS reports (financial analysis, cost tracking, budget variance reporting); analyzed project-wise expenses to identify cost drivers; performed ledger scrutiny, bank reconciliations, and transaction verification for internal control compliance; supported audit processes via documentation and cross-functional coordination."
    }
  ],
  education: [
    {
      degree: "Cost and Management Accountant (CMA)",
      institution: "The Institute of Cost Accountants of India (ICMAI), Vijayawada Chapter",
      graduation: "Dec 2025",
      score: "61.25%",
      honors: "Cleared all four groups (Intermediate & Final) consecutively while pursuing B.Com—among the few in the batch to qualify in a continuous sequence."
    },
    {
      degree: "Bachelor of Commerce (Accounting & Finance)",
      institution: "Krishna University",
      graduation: "Expected May 2026",
      score: "",
      honors: "Awarded Best Student of the Academic Year for two consecutive years."
    },
    {
      degree: "Class XII (MEC)",
      institution: "Annapurna Memorial Modern Jr. College",
      graduation: "March 2023",
      score: "97.5%",
      honors: "Secured highest marks in the college in the CMA Foundation Examination."
    },
    {
      degree: "Class X",
      institution: "S.V.V.E.M High School",
      graduation: "March 2021",
      score: "600/600"
    }
  ],
  skills: [
    {
      name: "Financial Analysis & Reporting",
      tools: ["MS Excel (Pivot Tables, VLOOKUP/XLOOKUP, data analysis functions)"]
    },
    {
      name: "Business & Cost Analysis",
      tools: ["Tally ERP", "Expense tracking", "Profitability assessment"]
    },
    {
      name: "Data Analysis & Interpretation",
      tools: ["Ratio analysis", "Cash flow analysis", "Capital budgeting techniques"]
    },
    {
      name: "Process & Compliance Support",
      tools: ["Internal controls", "Audit documentation", "GST basics"]
    },
    {
      name: "Software Tools",
      tools: ["MS PowerPoint"]
    }
  ],
  contact: {
    email: "sravanisamavedam18@gmail.com",
    linkedIn: "https://linkedin.com/in/sravani-samavedam",
    location: "Vijayawada, Andhra Pradesh, India"
  }
};