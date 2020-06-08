import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';

import Seo from '../components/common/Seo';
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
    },
    {
      revalidateOnFocus: false
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

  const renderData = () => (!data && error.request?.status === 0 ? (
    <NotFound
      message="Oops!!! Something went wrong"
      longMessage="Unable to load profiles"
    />
  ) : (
    <ProfileList profiles={profiles} />
  ));

  return (
    <div className="App">
      <Seo
        title="Profiles"
        image="https://say-their-names.fra1.cdn.digitaloceanspaces.com/meta-data/meta-data/logo.png"
      />
      <GetInvolved />
      <div ref={profileListRef}>
        {!data && error?.request?.status !== 0 ? (
          <Spinner height="60vh" />
        ) : (
          renderData()
        )}
      </div>
      {data && (
        <Pagination
          currentPage={currentPage}
          updateCurrentPage={updateCurrentPage}
          paginationData={paginationData}
        />
      )}
    </div>
  );
};
export default Home;
