import { render, screen } from '@testing-library/react';
import VerticalDivider from './VerticalDivider';

describe('VerticalDivider', () => {
  it('renders with given class', () => {
    render(<VerticalDivider className="foo" />);

    const content = screen.getByTestId('vertical-divider');

    expect(content).toHaveClass('foo');
  });
});
