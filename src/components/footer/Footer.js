import React from "react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import {
  StyledFooterContainer,
  StyledFooter,
  StyledFooterLinks,
  StyledFooterMissions,
  StyleFooterForm,
} from "./style";

const Footer = () => (
  <StyledFooterContainer>
    <Container>
      <StyledFooter className="footer">
        <StyledFooterLinks className="footer__links">
          <Link to="/">Home</Link>
          <Link to="/donation">Donation</Link>
          <Link to="/bookmarks">Bookmarks</Link>
          <Link to="/petitions">Petitions</Link>
          <Link to="/settings">Settings</Link>
        </StyledFooterLinks>
        <StyleFooterForm className="footer__form">
          <h4>Sign up to our Newsletter</h4>
          {/* <label htmlFor="email">Sign up to our Newsletter</label> */}
          <div className="form-container">
            <input
              placeholder="Email Address"
              required
              id="email"
              type="email"
            />
            <button type="submit">Submit</button>
          </div>
          {/* <span>Subscribed successfully</span> */}

          {/* <InputSubmit /> */}
        </StyleFooterForm>

        <StyledFooterMissions className="footer_missions">
          <h4>Our Mission</h4>
          <p>
            SAY THEIR NAME is a place to commemorate the death of our black
            kings and queens murdered by police brutality. SAY THEIR NAME makes
            it easy to donate, raise awareness, and sign petitions.
            <br />
            <br />
            Join the fight for justice and donate today.
          </p>
        </StyledFooterMissions>
      </StyledFooter>
    </Container>
  </StyledFooterContainer>
);

export default Footer;
