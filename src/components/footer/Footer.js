import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledFooter,
  StyledFooterLinks,
  StyledFooterMissions,
  StyleFooterForm,
  InputEmail,
  InputSubmit
} from './style';

const Footer = () => (
  <StyledFooter className="footer">
    <StyledFooterLinks className="footer__links">
      <Link to="/">Home</Link>
      <Link to="/donation">Donation</Link>
      <Link to="/bookmarks">Bookmarks</Link>
      <Link to="/petitions">Petitions</Link>
      <Link to="/settings">Settings</Link>
    </StyledFooterLinks>

    <StyleFooterForm className="footer__form">
      <label>Sign up to our Newsletter</label>
      <InputEmail />
      <InputSubmit />
    </StyleFooterForm>

    <StyledFooterMissions className="footer_missions">
      <h4>Our Mission</h4>
      <p>
        SAY THEIR NAME is a place to commemorate the death of our black kings
        and queens murdered by police brutality. SAY THEIR NAME makes it easy
        to donate, raise awareness, and sign petitions.
        <br />
        <br />
        Join the fight for justice and donate today.
      </p>
    </StyledFooterMissions>
  </StyledFooter>
);

export default Footer;
