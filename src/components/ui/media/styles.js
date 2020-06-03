import styled from 'styled-components';

const StyledMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 30%;
  margin: 1rem 0;

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
`;

export default StyledMedia;
