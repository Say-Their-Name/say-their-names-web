import styled from 'styled-components';

const StyledActionDetailsHeader = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  align-items: center;
  .banner {
    width: 80%;

    @media (max-width: 900px) {
      width: 90%;
    }

    @media (max-width: 550px) {
      width: 100%;
    }
    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      @media (max-width: 700px) {
        height: auto;
      }
    }
  }

  .share {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 1rem;

    @media (max-width: 700px) {
      width: 70%;
    }

    @media (max-width: 600px) {
      width: 80%;
    }

    @media (max-width: 500px) {
      width: 90%;
    }

    @media (max-width: 450px) {
      width: 100%;
    }

    h3 {
      text-align: center;
    }

    div {
      width: 100%;
    }
  }
`;

export default StyledActionDetailsHeader;
