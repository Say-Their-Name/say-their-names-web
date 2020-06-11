import React from 'react';

import Seo from '../components/common/Seo';
import PrivacyPolicyComponent from '../components/privacyPolicy/PrivacyPolicy';

const PrivacyPolicy = () => (
  <>
    <Seo
      title="Privacy Policy"
      description="Privacy Policy for Say Their Names"
      image="https://say-their-names.fra1.cdn.digitaloceanspaces.com/assets/cover.png"
    />

    <PrivacyPolicyComponent />
  </>
);
export default PrivacyPolicy;
