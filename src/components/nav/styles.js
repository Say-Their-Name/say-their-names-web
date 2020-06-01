import styled from 'styled-components';
import Color from '../../constants/Color';

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
  padding: 1rem 2rem;
`;

const StyledNavigationLogo = styled.div`
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
  }
`;

export { StyledNavigation, StyledNavigationLogo, StyledNavigationLinks };
