import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledProfilePreviewContainer, StyledProfilePreview } from './styles';


const ProfilePreview = ({
  id, fullName, dateOfIncident, image
}) => (
  <StyledProfilePreviewContainer>
    <Link to={`/profile/${id}`}>
      <StyledProfilePreview>
        <div className="image-container">
          <img src={image.image_url} alt={fullName} />
        </div>

        <div className="profile-preview-container">
          <div className="profile-preview">
            <h3>{fullName}</h3>
            <p>{dateOfIncident}</p>
          </div>

        </div>
      </StyledProfilePreview>
    </Link>
  </StyledProfilePreviewContainer>
);

export default ProfilePreview;

ProfilePreview.propTypes = {
  id: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  image: PropTypes.shape({
    image_url: PropTypes.string.isRequired
  }).isRequired,
  dateOfIncident: PropTypes.string.isRequired
};
