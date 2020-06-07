import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import Share from '../ui/share/Share';
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
  Context
} from './styles';

const PersonProfile = (props) => {
  const { info, donation } = props;
  const {
    images,
    full_name,
    age,
    number_of_children,
    city,
    their_story,
    outcome,
    country,
    donation_links
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
            <H2>{`${city}, ${country}`}</H2>
          </Location>
          {donation_links.length > 0 && (
            <Link to={`/donate/${donation.identifier}`}>
              <Button>
                <button type="button">DONATE</button>
              </Button>
            </Link>
          )}
          <Share url={window.location.href} title="#SayTheirNames" />
        </PersonSection>
      </PersonalInformation>
      <Context>
        <h2>THEIR STORY</h2>
        <p>{their_story}</p>
      </Context>

      {outcome && (
        <Context>
          <h2>Context</h2>
          <p>{outcome}</p>
        </Context>
      )}
    </Profile>
  );
};

export default withRouter(PersonProfile);

PersonProfile.defaultProps = {
  info: PropTypes.shape({
    number_of_children: '0',
    outcome: null
  })
};

PersonProfile.defaultProps = {
  donation: {
    identifier: ''
  }
};

PersonProfile.propTypes = {
  info: PropTypes.shape({
    images: PropTypes.array.isRequired,
    full_name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    number_of_children: PropTypes.string,
    id: PropTypes.number.isRequired,
    identifier: PropTypes.string.isRequired,
    their_story: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    outcome: PropTypes.string,
    donation_links: PropTypes.array.isRequired
  }),
  donation: PropTypes.shape({
    identifier: PropTypes.string
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
