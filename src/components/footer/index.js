import React from 'react';
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
      <a href="/">Home</a>
      <a href="/donation">Donation</a>
      <a href="/bookmarks">Bookmarks</a>
      <a href="/petitions">Petitions</a>
      <a href="/settings">Settings</a>
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
        and queens murdered by police brutality.SAY THEIR NAME makes it easy
        to donate. raise awareness and sign petitions.
        <br />
        <br />
        Join the fight for justice and donate today.
      </p>
    </StyledFooterMissions>
  </StyledFooter>
);

export default Footer;
