import { render, screen } from '@testing-library/react';
import InformationBlock from './InformationBlock';
import type { InformationBlockProps } from './InformationBlock';

describe('InformationBlock', () => {
  describe("with a 'main' variant", () => {
    it('renders with given text', () => {
      const args: InformationBlockProps = {
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
      const args: InformationBlockProps = {
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

  it('renders with data rows and columns', () => {
    const args: InformationBlockProps = {
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

    render(<InformationBlock {...args} />);

    const content = screen.getByTestId('information-block-values');

    expect(content).toBeInTheDocument();
  });

  it('renders with extra className', () => {
    const args: InformationBlockProps = {
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
