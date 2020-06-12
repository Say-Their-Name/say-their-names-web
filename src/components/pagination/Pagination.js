import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import Container from '../common/Container';
import StyledPagination from './styles';

const Pagination = (props) => {
  const { paginationData, currentPage, updateCurrentPage } = props;
  const { last_page } = paginationData;

  const onChange = (touched) => {
    updateCurrentPage(touched.selected + 1);
  };


  return (
    <Container>
      <StyledPagination>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel="..."
          initialPage={currentPage - 1}
          breakClassName="break-me"
          pageCount={last_page}
          onPageChange={onChange}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      </StyledPagination>
    </Container>
  );
};

export default Pagination;

Pagination.propTypes = {
  paginationData: PropTypes.shape({
    last_page: PropTypes.number.isRequired
  }).isRequired,
  currentPage: PropTypes.number.isRequired,
  updateCurrentPage: PropTypes.func.isRequired
};
