import React from 'react';
import { StyledAbout, StyledAboutContainer, LinkStyle } from './style';
import { Button } from '../../components/profileDetails/styles';

const About = () => (
  <StyledAbout className="About">
    <StyledAboutContainer className="AboutContainer">
      <h2> About this project </h2>
      <hr />
      <p>
        Welcome to the
        Say Their Name Project
        Our aim is to build an open-source
        platform to raise awareness of the injustice and often forgotten names
        of racial inequality at the hands of law enforcement. We strive to
        identify and amplify verified organizations to ensure donations are
        reaching those who can make the most impact with it.
      </p>
    </StyledAboutContainer>
    <StyledAboutContainer className="AboutContainer">
      <h3>History on the Say Their Name Movement </h3>
      <p>
        The Say Their Name
        is a social movement to raise awareness
        for all the black victims of police brutality all around the world.
        This movement is in response to the Black Lives Matter movement and aims to highlight Individuals affected by anti-Black Violence.
        Say Their Name movement calls attention and demands justice for all victims.
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
            href="https://twitter.com/SayTheirName_io"
            rel="noopener noreferrer"
          >
            Twitter &nbsp;
          </a>
        </LinkStyle>
      </p>
    </StyledAboutContainer>

    <StyledAboutContainer className="AboutContainer">
      <h3> How do i get involved as a developer ?</h3>
      <Button>
        <a
          target="_blank"
          href="https://github.com/Say-Their-Name"
          rel="noopener noreferrer"
        >
          <button type="button" onClick="https://t.co/JvU3sgfoFu">
            JOIN OUR REPO
          </button>
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
          <button type="button">
            JOIN OUR SLACK CHANNELS
          </button>
        </a>
      </Button>
    </StyledAboutContainer>
    <hr />
    <StyledAboutContainer className="AboutContainer">
      <h3> A massive Thank you to everyone involved</h3>
      <h4> Designers</h4>
      <ul>
        <li> Designers 1</li>
        <li> Designers 2</li>
        <li> Designers 3</li>
        <li> Designers4</li>
      </ul>
      <h4> Developers</h4>
      <ul>
        <li> Developer 1</li>
        <li> Developer 2</li>
        <li> Developer 3</li>
        <li> Developer 4</li>
      </ul>
    </StyledAboutContainer>
  </StyledAbout>
);
export default About;
