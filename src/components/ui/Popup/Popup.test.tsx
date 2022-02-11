import { render, screen } from '@testing-library/react';
import Popup from './Popup';

describe('Popup', () => {
  const args = {
    bottomText: 'bottom',
    topText: 'top',
    trigger: 'trigger',
    goTo: '/home',
  };

  it('renders trigger', () => {
    render(<Popup {...args} />);

    const content = screen.getByText('trigger');

    expect(content).toBeInTheDocument();
  });
});
