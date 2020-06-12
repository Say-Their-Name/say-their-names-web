import styled from 'styled-components';
import Color from '../../constants/Color';

const StyledPagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0;
  
  .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
    padding: 0;
  }
  .pagination > .active > a {
    background-color: ${Color.PRIMARY};
    border-color: ${Color.PRIMARY};
    color: #fff; 
  }
  .pagination > li > a {
    margin: 0.3rem;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: grey;
      color: white;
    }

    &:focus {
      outline: 2px solid black;
    }

  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: ${Color.PRIMARY};
    border-color: ${Color.PRIMARY};
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: ${Color.PRIMARY};
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
`;

export default StyledPagination;
