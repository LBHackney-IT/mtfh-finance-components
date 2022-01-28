import { memo } from 'react';
import type { PropsWithChildren } from 'react';
import classnames from 'classnames';
import styles from './Typography.module.scss';

const classesMap = {
  h1: 'lbh-heading-h1',
  h2: 'lbh-heading-h2',
  h3: 'lbh-heading-h3',
  h4: 'lbh-heading-h4',
  h5: 'lbh-heading-h5',
  'caption-m': 'govuk-caption-m lbh-caption',
  'caption-l': 'govuk-caption-l lbh-caption',
  'caption-xl': 'govuk-caption-xl lbh-caption',
  'body-l': 'lbh-body-l',
  'body-m': 'lbh-body-m',
  'body-s': 'lbh-body-s',
  'body-xs': 'lbh-body-xs',
};

const getVariantClass = (variant, size) =>
  classesMap[size ? `${variant}-${size}` : variant];
const getWeightClass = (weight) => {
  const weightMap = {
    300: 'w300',
    400: 'w400',
    600: 'w600',
    700: 'w700',
  };
  return weightMap[weight];
};

type TypographyProps = PropsWithChildren<{
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'caption' | 'body';
  size: null | 'xs' | 's' | 'm' | 'l' | 'xl';
  className: string;
  weight: 300 | 400 | 600 | 700;
  onClick: () => void;
}>;

const Typography = ({
  variant = 'body',
  size = null,
  className = '',
  children,
  weight = 400,
  onClick = () => {},
}: TypographyProps) => {
  const TypographyTag = variant.startsWith('h') ? variant : 'p';
  const resultSize = variant === 'body' && !size ? 'xs' : size;

  return (
    <TypographyTag
      className={classnames(
        getVariantClass(variant, resultSize),
        styles[getWeightClass(weight)],
        className
      )}
      onClick={onClick}
    >
      {children}
    </TypographyTag>
  );
};

export default memo(Typography);
