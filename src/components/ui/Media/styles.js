import styled from 'styled-components';

const StyledMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 20%;
  margin: 1rem;

  @media (max-width: 1300px) {
    width: 30%;
  }

  @media (max-width: 1000px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 44%;
  }

  @media (max-width: 600px) {
    width: 80%;
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
