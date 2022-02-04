import { render, screen } from '@testing-library/react';

import Alert from './index';

describe('Alert', () => {
  it('renders with given text', () => {
    render(<Alert severity="success">Notification</Alert>);

    const heading = screen.getByRole('heading', { name: /notification/i });

    expect(heading).toBeInTheDocument();
  });

  it('renders success alert', () => {
    const { container } = render(<Alert severity="success">Alert</Alert>);

    expect(container).toMatchSnapshot();
  });

  it('renders info alert', () => {
    const { container } = render(<Alert severity="info">Alert</Alert>);

    expect(container).toMatchSnapshot();
  });

  it('renders error alert', () => {
    const { container } = render(<Alert severity="error">Alert</Alert>);

    expect(container).toMatchSnapshot();
  });
});
