import React from "react";
import { Link } from "react-router-dom";

import Container from "../../components/common/Container";
import {
  ContainerDiv,
  ImageCover,
  HomeButton,
  BoxContent,
  InnerContainer,
} from "./style";
import BLM from "../../assets/blm.svg";

const NotFound = () => (
  <Container>
    <ContainerDiv>
      <InnerContainer>
        <BoxContent>
          <span>
            404 <br />
            Page not found
          </span>
        </BoxContent>
        <p>
          Not all those who wander are lost, but it seems you may have taken a
          wrong turn.
        </p>
        <HomeButton>
          <Link to="/">
            <button type="button">BACK TO HOME</button>
          </Link>
        </HomeButton>
      </InnerContainer>
      <ImageCover src={BLM} alt="not found  svg" />
    </ContainerDiv>
  </Container>
);

export default NotFound;
