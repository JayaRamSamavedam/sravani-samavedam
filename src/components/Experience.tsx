import React from 'react';

const experiences = [
  {
    period: 'JUL 2024 — SEP 2025',
    status: 'COMPLETED',
    company: 'MS Infra',
    role: 'Accounts & Costing Trainee',
    location: 'Vijayawada, AP',
    description:
      'Spearheaded Monthly MIS report compilation, cost tracking, and budgetary variance analysis. Analyzed project-wise expenditure to pinpoint primary cost drivers. Performed rigorous ledger scrutiny, multi-bank reconciliations, and internal control validations. Partnered with statutory audit teams for cross-functional documentation and compliance.',
    tags: ['MIS Reporting', 'Variance Analysis', 'Cost Driver Allocation', 'Bank Reconciliation', 'Audit Readiness']
  },
  {
    period: '2023 — PRESENT',
    status: 'ACTIVE LEADERSHIP',
    company: 'Student Leadership Initiative',
    role: 'Academic Mentor & Program Coordinator',
    location: 'Vijayawada, AP',
    description:
      'Engineered and led structured training modules decomposing complex financial accounting and quantitative analysis concepts for undergraduate cohorts. Built progress tracking frameworks and guided students through competitive goal-setting and CMA exam roadmaps.',
    tags: ['Academic Mentorship', 'Curriculum Design', 'Performance Tracking', 'Strategic Planning']
  }
];

export function Experience() {
  return (
    <section id="experience" className="section wrap" aria-labelledby="experience-title">
      <div className="section-header">
        <div>
          <span className="eyebrow">02 / PROFESSIONAL EXPERIENCE</span>
          <h2 id="experience-title" className="section-title">
            Rigorous execution in<br />
            accounting & audit operations.
          </h2>
        </div>
        <a
          href="/CMA_SravaniSamavedam_Resume.pdf"
          download="CMA_SravaniSamavedam_Resume.pdf"
          className="btn-secondary hidden md:inline-flex"
        >
          View Full Dossier ↗
        </a>
      </div>

      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <article key={idx} className="ledger-row">
            <div className="ledger-date">
              <span className="tabular">{exp.period}</span>
              {exp.status && (
                <span
                  style={{
                    display: 'block',
                    fontSize: '9px',
                    color: 'var(--gold)',
                    marginTop: '6px',
                    letterSpacing: '0.8px'
                  }}
                >
                  {exp.status}
                </span>
              )}
            </div>

            <div className="ledger-entity">
              <h3>{exp.company}</h3>
              <p>{exp.role}</p>
              <span className="tabular" style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '2px' }}>
                {exp.location}
              </span>
            </div>

            <div className="ledger-details">
              <p>{exp.description}</p>
              <div className="tag-list">
                {exp.tags.map((t, i) => (
                  <span key={i} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
