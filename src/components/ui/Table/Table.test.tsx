import { render, screen } from '@testing-library/react';

import Table from './index';
import { range, getPageNumbers } from './helpers';

const columns = [{ Header: 'Name', accessor: 'name' }];
const data = [{ name: 'Clark' }];

describe('Table', () => {
  it('renders basic', () => {
    render(<Table data={data} columns={columns} />);

    const header = screen.getByText('Name');
    expect(header).toBeInTheDocument();

    const cell = screen.getByText('Clark');
    expect(cell).toBeInTheDocument();
  });

  it('renders bold columns', () => {
    render(
      <Table data={data} columns={[{ Header: 'Name', accessor: 'name', bold: true }]} />
    );

    const headerCell = screen.getByRole('columnheader');
    expect(headerCell).toHaveClass('bold');

    const cell = screen.getByRole('cell');
    expect(cell).toHaveClass('bold');
  });

  it('renders lightWeight columns', () => {
    render(
      <Table
        data={data}
        columns={[{ Header: 'Name', accessor: 'name', lightWeight: true }]}
      />
    );

    const headerCell = screen.getByRole('columnheader');
    expect(headerCell).toHaveClass('lightWeight');

    const cell = screen.getByRole('cell');
    expect(cell).toHaveClass('lightWeight');
  });

  it('renders bold headers', () => {
    render(
      <Table
        data={data}
        columns={[{ Header: 'Name', accessor: 'name', boldHeader: true }]}
      />
    );
    const headerCell = screen.queryByRole('columnheader');
    expect(headerCell).toHaveClass('bold');
  });

  it('renders numeric columns', () => {
    render(
      <Table
        data={data}
        columns={[{ Header: 'Name', accessor: 'name', isNumeric: true }]}
      />
    );

    const headerCell = screen.queryByRole('columnheader');
    expect(headerCell).toHaveClass('govuk-table__header--numeric');

    const cell = screen.queryByRole('cell');
    expect(cell).toHaveClass('govuk-table__cell--numeric');
  });

  it('renders with given width', () => {
    render(
      <Table
        data={data}
        columns={[{ Header: 'Name', accessor: 'name', customWidth: 333 }]}
      />
    );

    const headerCell = screen.queryByRole('columnheader');
    expect(headerCell).toHaveStyle({ width: '333px' });
  });

  it('renders pagination', () => {
    render(
      <Table
        data={data}
        columns={columns}
        pagination={{
          pageCount: 3,
          totalCount: 15,
          currentPage: 1,
          onPageChange: () => {},
        }}
      />
    );

    const pageNumber = screen.getByText('1');
    expect(pageNumber).toBeInTheDocument();
  });

  it('correctly renders current page', () => {
    render(
      <Table
        data={data}
        columns={columns}
        pagination={{
          pageCount: 3,
          totalCount: 15,
          currentPage: 1,
          onPageChange: () => {},
        }}
      />
    );

    const pageNumber = screen.getByText('1');
    expect(pageNumber).toHaveClass('w700');
  });

  it('shows correct pagination info given 2nd current page and 15 total records', () => {
    render(
      <Table
        data={data}
        columns={columns}
        pagination={{
          pageCount: 3,
          totalCount: 15,
          currentPage: 2,
          onPageChange: () => {},
        }}
      />
    );

    const cell = screen.getByText('Showing 6-10 of 15 results');
    expect(cell).toBeInTheDocument();
  });

  it('renders token pagination', () => {
    render(
      <Table
        data={data}
        columns={columns}
        tokenPagination={{
          hasNext: true,
          hasPrevious: false,
          goNext: () => {},
          goPrevious: () => {},
          resetPagination: () => {},
        }}
      />
    );

    const previousButton = screen.getByText(/Previous/);
    expect(previousButton).toBeInTheDocument();

    const nextButton = screen.getByText(/Next/);
    expect(nextButton).toBeInTheDocument();
  });
});

describe('Table helpers', () => {
  it('range helper', () => {
    const result = range(1, 4);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  describe('getPageNumbers', () => {
    it('small amount of pages', () => {
      const result = getPageNumbers({ pageCount: 3, currentPage: 1 });
      expect(result).toEqual([1, 2, 3]);
    });

    it('many pages, current is first', () => {
      const result = getPageNumbers({ pageCount: 20, currentPage: 1 });
      expect(result).toEqual([1, 2, 3, 4, 5, { key: 'right', value: 'DOTS' }, 20]);
    });

    it('many pages, current is last', () => {
      const result = getPageNumbers({ pageCount: 20, currentPage: 20 });
      expect(result).toEqual([1, { key: 'left', value: 'DOTS' }, 16, 17, 18, 19, 20]);
    });
  });
});
