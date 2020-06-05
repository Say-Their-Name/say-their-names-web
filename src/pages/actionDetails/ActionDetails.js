import React from 'react';

import Container from '../../components/common/Container';
import StyledActionDetails from './style';
import BackNavigation from '../../components/backNavigation/BackNavigation';
// import Share from '../../components/ui/share/Share';
// import HashTags from '../../components/ui/hashtags/HashTags';
import { Context } from '../../components/profileDetails/styles';

const ActionDetails = () => (
  <StyledActionDetails>
    <BackNavigation
      text="BACK TO DONATIONS"
      link="/donations"
      longText="Donate now to end Police brutality on minorities"
      linkText="DONATE"
      backLink="/"
    />
    <Container>
      {/* <Share url={window.location.href} title="#SayTheirNames" /> */}

      <div className="content">
        {/* <HashTags /> */}
        <Context>
          <h2>Outcome</h2>
          <p>skadasd</p>
        </Context>
      </div>
    </Container>
  </StyledActionDetails>
);

export default ActionDetails;
