import { render, screen } from '@testing-library/react';
import InfoItem from './InfoItem';

describe('InfoItem', () => {
  const args = {
    label: 'label',
    value: 'value',
  };

  it('renders with given className', () => {
    render(<InfoItem {...args} className="foo" />);

    const content = screen.getByTestId('info-item');

    expect(content).toHaveClass('foo');
  });

  it('renders with given label', () => {
    render(<InfoItem {...args} />);

    const content = screen.getByText('label');

    expect(content).toBeInTheDocument();
  });
});
