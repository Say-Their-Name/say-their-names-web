import React from 'react';
import PropTypes from 'prop-types';

import StyledHashTags from './style';

const HashTags = ({ hashtags }) => (
  <StyledHashTags>
    <h2>Social Media Hashtags</h2>
    {hashtags.map((hashtag) => (
      <a
        key={hashtag.link}
        href={hashtag.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>{hashtag.title}</p>
      </a>
    ))}
  </StyledHashTags>
);

export default HashTags;

HashTags.propTypes = {
  hashtags: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
