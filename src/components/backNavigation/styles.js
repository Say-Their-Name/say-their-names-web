import styled from "styled-components";
import Color from "../../constants/Color";

const BackProfile = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0.5rem 0;
  border-bottom: 1px solid ${Color.GREY};
  background-color: white;
  z-index: 999;
  transition: all 0.3s ease-in-out;

  a {
    margin: 0 1rem;
    color: ${Color.PRIMARY};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 400px) {
        margin: 0.4rem;
      }
    p {
      @media screen and (max-width: 400px) {
        font-size: 0.9rem;
      }
    }

    button {
      width: auto;

      @media screen and (max-width: 400px) {
        font-size: 0.7rem;
      }
    }
    i {
      margin-right: 0.5rem;
      
    }

    &:hover {
      opacity: 0.7;
    }
  }

  .donate {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-right: 1rem;

    p {
      margin: 0 0.5rem;
      @media screen and (max-width: 800px) {
        display: none;
      }
    }
  }
`;

export default BackProfile;
