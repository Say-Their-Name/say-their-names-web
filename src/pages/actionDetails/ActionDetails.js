import React from "react";

import StyledActionDetails from './style'
import BackNavigation from "../../components/backNavigation/BackNavigation";

const ActionDetails = () => {
  return (
    <StyledActionDetails>
      <BackNavigation
        text="BACK TO DONATIONS"
        link="/donations"
        longText="Donate now to end Police brutality on minorities"
        linkText="DONATE"
        backLink="/"
      />
    </StyledActionDetails>
  );
};

export default ActionDetails;
