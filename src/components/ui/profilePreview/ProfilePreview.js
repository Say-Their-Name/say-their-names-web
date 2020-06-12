import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledProfilePreviewContainer, StyledProfilePreview } from './styles';

const ProfilePreview = ({
  id,
  fullName,
  dateOfIncident,
  image,
  currentPage
}) => (
  <StyledProfilePreviewContainer>
    <Link
      to={{
        pathname: `/profile/${id}`,
        state: { oldCurrentPage: currentPage }
      }}
    >
      <StyledProfilePreview>
        <div className="image-container">
          <img
            src={
                image
                  ? image.image_url
                  : 'https://say-their-names.fra1.cdn.digitaloceanspaces.com/assets/cover.png'
              }
            alt={fullName}
          />
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
  dateOfIncident: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired
};
