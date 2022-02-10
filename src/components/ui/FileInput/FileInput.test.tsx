import { render, screen } from '@testing-library/react';
import FileInput from './FileInput';

describe('FileInput', () => {
  const args = {
    id: 'id',
    name: 'file',
  };

  it('renders with given label', () => {
    render(<FileInput {...args} label="foo" />);

    const content = screen.getByText('foo');

    expect(content).toBeInTheDocument();
  });
});
