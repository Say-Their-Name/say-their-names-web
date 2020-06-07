import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Spinner from '../components/common/Spinner';
import Petition from '../components/ui/petition/Petition';
import Tabs from '../components/tabs/Tabs';
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
  const [activeTab, setActiveTab] = useState();
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
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
    const fetchDonationType = async () => {
      const API_URL = `${apiBaseUrl}/donation-types`;
      try {
        const res = await axios.get(API_URL);
        // const typeArr = res.data.data.map((data) => data.type);
        setTabData(res.data.data);
      } catch (err) {
        setError('Error occured');
      }
    };
    fetchDonations();
    fetchDonationType();
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
            {donations.length === 0 && !loading ? (
              <h2 className="not-found">NO DONATIONS FOUND</h2>
            ) : (
              <h2>
                {identifier
                  ? `DONATIONS FOR ${convertIdentifierToName(identifier)}`
                  : 'DONATIONS'}
              </h2>
            )}
            <Tabs locations={tabData.map((type) => type.type)} setState={setActiveTab} currentTab={activeTab} />
            {donations.map((donation) => (
              <Petition
                key={donation.id}
                id={donation.id}
                title={donation.title}
                description={donation.description}
                link={donation.link}
                img={donation.banner_img_url}
                type={donation.type.type}
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
