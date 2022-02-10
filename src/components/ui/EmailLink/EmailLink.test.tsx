import { render, screen } from '@testing-library/react';
import EmailLink from './EmailLink';

describe('EmailLink', () => {
  it('renders with given text', () => {
    render(<EmailLink href="example@test.com" />);

    const content = screen.getByText('example@test.com');

    expect(content).toBeInTheDocument();
  });

  it('renders with given attributes', () => {
    render(<EmailLink href="example@test.com" />);

    const content = screen.getByText('example@test.com');

    expect(content).toHaveAttribute('href', 'mailto:example@test.com');
  });
});
