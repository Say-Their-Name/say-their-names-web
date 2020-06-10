import styled from 'styled-components';

const StyledGetInvolved = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
  }

  .image-container {
    width: 45%;

    @media (max-width: 900px) {
      width: 55%;
    }

    @media (max-width: 650px) {
      width: 90%;
    }

    @media (max-width: 550px) {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }

  .details {
    width: 35%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 2rem;

    @media (max-width: 650px) {
      width: 80%;
      justify-content: center;
      text-align: center;
      margin-left: 0;
    }

    @media (max-width: 550px) {
      width: 90%;
    }

    h1 {
      font-size: 4rem;

      @media (max-width: 950px) {
        font-size: 3rem;
      }
    }
  }
`;

export default StyledGetInvolved;
