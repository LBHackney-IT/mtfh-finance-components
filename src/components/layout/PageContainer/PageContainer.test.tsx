import { render, screen } from '@testing-library/react';
import PageContainer from './PageContainer';

describe('PageContainer', () => {
  it('renders with given text', () => {
    render(<PageContainer>Content</PageContainer>);

    const content = screen.getByText('Content');

    expect(content).toBeInTheDocument();
  });

  it('renders with extra className', () => {
    render(<PageContainer className="foo">Content</PageContainer>);

    const content = screen.getByText('Content');

    expect(content).toHaveClass('foo');
  });
});
