import styled from 'styled-components';

const StyledNews = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 23%;
  margin: 1rem 1rem 1rem 0;

  @media (max-width: 1300px) {
    width: 30%;
  }

  @media (max-width: 1000px) {
    width: 45%;
  }

  @media (max-width: 800px) {
    width: 47%;
  }

  @media (max-width: 600px) {
    width: 80%;
    justify-content: center;
    margin: 1rem;
  }

  @media (max-width: 500px) {
    width: 95%;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  h3,
  h4 {
    padding: 0 1rem;
  }

  a {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
`;

export default StyledNews;
