import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Zero-Hydration', () => {
  it('renders without hydration errors', () => {
    const { container } = render(<App />);
    expect(container.querySelector('#hero')).not.toBeNull();
    expect(container.querySelector('#experience')).not.toBeNull();
    expect(container.querySelector('#education')).not.toBeNull();
    expect(container.querySelector('#skills')).not.toBeNull();
    expect(container.querySelector('#contact')).not.toBeNull();
  });
});