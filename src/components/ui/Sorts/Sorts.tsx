import { memo } from 'react';

import classnames from 'classnames';
import PropTypes from 'prop-types';

import CheckedSortIcon from '@assets/checked-sort.svg';

import Pressable from '../Pressable';
import Typography from '../Typography';

import styles from './Sorts.module.scss';

// use in conjunction with useSorts hook
const Sorts = ({ options, selectedOptions, onChange, className }) => (
  <div className={classnames(styles.container, className)}>
    {options.map(({ id, label }) => {
      const isActive = selectedOptions.has(id);

      const onKeyDown = ({ key }) => {
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

Sorts.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedOptions: PropTypes.instanceOf(Set).isRequired,
  className: PropTypes.string,
};

Sorts.defaultProps = {
  className: '',
};

export default memo(Sorts);
