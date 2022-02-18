import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputSearch from './index';

describe('InputSearch', () => {
  it('renders default button text', () => {
    render(<InputSearch value="4" onChange={() => {}} />);
    const content = screen.getByText('Search');
    expect(content).toBeInTheDocument();
  });

  it('renders custom button text', () => {
    render(<InputSearch textButton="Custom" value="4" onChange={() => {}} />);
    const content = screen.getByText('Custom');
    expect(content).toBeInTheDocument();
  });

  it('runs onClick', () => {
    const onClick = jest.fn();

    render(<InputSearch onClick={onClick} value="4" onChange={() => {}} />);

    userEvent.click(screen.getByText('Search'));
    expect(onClick).toHaveBeenCalled();
  });

  it('runs enter click', () => {
    const onClick = jest.fn();

    render(<InputSearch onClick={onClick} value="4" onChange={() => {}} withOnEnter />);

    userEvent.click(screen.getByRole('textbox'));
    userEvent.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalled();
  });
});
