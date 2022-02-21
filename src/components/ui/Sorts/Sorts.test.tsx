import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import Sorts from './index';
import { useSorts } from '../../../hooks';

describe('Sorts', () => {
  it('renders className', () => {
    const { result } = renderHook(() => useSorts());

    const options = [
      {
        id: 'foo',
        label: 'item1',
      },
      {
        id: 'bar',
        label: 'item2',
      },
    ];

    render(<Sorts className="foo" options={options} {...result.current} />);

    const content = screen.getByTestId('sorts');

    expect(content).toHaveClass('foo');
  });

  it('renders options', () => {
    const { result } = renderHook(() => useSorts());

    const options = [
      {
        id: 'foo',
        label: 'item1',
      },
    ];

    render(<Sorts options={options} {...result.current} />);

    const content = screen.getByText('item1');

    expect(content).toBeInTheDocument();
  });

  it('fires onClick on click', () => {
    const onChange = jest.fn();

    const options = [
      {
        id: 'foo',
        label: 'item1',
      },
    ];

    render(<Sorts options={options} selectedOptions={new Set()} onChange={onChange} />);

    const content = screen.getByText('item1');

    userEvent.click(content);

    expect(onChange).toHaveBeenCalled();
  });

  it('fires onClick on keydown Enter', () => {
    const onChange = jest.fn();

    const options = [
      {
        id: 'foo',
        label: 'item1',
      },
    ];

    render(<Sorts options={options} selectedOptions={new Set()} onChange={onChange} />);

    const content = screen.getByText('item1');

    userEvent.type(content, 'Enter');

    expect(onChange).toHaveBeenCalled();
  });
});
