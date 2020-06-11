import React from 'react';
import PropTypes from 'prop-types';

import PersonPreview from '../profilePreview/ProfilePreview';
import { StyledProfileList, H2 } from './styles';
import Container from '../../common/Container';

const ProfileList = ({ profiles, currentPage }) => (
  <Container>
    {profiles.length === 0 && (
    <H2 className="not-found">No profiles found</H2>
    )}
    <StyledProfileList>
      {profiles.length > 0
          && profiles.map((profile) => (
            <PersonPreview
              key={profile.id}
              id={profile.identifier}
              image={profile.images[0]}
              fullName={profile.full_name}
              dateOfIncident={profile.date_of_incident}
              currentPage={currentPage}
            />
          ))}
    </StyledProfileList>
  </Container>
);

export default ProfileList;

ProfileList.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      images: PropTypes.array.isRequired,
      full_name: PropTypes.string.isRequired,
      date_of_incident: PropTypes.string.isRequired
    })
  ).isRequired,
  currentPage: PropTypes.number.isRequired
};
