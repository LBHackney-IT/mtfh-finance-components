import { render, screen } from '@testing-library/react';

import HeaderBlock from './index';

describe('HeaderBlock', () => {
  it('shows given title and default subtitle', () => {
    render(<HeaderBlock title="Title" />);

    const title = screen.getByText('Title');
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText('Hackney Housing Finance Portal');
    expect(subtitle).toBeInTheDocument();
  });

  it('shows given subtitle', () => {
    render(<HeaderBlock subtitle="Subtitle" />);

    const subtitle = screen.getByText('Subtitle');
    expect(subtitle).toBeInTheDocument();
  });

  it('shows given description', () => {
    render(<HeaderBlock description="Description" />);

    const description = screen.getByText('Description');
    expect(description).toBeInTheDocument();
  });

  it('appends given className', () => {
    render(<HeaderBlock className="testClassName" />);

    const content = screen.getByTestId('header-block');
    expect(content).toHaveClass('testClassName');
  });
});
