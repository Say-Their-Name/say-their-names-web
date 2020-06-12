
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to={`/`}>
            <img src={Logo} alt="Say Their Names Logo" />
            <h1>Say Their Names</h1>
          </Link>
      </div>
      <div className="navbar__links">
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Nav;
