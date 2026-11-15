import React from 'react';

const educationItems = [
  {
    period: 'CONCLUDED DEC 2025',
    institution: 'The Institute of Cost Accountants of India (ICMAI)',
    credential: 'Cost and Management Accountant (CMA)',
    details:
      'Completed all 4 groups (Intermediate & Final) consecutively in a single continuous sequence. Specialized in Strategic Financial Management, Strategic Cost Management, Corporate Financial Reporting, and Indirect Tax Laws. Aggregate: 61.25%.',
    badge: 'ALL 4 GROUPS CONSECUTIVELY'
  },
  {
    period: 'EXPECTED MAY 2026',
    institution: 'Krishna University',
    credential: 'Bachelor of Commerce (B.Com) — Accounting & Finance',
    details:
      'Comprehensive coursework in Advanced Corporate Accounting, Cost Accounting, Financial Management, and Business Law. Awarded Best Student of the Academic Year for two consecutive years.',
    badge: '2X BEST STUDENT AWARD'
  },
  {
    period: 'CONCLUDED MARCH 2023',
    institution: 'Annapurna Memorial Modern Jr. College',
    credential: 'Class XII (MEC) — Board of Intermediate Education',
    details:
      'Scored 97.5%. Secured the highest marks in the college in the CMA Foundation Examination.',
    badge: 'COLLEGE TOPPER • 97.5%'
  },
  {
    period: 'CONCLUDED MARCH 2021',
    institution: 'S.V.V.E.M High School',
    credential: 'Class X — Secondary School Certificate',
    details:
      'Achieved a perfect 600/600 aggregate score across all core subjects.',
    badge: '100% PERFECT SCORE (600/600)'
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
