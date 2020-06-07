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

const Petitions = ({ match }) => {
  const { identifier } = match.params;
  const [petitions, setPetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [activeTab, setActiveTab] = useState();
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    const fetchPetitions = async () => {
      let API_URL = `${apiBaseUrl}/petitions`;
      if (identifier) {
        API_URL = `${apiBaseUrl}/donations?name=${identifier}`;
      }
      try {
        const res = await axios.get(API_URL);
        setPetitions(res.data.data);
      } catch (err) {
        setError('Error occured');
        // set error and show error page
      } finally {
        setLoading(false);
      }
    };
    const fetchPetitionType = async () => {
      const API_URL = `${apiBaseUrl}/petition-types`;
      try {
        const res = await axios.get(API_URL);
        // const typeArr = res.data.data.map((data) => data.type);
        setTabData(res.data.data);
      } catch (err) {
        setError('Error occured');
      }
    };
    fetchPetitions();
    fetchPetitionType();
  }, [identifier]);

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
            {petitions.length === 0 && !loading ? (
              <h2 className="not-found">NO PETITIONS FOUND</h2>
            ) : (
              <h2>
                {identifier
                  ? `PETITIONS FOR ${convertIdentifierToName(identifier)}`
                  : 'PETITIONS'}
              </h2>
            )}
            <Tabs locations={tabData.map((type) => type.type)} setState={setActiveTab} currentTab={activeTab} />
            {petitions.map((petition) => (
              <Petition
                key={petition.id}
                id={petition.id}
                title={petition.title}
                description={petition.description}
                link={petition.link}
                img={petition.banner_img_url}
                type={petition.type.type}
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

Petitions.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      identifier: PropTypes.string
    }).isRequired
  }).isRequired
};
