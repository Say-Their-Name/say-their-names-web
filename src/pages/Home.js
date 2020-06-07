import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';

import GetInvolved from '../components/ui/getInvolved/GetInvolved';
import ProfileList from '../components/ui/profileList/ProfileList';
import Spinner from '../components/common/Spinner';
import Pagination from '../components/pagination/Pagination';
import NotFound from './notFound/NotFound';
import config from '../utils/config';

const { apiBaseUrl } = config;

const Home = () => {
  const profileListRef = useRef(null);
  const isSubsequentVisit = useRef(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error } = useSWR(
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
    if (isSubsequentVisit.current && data?.data) {
      window.scrollTo(0, profileListRef.current.offsetTop);
    }
    if (data) {
      isSubsequentVisit.current = true;
    }
  }, [data]);

  const renderData = () => (!data ? (
    <Spinner height="60vh" />
  ) : (
    <ProfileList profiles={profiles} />
  ));

  const renderError = () => (
    <NotFound
      message="Oops!!! Something went wrong"
      longMessage="Unable to load profiles"
    />
  );

  return (
    <div className="App">
      <GetInvolved />
      <div ref={profileListRef}>
        {
          error
            ? renderError()
            : renderData()
            }
      </div>
      {data && <Pagination currentPage={currentPage} updateCurrentPage={updateCurrentPage} paginationData={paginationData} />}
    </div>
  );
};
export default Home;
