import styled from 'styled-components';
import Color from '../../../constants/Color';
import BlackLivesMatterBanner from '../../../assets/black-lives-matter-banner.png';

const StyledGetInvolved = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
    }

  .image-container {
    background-image: url(${BlackLivesMatterBanner});
    width: 45%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 400px;

    @media (max-width: 1300px) {
      width: 50%;
    }

    @media (max-width: 1000px) {
      width: 55%;
    }

    @media (max-width: 800px) {
      width: 95%;
    }

    @media (max-width: 500px) {
      width: 100%;
    }

    .image-text-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      height: 100%;
      color: ${Color.WHITE};

      .image-text {
        padding: 1rem;
      }

      h3 {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0.2rem 0;
        padding: 0.2rem 0;
        font-family: "Karla", sans-serif;
      }

      h4 {
        margin: 0.2rem 0;
        padding: 0.2rem 0;
        font-family: "Karla", sans-serif;
        font-size: 1rem;
        font-weight: 100;
      }
    }
  }

  .details {
    width: 40%;

    @media (max-width: 1300px) {
      width: 45%;
    }

    @media (max-width: 1000px) {
      width: 30%;
    }

    @media (max-width: 800px) {
      width: 95%;
    }

    @media (max-width: 500px) {
      width: 100%;
    }

    h1 {
      font-size: 6rem;
      text-align: center;

      @media (max-width: 1200px) {
        font-size: 4rem;
      }

      @media (max-width: 1000px) {
        font-size: 3.5rem;
      }
    }
  }
`;

export default StyledGetInvolved;
