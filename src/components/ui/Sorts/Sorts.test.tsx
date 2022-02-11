import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

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
});
