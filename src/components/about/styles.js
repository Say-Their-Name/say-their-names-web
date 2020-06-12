import styled from 'styled-components';
import Color from '../../constants/Color';
import MediaQuery from '../../styles/utils';

const StyledAboutBanner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  a {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  img {
    width: 100%;
  }
`;

const StyledAbout = styled.div`
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

const StyledAboutContainer = styled.div`
  text-align: left;
  margin: 1rem 0;

  h2 {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: "bold";
    margin: 0px 0px 0px;
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
const LinkStyle = styled.span`
  border-bottom: 2px solid grey;

  a:hover {
    background-color: transparent;
    border-bottom: 2px solid red;
  }
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export {
  StyledAbout,
  StyledAboutContainer,
  LinkStyle,
  StyledAboutBanner,
  StyledLinkContainer
};
