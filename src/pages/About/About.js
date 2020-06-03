
import React from 'react';
import {
  StyledAbout,
  StyledAboutContainer
} from './style';

const About = () => (


  <StyledAbout className="About">

    <StyledAboutContainer className="AboutContainer">
      <h2> About this project </h2>
      <hr />

      <h3> Overview </h3>
      <p> Welcome to the Say Their Name Project. Our aim to build an open-source platform to raise awareness of the injustice and often forgotten names of racial inequality at the hands of law enforcement. We strive to identify and amplify verified organizations to ensure donations are reaching those who can make the most impact with it. </p>
    </StyledAboutContainer>

    <StyledAboutContainer className="AboutContainer">
      <h3> Placeholder 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

    </StyledAboutContainer>

    <StyledAboutContainer className="AboutContainer">
      <h3> Placeholder 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

    </StyledAboutContainer>

    <StyledAboutContainer className="AboutContainer">
      <h3> Join Us</h3>

      <p>
        Join our
        <a target="_blank" href="https://t.co/JvU3sgfoFu" rel="noopener noreferrer"> Slack Channel </a>
        to find out ways on how to get involved.
      </p>
    </StyledAboutContainer>
  </StyledAbout>
);
export default About;
