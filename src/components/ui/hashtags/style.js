import styled from 'styled-components';
import Color from '../../../constants/Color';

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
    background-color: ${Color.WHITE};
    border: 1.5px solid ${Color.PRIMARY};
    padding: 0.3rem;
    margin: 0.5rem 0.5rem 0.5rem 0;
    color: black;
    transition: all 0.3s ease-in-out;
    
    &:hover {
      cursor: pointer;
      transform: scale(1.01);
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
