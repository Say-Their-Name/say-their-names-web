import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledNavigation,
  StyledNavigationLogo,
  StyledNavigationLinkContainer
} from './styles';
import NavigationItem from './NavigationItem';
import Logo from '../../assets/logo.svg';

const navRoutes = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Donations',
    path: '/donations'
  },
  {
    name: 'Petitions',
    path: '/petitions'
  },
  {
    name: 'About',
    path: '/about'
  }
];
const Navigation = () => (
  <StyledNavigation className="navbar">
    <StyledNavigationLogo className="navbar__logo">
      <Link to="/">
        <img src={Logo} alt="Say Their Names Logo" />
      </Link>
    </StyledNavigationLogo>

    <StyledNavigationLinkContainer>
      {navRoutes.map((route) => (
        <NavigationItem
          key={route.name}
          name={route.name}
          path={route.path}
        />
      ))}

      {/* <StyledNavigationLinks>
          <Link to="/petitions">Petitions</Link>
        </StyledNavigationLinks>
        <StyledNavigationLinks>
          <Link to="/donations">Donations</Link>
        </StyledNavigationLinks>
        <StyledNavigationLinks>
          <Link to="/about">About</Link>
        </StyledNavigationLinks> */}
    </StyledNavigationLinkContainer>
  </StyledNavigation>
);

export default Navigation;
