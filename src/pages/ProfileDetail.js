import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import Spinner from '../components/common/Spinner';
import Profile from '../components/profileDetails/PersonProfile';
import BackToProfile from '../components/profileDetails/button/Button';
import MediaList from '../components/ui/mediaList/MediaList';

import Container from '../components/common/Container';
import config from '../utils/config';

const { apiBaseUrl } = config;

const ProfileDetail = ({ match }) => {
  const { id } = match.params;
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/people/${id}`);
        setPerson(response.data.data);
      } catch (error) {
        toast(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, [id]);

  return (
    <Container>
      {loading && <Spinner />}
      {Object.keys(person).length > 0 && (
        <>
          <BackToProfile />
          <Profile info={person} />
          <MediaList mediaList={person.media_links} />
          <ToastContainer />
        </>
      )}
    </Container>
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
