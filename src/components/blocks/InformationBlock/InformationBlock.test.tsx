import { render, screen } from '@testing-library/react';
import InformationBlock from './InformationBlock';
import type { InformationBlockProps } from './InformationBlock';

describe('InformationBlock', () => {
  it('renders with main variant', () => {
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

    const content = screen.getByTestId('information-block-container');

    expect(content).toHaveClass('main');
  });

  it('renders with regular variant', () => {
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

    const content = screen.getByTestId('information-block-container');

    expect(content).toHaveClass('regular');
  });

  it('given dataInRow prop, it renders data in row', () => {
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
      dataInRow: true,
    };

    render(<InformationBlock {...args} />);

    const content = screen.getByTestId('information-block-values');

    expect(content).toHaveClass('dataInRow');
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

    const content = screen.getByTestId('information-block-container');

    expect(content).toHaveClass('bar');
  });
});
