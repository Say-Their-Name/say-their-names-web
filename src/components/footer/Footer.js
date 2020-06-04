import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import config from '../../utils/config';
import Container from '../common/Container';
import {
  StyledFooterContainer,
  StyledFooter,
  StyledFooterLinks,
  StyledFooterMissions,
  StyleFooterForm
} from './style';

const { apiBaseUrl } = config;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [savedEmailResponse, setSavedEmailResponse] = useState();

  const onSaveNewsLetterHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiBaseUrl}/join/newsletter`, {
        email
      });
      setSavedEmailResponse('Subscribed successfully');
    } catch (error) {
      setSavedEmailResponse('Unable to subscribe, please try again');
    }
  };

  return (
    <StyledFooterContainer>
      <Container>
        <StyledFooter className="footer">
          <StyledFooterLinks className="footer__links">
            <Link to="/">Home</Link>
            <Link to="/donation">Donation</Link>
            <Link to="/bookmarks">Bookmarks</Link>
            <Link to="/petitions">Petitions</Link>
          </StyledFooterLinks>
          <StyleFooterForm
            style={{ display: 'none' }}
            onSubmit={onSaveNewsLetterHandler}
            className="footer__form"
          >
            <h4>Sign up to our Newsletter</h4>

            <div className="form-container">
              <input
                placeholder="Email Address"
                required
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Submit</button>
            </div>
            <span>{savedEmailResponse && savedEmailResponse}</span>
          </StyleFooterForm>

          <StyledFooterMissions className="footer_missions">
            <h4>Our Mission</h4>
            <p>
              SAY THEIR NAME is a place to commemorate the death of our black
              kings and queens murdered by police brutality. SAY THEIR NAME
              makes it easy to donate, raise awareness, and sign petitions.
              <br />
              <br />
              Join the fight for justice and donate today.
            </p>
          </StyledFooterMissions>
        </StyledFooter>
      </Container>
    </StyledFooterContainer>
  );
};

export default Footer;
