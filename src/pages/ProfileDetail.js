import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import NotFound from './notFound/NotFound';
import Spinner from '../components/common/Spinner';
import Profile from '../components/profileDetails/PersonProfile';
import BackNavigation from '../components/backNavigation/BackNavigation';
import NewsList from '../components/ui/newsList/NewsList';

import Container from '../components/common/Container';
import config from '../utils/config';
import HashTags from '../components/ui/hashtags/HashTags';

const { apiBaseUrl } = config;

const ProfileDetail = ({ match }) => {
  const { id } = match.params;
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});
  const [error, setError] = useState();
  const [donation, setDonation] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/people/${id}`);
        const { data } = response.data;
        setPerson(data);
        setDonation(data.donation_links[0]);
      } catch (err) {
        setError('Error occured');
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, [id]);


  return (
    <>
      {error && (
        <NotFound
          message="Oops!!! Something went wrong"
          longMessage="Unable to load profile detail"
        />
      )}
      {loading && <Spinner />}
      {Object.keys(person).length > 0 && (
        <>
          <BackNavigation
            text="BACK TO PROFILES"
            link={
              person.donation_links.length > 0
                ? `/donate/${donation.identifier}`
                : ''
            }
            longText="Donate now to end Police brutality on minorities"
            linkText="DONATE"
            backLink="/"
          />
          <Container>
            <Profile info={person} donation={donation} />
            <NewsList newsList={person.media_links} />
            <HashTags hashtags={person.hash_tags} />
          </Container>
        </>
      )}
    </>
  );
};

export default ProfileDetail;

ProfileDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
};
