import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  it('renders with given className', () => {
    render(<Loader className="foo" isLoading />);

    // NOTE Cannot pass data-testid to the wrapper
    const content = document.querySelector("div[aria-busy='true']");

    expect(content).toHaveClass('foo');
  });
});
