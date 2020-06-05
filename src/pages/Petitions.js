import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Petition from '../components/ui/petition/Petition';
import { Wrapper } from '../components/ui/petition/styles';

const Petitions = () => {
  const [petitions, setPetitions] = useState([]);

  const fetchPetitions = async () => {
    const res = await axios.get('https://saytheirnames.dev/api/petitions');
    setPetitions(res.data.data);
  };

  useEffect(() => {
    fetchPetitions();
  }, []);

  return (
    <Wrapper>
      <h1>PETITIONS</h1>
      {petitions.map((petition) => (
        <Petition
          key={petition.id}
          title={petition.title}
          description={petition.description}
          link={petition.link}
          img={petition.image_url}
          type={petition.type.type}
        />
      ))}
    </Wrapper>
  );
};

export default Petitions;
