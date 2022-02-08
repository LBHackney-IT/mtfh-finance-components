import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
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

  it('renders with given input onChange', () => {
    const { result } = renderHook(() => useDateInput());

    const props = {
      onChange: result.current.onChange,
      dateValues: result.current.dateValues,
    };
    render(<DateInput {...props} />);

    const content = screen.getAllByTestId('input')[0];

    // onChange is not firing
    // REF htt:s://github.com/testing-library/user-event/issues/676
    // REF https://github.com/testing-library/user-event/issues/387
    userEvent.type(content, '10');

    expect(content).toHaveValue('10');
  });
});
