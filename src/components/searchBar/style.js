import styled from 'styled-components';

const Container = styled.div`
  width: 500px;
  display: block;
`;
const Form = styled.form`
  position: relative;
  input {
    margin: 0 auto;
    width: 80%;
    height: 45px;
    padding: 0 35px;
    font-size: 1rem;
    border: 1px solid #d0cfce;
    outline: none;
    &:focus {
      border: 1px solid #008abf;
      transition: 0.35s ease;
      color: #008abf;
      &::-webkit-input-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
      &::-moz-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
      &:-ms-placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
    }
  }

  .search-icon {
    position: absolute;
    float: left;
    color: black;
    width: 100px;
    height: 100px;
    top: 15px;
    left: 8px;
  }
`;

export { Form, Container };
