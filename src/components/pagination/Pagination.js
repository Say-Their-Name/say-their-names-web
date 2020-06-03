import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
  }
  .pagination > .active > a {
    background-color: black;
    border-color: black;
    color: #fff;
  }
  .pagination > li > a {
    border: 1px solid black;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: black;
    border-color: black;
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: black;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
`;
const Pagination = ({ paginationData, fetchdata }) => {
  console.log(paginationData);
  const { total, last_page } = paginationData;

  const onChange = (touched) => {
    fetchdata(touched.selected + 1);
    // console.log(touched.selected + 1);
  };

  return (
    <StyledPagination>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={last_page}
        // marginPagesDisplayed={1}
        // pageRangeDisplayed={5}
        onPageChange={onChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </StyledPagination>
  );
};

export default Pagination;
