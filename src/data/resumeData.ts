export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  graduation: string;
  score: string;
  bullets?: string[];
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
  quantitativeHighlights: Array<{ label: string; value: string; detail: string }>;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  contact: Contact;
}

export const resumeData: ResumeData = {
  name: "Sravani Samavedam",
  headline: "Qualified Cost and Management Accountant (CMA)",
  location: "Vijayawada, Andhra Pradesh, India",
  summary:
    "Qualified Cost and Management Accountant (CMA) with strong expertise in financial analysis, cost management, and budgeting. Possess a solid foundation in accounting principles, business performance evaluation, and data-driven decision-making. Demonstrated analytical thinking, problem-solving ability, and leadership through academic excellence and mentoring initiatives.",
  quantitativeHighlights: [
    {
      label: "ICMAI Continuous Sequence",
      value: "All 4 Groups",
      detail: "Cleared consecutively in continuous sequence (Dec 2025) · 61.25% Aggregate"
    },
    {
      label: "Class XII (MEC) Board",
      value: "97.5%",
      detail: "Secured highest marks in the college in the CMA Foundation Examination"
    },
    {
      label: "Krishna University B.Com",
      value: "86%",
      detail: "2x Recipient of the Best Student of the Academic Year Award"
    },
    {
      label: "Class X Board",
      value: "600/600",
      detail: "100% Flawless Aggregate score across all subjects (March 2021)"
    }
  ],
  experience: [
    {
      role: "Accounts & Costing Trainee",
      company: "MS Infra",
      location: "Vijayawada, Andhra Pradesh",
      startDate: "July 2024",
      endDate: "Sept 2025",
      bullets: [
        "Assisted in preparation of Monthly MIS reports including financial analysis, cost tracking, and budget variance reporting for management review.",
        "Analyzed project-wise expenses to identify cost drivers and support performance evaluation.",
        "Performed ledger scrutiny, bank reconciliations, and transaction verification to ensure financial accuracy and internal control compliance.",
        "Supported audit processes through financial documentation, record maintenance, and cross-functional coordination."
      ]
    },
    {
      role: "Academic Mentor & Program Coordinator",
      company: "Student Leadership Initiative",
      location: "Vijayawada, Andhra Pradesh",
      startDate: "2023",
      endDate: "Present",
      bullets: [
        "Designed and delivered structured sessions simplifying complex financial and analytical concepts for students.",
        "Developed presentation materials and performance tracking frameworks to enhance learning outcomes.",
        "Provided guidance on strategic planning, goal setting, and structured problem-solving approaches.",
        "Strengthened leadership, communication, and stakeholder coordination skills through mentoring initiatives."
      ]
    }
  ],
  education: [
    {
      degree: "Cost and Management Accountant (CMA)",
      institution: "The Institute of Cost Accountants of India – Vijayawada Chapter",
      graduation: "December 2025",
      score: "Aggregate: 61.25%",
      bullets: [
        "Completed all four groups (Intermediate & Final) consecutively while pursuing B.Com, demonstrating strong academic discipline and consistency.",
        "Among the few candidates in the batch to qualify CMA in a continuous sequence."
      ]
    },
    {
      degree: "Bachelor of Commerce (Accounting & Finance)",
      institution: "Krishna University",
      graduation: "Expected May 2026",
      score: "86%",
      bullets: [
        "Relevant Coursework: Financial Management, Corporate Accounting, Cost Accounting, Financial Accounting.",
        "Recipient of the Best Student of the Academic Year award for two consecutive academic years."
      ]
    },
    {
      degree: "Class XII – MEC",
      institution: "Annapurna Memorial Modern Jr. College",
      graduation: "March 2023",
      score: "97.5%",
      bullets: [
        "Secured highest marks in the college in the CMA Foundation Examination."
      ]
    },
    {
      degree: "Class X",
      institution: "S.V.V.E.M High School",
      graduation: "March 2021",
      score: "600/600",
      bullets: [
        "Perfect aggregate score across all core subjects."
      ]
    }
  ],
  skills: [
    {
      name: "Financial Analysis & Reporting",
      tools: [
        "Financial statement preparation",
        "MIS reporting",
        "Variance analysis",
        "Budgeting support",
        "Performance evaluation"
      ]
    },
    {
      name: "Business & Cost Analysis",
      tools: [
        "Cost analysis",
        "Expense tracking",
        "Profitability assessment",
        "CVP analysis",
        "Working capital evaluation"
      ]
    },
    {
      name: "Data Analysis & Interpretation",
      tools: [
        "Ratio analysis",
        "Cash flow analysis",
        "Capital budgeting techniques",
        "Trend analysis",
        "Financial modeling fundamentals"
      ]
    },
    {
      name: "Process & Compliance Support",
      tools: [
        "Internal controls",
        "Audit documentation",
        "Statutory record maintenance",
        "Regulatory fundamentals (GST basics)"
      ]
    },
    {
      name: "Tools & Software",
      tools: [
        "MS Excel (Pivot Tables, VLOOKUP/XLOOKUP, Data Analysis)",
        "Tally ERP",
        "MS PowerPoint (Business Presentations)"
      ]
    }
  ],
  contact: {
    email: "sravanisamavedam18@gmail.com",
    linkedIn: "https://linkedin.com/in/sravani-samavedam",
    location: "Vijayawada, Andhra Pradesh, India"
  }
};
