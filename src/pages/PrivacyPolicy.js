import React from 'react';

import Seo from '../components/common/Seo';
import PrivacyPolicyComponent from '../components/privacyPolicy/PrivacyPolicy';

const PrivacyPolicy = () => (
  <>
    <Seo
      title="About"
      description="Our aim is to build an open-source platform to raise awareness of the injustice and often forgotten names of racial inequality at the hands of law enforcement."
      image="https://say-their-names.fra1.cdn.digitaloceanspaces.com/assets/cover.png"
    />

    <PrivacyPolicyComponent />
  </>
);
export default PrivacyPolicy;
