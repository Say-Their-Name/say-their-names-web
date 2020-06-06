import React from 'react';
import PropTypes from 'prop-types';

import HashTags from '../hashtags/HashTags';
import StyledActionDetailsContent from './style';
import { Context } from '../../profileDetails/styles';

const ActionDetailsContent = ({
  description,
  outcome,
  outcomeImageUrl,
  hashTags
}) => (
  <StyledActionDetailsContent>
    <div className="content">
      <Context>
        <h2>DESCRIPTION</h2>
        <p>{description}</p>
      </Context>

      <div className="outcome-img">
        <img src={outcomeImageUrl} alt="Outcome" />
      </div>

      <Context>
        <h2>Outcome</h2>
        <p>{outcome}</p>
      </Context>
    </div>
    <HashTags hashtags={hashTags} />
  </StyledActionDetailsContent>
);

export default ActionDetailsContent;

ActionDetailsContent.propTypes = {
  description: PropTypes.string.isRequired,
  outcome: PropTypes.string.isRequired,
  outcomeImageUrl: PropTypes.string.isRequired,
  hashTags: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
