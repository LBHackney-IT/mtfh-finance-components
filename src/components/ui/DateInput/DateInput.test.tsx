import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import DateInput from './DateInput';
import { useDateInput } from '../../../hooks/index';

describe('DateInput', () => {
  it('renders with given class', () => {
    const { result } = renderHook(() => useDateInput());

    const props = {
      onChange: result.current.onChange,
      dateValues: result.current.dateValues,
    };

    render(<DateInput {...props} className="foo" />);

    const content = screen.getAllByTestId('left-border-container')[0];

    expect(content).toHaveClass('foo');
  });

  it('renders with given label', () => {
    const { result } = renderHook(() => useDateInput());

    const props = {
      onChange: result.current.onChange,
      dateValues: result.current.dateValues,
    };
    render(<DateInput {...props} label="foo" />);

    const content = screen.getByText('foo');

    expect(content).toBeInTheDocument();
  });

  it('renders with given error message', () => {
    const { result } = renderHook(() => useDateInput());

    const props = {
      onChange: result.current.onChange,
      dateValues: result.current.dateValues,
    };
    render(<DateInput {...props} errorMessage="foo" />);

    const content = screen.getByText('foo');

    expect(content).toBeInTheDocument();
  });
});
