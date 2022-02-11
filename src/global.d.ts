declare module '*.module.css';
declare module '*.svg';
declare module '*.module.scss';

declare module 'react-loader-spinner' {
  export interface LoaderProps {
    className?: string;
  }
}

import type { ColumnInstance, TableInstance, TableState } from 'react-table'
import type { PaginationControl} from './components/ui/Table/components/Pagination'

declare module 'react-table' {
  export interface ColumnInstance<D extends object = {}>{
    isHidden: boolean,
    customWidth?: number,
    isNumeric?: boolean,
    lightWeight?: boolean
    boldHeader?: boolean
    bold?: boolean
    className?: string
  }

  export interface TableInstance<D extends object = {}> extends PaginationControl {

  }

  export interface TableState<D extends object = {}> {
    pageIndex: number
  }
}