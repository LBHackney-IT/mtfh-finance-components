import { render, screen } from '@testing-library/react';
import InformationBlock from './InformationBlock';

describe('InformationBlock', () => {
  it('renders with given text', () => {
    const args = {
      variant: 'main',
      data: [
        {
          id: '134',
          value: 'foo',
          label: "foo's label",
        },
      ],
      header: 'this is the header',
      icon: 'Icon',
    };

    render(<InformationBlock {...args} />);

    const content = screen.getByText("foo's label");

    expect(content).toBeInTheDocument();
  });
});
