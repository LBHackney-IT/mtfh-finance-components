import { render, screen } from '@testing-library/react';
import HorizontalDivider from './HorizontalDivider';

describe('HorizontalDivider', () => {
  it('renders with given class', () => {
    render(<HorizontalDivider className="foo" />);

    const content = screen.getByTestId('horizontal-divider');

    expect(content).toHaveClass('foo');
  });
});
