/* eslint-disable react/jsx-key */
import { memo, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';

import classnames from 'classnames';
import PropTypes from 'prop-types';

import { DEFAULT_PAGE_SIZE } from '@constants';

import Pagination from './components/Pagination';
import TokenPagination from './components/TokenPagination';
import { PAGINATION_PROP_TYPES, TOKEN_PAGINATION_PROP_TYPES } from './constants';

import styles from './Table.module.scss';

// In case of regular pagination use 'usePagination' hook from 'hooks' folder
// In case of token pagination use 'useTokenPagination' hook
const Table = ({ data, columns, isBigRow, pagination, tokenPagination }) => {
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
      columns,
      manualPagination: true,
      initialState: {
        pageSize,
        pageIndex: currentPage - 1,
      },
      pageCount,
    },
    isPaginationEnabled ? usePagination : null
  );

  useEffect(() => {
    const hiddenColumns = allColumns.filter((el) => el.isHidden).map((el) => el.id);
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
              {headers.map((column) => (
                <th
                  style={column.customWidth ? { width: column.customWidth } : null}
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
                {row.cells.map(({ column, render, getCellProps }) => (
                  <td
                    style={column.customWidth ? { width: column.customWidth } : null}
                    className={classnames(
                      'govuk-table__cell',
                      styles.cell,
                      column.className,
                      {
                        'govuk-table__cell--numeric': column.isNumeric,
                        [styles.lightWeight]: column.lightWeight,
                        [styles.bold]: column.bold,
                        [styles.bigRow]: isBigRow,
                      }
                    )}
                    {...getCellProps()}
                  >
                    {render('Cell')}
                  </td>
                ))}
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

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
      accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      isNumeric: PropTypes.bool,
      lightWeight: PropTypes.bool,
      boldHeader: PropTypes.bool,
      bold: PropTypes.bool,
      className: PropTypes.string,
      customWidth: PropTypes.number,
    })
  ).isRequired,
  pagination: PAGINATION_PROP_TYPES,
  tokenPagination: TOKEN_PAGINATION_PROP_TYPES,
  isBigRow: PropTypes.bool,
};

Table.defaultProps = {
  pagination: {
    pageSize: DEFAULT_PAGE_SIZE,
    pageCount: -1,
    totalCount: null,
    currentPage: 1,
    onPageChange() {},
  },
  tokenPagination: null,
  isBigRow: false,
};

export default memo(Table);
