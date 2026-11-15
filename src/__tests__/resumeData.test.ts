import { resumeData } from '../../src/data/resumeData';

describe('Resume Data Completeness', () => {
  it('should contain all verified sections with zero placeholder text', () => {
    const d = resumeData;
    expect(d.name).toBe('Sravani Samavedam');
    expect(d.headline).toContain('CMA');
    expect(d.quantitativeHighlights).toHaveLength(4);
    expect(d.quantitativeHighlights).toContain('All 4 CMA Groups Cleared Consecutively');
    expect(d.quantitativeHighlights).toContain('61.25% CMA Aggregate');
    expect(d.quantitativeHighlights).toContain('97.5% Class XII MEC');
    expect(d.quantitativeHighlights).toContain('600/600 Class X');
    expect(d.experience).toHaveLength(1);
    expect(d.experience[0].role).toBe('Accounts & Costing Trainee');
    expect(d.education).toHaveLength(4);
    expect(d.skills).toHaveLength(5);
    expect(d.contact.email).toBe('sravanisamavedam18@gmail.com');
    expect(d.contact.linkedIn).toBe('https://linkedin.com/in/sravani-samavedam');
    // Zero placeholder checks
    expect(d.education[1].score).not.toMatch(/tbd|placeholder|sample/i);
    expect(d.skills.every(c => c.tools.length > 0)).toBe(true);
  });

  it('should have no NestJS or MongoDB references', () => {
    const text = JSON.stringify(resumeData);
    expect(text).not.toContain('NestJS');
    expect(text).not.toContain('MongoDB');
    expect(text).not.toContain('/admin');
  });
});