import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Spinner from '../components/common/Spinner';
import Petition from '../components/ui/petition/Petition';
import { Wrapper } from '../components/ui/petition/styles';
import NotFound from './notFound/NotFound';
import config from '../utils/config';
import utils from '../utils';

const { convertIdentifierToName } = utils;
const { apiBaseUrl } = config;

const Donations = ({ match }) => {
  const { identifier } = match.params;
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchPetitions = async () => {
      let API_URL = `${apiBaseUrl}/donations`;
      if (identifier) {
        API_URL = `${apiBaseUrl}/donations?name=${identifier}`;
      }
      try {
        const res = await axios.get(API_URL);
        setDonations(res.data.data);
      } catch (err) {
        setError('Error occured');
        // set error and show error page
      } finally {
        setLoading(false);
      }
    };
    fetchPetitions();
  }, [identifier]);

  return (
    <>
      {error && (
        <NotFound
          message="Oops!!! Something went wrong"
          longMessage="Unable to load donations"
        />
      )}
      {loading ? (
        <Spinner height="95vh" />
      ) : (
        <>
          <Wrapper>
            <h2>
              {donations.length === 0 && !loading ? (
                <h2 className="not-found">NO DONATION FOUND</h2>
              ) : (
                <>
                  {identifier
                    ? `DONATIONS FOR ${convertIdentifierToName(identifier)}`
                    : 'DONATIONS'}
                </>
              )}
            </h2>
            <p>Donations provide financial support and power to the Black Lives Movement to keep the pressure so we can change the system and get justice.</p>
            <p> All donations sources on SAY THEIR NAMES are verified so you can ensure that the money you are donating will be going towards the movement. </p>
            {donations.map((donation) => (
              <Petition
                key={donation.id}
                id={donation.identifier}
                title={donation.title}
                description={donation.description}
                link={donation.link}
                img={donation.banner_img_url}
                type={donation.type?.type}
                path="donate"
              />
            ))}
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Donations;

Donations.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      identifier: PropTypes.string
    }).isRequired
  }).isRequired
};
