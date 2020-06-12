import React from 'react';
import PropTypes from 'prop-types';

import News from '../news/News';
import StyledNewsList from './styles';


const NewsList = ({ newsList }) => (
  <StyledNewsList>
    <h2>News</h2>

    {newsList.map((news) => (
      <News key={news.url} news={news} />
    ))}
  </StyledNewsList>
);

export default NewsList;

NewsList.propTypes = {
  newsList: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired
    })
  ).isRequired
};
