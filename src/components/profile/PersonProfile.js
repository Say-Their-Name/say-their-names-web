import React from "react";
import PropTypes from "prop-types";

import {
  Profile,
  PersonalInformation,
  Photo,
  PersonSection,
  Name,
  H4,
  Div,
  Age,
  Children,
  Location,
  ShareSection,
  Button,
  H2,
  Share,
  Context,
} from "./styles";

const PersonProfile = ({ info }) => {
  const { images, full_name, age, number_of_children, city, context } = info;
  return (
    <Profile>
      <PersonalInformation>
        <Photo>
          <img src={images[0].image_url} alt="profile" />
        </Photo>
        <PersonSection>
          <Name>
            <H4>FULL NAME</H4>
            <div>
              <H2>{full_name}</H2>
              <i className="far fa-bookmark" />
            </div>
          </Name>
          <Div>
            <Age>
              <H4>Age</H4>
              <H2>{age}</H2>
            </Age>
            <Children>
              <H4>Children</H4>
              <H2>{number_of_children && number_of_children}</H2>
            </Children>
          </Div>
          <Location>
            <H4>LOCATION</H4>
            <H2>{city}</H2>
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
};

export default PersonProfile;

PersonProfile.propTypes = {
  info: PropTypes.shape({
    images: PropTypes.array.isRequired,
    full_name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    number_of_children: PropTypes.string.isRequired,
  }).isRequired,
};
