import { render, screen } from '@testing-library/react';

import NoData from './index';

describe('NoData', () => {
  it('renders correctly', () => {
    render(<NoData />);
    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('appends className', () => {
    render(<NoData className="test" />);
    expect(screen.getByText('No results')).toHaveClass('test');
  });
});
