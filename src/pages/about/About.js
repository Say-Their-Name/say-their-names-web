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
      <p> Welcome to the Say Their Name Project. Our aim to build an open-source platform to raise awareness of the injustice and often forgotten names of racial inequality at the hands of law enforcement. We strive to identify and amplify verified organizations to ensure donations are reaching those who can make the most impact with it.</p>
    </StyledAboutContainer>

    <StyledAboutContainer className="AboutContainer">
      <h3> Request an Edit or removal</h3>
      <p>If you would like to propose an edit to a victim page or if you are a representative of the victim and would like the victim to be removed from this directory please send us an Email.</p>

    </StyledAboutContainer>

    <StyledAboutContainer className="AboutContainer">
      <h3> Join Us</h3>
      <p>
        Join our
        <a target="_blank" href="https://t.co/JvU3sgfoFu" rel="noopener noreferrer"> Slack Channel </a>
        to find out ways to get involved.
      </p>
    </StyledAboutContainer>
  </StyledAbout>
);
export default About;
