import PropTypes from 'prop-types';

export const PAGINATION_PROP_TYPES = PropTypes.shape({
  pageSize: PropTypes.number,
  pageCount: PropTypes.number,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
});

export const TOKEN_PAGINATION_PROP_TYPES = PropTypes.shape({
  hasNext: PropTypes.bool,
  hasPrevious: PropTypes.bool,
  goNext: PropTypes.func,
  goPrevious: PropTypes.func,
  resetPagination: PropTypes.func,
});
