import { render, screen } from '@testing-library/react';
import DateInput from './DateInput';

describe('DateInput', () => {
  const props = {
    onChange: () => {},
    dateValues: {
      day: '30',
      month: '02',
      year: '2000',
    },
  };

  it('renders with given class', () => {
    render(<DateInput {...props} className="foo" />);

    const content = screen.getAllByTestId('left-border-container')[0];

    expect(content).toHaveClass('foo');
  });

  it('renders with given label', () => {
    render(<DateInput {...props} label="foo" />);

    const content = screen.getByText('foo');

    expect(content).toBeInTheDocument();
  });

  it('renders with given error message', () => {
    render(<DateInput {...props} errorMessage="foo" />);

    const content = screen.getByText('foo');

    expect(content).toBeInTheDocument();
  });
});
