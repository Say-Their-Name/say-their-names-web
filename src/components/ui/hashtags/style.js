import styled from 'styled-components';

const StyledHashTags = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 700px) {
    justify-content: center;
  }

  h2 {
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    width: 100%;
    text-transform: uppercase;
    @media (max-width: 600px) {
      text-align: center;
    }
  }

  a {
    background-color: #e1e1e1;
    padding: 0.5rem;
    margin: 0.5rem 0.5rem 0.5rem 0;
    color: black;

    &:hover {
      cursor: pointer;
    }

    p {
      padding: 0;
      margin: 0;
      text-transform: uppercase;
      font-weight: bolder;
    }
  }
`;

export default StyledHashTags;
