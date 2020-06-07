import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';

import GetInvolved from '../components/ui/getInvolved/GetInvolved';
import ProfileList from '../components/ui/profileList/ProfileList';
import Spinner from '../components/common/Spinner';
import Pagination from '../components/pagination/Pagination';
import config from '../utils/config';

const { apiBaseUrl } = config;

const Home = () => {
  const profileListRef = useRef(null);
  const isInitialPage = useRef(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useSWR(
    `/people?page=${currentPage}`,
    async (url) => {
      const response = await axios.get(`${apiBaseUrl + url}`);
      return response.data;
    }
  );

  const profiles = data?.data;
  const paginationData = data?.meta;

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (!isInitialPage.current && currentPage !== 1) {
      window.scrollTo(0, profileListRef.current.offsetTop);
    }
    isInitialPage.current = false;
  }, [data]);

  return (
    <div className="App">
      <GetInvolved />
      <div ref={profileListRef}>
        {!data ? (
          <Spinner height="50vh" />
        ) : (
          <ProfileList profiles={profiles} />
        )}
      </div>
      {data && <Pagination currentPage={currentPage} updateCurrentPage={updateCurrentPage} paginationData={paginationData} />}
    </div>
  );
};
export default Home;
