import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledNavigation,
  StyledNavigationLogo,
  StyledNavigationLinkContainer
} from './styles';
import NavigationItem from './NavigationItem';
import Logo from '../../assets/logo.png';

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
  <StyledNavigation className="navbar" role="navigation">
    <StyledNavigationLogo className="navbar__logo">
      <Link to="/">
        <img src={Logo} alt="Say Their Names Logo" />
        <h4>SAY THEIR NAMES</h4>
      </Link>
    </StyledNavigationLogo>

    <StyledNavigationLinkContainer>
      {navRoutes.map((route) => (
        <NavigationItem key={route.name} name={route.name} path={route.path} />
      ))}
    </StyledNavigationLinkContainer>
  </StyledNavigation>
);

export default Navigation;
