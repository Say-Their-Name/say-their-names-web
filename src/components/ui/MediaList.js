import React from "react";
import styled from "styled-components";
import Media from "./Media";
import Container from "../Container";

const StyledMediaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;

  h2 {
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    width: 100%;
    margin: 1rem 0 0 4rem;
    text-transform: uppercase;
  }
`;

const mockData = [
  {
    id: "1",
    url:
      "https://www.theguardian.com/us-news/2020/jun/01/donald-trump-protests-george-floyd-dominate",
  },
  {
    id: "2",
    url: "https://www.nytimes.com/2020/06/01/us/floyd-protests-live.html",
  },
  {
    id: "3",
    url: "https://www.bbc.com/news/world-us-canada-52885964",
  },
  {
    id: "4",
    url:
      "https://edition.cnn.com/videos/world/2020/06/01/global-reaction-to-george-floyd-protests-intl-hnk-vpx.cnn",
  },
];

const MediaList = () => {
  return (
    <Container>
      <StyledMediaList>
        <h2>Media</h2>

        {mockData.map((media) => (
          <Media key={media.id} media={media} />
        ))}
      </StyledMediaList>
    </Container>
  );
};

export default MediaList;
