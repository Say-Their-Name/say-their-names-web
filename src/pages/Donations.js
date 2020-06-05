import React, { useState, useEffect } from 'react';
import Petition from '../components/ui/petition/Petition';
import { Wrapper } from '../components/ui/petition/styles';

const Donations = () => {
  const [donations, setDonations] = useState([]);

  const fetchDonations = async () => {
    const res = await fetch('https://saytheirnames.dev/api/donations');
    const json = await res.json();
    setDonations(json.data);
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
