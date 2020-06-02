import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledNavigation,
  StyledNavigationLogo,
  StyledNavigationLinks,
  Space
} from './styles';
import Logo from '../../assets/logo.png';

const Navigation = () => (
  <StyledNavigation className="navbar">
    <StyledNavigationLogo className="navbar__logo">
      <Link to="/">
        <img src={Logo} alt="Say Their Names Logo" />
      </Link>
    </StyledNavigationLogo>
    <Space />
    <StyledNavigationLinks>
      <Link to="/about">
        About
      </Link>
    </StyledNavigationLinks>
    <StyledNavigationLinks>
      <Link to="/petitions">
        Petitions
      </Link>
    </StyledNavigationLinks>
    <StyledNavigationLinks>
      <Link to="/donations">
        Donations
      </Link>
    </StyledNavigationLinks>
  </StyledNavigation>
);

export default Navigation;
