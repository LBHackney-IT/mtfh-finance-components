export type PaginationOptions = {
  pageSize?: number;
  pageCount: number;
  totalCount: number;
  currentPage: number;
  onPageChange: (pageNum: number) => void;
};

type PageSetter = () => void;

export type TokenPaginationOptions = {
  hasNext: boolean;
  hasPrevious: boolean;
  goNext: PageSetter;
  goPrevious: PageSetter;
  resetPagination: PageSetter;
};
