import React from 'react';

import Container from '../common/Container';
import {
  StyledAbout,
  StyledAboutContainer,
  LinkStyle,
  StyledAboutBanner,
  StyledLinkContainer
} from './styles';
import { Button } from '../profileDetails/styles';
import aboutbanner from '../../assets/aboutbanner.svg';
import Variables from '../../constants/Variables';

const About = () => (
  <Container>
    <StyledAbout className="About">
      <StyledAboutBanner className="image-container hover">
        <a
          target="_blank"
          href="https://twitter.com/SayTheirName_io"
          rel="noopener noreferrer"
        >
          <img src={aboutbanner} alt="Black Lives Matter" />
        </a>
      </StyledAboutBanner>

      <StyledAboutContainer className="AboutContainer">
        <h2> About this project </h2>
        <p>
          Welcome to the Say Their Names Project. Our aim is to build an
          open-source platform to raise awareness of the injustice and often
          forgotten names of racial inequality. We strive to identify and
          amplify verified organizations to ensure donations are reaching
          those who can make the most impact with it.
        </p>
      </StyledAboutContainer>
      <StyledAboutContainer className="AboutContainer">
        <h3>History on the Say Their Names Movement </h3>
        <p>
          Say Their Names is a social movement to raise awareness for all
          the black victims of racial inequality all around the world. This
          movement is in support of the overall Black Lives Matter movement and aims to
          highlight individuals affected by anti-Black Violence. Say Their Names
          movement calls attention and demands justice for all victims.
        </p>
      </StyledAboutContainer>
      <StyledAboutContainer className="AboutContainer">
        <h3> Request an Edit or removal</h3>
        <p>
          If you would like to propose an edit to a victim page or if you are a
          representative of the victim and would like the victim to be removed
          from this directory please send us a message on &nbsp;
          <LinkStyle>
            <a
              target="_blank"
              href={Variables.TWITTER_URL}
              rel="noopener noreferrer"
            >
              Twitter.
            </a>
          </LinkStyle>
        </p>
      </StyledAboutContainer>

      <StyledLinkContainer>
        <StyledAboutContainer className="AboutContainer">
          <h3> DID WE MISS SOMEONE?</h3>
          <Button>
            <a
              target="_blank"
              href="https://airtable.com/shr6Da28410B2Muy3"
              rel="noopener noreferrer"
            >
              <button type="button">Request to Add a Name</button>
            </a>
          </Button>
        </StyledAboutContainer>

        <StyledAboutContainer className="AboutContainer">
          <h3> How do i get involved as a designer ?</h3>
          <Button>
            <a
              target="_blank"
              href="https://t.co/JvU3sgfoFu"
              rel="noopener noreferrer"
            >
              <button type="button">JOIN OUR SLACK CHANNELS</button>
            </a>
          </Button>
        </StyledAboutContainer>

        <StyledAboutContainer className="AboutContainer">
          <h3> How do i get involved as a developer ?</h3>
          <Button>
            <a
              target="_blank"
              href="https://github.com/Say-Their-Name"
              rel="noopener noreferrer"
            >
              <button type="button">JOIN OUR REPO</button>
            </a>
          </Button>
        </StyledAboutContainer>

        <StyledAboutContainer className="AboutContainer">
          <h3> Join us on Twitter</h3>
          <Button>
            <a
              target="_blank"
              href="https://twitter.com/SayTheirName_io"
              rel="noopener noreferrer"
            >
              <button type="button">FOLLOW US</button>
            </a>
          </Button>
        </StyledAboutContainer>
      </StyledLinkContainer>
    </StyledAbout>
  </Container>
);
export default About;
