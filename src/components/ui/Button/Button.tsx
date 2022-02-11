import { memo } from 'react';
import LoaderSpinner from 'react-loader-spinner';
import type { PropsWithChildren } from 'react';

import classnames from 'classnames';

import styles from './Button.module.scss';

type ButtonVariant = 'normal' | 'danger';

type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}>;

const Button = ({
  onClick = () => {},
  className = '',
  variant = 'normal',
  children,
  isLoading = false,
  disabled = false,
}: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={classnames('govuk-button lbh-button', styles[variant], className)}
    disabled={disabled || isLoading}
  >
    <LoaderSpinner
      className={styles.loader}
      visible={isLoading}
      type="ThreeDots"
      color="#00664f"
      width={23}
      height={23}
    />

    {!isLoading && children}
  </button>
);

export default memo(Button);
