import React from 'react';

const pillars = [
  {
    number: '01',
    title: 'Financial & Cost Accounting',
    description:
      'Rigorous preparation of corporate financial statements, Monthly MIS reports, and variance analysis frameworks. In-depth Cost-Volume-Profit (CVP) analysis, expense allocation, and budgetary control systems.',
    tools: ['Financial Reporting', 'Variance Analysis', 'CVP Modeling', 'MIS Generation', 'Budgetary Controls']
  },
  {
    number: '02',
    title: 'Financial Modeling & Data',
    description:
      'Advanced spreadsheet analysis for operational modeling and reconciliation scrutiny. Structured data manipulation using VLOOKUP, XLOOKUP, INDEX/MATCH, pivot tables, and scenario evaluation.',
    tools: ['MS Excel Advanced', 'Lookups & Pivots', 'Reconciliation Scrutiny', 'Working Capital Evaluation', 'Data Modeling']
  },
  {
    number: '03',
    title: 'Statutory Compliance & ERP',
    description:
      'Hands-on execution of daily voucher processing and inventory ledgers via Tally ERP. Knowledge of GST reconciliation, direct tax compliance, and statutory audit readiness protocols.',
    tools: ['Tally ERP', 'GST Compliance', 'Tax Assessment', 'Voucher Scrutiny', 'Audit Readiness']
  }
];

export function Skills() {
  return (
    <section id="skills" className="section wrap" aria-labelledby="skills-title">
      <div className="section-header">
        <div>
          <span className="eyebrow">04 / CORE COMPETENCIES</span>
          <h2 id="skills-title" className="section-title">
            Structured analysis.<br />
            Institutional accuracy.
          </h2>
        </div>
        <p className="tabular" style={{ fontSize: '11px', color: 'var(--muted)', textAlign: 'right' }}>
          3 PILLARS<br />
          ENTERPRISE READY
        </p>
      </div>

      <div className="skills-grid">
        {pillars.map((p, idx) => (
          <article key={idx} className="skill-col">
            <span className="skill-number">{p.number} / COMPETENCY</span>
            <h3 className="skill-title">{p.title}</h3>
            <p className="skill-desc">{p.description}</p>
            <div className="tag-list">
              {p.tools.map((t, i) => (
                <span key={i} className="tag-pill">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
