import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import Profile from '../components/profile/PersonProfile';
import BackToProfile from '../components/profile/Button/Button';
import MediaList from '../components/ui/MediaList/MediaList';


import Container from '../components/Container';
import config from '../utils/config';

const { apiBaseUrl } = config;

const PersonProfile = ({ match }) => {
  const { id } = match.params;
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get(`${apiBaseUrl}/people/${id}`);
        setPerson(response.data.data);
      } catch (error) {
        toast(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchdata();
  }, [id]);

  if (loading) return 'loading';
  return (
    <Container>
      {loading && <h1>Loading....</h1>}
      <BackToProfile />
      <Profile info={person} />
      <MediaList mediaList={person.media_links} />
      <ToastContainer />
    </Container>
  );
};

export default PersonProfile;

PersonProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
};
