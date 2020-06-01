import React from "react";
import { Link } from "react-router-dom";

import {
  StyledNavigation,
  StyledNavigationLogo,
  StyledNavigationLinks,
} from "./styles";
import Logo from "../../assets/logo.png";

const Navigation = () => (
  <StyledNavigation className="navbar">
    <StyledNavigationLogo className="navbar__logo">
      <Link to="/">
        <img src={Logo} alt="Say Their Names Logo" />
      </Link>
    </StyledNavigationLogo>
    <StyledNavigationLinks>
      <a href="/about">About</a>
    </StyledNavigationLinks>
  </StyledNavigation>
);

export default Navigation;
