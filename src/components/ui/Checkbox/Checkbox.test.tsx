import { render, screen, fireEvent } from '@testing-library/react';

import Checkbox from './index';

describe('Checkbox', () => {
  const args = {
    checked: true,
    onChange: () => {},
    label: 'foo',
    name: 'bar',
    description: 'description',
    title: 'title',
  };

  it('renders with given label', () => {
    render(<Checkbox {...args} />);

    const element = screen.getByText('foo');

    expect(element).toBeInTheDocument();
  });

  it('renders with given title', () => {
    render(<Checkbox {...args} />);

    const element = screen.getByText('title');

    expect(element).toBeInTheDocument();
  });

  it('renders with given description', () => {
    render(<Checkbox {...args} />);

    const element = screen.getByText('description');

    expect(element).toBeInTheDocument();
  });

  it('renders left border when withBorder is true', () => {
    render(<Checkbox withBorder {...args} />);

    const element = screen.getByTestId('left-border-container');
        
    expect(element).toHaveClass('container')
  });
    
  it('updates checked onClick', () => {
    render(<Checkbox {...args} />);

    const element: HTMLInputElement = screen.getByTestId('checkbox');
        
    fireEvent.click(element);

    expect(element.checked).toEqual(true)
  });
});
