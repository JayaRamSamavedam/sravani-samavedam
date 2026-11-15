import { resumeData } from '../../src/data/resumeData';

describe('Copy Email Contract', () => {
  it('should have correct email address', () => {
    expect(resumeData.contact.email).toBe('sravanisamavedam18@gmail.com');
  });

  it('should not be empty', () => {
    expect(resumeData.contact.email.length).toBeGreaterThan(0);
  });
});
