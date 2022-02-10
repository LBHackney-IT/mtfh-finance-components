import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContextMenu from './index';

describe('ContextMenu', () => {
  it('opens on click', () => {
    render(<ContextMenu options={[]} />);

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByTestId('context-menu-content')).toBeInTheDocument();
  });

  it('renders options', () => {
    render(<ContextMenu options={[{ label: 'Option 1', onClick: () => {} }]} />);

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('handles option click', async () => {
    const onClick = jest.fn();

    render(<ContextMenu options={[{ label: 'Option 1', onClick }]} />);

    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByTestId('context-menu-option'));

    expect(onClick).toHaveBeenCalled();
  });

  it('renders icon', async () => {
    render(
      <ContextMenu options={[{ label: 'Option 1', onClick: () => {}, icon: 'icon' }]} />
    );

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByText('icon')).toBeInTheDocument();
  });
});
