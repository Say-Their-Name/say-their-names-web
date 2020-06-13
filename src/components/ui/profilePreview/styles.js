import styled from 'styled-components';
import Color from '../../../constants/Color';

const StyledProfilePreviewContainer = styled.div`
  width: 23%;
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  @media (max-width: 1100px) {
    width: 30%;
  }

  @media (max-width: 850px) {
    width: 45%;
  }

  @media (max-width: 600px) {
    justify-content: center;
    width: 75%;
  }
`;

const StyledProfilePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  align-items: center;
  width: 100%;
  color: ${Color.PRIMARY};
  .image-container {
    display: flex;
    width: 250px;

    @media (max-width: 850px) {
      width: 300px;
    }

    @media (max-width: 700px) {
      width: 250px;
    }

    @media (max-width: 600px) {
      width: 350px;
    }

    @media (max-width: 500px) {
      width: 400px;
    }

    @media (max-width: 450px) {
      width: 350px;
    }

    @media (max-width: 370px) {
      width: 300px;
    }
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
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
      margin: 0;
      text-transform: uppercase;
    }
    p {
      margin: 0;
      color: rgba(16, 16, 16, 0.58);
    }
  }
`;

export { StyledProfilePreviewContainer, StyledProfilePreview };
