import styled from 'styled-components';

const StyledActionDetailsContent = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 450px) {
    width: 90%;
  }

  section {
    margin-top: 0;
  }
  .outcome-img {
    width: 100%;
    margin: 1rem 0;

    img {
      width: 100%;
    }
  }
  .content {
    p {
      margin: 0;
      text-align: justify;
    }
  }
`;

export default StyledActionDetailsContent;
