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
    margin-left: 20px;
  }
`;

const StyledNavigationLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const StyleName = styled.li`
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 22px;
  color: #FFFFFF;
  list-style: none;
`;

export {
  StyledNavigation,
  StyledNavigationLogo,
  StyledNavigationLinks,
  StyledNavigationLinkContainer,
  StyleName
};
