import { render, screen } from '@testing-library/react';
import InformationBlocksContainer from './InformationBlocksContainer';

describe('InformationBlocksContainer', () => {
  it('renders with given text', () => {
    render(<InformationBlocksContainer>Content</InformationBlocksContainer>);

    const content = screen.getByText('Content');

    expect(content).toBeInTheDocument();
  });
});
