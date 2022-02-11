import { memo } from 'react';

import classnames from 'classnames';

import styles from './VerticalDivider.module.scss';

type VerticalDividerProps = {
  className?: string;
};

const VerticalDivider = ({ className = '' }: VerticalDividerProps) => (
  <div
    className={classnames(styles.divider, className)}
    data-testid="vertical-divider"
  />
);

export default memo(VerticalDivider);
