import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import Share from "./share/Share";
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
  Button,
  H2,
  Context,
} from "./styles";

const PersonProfile = (props) => {
  const { info } = props;
  const {
    images,
    full_name,
    age,
    number_of_children,
    city,
    context,
    identifier,
  } = info;

  return (
    <Profile>
      <PersonalInformation>
        <Photo>
          <img src={images[0].image_url} alt={full_name} />
        </Photo>
        <PersonSection>
          <Name>
            <H4>FULL NAME</H4>
            <div>
              <H2>{full_name}</H2>
            </div>
          </Name>
          <Div>
            <Age>
              <H4>AGE</H4>
              <H2>{age}</H2>
            </Age>
            <Children>
              <H4>CHILDREN</H4>
              <H2>{number_of_children && number_of_children}</H2>
            </Children>
          </Div>
          <Location>
            <H4>LOCATION</H4>
            <H2>{city}</H2>
          </Location>
          <Link to={`/donations/${identifier}`}>
            <Button>
              <button type="button">DONATE</button>
            </Button>
          </Link>
          <Share url={window.location.href} title="#SayTheirNames" />
        </PersonSection>
      </PersonalInformation>
      <Context>
        <h2>Context</h2>
        <p>{context}</p>
      </Context>
    </Profile>
  );
};

export default withRouter(PersonProfile);

PersonProfile.defaultProps = {
  info: PropTypes.shape({
    number_of_children: "0",
  }),
};

PersonProfile.propTypes = {
  info: PropTypes.shape({
    images: PropTypes.array.isRequired,
    full_name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    number_of_children: PropTypes.string,
    id: PropTypes.number.isRequired,
    identifier: PropTypes.string.isRequired,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
