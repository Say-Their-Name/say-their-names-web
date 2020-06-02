import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import Profile from '../components/profile/PersonProfile';
import BackToProfile from '../components/profile/Button/Button';

const data = [{
  image: 'https://via.placeholder.com/150',
  fullname: 'James Bond',
  age: '42',
  location: 'SOMEWHERE',
  context: 'smkjjyhhbbfnfuhhb lorem',
  children: 2
}];
const PersonProfile = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchdata() {
      try {
        await axios.get('thebackendurl.com');
      } catch (error) {
        toast(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchdata();
  }, []);
  return (
    <div>
      { loading && <h1>Loading....</h1> }
      <BackToProfile />
      { data.length && data.map((item) => (
        <Profile info={item} key={item.fullname} />
      )) }
      <ToastContainer />
    </div>
  );
};

export default PersonProfile;
