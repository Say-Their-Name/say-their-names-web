import styled from 'styled-components';
import Color from '../../constants/Color';
import MediaQuery from '../../styles/utils';

const StyledAbout = styled.div`
  line-height: 1.6;
  font-weight: normal;
  margin: auto;
  background-color: ${Color.WHITE};
  text-align: center;
  width: 50%;

  
  ${MediaQuery.xs`padding: 0.8rem 0.4rem;
  `}
  ${MediaQuery.sm`padding: 2rem 0rem;
  `}
  ${MediaQuery.md`padding: 4rem 2rem;
  `}

  padding: 5rem 3rem;

  h2 {
    margin-top: 0;
    text-align: left;
    font-weight: 'bold';
  }
`;

const StyledAboutContainer = styled.div`
  h3 { 
  font-weight: 'bold';
  text-align: left;
  }
  p{
    margin-left: auto;
    margin-right: auto;
    color:#333;
    word-wrap:break-word;
    text-align: justify;  
  }
  hr{
    padding: 0px;
    margin: 0px;    
  }
  a:hover: {
    textDecoration: 'underline',
  }
`;

export {
  StyledAbout,
  StyledAboutContainer
};
