import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pressable from './index';

describe('Pressable', () => {
  it('renders with given text', () => {
    render(<Pressable>Handler</Pressable>);

    const content = screen.getByText('Handler');

    expect(content).toBeInTheDocument();
  });

  it('calls onClick', () => {
    const onClick = jest.fn();

    render(<Pressable onClick={onClick}>Handler</Pressable>);

    userEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalled();
  });
});
