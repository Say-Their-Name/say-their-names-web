import React from 'react';

import Seo from '../components/common/Seo';
import TermsOfServiceComponent from '../components/termsOfService/TermsOfService';

const TermsOfService = () => (
  <>
    <Seo
      title="Terms Of Service"
      description="Terms Of Service for Say their Names"
      image="https://say-their-names.fra1.cdn.digitaloceanspaces.com/assets/cover.png"
    />

    <TermsOfServiceComponent />
  </>
);
export default TermsOfService;
