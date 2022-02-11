import { memo } from 'react';
import { useUpdateEffect } from 'react-use';

import classnames from 'classnames';

import Pressable from '../../Pressable';
import Typography from '../../Typography';
import { getPageNumbers } from '../helpers';
import type { PaginationOptions } from '../constants';
import { DEFAULT_PAGE_SIZE } from '../../../../constants'
import PaginationNavButton from './PaginationNavButton';

import styles from '../Table.module.scss';

type PageSetter = () => void

export type PaginationControl = {
  canPreviousPage: boolean,
  previousPage: PageSetter,
  canNextPage: boolean,
  nextPage: PageSetter,
  gotoPage: (pageNum: number) => void,
  pageIndex: number,
}

type PaginationProps = {
  initialOptions: PaginationOptions
  controls: PaginationControl
};

const Pagination = ({ initialOptions, controls }: PaginationProps) => {
  const { totalCount, currentPage, pageCount, pageSize = DEFAULT_PAGE_SIZE, onPageChange } = initialOptions;
  const { canPreviousPage, previousPage, canNextPage, nextPage, gotoPage, pageIndex } =
    controls;

  useUpdateEffect(() => {
    onPageChange(pageIndex);
  }, [pageIndex]);

  useUpdateEffect(() => {
    // go to first page when currentPage is reset to the first outside
    if (currentPage === 1) gotoPage?.(0);
  }, [currentPage]);

  const pageNumbers = getPageNumbers({ pageCount, currentPage });

  const from = `${pageIndex * pageSize + 1}`;
  const to = `${Math.min((pageIndex + 1) * pageSize, totalCount)}`;
  const dateRange = `${from}-${to}`;

  return (
    <div className={styles.pagination}>
      <PaginationNavButton
        onClick={previousPage}
        isInactive={!canPreviousPage}
        label="<< Previous"
      />

      {pageNumbers.map((page) => {
        if (typeof page !== "number") {
          return (
            <Typography
              key={page.key}
              size="xs"
              className={classnames(styles.page, styles.inactivePage)}
            >
              ...
            </Typography>
          );
        }

        const currentPageIndex = page - 1;
        const isCurrentPage = currentPageIndex === pageIndex;

        return (
          <Pressable
            className={classnames(styles.page, {
              [styles.currentPage]: isCurrentPage,
            })}
            onClick={() => gotoPage(currentPageIndex)}
            key={`${page}`}
          >
            <Typography size="xs" weight={isCurrentPage ? 700 : 400}>
              {page}
            </Typography>
          </Pressable>
        );
      })}

      <PaginationNavButton
        onClick={nextPage}
        isInactive={!canNextPage}
        label="Next >>"
      />

      <Typography size="xs">
        {`Showing ${dateRange} of ${totalCount} results`}
      </Typography>
    </div>
  );
};

export default memo(Pagination);
