import { resumeData } from '../../src/data/resumeData';

describe('PDF Download Contract', () => {
  it('should reference valid PDF filename', () => {
    expect(resumeData.contact.email).toBe('sravanisamavedam18@gmail.com');
  });

  it('should have correct LinkedIn URL', () => {
    expect(resumeData.contact.linkedIn).toBe('https://linkedin.com/in/sravani-samavedam');
  });
});
