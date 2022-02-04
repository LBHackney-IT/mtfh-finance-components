import { memo } from 'react';
import type { PropsWithChildren } from 'react';
import classnames from 'classnames';
import styles from './Typography.module.scss';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'caption' | 'body';
export type TypographySize = null | 'xs' | 's' | 'm' | 'l' | 'xl';
export type TypographyWeight = 300 | 400 | 600 | 700;

type ClassesMap = {
  [key: string]: string;
};

const classesMap: ClassesMap = {
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

const getVariantClass = (variant: TypographyVariant, size: TypographySize): string =>
  classesMap[(size ? `${variant}-${size}` : variant) as keyof ClassesMap];
const getWeightClass = (weight: TypographyWeight): string => {
  const weightMap = {
    300: 'w300',
    400: 'w400',
    600: 'w600',
    700: 'w700',
  };
  return weightMap[weight];
};

type TypographyProps = PropsWithChildren<{
  variant?: TypographyVariant;
  size?: TypographySize;
  className?: string;
  weight?: TypographyWeight;
  onClick?: () => void;
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
        // @ts-ignore
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
