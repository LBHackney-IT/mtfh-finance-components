import { memo } from 'react';

import { TOKEN_PAGINATION_PROP_TYPES } from '../constants';
import PaginationNavButton from './PaginationNavButton';

import styles from '../Table.module.scss';

const TokenPagination = ({ tokenPagination }) => {
  const { hasNext, hasPrevious, goNext, goPrevious } = tokenPagination;

  return (
    <div className={styles.pagination}>
      <PaginationNavButton
        onClick={goPrevious}
        isInactive={!hasPrevious}
        label="<< Previous"
      />

      <PaginationNavButton onClick={goNext} isInactive={!hasNext} label="Next >>" />
    </div>
  );
};

TokenPagination.propTypes = {
  tokenPagination: TOKEN_PAGINATION_PROP_TYPES.isRequired,
};

export default memo(TokenPagination);
