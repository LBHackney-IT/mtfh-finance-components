import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('renders with given label', () => {
    render(<Input label="foo" />);

    const content = screen.getByText('foo');

    expect(content).toBeInTheDocument();
  });

  it('renders with given class', () => {
    render(<Input classNameInput="bar" />);

    const content = screen.getByTestId('input');

    expect(content).toHaveClass('bar');
  });

  it('renders with given class container', () => {
    render(<Input classNameContainer="bar" />);

    const content = screen.getByTestId('left-border-container');

    expect(content).toHaveClass('bar');
  });

  it('renders with given error message', () => {
    render(<Input errorMessage="bar" />);

    const content = screen.getByText('bar');

    expect(content).toBeInTheDocument();
  });

  it('renders with given description', () => {
    render(<Input description="bar" />);

    const content = screen.getByText('bar');

    expect(content).toBeInTheDocument();
  });

  it('renders with disabled', () => {
    render(<Input disabled />);

    const content = screen.getByTestId('input');

    expect(content).toHaveAttribute('disabled');
  });
});
