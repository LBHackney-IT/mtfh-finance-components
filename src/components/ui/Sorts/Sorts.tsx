import { memo } from 'react';
import type { KeyboardEvent } from 'react'

import classnames from 'classnames';

import CheckedSortIcon from '@assets/checked-sort.svg';

import Pressable from '../Pressable';
import Typography from '../Typography';

import styles from './Sorts.module.scss';

type SortsProps = {
  options: Array<{
    id: string,
    label: string
  }>,
  onChange: (id: string) => void,
  selectedOptions: Set<string>
  className?: string
}

// use in conjunction with useSorts hook
const Sorts = ({ options, selectedOptions, onChange, className = "" }: SortsProps) => (
  <div className={classnames(styles.container, className)} data-testid="sorts">
    {options.map(({ id, label }) => {
      const isActive = selectedOptions.has(id);

      const onKeyDown = ({ key }: KeyboardEvent<HTMLButtonElement>) => {
        if (key === 'Enter') onChange(id);
      };

      return (
        <Pressable
          key={label}
          onKeyDown={onKeyDown}
          onClick={() => onChange(id)}
          className={classnames(styles.item, {
            [styles.active]: isActive,
          })}
        >
          <Typography size="s">{label}</Typography>
          {isActive && <CheckedSortIcon />}
        </Pressable>
      );
    })}
  </div>
);

export default memo(Sorts);
