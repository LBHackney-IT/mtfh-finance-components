import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tabs from './index';

const tabs = ['Block', 'Estate'];

describe('Tabs', () => {
  it('renders basic tabs', () => {
    const { rerender } = render(
      <Tabs tabs={tabs} currentTab="Block" changeTab={() => {}} />
    );

    expect(screen.getByText('Block')).toBeInTheDocument();
    expect(screen.getByText('Estate')).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');

    const blockTab = buttons[0];
    expect(blockTab).toHaveClass('active');

    rerender(<Tabs tabs={tabs} currentTab="Estate" changeTab={() => {}} />);

    const estateTab = buttons[1];
    expect(estateTab).toHaveClass('active');
  });

  it('calls changeTab with correct argument', () => {
    const changeTab = jest.fn();

    render(<Tabs tabs={tabs} currentTab="Block" changeTab={changeTab} />);

    userEvent.click(screen.getByText('Estate'));

    expect(changeTab).toHaveBeenCalledWith('Estate');
  });

  it('renders name', () => {
    const changeTab = jest.fn();

    render(<Tabs tabs={tabs} currentTab="Block" changeTab={changeTab} />);

    userEvent.click(screen.getByText('Estate'));

    expect(changeTab).toHaveBeenCalledWith('Estate');
  });
});
