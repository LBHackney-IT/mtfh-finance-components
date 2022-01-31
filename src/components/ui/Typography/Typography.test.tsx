import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Typography from './index';
import type { TypographySize, TypographyVariant, TypographyWeight } from './index';

const headingVariants: Array<TypographyVariant> = ['h1', 'h2', 'h3', 'h4', 'h5'];
const paragraphVariants: Array<TypographyVariant> = ['caption', 'body'];
const weights: Array<TypographyWeight> = [300, 400, 600, 700];

describe('Typography', () => {
  test.each(headingVariants)('renders %s', (variant) => {
    render(<Typography variant={variant}>text</Typography>);

    const content = screen.getByRole('heading');
    expect(content).toBeInTheDocument();
  });

  test.each(paragraphVariants)('renders %s', (variant) => {
    render(<Typography variant={variant}>text</Typography>);

    const heading = screen.queryByRole('heading');
    expect(heading).not.toBeInTheDocument();

    const text = screen.getByText('text');
    expect(text).toBeInTheDocument();
  });

  it('given body variant renders xs size', () => {
    render(<Typography variant="body">text</Typography>);
    expect(screen.getByText('text')).toHaveClass('lbh-body-xs');
  });

  test.each(['xs', 's', 'm', 'l'] as Array<TypographySize>)(
    'renders body size %s',
    (size) => {
      render(
        <Typography variant="body" size={size}>
          text
        </Typography>
      );
      expect(screen.getByText('text')).toHaveClass(`lbh-body-${size}`);
    }
  );

  test.each(['m', 'l', 'xl'] as Array<TypographySize>)(
    'renders caption size %s',
    (size) => {
      render(
        <Typography variant="caption" size={size}>
          text
        </Typography>
      );
      expect(screen.getByText('text')).toHaveClass(`govuk-caption-${size}`);
    }
  );

  test.each(weights)('renders weight %s', (weight) => {
    render(
      <Typography variant="body" weight={weight}>
        text
      </Typography>
    );

    expect(screen.getByText('text')).toHaveClass(`w${weight}`);
  });

  it('calls onClick', () => {
    const onClick = jest.fn();

    render(<Typography onClick={onClick}>text</Typography>);

    userEvent.click(screen.getByText('text'));

    expect(onClick).toHaveBeenCalled();
  });
});
