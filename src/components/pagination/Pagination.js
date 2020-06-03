import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import Container from '../common/Container';
import StyledPagination from './styles';

const Pagination = ({ paginationData, fetchdata }) => {
  const { last_page } = paginationData;

  const onChange = (touched) => {
    fetchdata(touched.selected + 1);
  };

  return (
    <Container>
      <StyledPagination>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel="..."
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
    last_page: PropTypes.string.isRequired
  }).isRequired,
  fetchdata: PropTypes.func.isRequired
};
