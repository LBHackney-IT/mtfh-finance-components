import { render, screen } from '@testing-library/react';
import LeftBorderContainer from './LeftBorderContainer';

describe('LeftBorderContainer', () => {
  it('renders with given text', () => {
    render(<LeftBorderContainer>Content</LeftBorderContainer>);

    const content = screen.getByText('Content');

    expect(content).toBeInTheDocument();
  });

  it('renders with error class when it has error', () => {
    render(<LeftBorderContainer hasError>Content</LeftBorderContainer>);

    const content = screen.getByText('Content');

    expect(content).toHaveClass('error');
  });

  it('renders with container class when it is enabled', () => {
    render(<LeftBorderContainer enabled>Content</LeftBorderContainer>);

    const content = screen.getByText('Content');

    expect(content).toHaveClass('container');
  });
});
