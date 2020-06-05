import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ActionDetailsHeader from '../components/ui/actionDetailsHeader/ActionDetailsHeader';
import BackNavigation from '../components/backNavigation/BackNavigation';
import ActionDetailsContent from '../components/ui/actionDetailsContent/ActionDetailsContent';
import config from '../utils/config';

const { apiBaseUrl } = config;

const DonationDetail = () => {
  const [donationDetails, setDonationDetails] = useState([]); // this will hold the profles list fetched from the API
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/people`);
        console.log(response);
        console.log(donationDetails, loading);
        setDonationDetails(response.data.data);
        window.scrollTo(0, 0);
      } catch (error) {
        // set error and show error page
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, []);
  return (
    <div>
      <BackNavigation
        text="BACK TO DONATIONS"
        link="/donations"
        longText="Donate now to end Police brutality on minorities"
        linkText="DONATE"
        backLink="/donations"
      />
      <ActionDetailsHeader />
      <ActionDetailsContent />
    </div>
  );
};

export default DonationDetail;
