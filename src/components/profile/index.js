import React from 'react';
import PropTypes from 'prop-types';

import {
  Profile, PersonalInformation, Photo, PersonSection, Name, H4, Div, Age
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
              <h2>{fullname}</h2>
              <i>Icon</i>
            </div>
          </Name>
          <Div>
            <Age>
              <H4>Age</H4>
              <h2>{age}</h2>
            </Age>
            <div>
              <H4>Children</H4>
              <h2>{children && children}</h2>
            </div>
          </Div>
          <div>
            <H4>LOCATION</H4>
            <h2>{location}</h2>
          </div>
          {/* <button>DONATE</button>
                    <section>
                        <p>Share on:</p>
                        <h3>Twitter</h3>
                        <h3>Facebook</h3>
                        <h3>Whatsapp</h3>
                    </section> */}
        </PersonSection>
      </PersonalInformation>
      <div>
        <h2>Context</h2>
        <p>{context}</p>
      </div>
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
