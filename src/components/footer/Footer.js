import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../common/Container';
import Google from '../../assets/GooglePlaybadge.svg';
import Apple from '../../assets/AppStorebadge.svg';
import Twitter from '../../assets/twitter.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Variables from '../../constants/Variables';

import {
  StyledFooterContainer,
  StyledFooter,
  StyledFooterLinks,
  FooterContainer,
  StyledFooterMissions,
  DownloadLogo
} from './style';

const Footer = () => (
  <StyledFooterContainer>
    <Container>
      <FooterContainer>
        <StyledFooter width="10%">
          <h2>LINKS</h2>
          <StyledFooterLinks>
            <Link to="/">Home</Link>
            <Link to="/donations">Donations</Link>
            <Link to="/petitions">Petitions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms Of Service</Link>
          </StyledFooterLinks>
        </StyledFooter>
        <StyledFooter width="30%">
          <h2>Our Mission</h2>
          <StyledFooterMissions>
            <p>
              SAY THEIR NAMES is a place to commemorate the death of our black
              royalty who were victims of racial inequality. SAY THEIR NAMES
              makes it easy to donate, raise awareness, and sign petitions.
              <br />
              <br />
              Join the fight for justice and donate today.
            </p>
          </StyledFooterMissions>
        </StyledFooter>
        <StyledFooter width="25%">
          <h2>
            DOWNLOADS
            <span> (Coming shortly)</span>
          </h2>
          <p>
            Download the app
            <br />
            SAY THEIR NAMES app
          </p>
          <DownloadLogo>
            <a href={Variables.IOS_URL}>
              <img src={Google} alt="google-playstore" />
            </a>
            <a href={Variables.ANDROID_URL}>
              <img src={Apple} alt="apple-store" />
            </a>
          </DownloadLogo>
        </StyledFooter>
        <StyledFooter>
          <h2>JOIN US ON SOCIAL MEDIA</h2>
          <a
            style={{ marginTop: '1rem', textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
            href={Variables.TWITTER_URL}
          >
            <img src={Twitter} alt="twitter-handle" />
          </a>
          <a
            style={{ marginTop: '1rem', textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
            href={Variables.FACEBOOK_URL}
          >
            <img src={Facebook} alt="facebook-handle" />
          </a>
          <a
            style={{ marginTop: '1rem', textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
            href={Variables.INSTAGRAM_URL}
          >
            <img src={Instagram} alt="instagram-handle" />
          </a>
        </StyledFooter>
      </FooterContainer>
    </Container>
  </StyledFooterContainer>
);

export default Footer;
