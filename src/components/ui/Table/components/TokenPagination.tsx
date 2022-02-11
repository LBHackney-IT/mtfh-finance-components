import { memo } from 'react';

import type { TokenPaginationOptions } from '../constants';
import PaginationNavButton from './PaginationNavButton';

import styles from '../Table.module.scss';

type TokenPaginationProps = {
  tokenPagination: TokenPaginationOptions
}

const TokenPagination = ({ tokenPagination }: TokenPaginationProps) => {
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

export default memo(TokenPagination);
