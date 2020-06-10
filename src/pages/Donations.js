import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Seo from '../components/common/Seo';
import Spinner from '../components/common/Spinner';
import Petition from '../components/ui/petition/Petition';
import Tabs from '../components/tabs/Tabs';
import { Wrapper } from '../components/ui/petition/styles';
import NotFound from './notFound/NotFound';
import config from '../utils/config';

const { apiBaseUrl } = config;

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [activeTab, setActiveTab] = useState();
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      const API_URL = `${apiBaseUrl}/donations`;

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
  }, []);

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
          <Seo
            title="Donations"
            image="https://say-their-names.fra1.cdn.digitaloceanspaces.com/assets/cover.png"
            description="Donations provide financial support and power to the Black Lives Movement to keep the pressure so we can change the system and get justice."
          />
          <Wrapper>
            <h2>
              <>DONATIONS</>
            </h2>

            <p>
              Donations provide financial support and power to the Black Lives
              Movement to keep the pressure so we can change the system and get
              justice.
            </p>
            <p>
              All donations sources on SAY THEIR NAMES are verified so you can
              ensure that the money you are donating will be going towards the
              movement.
            </p>
            {donations.length > 0 && !loading && (
              <Tabs
                locations={tabData.map((type) => type.type)}
                setState={setActiveTab}
                currentTab={activeTab}
              />
            )}

            {donations.length === 0 && !loading && (
              <h2 className="not-found">NO DONATIONS FOUND</h2>
            )}
            {donations
              .filter((donation) => (activeTab !== undefined
                ? donation.type.type === tabData[activeTab].type
                : donation))
              .map((donation) => (
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
