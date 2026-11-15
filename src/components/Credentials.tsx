import React from 'react';

export function Credentials() {
  return (
    <section id="credentials" className="section wrap" aria-labelledby="credentials-title">
      <div className="section-header">
        <div>
          <span className="eyebrow">01 / HONORS & CREDENTIALS</span>
          <h2 id="credentials-title" className="section-title">
            Academic distinction &<br />
            professional certification.
          </h2>
        </div>
        <p className="tabular" style={{ fontSize: '11px', color: 'var(--muted)', textAlign: 'right' }}>
          ICMAI MEMBERSHIP TRACK<br />
          MERIT RECORD
        </p>
      </div>

      <div className="bento-grid">
        {/* Cell 1: 4 Groups Consecutively */}
        <div className="bento-cell highlight">
          <span className="bento-label">ICMAI Certification</span>
          <div className="bento-metric tabular">All 4</div>
          <div>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>
              Groups Cleared Consecutively
            </strong>
            <p className="bento-sub">
              Intermediate & Final cleared in continuous sequence with 61.25% aggregate while pursuing degree.
            </p>
          </div>
        </div>

        {/* Cell 2: 97.5% College Topper */}
        <div className="bento-cell">
          <span className="bento-label">Class XII (MEC)</span>
          <div className="bento-metric tabular">97.5%</div>
          <div>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px', color: 'var(--ink)' }}>
              College Topper
            </strong>
            <p className="bento-sub">
              Highest marks in college for CMA Foundation Exam at Annapurna Memorial Modern Jr. College.
            </p>
          </div>
        </div>

        {/* Cell 3: 600/600 Class X */}
        <div className="bento-cell">
          <span className="bento-label">Class X Board</span>
          <div className="bento-metric tabular">600<span style={{ fontSize: '24px', color: 'var(--muted)' }}>/600</span></div>
          <div>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px', color: 'var(--ink)' }}>
              Perfect 100% Score
            </strong>
            <p className="bento-sub">
              Flawless aggregate across all subjects at S.V.V.E.M High School (March 2021).
            </p>
          </div>
        </div>

        {/* Cell 4: 86% Krishna University 2x Best Student */}
        <div className="bento-cell">
          <span className="bento-label">Krishna University</span>
          <div className="bento-metric tabular">86%</div>
          <div>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px', color: 'var(--ink)' }}>
              2x Best Student Award
            </strong>
            <p className="bento-sub">
              B.Com (Accounting & Finance). Awarded Best Student of the Academic Year for two consecutive terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
