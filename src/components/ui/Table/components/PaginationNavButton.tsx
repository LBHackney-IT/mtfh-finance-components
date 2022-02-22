import { memo } from 'react';
import type { MouseEvent } from 'react';

import classnames from 'classnames';

import Pressable from '../../Pressable';
import Typography from '../../Typography';

import styles from '../Table.module.scss';

type PaginationNavButtonProps = {
  label: string;
  isInactive: boolean;
  onClick: (e: MouseEvent) => void;
};

const PaginationNavButton = ({
  label,
  onClick,
  isInactive,
}: PaginationNavButtonProps) => (
  <Pressable
    onClick={onClick}
    className={classnames(styles.page, {
      [styles.inactivePage]: isInactive,
    })}
  >
    <Typography size="xs">{label}</Typography>
  </Pressable>
);

export default memo(PaginationNavButton);
