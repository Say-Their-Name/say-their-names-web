import React, { useState } from 'react';
import { ReactTinyLink } from 'react-tiny-link';
import PropTypes from 'prop-types';
import StyledMedia from './styles';

const Media = ({ media }) => {
  const [display, setDisplay] = useState('none');
  return (
    <StyledMedia style={{ display }}>
      <ReactTinyLink
        cardSize="large"
        showGraphic
        maxLine={2}
        minLine={1}
        url={media.url}
        loadSecureUrl
        onSuccess={() => setDisplay('block')}
        onError={() => setDisplay('none')}
      />
    </StyledMedia>
  );
};

Media.propTypes = {
  media: PropTypes.shape({
    url: PropTypes.string
  }).isRequired
};
export default Media;
