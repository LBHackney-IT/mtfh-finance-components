import { render, screen } from '@testing-library/react';

import Select from './index';

describe('Select', () => {
  it('renders className', () => {
    const options = [
      {
        value: 'bar',
        label: 'bar',
      },
    ];

    render(<Select className="foo" name="select" options={options} />);

    const content = screen.getByTestId('left-border-container');

    expect(content).toHaveClass('foo');
  });

  it('renders options', () => {
    const options = [
      {
        value: 'bar',
        label: 'bar',
      },
    ];

    render(<Select className="foo" name="select" options={options} />);

    const renderedOption = screen.getByText('bar');

    expect(renderedOption).toBeInTheDocument();
  });
});
