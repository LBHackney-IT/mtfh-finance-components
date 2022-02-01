import { render, screen } from '@testing-library/react';
import InformationBlock from './InformationBlock';

describe('InformationBlock', () => {
  describe("with a 'main' variant", () => {
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

  describe("with a 'regular' variant", () => {
    it('renders with given text', () => {
      const args = {
        variant: 'regular',
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

  it('renders with extra className', () => {
    const args = {
      variant: 'regular',
      data: [
        {
          id: '134',
          value: 'foo',
          label: "foo's label",
        },
      ],
      header: 'this is the header',
      icon: 'Icon',
      className: 'bar',
    };

    const { container } = render(<InformationBlock {...args} />);

    const content = container.getElementsByTagName('section')[0];

    expect(content).toHaveClass('bar');
  });
});
