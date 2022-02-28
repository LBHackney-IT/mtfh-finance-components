import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  it('renders with given className', () => {
    render(<Loader className="foo" isLoading />);

    const content = screen.getByTestId('loader');

    expect(content).toHaveClass('foo');
  });
});
