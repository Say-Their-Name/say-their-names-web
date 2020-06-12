import React from 'react';
import PropTypes from 'prop-types';

import StyledActionDetailsHeader from './style';
import Share from '../share/Share';
import { Button } from '../../profileDetails/styles';

const ActionDetailsHeader = ({
  title, link, action, bannerImageUrl, socialCopy
}) => (
  <StyledActionDetailsHeader>
    <div className="banner">
      <img src={bannerImageUrl} alt="banner" />
    </div>

    <h2>{title}</h2>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button>
        <button type="button">{action}</button>
      </Button>
    </a>

    <div className="share">
      <Share socialCopy={socialCopy} url={window.location.href} title="#SayTheirNames" />
    </div>
  </StyledActionDetailsHeader>
);

export default ActionDetailsHeader;

ActionDetailsHeader.propTypes = {
  socialCopy: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  bannerImageUrl: PropTypes.string.isRequired
};
