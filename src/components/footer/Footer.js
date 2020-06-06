import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../common/Container';
import Geogle from '../../assets/GooglePlaybadge.svg';
import Apple from '../../assets/AppStorebadge.svg';
import Twitter from '../../assets/twitter.svg';
import Variables from '../../constants/Variables';

import {
  StyledFooterContainer,
  StyledFooter,
  StyledFooterLinks,
  FooterContainer,
  StyledFooterMissions,
  DowloadLogo
} from './style';

const Footer = () => (
  <StyledFooterContainer>
    <Container>
      <FooterContainer>
        <StyledFooter width="10%">
          <h2>LINKS</h2>
          <StyledFooterLinks>
            <Link to="/">Home</Link>
            <Link to="/donation">Donation</Link>
            <Link to="/bookmarks">Bookmarks</Link>
            <Link to="/petitions">Petitions</Link>
          </StyledFooterLinks>
        </StyledFooter>
        <StyledFooter width="30%">
          <h2>Our Mission</h2>
          <StyledFooterMissions>
            <p>
              SAY THEIR NAMES is a place to commemorate the death of our black
              kings and queens murdered by police brutality. SAY THEIR NAME
              makes it easy to donate, raise awareness, and sign petitions.
              <br />
              <br />
              Join the fight for justice and donate today.
            </p>
          </StyledFooterMissions>
        </StyledFooter>
        <StyledFooter width="25%">
          <h2>DOWNLOADS</h2>
          <p>
            Download the app
            <br />
            SAY THEIR NAMES app
          </p>
          <DowloadLogo>
            <a href={Variables.IOS_URL}>
              <img src={Geogle} alt="google-playstore" />
            </a>
            <a href={Variables.ANDROID_URL}>
              <img src={Apple} alt="apple-store" />
            </a>
          </DowloadLogo>
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
        </StyledFooter>
      </FooterContainer>
    </Container>
  </StyledFooterContainer>
);

export default Footer;
