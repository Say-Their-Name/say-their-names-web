import React from 'react';
import PropTypes from 'prop-types';

import StyledActionDetailsContent from './style';
import { Context } from '../../profileDetails/styles';

const ActionDetailsContent = ({ description, outcome }) => (
  <StyledActionDetailsContent>
    <div className="content">
      {/* <HashTags /> */}
      <Context>
        <h2>DESCRIPTION</h2>
        <p>{description}</p>
      </Context>

      <div className="outcome-img">
        <img
          // src="https://images.pexels.com/photos/163046/welcome-to-our-home-welcome-tablet-an-array-of-163046.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Outcome"
        />
      </div>

      <Context>
        <h2>Outcome</h2>
        <p>{outcome}</p>
      </Context>
    </div>
  </StyledActionDetailsContent>
);

export default ActionDetailsContent;

ActionDetailsContent.propTypes = {
  description: PropTypes.string.isRequired,
  outcome: PropTypes.string.isRequired
};
