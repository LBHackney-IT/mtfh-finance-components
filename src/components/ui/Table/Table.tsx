/* eslint-disable react/jsx-key */
import { memo, useEffect } from 'react';
import type { ReactNode, Component } from 'react';
import { useTable, usePagination } from 'react-table';
import type { TableHeaderProps, HeaderPropGetter, Column } from 'react-table';

import classnames from 'classnames';

import { DEFAULT_PAGE_SIZE } from '../../../constants';

import Pagination from './components/Pagination';
import TokenPagination from './components/TokenPagination';
import type { PaginationOptions, TokenPaginationOptions } from './constants';

import styles from './Table.module.scss';

// REF https://github.com/TanStack/react-table/discussions/2664
type ColumnOptions = {
  accessor: string;
  Cell?: (input: Function | Component) => ReactNode;
  Header: string | ((input: string | Function | Component) => ReactNode);
  isNumeric?: boolean;
  isHidden?: boolean;
  lightWeight?: boolean;
  boldHeader?: boolean;
  bold?: boolean;
  className?: string;
  customWidth?: number;
};

type ColumnData = {
  [key: string]: string;
};

type HeaderColumnData = ColumnData & {
  getHeaderProps: (propGetter?: HeaderPropGetter<{}>) => TableHeaderProps;
  render: (type: 'Header' | 'Footer' | string, props?: object) => ReactNode;
};

type TableProps = {
  data: Array<ColumnData>;
  columns: Array<ColumnOptions>;
  isBigRow?: boolean;
  pagination?: PaginationOptions;
  tokenPagination?: TokenPaginationOptions;
};

// In case of regular pagination use 'usePagination' hook from 'hooks' folder
// In case of token pagination use 'useTokenPagination' hook
const Table = ({
  data,
  columns,
  isBigRow = false,
  pagination = {
    pageSize: DEFAULT_PAGE_SIZE,
    pageCount: -1,
    totalCount: -1,
    currentPage: 1,
    onPageChange() {},
  },
  tokenPagination,
}: TableProps) => {
  const { pageSize = DEFAULT_PAGE_SIZE, pageCount, currentPage } = pagination;

  const isPaginationEnabled = pageCount !== -1;

  const {
    rows,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    allColumns,
    setHiddenColumns,
    // pagination options
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      data,
      columns: columns as ReadonlyArray<Column<ColumnData>>,
      manualPagination: true,
      initialState: {
        pageSize,
        pageIndex: currentPage - 1,
      },
      pageCount,
    },
    isPaginationEnabled ? usePagination : () => {}
  );

  useEffect(() => {
    const hiddenColumns = (allColumns as unknown as Array<ColumnData>)
      .filter((el) => el.isHidden)
      .map((el) => el.id);
    setHiddenColumns(hiddenColumns);
  }, [allColumns, setHiddenColumns]);

  return (
    <>
      <table
        className={classnames('govuk-table lbh-table ', styles.table)}
        {...getTableProps()}
      >
        <thead className="govuk-table__head">
          {headerGroups.map(({ getHeaderGroupProps, headers }) => (
            <tr className="govuk-table__row" {...getHeaderGroupProps()}>
              {(headers as unknown as Array<HeaderColumnData>).map((column) => (
                <th
                  style={column.customWidth ? { width: column.customWidth } : undefined}
                  className={classnames(
                    'govuk-table__header',
                    styles.cell,
                    column.className,
                    {
                      'govuk-table__header--numeric': column.isNumeric,
                      [styles.bold]: column.bold || column.boldHeader,
                      [styles.lightWeight]: column.lightWeight,
                      [styles.bigRow]: isBigRow,
                    }
                  )}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="govuk-table__body" {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                className={classnames('govuk-table__row', {
                  [styles.hoverable]: isBigRow,
                })}
                {...row.getRowProps()}
              >
                {row.cells.map(({ column, render, getCellProps }) => {
                  const typedColumn = column as unknown as ColumnData;

                  return (
                    <td
                      style={
                        typedColumn.customWidth
                          ? { width: typedColumn.customWidth }
                          : undefined
                      }
                      className={classnames(
                        'govuk-table__cell',
                        styles.cell,
                        typedColumn.className,
                        {
                          'govuk-table__cell--numeric': typedColumn.isNumeric,
                          [styles.lightWeight]: typedColumn.lightWeight,
                          [styles.bold]: typedColumn.bold,
                          [styles.bigRow]: isBigRow,
                        }
                      )}
                      {...getCellProps()}
                    >
                      {render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {isPaginationEnabled && (
        <Pagination
          initialOptions={{ ...pagination, pageSize }}
          controls={{
            canPreviousPage,
            previousPage,
            canNextPage,
            nextPage,
            gotoPage,
            pageIndex,
          }}
        />
      )}

      {tokenPagination && <TokenPagination tokenPagination={tokenPagination} />}
    </>
  );
};

export default memo(Table);
