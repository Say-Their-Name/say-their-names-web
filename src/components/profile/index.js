import React from 'react';
import PropTypes from 'prop-types';

import {
  Profile, PersonalInformation, Photo, PersonSection, Name, H4, Div, Age, Location, ShareSection, Button, H2, Share, Context
} from './styles';

export default function index({ info }) {
  const {
    image, fullname, age, children, location, context
  } = info;
  return (
    <Profile>
      <PersonalInformation>
        <Photo>
          <img src={image} alt="profile" />
        </Photo>
        <PersonSection>
          <Name>
            <H4>FULL NAME</H4>
            <div>
              <H2>{fullname}</H2>
              <i className="far fa-bookmark" />
            </div>
          </Name>
          <Div>
            <Age>
              <H4>Age</H4>
              <H2>{age}</H2>
            </Age>
            <div style={{ padding: '0px 10px' }}>
              <H4>Children</H4>
              <H2>{children && children}</H2>
            </div>
          </Div>
          <Location>
            <H4>LOCATION</H4>
            <H2>{location}</H2>
          </Location>
          <Button>
            <button type="button">DONATE</button>
          </Button>
          <Share>
            <p>Share on:</p>
            <ShareSection>
              <p>Twitter</p>
              <p>Facebook</p>
              <p>Whatsapp</p>
            </ShareSection>
          </Share>
        </PersonSection>
      </PersonalInformation>
      <Context>
        <h2>Context</h2>
        <p>{context}</p>
      </Context>
    </Profile>
  );
}

index.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    children: PropTypes.number
  }).isRequired
};
