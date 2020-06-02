import React from 'react';
import Media from '../Media/Media';
import Container from '../../Container';
import StyledMediaList from './styles';

const mockData = [
  {
    id: '1',
    url:
      'https://www.theguardian.com/us-news/2020/jun/01/donald-trump-protests-george-floyd-dominate'
  },
  {
    id: '2',
    url: 'https://www.nytimes.com/2020/06/01/us/floyd-protests-live.html'
  },
  {
    id: '3',
    url: 'https://www.bbc.com/news/world-us-canada-52885964'
  },
  {
    id: '4',
    url:
      'https://edition.cnn.com/videos/world/2020/06/01/global-reaction-to-george-floyd-protests-intl-hnk-vpx.cnn'
  }
];

const MediaList = () => (
  <Container>
    <StyledMediaList>
      <h2>Media</h2>

      {mockData.map((media) => (
        <Media key={media.id} media={media} />
      ))}
    </StyledMediaList>
  </Container>
);

export default MediaList;
