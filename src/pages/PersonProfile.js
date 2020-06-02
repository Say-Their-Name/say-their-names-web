import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import Profile from '../components/profile';
import BackToProfile from '../components/profile/button';

const data = [{
  image: 'https://via.placeholder.com/150',
  fullname: 'James Bond',
  age: '42',
  location: 'SOMEWHERE',
  context: 'smkjjyhhbbfnfuhhb lorem',
  children: 2
}];
export default function PersonProfile() {
//   const [persons, setPerson] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchdata() {
      try {
        await axios.get('thebackendurl.com');
        // setPerson(response);
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
}
