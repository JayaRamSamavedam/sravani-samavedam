import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { mount } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Responsive Layout', () => {
  it('renders without horizontal overflow at mobile', async () => {
    const { container } = render(<App />);
    document.body.style.width = '375px';
    document.body.style.overflow = 'hidden';
    expect(container.scrollWidth).toBeLessThanOrEqual(window.innerWidth);
  });

  it('renders without horizontal overflow at tablet', async () => {
    const { container } = render(<App />);
    document.body.style.width = '768px';
    document.body.style.overflow = 'hidden';
    expect(container.scrollWidth).toBeLessThanOrEqual(window.innerWidth);
  });

  it('renders without horizontal overflow at desktop', async () => {
    const { container } = render(<App />);
    document.body.style.width = '1440px';
    document.body.style.overflow = 'hidden';
    expect(container.scrollWidth).toBeLessThanOrEqual(window.innerWidth);
  });
});