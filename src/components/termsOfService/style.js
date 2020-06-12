import styled from 'styled-components';
import Color from '../../constants/Color';
import MediaQuery from '../../styles/utils';

const StyledTermsOfService = styled.div`
  line-height: 1.5;
  font-family: 'Karla', sans-serif;
  margin: auto;
  background-color: ${Color.WHITE};
  text-align: center;
  width: 65%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 800px) {
      width: 75%;
    }

    @media (max-width: 700px) {
      width: 95%;
    }

  ${MediaQuery.xs`padding: 0.8rem 0.4rem;
  `}
  ${MediaQuery.sm`padding: 2rem 0rem;
  `}
  ${MediaQuery.md`padding: 4rem 2rem;
  `}

  padding: 5rem 3rem;
 
`;

const StyledTermsOfServiceContainer = styled.div`
  text-align: left;
  margin: 1rem 0;

  h2 {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 'bold';
    margin: 0px 0px 0px;
    text-transform: uppercase;
  }
  h3 {
    margin-top: 0;
    text-align: left;
    text-transform: uppercase;
  }
  p {
    margin-left: auto;
    margin-right: auto;
    color: #333;
    word-wrap: break-word;
    text-align: justify;
  }
  hr {
    padding: 0px;
    margin: 0px;
    border-bottom: 1px solid grey;
  }
`;

export { StyledTermsOfService, StyledTermsOfServiceContainer };
