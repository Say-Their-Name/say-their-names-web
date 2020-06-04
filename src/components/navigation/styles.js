import styled from 'styled-components';
import Color from '../../constants/Color';

const StyledNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
  width: 100%;
`;

const StyledNavigationLogo = styled.div`
  padding: 1rem;
  a {
    display: flex;
    align-items: center;
  }
  img {
    height: 40px;
    margin-right: 15px;
  }
  h1 {
    font-size: 20px;
    margin: 0;
    color: ${Color.WHITE};
    text-transform: uppercase;
  }
`;

const StyledNavigationLinks = styled.div`
  a {
    color: ${Color.WHITE};
    margin-left: 25px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:after {    
    content: "";
    background: none;
    bottom: 0;
    top: 1.5em;
    left: 50%;
    height: 2px;
    width: 0;
    position: absolute;
    background: ${Color.WHITE};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
   }

  a:hover:after { 
    width: 100%; 
    left: 0; 
  }
`;

const StyledNavigationLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;


export {
  StyledNavigation,
  StyledNavigationLogo,
  StyledNavigationLinks,
  StyledNavigationLinkContainer
};
