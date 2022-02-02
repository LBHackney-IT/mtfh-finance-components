import { render, screen } from '@testing-library/react';

import Checkbox from './index';

describe('Checkbox', () => {
  it('renders with given label', () => {
    const args = {
      checked: true,
      onChange: () => {},
      label: 'foo',
      name: 'bar',
      description: 'description',
      title: 'title',
    };

    render(<Checkbox {...args} />);

    const element = screen.getByText('foo');

    expect(element).toBeInTheDocument();
  });

  it('renders with given title', () => {
    const args = {
      checked: true,
      onChange: () => {},
      label: 'foo',
      name: 'bar',
      description: 'description',
      title: 'title',
    };

    render(<Checkbox {...args} />);

    const element = screen.getByText('title');

    expect(element).toBeInTheDocument();
  });

  it('renders with given description', () => {
    const args = {
      checked: true,
      onChange: () => {},
      label: 'foo',
      name: 'bar',
      description: 'description',
      title: 'title',
    };

    render(<Checkbox {...args} />);

    const element = screen.getByText('description');

    expect(element).toBeInTheDocument();
  });
});
