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

  it('renders with given page button', () => {
    const args = {
      regularLinks: [
        {
          id: 100,
          buttonProps: {
            text: 'btn',
          },
        },
      ],
    };

    render(<LeftMenu {...args} />);

    const content = screen.getByText('btn');

    expect(content).toBeInTheDocument();
  });
});
