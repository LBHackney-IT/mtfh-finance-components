import { memo } from 'react';

import classnames from 'classnames';
import PropTypes from 'prop-types';

import Pressable from '../../Pressable';
import Typography from '../../Typography';

import styles from '../Table.module.scss';

const PaginationNavButton = ({ label, onClick, isInactive }) => (
  <Pressable
    onClick={onClick}
    className={classnames(styles.page, {
      [styles.inactivePage]: isInactive,
    })}
  >
    <Typography size="xs">{label}</Typography>
  </Pressable>
);

PaginationNavButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isInactive: PropTypes.bool.isRequired,
};

export default memo(PaginationNavButton);
