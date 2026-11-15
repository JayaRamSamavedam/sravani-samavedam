import React from 'react';

const educationItems = [
  {
    period: 'CONCLUDED DEC 2025',
    institution: 'The Institute of Cost Accountants of India (ICMAI) – Vijayawada Chapter',
    credential: 'Cost and Management Accountant (CMA)',
    details:
      'Completed all four groups (Intermediate & Final) consecutively while pursuing B.Com, demonstrating strong academic discipline and consistency. Among the few candidates in the batch to qualify CMA in a continuous sequence. Aggregate: 61.25%.',
    badge: 'ALL 4 GROUPS CONSECUTIVELY • 61.25%'
  },
  {
    period: 'EXPECTED MAY 2026',
    institution: 'Krishna University',
    credential: 'Bachelor of Commerce (Accounting & Finance)',
    details:
      'Scored 86%. Relevant Coursework: Financial Management, Corporate Accounting, Cost Accounting, Financial Accounting. Recipient of the Best Student of the Academic Year award for two consecutive academic years.',
    badge: '86% • 2X BEST STUDENT OF THE YEAR'
  },
  {
    period: 'CONCLUDED MARCH 2023',
    institution: 'Annapurna Memorial Modern Jr. College',
    credential: 'Class XII (MEC) — Board of Intermediate Education',
    details:
      'Scored 97.5%. Secured highest marks in the college in the CMA Foundation Examination.',
    badge: '97.5% • CMA FOUNDATION TOPPER'
  },
  {
    period: 'CONCLUDED MARCH 2021',
    institution: 'S.V.V.E.M High School',
    credential: 'Class X — Secondary School Certificate',
    details:
      'Achieved a flawless 600/600 aggregate score (100% perfect marks) across all subjects.',
    badge: '600/600 PERFECT SCORE'
  }
];

export function Education() {
  return (
    <section id="education" className="section wrap" aria-labelledby="education-title">
      <div className="section-header">
        <div>
          <span className="eyebrow">03 / EDUCATION & QUALIFICATIONS</span>
          <h2 id="education-title" className="section-title">
            Academic pedigree &<br />
            continuous sequence.
          </h2>
        </div>
      </div>

      <div className="education-list">
        {educationItems.map((item, idx) => (
          <article key={idx} className="ledger-row">
            <div className="ledger-date tabular">
              {item.period}
              {item.badge && (
                <span
                  style={{
                    display: 'block',
                    fontSize: '9px',
                    color: 'var(--gold)',
                    marginTop: '6px',
                    letterSpacing: '0.8px'
                  }}
                >
                  {item.badge}
                </span>
              )}
            </div>

            <div className="ledger-entity">
              <h3>{item.credential}</h3>
              <p>{item.institution}</p>
            </div>

            <div className="ledger-details">
              <p>{item.details}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
