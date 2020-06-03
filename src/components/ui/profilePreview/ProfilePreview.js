import React from "react";
import Container from "../../common/Container";
import styled from "styled-components";

// const imageContainer = styled.img`
// //todo
// `;
const StyledProfilePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  margin: 1rem;
  align-items: center;
  width: 30%;

  .image-container {
    display: flex;
    width: 100%;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-bottom: 1px solid grey;
  }

  .profile-preview-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    width: 100%;

    i {
      padding: 0 1rem;
    }
  }

  .profile-preview {
    display: flex;
    flex-direction: column;

    h3 {
      padding: 0 1rem;
      margin: 0;
      text-transform: uppercase;
    }
    p {
      padding: 0 1rem;
      margin: 0;
    }
  }
`;

const ProfilePreview = ({ fullName, dateOfIncident, image }) => {
  return (
    <StyledProfilePreview>
      <div className="image-container">
        <img src={image.image_url} alt={fullName} />
      </div>

      <div className="profile-preview-container">
        <div className="profile-preview">
          <h3>{fullName}</h3>
          <p>{dateOfIncident}</p>
        </div>

        <i className="far fa-bookmark" />
      </div>
    </StyledProfilePreview>
  );
};
export default ProfilePreview;
