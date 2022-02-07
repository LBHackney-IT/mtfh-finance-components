import { render, screen } from '@testing-library/react';

import Hint from './index';

describe('Hint', () => {
  it('renders with given text', () => {
    render(<Hint text="foo" iconType="warning" />);

    const content = screen.getByText('foo');

    expect(content).toBeInTheDocument();
  });

  it('renders with correct icon', () => {
    render(<Hint text="foo" iconType="warning" />);

    const content = screen.getByTestId('error-circle');

    expect(content).toBeInTheDocument();
  });
});
