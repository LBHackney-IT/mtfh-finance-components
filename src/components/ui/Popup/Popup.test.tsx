import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Popup from './Popup';

describe('Popup', () => {
  const args = {
    bottomText: 'bottom',
    topText: 'top',
    trigger: 'trigger',
    goTo: '/home',
  };

  // TODO Complete test
  //  it('renders bottom text on hover', () => {
    //  render(<Popup {...args} />);

    //  const container = screen.getByTestId('tooltip');
    //  userEvent.hover(container)
    //  const content = screen.getByText('bottom');

    //  expect(content).toBeInTheDocument();
  //  });

  //  it('renders top text on hover', () => {
    //  render(<Popup {...args} />);

    //  const container = screen.getByTestId('tooltip');
    //  userEvent.hover(container)
    //  const content = screen.getByText('top');

    //  expect(content).toBeInTheDocument();
  //  });

  it('renders trigger', () => {
    render(<Popup {...args} />);

    const content = screen.getByText('trigger');

    expect(content).toBeInTheDocument();
  });
});
