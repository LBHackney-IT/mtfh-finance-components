import { render, screen } from '@testing-library/react';
import GrayBox from './GrayBox';

describe('GrayBox', () => {
  it('renders with given text', () => {
    render(<GrayBox>Content</GrayBox>);

    const content = screen.getByText('Content');

    expect(content).toBeInTheDocument();
  });
});
