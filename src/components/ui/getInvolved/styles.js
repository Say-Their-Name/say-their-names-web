import styled from 'styled-components';

const StyledGetInvolved = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    justify-content: space-between;
  }

  @media (max-width: 800px) {
    justify-content: center;
  }

  .image-container {
    width: 45%;

    @media (max-width: 1000px) {
      width: 50%;
    }
    @media (max-width: 800px) {
      width: 80%;
    }

    @media (max-width: 650px) {
      width: 95%;
    }

    @media (max-width: 500px) {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }

  .details {
    width: 45%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 3rem;

    @media (max-width: 1000px) {
      margin-left: 0;
    }

    @media (max-width: 800px) {
      width: 80%;
      justify-content: center;
      text-align: center;
    }

    @media (max-width: 650px) {
      width: 95%;
    }

    @media (max-width: 500px) {
      width: 100%;
    }

    h1 {
      font-size: 4rem;
      text-align: center;

      @media (max-width: 1200px) {
        font-size: 3rem;
      }
    }
  }
`;

export default StyledGetInvolved;
