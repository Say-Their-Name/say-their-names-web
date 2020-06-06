import React from "react";
import PropTypes from "prop-types";

import StyledActionDetailsHeader from "./style";
import Share from "../share/Share";
import { Button } from "../../profileDetails/styles";
// import HashTags from '../../components/ui/hashtags/HashTags';

const ActionDetailsHeader = ({ title, link, action }) => (
  <StyledActionDetailsHeader>
    <div className="banner">
      <img
        src="https://images.pexels.com/photos/163046/welcome-to-our-home-welcome-tablet-an-array-of-163046.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="banner"
      />
    </div>

    <h2>{title}</h2>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button>
        <button type="button">{action}</button>
      </Button>
    </a>

    <div className="share">
      <Share url={window.location.href} title="#SayTheirNames" />
    </div>
  </StyledActionDetailsHeader>
);

export default ActionDetailsHeader;

ActionDetailsHeader.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};
