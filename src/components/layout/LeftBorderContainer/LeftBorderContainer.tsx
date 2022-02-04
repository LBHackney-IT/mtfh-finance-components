import { memo } from 'react';
import type { PropsWithChildren } from 'react';

import classnames from 'classnames';
import styles from './LeftBorderContainer.module.scss';

type LeftBorderContainerProps = PropsWithChildren<{
  enabled?: boolean;
  className?: string;
  hasError?: boolean;
}>;

const LeftBorderContainer = ({
  enabled,
  className,
  hasError,
  children,
}: LeftBorderContainerProps) => (
  <div
    className={classnames(
      {
        [styles.container]: enabled,
        [styles.error]: hasError,
      },
      className
    )}
  >
    {children}
  </div>
);

LeftBorderContainer.defaultProps = {
  className: '',
  hasError: false,
  enabled: true,
};

export default memo(LeftBorderContainer);
