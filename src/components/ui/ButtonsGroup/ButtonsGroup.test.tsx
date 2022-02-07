import { render, screen } from '@testing-library/react';
import ButtonsGroup from './index';

describe('ButtonsGroup', () => {
  it('renders with left text and right text', () => {
    render(
      <ButtonsGroup leftText="foo" rightText="bar" isFirstSelected toggle={() => {}} />
    );

    const leftText = screen.getByText('foo');
    const rightText = screen.getByText('bar');

    expect(leftText).toBeInTheDocument();
    expect(rightText).toBeInTheDocument();
  });

  it('renders green when first selected', () => {
    render(
      <ButtonsGroup leftText="foo" rightText="bar" isFirstSelected toggle={() => {}} />
    );

    const leftText = screen.getByText('foo');

    expect(leftText).toHaveClass('green');
  });

  it('renders white when not first selected', () => {
    render(
      <ButtonsGroup
        leftText="foo"
        rightText="bar"
        isFirstSelected={false}
        toggle={() => {}}
      />
    );

    const leftText = screen.getByText('foo');

    expect(leftText).toHaveClass('white');
  });
});
