import { render, screen } from '@testing-library/react';
import InformationBlocksContainer from './InformationBlocksContainer';

describe('InformationBlocksContainer', () => {
  it('renders with given text', () => {
    render(<InformationBlocksContainer>Content</InformationBlocksContainer>);

    const content = screen.getByText('Content');

    expect(content).toBeInTheDocument();
  });

  it('renders with extra className', () => {
    render(
      <InformationBlocksContainer className="foo">Content</InformationBlocksContainer>
    );

    const content = screen.getByText('Content');

    expect(content).toHaveClass('foo');
  });
});
