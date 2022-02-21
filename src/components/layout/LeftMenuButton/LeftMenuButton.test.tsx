import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as next from 'next/router';
import LeftMenuButton from './LeftMenuButton';

describe('LeftMenuButton', () => {
  it('renders with given text', () => {
    const args = {
      buttonProps: {
        route: '/home',
        text: 'Home',
      },
    };

    render(<LeftMenuButton {...args} />);

    const content = screen.getByText('Home');

    expect(content).toBeInTheDocument();
  });

  it('fires onClick event', () => {
    const spy = jest.spyOn(next, 'useRouter');
    //  @ts-ignore
    spy.mockImplementation(() => ({
      push() {},
    }));
    const onClick = jest.fn();

    const args = {
      buttonProps: {
        route: '/home',
        text: 'Home',
        onClick,
      },
    };

    render(<LeftMenuButton {...args} />);

    const content = screen.getByText('Home');

    userEvent.click(content);

    expect(onClick).toHaveBeenCalled();
  });
});
