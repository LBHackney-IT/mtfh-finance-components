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
  enabled = true,
  className = "",
  hasError = false,
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
    data-testid="left-border-container"
  >
    {children}
  </div>
);

export default memo(LeftBorderContainer);
