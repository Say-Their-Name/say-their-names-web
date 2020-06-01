import React from "react";
import styled from "styled-components";

import BlackLivesMatterBanner from "../../assets/black-lives-matter-banner.png";
import Container from "../Container";
import Color from "../../constants/Color";

const StyledGetInvolved = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  .image-container {
    background-image: url(${BlackLivesMatterBanner});
    width: 45%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 450px;

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

    h1 {
      font-size: 6rem;
      text-align: center;
    }
  }
`;

const GetInvolved = () => {
  return (
    <Container>
      <StyledGetInvolved>
        <div className="image-container">
          <div className="image-text-container">
            <div className="image-text">
              <h3>#BLACKLIVESMATTER</h3>
              <h3>How to get involved</h3>
            </div>
          </div>
        </div>

        <div className="details">
          <h1>Delayed justice is injustice</h1>
        </div>
      </StyledGetInvolved>
    </Container>
  );
};

export default GetInvolved;
