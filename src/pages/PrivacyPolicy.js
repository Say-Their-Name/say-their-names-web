import React from 'react';

import Seo from '../components/common/Seo';
import PrivacyPolicyComponent from '../components/privacyPolicy/PrivacyPolicy';

const PrivacyPolicy = () => (
  <>
    <Seo
      title="Privacy Policy"
      description="Privacy Policy for Say Their Names"
      image="https://saytheirnames.dev/images/assets/placeholder.png"
    />

    <PrivacyPolicyComponent />
  </>
);
export default PrivacyPolicy;
