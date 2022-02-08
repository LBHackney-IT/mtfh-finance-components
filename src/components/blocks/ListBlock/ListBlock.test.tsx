import { render, screen } from '@testing-library/react';
import ListBlock from './ListBlock';

describe('ListBlock', () => {
  const args = {
    data: [
      {
        value: 'foo',
        label: 'bar',
      },
    ],
    iconType: 'garage',
  };

  it('renders with given data', () => {
    render(<ListBlock {...args} />);

    const content = screen.getByText('bar');

    expect(content).toBeInTheDocument();
  });

  it('renders with name', () => {
    render(<ListBlock {...args} name="name" />);

    const content = screen.getByText('name');

    expect(content).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<ListBlock {...args} description="description" />);

    const content = screen.getByText('description');

    expect(content).toBeInTheDocument();
  });
});
