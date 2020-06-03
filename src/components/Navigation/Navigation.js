import React from "react";
import { Link } from "react-router-dom";

import {
  StyledNavigation,
  StyledNavigationLogo,
  StyledNavigationLinks,
  StyledNavigationLinkContainer,
} from "./styles";
import Logo from "../../assets/logo.png";

const Navigation = () => (
  <StyledNavigation className="navbar">
    <StyledNavigationLogo className="navbar__logo">
      <Link to="/">
        <img src={Logo} alt="Say Their Names Logo" />
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
