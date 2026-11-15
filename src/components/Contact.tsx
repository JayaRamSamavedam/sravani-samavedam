import React, { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'sravanisamavedam18@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section wrap" aria-labelledby="contact-title">
      <span className="eyebrow">HAVE AN INQUIRY OR ROLE?</span>

      <div className="contact-wrap">
        <h2 id="contact-title" className="contact-title">
          Let’s discuss<br />
          <em>financial excellence.</em>
        </h2>

        <a
          href={`mailto:${email}?subject=CMA%20Inquiry%20%E2%80%94%20Sravani%20Samavedam`}
          className="contact-circle"
          aria-label="Email Sravani Samavedam"
        >
          <span>↗</span>
        </a>
      </div>

      <div className="contact-footer-line">
        <div>
          <p style={{ marginBottom: '8px' }}>
            Open to Corporate Finance, Cost Accounting, Financial Analysis, and Audit/Advisory roles.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${email}`}
              style={{
                color: 'var(--ink)',
                borderBottom: '1px solid var(--line-dark)',
                paddingBottom: '2px',
                fontWeight: 500
              }}
            >
              {email} ↗
            </a>
            <button
              onClick={handleCopy}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: copied ? 'var(--gold)' : 'var(--muted)',
                padding: '0'
              }}
            >
              {copied ? '✓ Copied to clipboard' : 'Copy address'}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/sravani-samavedam"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--ink)',
              borderBottom: '1px solid var(--line-dark)',
              paddingBottom: '2px',
              fontFamily: 'var(--mono)',
              fontSize: '12px'
            }}
          >
            LinkedIn Profile ↗
          </a>
        </div>
      </div>
    </section>
  );
}
