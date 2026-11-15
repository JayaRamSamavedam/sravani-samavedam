import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';

export function Hero() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const res = await fetch('/CMA_SravaniSamavedam_Resume.pdf', { method: 'HEAD' });
      if (res.ok && res.headers.get('content-type')?.includes('application/pdf')) {
        const a = document.createElement('a');
        a.href = '/CMA_SravaniSamavedam_Resume.pdf';
        a.download = 'CMA_SravaniSamavedam_Resume.pdf';
        a.click();
      } else {
        window.open('/CMA_SravaniSamavedam_Resume.pdf', '_blank');
      }
    } catch {
      window.open('/CMA_SravaniSamavedam_Resume.pdf', '_blank');
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  return (
    <section id="hero" className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-top">
        <span className="eyebrow">
          <span style={{ color: 'var(--gold)' }}>+</span> COST & MANAGEMENT ACCOUNTING
        </span>
        <span className="eyebrow hidden md:inline-block tabular">
          ICMAI QUALIFIED • VIJAYAWADA, AP
        </span>
      </div>

      <div className="hero-body">
        <div>
          <h1 id="hero-title" className="hero-title">
            Financial reporting,<br />
            cost control &<br />
            <em>strategic decisions.</em>
          </h1>
        </div>

        <div className="hero-aside">
          <div className="cma-seal">ICMAI</div>
          <div>
            <strong>{resumeData.name}</strong>
            <p className="tabular" style={{ fontSize: '11px', color: 'var(--gold)', marginTop: '2px' }}>
              Qualified CMA (Dec 2025)
            </p>
          </div>
          <p>
            Rigorous foundation in cost accounting, financial modeling, and MIS performance metrics.
          </p>
          <a
            href="#credentials"
            style={{
              fontSize: '11px',
              fontFamily: 'var(--mono)',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            Review Credentials ↘
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <p style={{ maxWidth: '540px' }}>
          {resumeData.headline}. Practical experience across corporate ledger scrutiny,
          budget variance analysis, and cross-functional audit readiness at MS Infra.
        </p>

        <div className="hero-actions">
          <button
            onClick={handleDownload}
            className="btn-primary"
            disabled={downloading}
          >
            {downloading ? 'Preparing...' : 'Download Resume ↘'}
          </button>
          <a
            href="mailto:sravanisamavedam18@gmail.com"
            className="btn-secondary"
          >
            Get in touch ↗
          </a>
        </div>
      </div>

      <div className="chapter-note">
        <span className="status-dot"></span>
        <p>
          <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Active Credential Dossier</span> —
          Cleared all four ICMAI groups consecutively while pursuing B.Com at Krishna University.
        </p>
        <span className="tabular hidden md:inline-block" style={{ marginLeft: 'auto', fontSize: '10px' }}>
          UPDATED DEC 2025
        </span>
      </div>
    </section>
  );
}
