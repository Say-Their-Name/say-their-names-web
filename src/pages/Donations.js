import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Petition from '../components/ui/petition/Petition';
import { Wrapper } from '../components/ui/petition/styles';
import config from '../utils/config';

const { apiBaseUrl } = config;

const Donations = () => {
  const [donations, setDonations] = useState([]);

  const fetchDonations = async () => {
    const res = await axios.get(`${apiBaseUrl}/donations`);
    setDonations(res.data.data);
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <Wrapper>
      <h1>DONATIONS</h1>
      {donations.map((donation) => (
        <Petition
          key={donation.id}
          title={donation.title}
          description={donation.description}
          link={donation.link}
          img={donation.image_url}
          type={donation.type.type}
        />
      ))}
    </Wrapper>
  );
};

export default Donations;
