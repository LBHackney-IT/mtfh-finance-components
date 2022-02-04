import { render, screen } from '@testing-library/react';

import Button from './index';

describe('Button', () => {
  it('renders with given text', () => {
    render(<Button>foo</Button>);

    const content = screen.getByText('foo');

    expect(content).toBeInTheDocument();
  });

  it('renders with disabled attribute', () => {
    render(<Button disabled>foo</Button>);

    const content = screen.getByText('foo');

    expect(content).toHaveAttribute('disabled');
  });

  it('renders with normal class', () => {
    render(<Button variant="normal">foo</Button>);

    const content = screen.getByText('foo');

    expect(content).toHaveClass('normal');
  });

  it('renders with danger class', () => {
    render(<Button variant="danger">foo</Button>);

    const content = screen.getByText('foo');

    expect(content).toHaveClass('danger');
  });
});
