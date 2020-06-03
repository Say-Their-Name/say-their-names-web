import React, { useState, useEffect } from 'react';
import axios from 'axios';


import GetInvolved from '../components/ui/getInvolved/GetInvolved';
import ProfileList from '../components/ui/profileList/ProfileList';
import Spinner from '../components/common/Spinner';
import config from '../utils/config';

const { apiBaseUrl } = config;

const Home = () => {
  const [profiles, setProfiles] = useState([]); // this will hold the profles list fetched from the API
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/people`);
        setProfiles(response.data.data);
      } catch (error) {
        // toast(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="App">
      <GetInvolved />
      {loading ? (
        <Spinner height="40vh" />
      ) : (
        <ProfileList profiles={profiles} />
      )}
    </div>
  );
};
export default Home;
