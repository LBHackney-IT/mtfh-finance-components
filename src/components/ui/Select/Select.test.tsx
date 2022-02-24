import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

    render(<Select name="select" options={options} />);

    const renderedOption = screen.getByText('bar');

    expect(renderedOption).toBeInTheDocument();
  });

  it('renders border', () => {
    const options = [
      {
        value: 'bar',
        label: 'bar',
      },
    ];

    render(<Select withBorder name="select" options={options} />);

    const content = screen.getByTestId('left-border-container');

    expect(content).toHaveClass('container');
  });

  it('fires onChange', () => {
    const onChange = jest.fn();

    const options = [
      {
        value: 'bar',
        label: 'bar',
      },
    ];

    render(<Select withBorder name="select" options={options} onChange={onChange} />);

    const content = screen.getByTestId('select');

    userEvent.selectOptions(content, ['bar']);

    expect(onChange).toHaveBeenCalled();
  });
});
