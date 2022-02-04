import { render, screen } from '@testing-library/react';
import InfoItemsList from './InfoItemsList';

describe('InfoItemsList', () => {
  it('renders with given text', () => {
    render(<InfoItemsList>Content</InfoItemsList>);

    const content = screen.getByText('Content');

    expect(content).toBeInTheDocument();
  });

  it('renders with extra className', () => {
    render(<InfoItemsList className="foo">Content</InfoItemsList>);

    const content = screen.getByText('Content');

    expect(content).toHaveClass('foo');
  });
});
