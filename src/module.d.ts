import type { TableInstance, TableState, TableOptions } from 'react-table';
import type { PaginationControl } from './components/ui/Table/components/Pagination';

declare module 'react-table' {
  export interface TableInstance<D extends object = {}> extends PaginationControl {}

  export interface TableState<D extends object = {}> {
    pageIndex: number;
    pageSize?: number;
  }

  export interface TableOptions {
    manualPagination: boolean;
    pageCount: number;
  }
}
