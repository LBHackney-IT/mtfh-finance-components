import { render, screen } from '@testing-library/react';
import LeftMenu from './LeftMenu';

describe('LeftMenu', () => {
  it('renders with given page links', () => {
    const args = {
      regularLinks: [
        {
          icon: 'icon',
          buttonProps: {
            text: 'Home',
            route: '/home',
          },
        },
      ],
    };

    render(<LeftMenu {...args} />);

    const content = screen.getByText('Home');

    expect(content).toBeInTheDocument();
  });

  it('renders separators when given id', () => {
    const args = {
      regularLinks: [
        {
          id: 100,
        },
      ],
    };

    render(<LeftMenu {...args} />);

    const content = screen.getByTestId('horizontal-divider');

    expect(content).toBeInTheDocument();
  });
});
