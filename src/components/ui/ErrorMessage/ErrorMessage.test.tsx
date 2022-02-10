import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders with given text', () => {
    render(<ErrorMessage text="foo" />);

    const content = screen.getByText('foo');

    expect(content).toBeInTheDocument();
  });

  it('renders with given class', () => {
    render(<ErrorMessage text="foo" className="bar" />);

    const content = screen.getByText('foo');

    expect(content).toHaveClass('bar');
  });
});
