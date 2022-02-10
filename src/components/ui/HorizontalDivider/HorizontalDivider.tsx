import { memo } from 'react';

import classnames from 'classnames';

import styles from './HorizontalDivider.module.scss';

type HorizontalDividerProps = {
  className?: string;
};

const HorizontalDivider = ({ className = '' }: HorizontalDividerProps) => (
  <div
    className={classnames(styles.line, className)}
    data-testid="horizontal-divider"
  />
);

export default memo(HorizontalDivider);
