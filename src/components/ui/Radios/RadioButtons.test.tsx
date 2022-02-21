import { render, screen } from '@testing-library/react';
import { RadioButtons } from './index';

describe('RadioButtons', () => {
  const options = [
    {
      value: 'foo',
      label: 'foo',
    },
    {
      value: 'bar',
      label: 'bar',
    },
  ];

  const args = {
    options,
    checkedItemId: 'foo',
    onChange: () => {},
  };

  it('renders className', () => {
    render(<RadioButtons {...args} className="foo" />);

    const content = screen.getByTestId('radio-buttons');

    expect(content).toHaveClass('foo');
  });

  it('renders options', () => {
    render(<RadioButtons {...args} />);

    const fooButton = screen.getByText('foo');
    const barButton = screen.getByText('bar');

    expect(fooButton).toBeInTheDocument();
    expect(barButton).toBeInTheDocument();
  });

  it('renders checked according checkedItemId', () => {
    render(<RadioButtons {...args} checkedItemId="foo" />);

    const fooButton = screen.getByTestId('foo-button');

    expect(fooButton).toBeChecked();
  });
});
