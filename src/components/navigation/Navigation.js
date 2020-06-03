import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledNavigation,
  StyledNavigationLogo,
  StyledNavigationLinks,
  StyledNavigationLinkContainer,
  StyleName
} from './styles';
import logo from '../../assets/Object.svg';

const Navigation = () => (
  <StyledNavigation className="navbar">
    <StyledNavigationLogo className="navbar__logo">
      <Link to="/">
        <img src={logo} alt="Say Their Names Logo" />
        <StyleName> SAY THEIR NAME </StyleName> 
      </Link>
    </StyledNavigationLogo>
    <StyledNavigationLinkContainer>
      <StyledNavigationLinks>
        <Link to="/about">About</Link>
      </StyledNavigationLinks>
      <StyledNavigationLinks>
        <Link to="/petitions">Petitions</Link>
      </StyledNavigationLinks>
      <StyledNavigationLinks>
        <Link to="/donations">Donations</Link>
      </StyledNavigationLinks>
    </StyledNavigationLinkContainer>
  </StyledNavigation>
);

export default Navigation;
