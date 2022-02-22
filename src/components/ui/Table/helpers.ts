import type { PaginationOptions } from './constants';

export const range = (from: number, to: number): Array<number> => {
  const step = 1;

  let i = from;
  const result = [];

  while (i <= to) {
    result.push(i);
    i += step;
  }

  return result;
};

export const DOTS = 'DOTS' as const;

type OmittedPage = { key: 'left' | 'right'; value: 'DOTS' };

export const getPageNumbers = ({
  pageCount,
  currentPage,
}: Omit<PaginationOptions, 'pageSize' | 'totalCount' | 'onPageChange'>): Array<
  number | OmittedPage
> => {
  const pageNeighbours = 1;
  const totalNumbers = pageNeighbours * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (pageCount > totalBlocks) {
    let pages;

    const leftBound = currentPage - pageNeighbours;
    const rightBound = currentPage + pageNeighbours;
    const beforeLastPage = pageCount - 1;

    const startPage = leftBound > 2 ? leftBound : 2;
    const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

    pages = range(startPage, endPage);

    const pagesCount = pages.length;
    const singleSpillOffset = totalNumbers - pagesCount - 1;

    const leftSpill = startPage > 2;
    const rightSpill = endPage < beforeLastPage;

    const leftSpillPage = { value: DOTS, key: 'left' as const };
    const rightSpillPage = { value: DOTS, key: 'right' as const };

    if (leftSpill && !rightSpill) {
      const extraPages = range(startPage - singleSpillOffset, startPage - 1);
      pages = [leftSpillPage, ...extraPages, ...pages];
    } else if (!leftSpill && rightSpill) {
      const extraPages = range(endPage + 1, endPage + singleSpillOffset);
      pages = [...pages, ...extraPages, rightSpillPage];
    } else if (leftSpill && rightSpill) {
      pages = [leftSpillPage, ...pages, rightSpillPage];
    }

    return [1, ...pages, pageCount];
  }

  return range(1, pageCount);
};
