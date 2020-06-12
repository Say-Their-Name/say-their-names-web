import React, { useState } from 'react';
import { ReactTinyLink } from 'react-tiny-link';
import PropTypes from 'prop-types';
import StyledNews from './styles';

const News = ({ news }) => {
  const [display, setDisplay] = useState('block');

  return (
    <>
      {news.url && (
        <StyledNews style={{ display }}>
          <ReactTinyLink
            cardSize="large"
            showGraphic
            maxLine={2}
            minLine={1}
            url={news.url}
            loadSecureUrl
            onSuccess={() => setDisplay('block')}
            onError={() => setDisplay('none')}
          />
        </StyledNews>
      )}
    </>
  );
};

News.propTypes = {
  news: PropTypes.shape({
    url: PropTypes.string
  }).isRequired
};
export default News;
