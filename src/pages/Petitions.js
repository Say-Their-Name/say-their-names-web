import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from '../components/common/Spinner';
import Petition from '../components/ui/petition/Petition';
import { Wrapper } from '../components/ui/petition/styles';
import NotFound from './notFound/NotFound';
import config from '../utils/config';

const { apiBaseUrl } = config;

const Petitions = () => {
  const [petitions, setPetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await axios.get(`${apiBaseUrl}/petitions`);
        setPetitions(res.data.data);
      } catch (err) {
        setError('Error occured');
        // set error and show error page
      } finally {
        setLoading(false);
      }
    };
    fetchDonations();
  }, []);

  return (
    <>
      {error && (
        <NotFound
          message="Oops!!! Something went wrong"
          longMessage="Unable to load petitions"
        />
      )}
      {loading ? (
        <Spinner height="95vh" />
      ) : (
        <>
          <Wrapper>
            <h2>PETITIONS</h2>
            <p>Petitions are another way to show the level of public support for the Black Lives Matter movement.</p>
            <p>SAY THEIR NAMES online and demonstrate to those in power that cause is important to you and you demand justice and change.</p>
            {petitions.map((petition) => (
              <Petition
                key={petition.id}
                id={petition.identifier}
                title={petition.title}
                description={petition.description}
                link={petition.link}
                img={petition.banner_img_url}
                type={petition.type?.type}
                path="sign"
              />
            ))}
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Petitions;
