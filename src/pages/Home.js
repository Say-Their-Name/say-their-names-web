import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
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
  const location = useLocation();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(
    location?.state?.oldCurrentPage ? location.state.oldCurrentPage : 1
  );

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
      window.scrollTo({
        top: profileListRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
    if (data) {
      isSubsequentVisit.current = true;
    }

    // Clear the location state to prevent always restoring the previous old page on manual browser refresh, or browser back button from a profile page
    history.replace('/', null);
  }, [data, history]);

  const renderData = () => (!data && error.request?.status === 0 ? (
    <NotFound
      message="Oops!!! Something went wrong"
      longMessage="Unable to load profiles"
    />
  ) : (
    <ProfileList currentPage={currentPage} profiles={profiles} />
  ));
  return (
    <div className="App">
      <Seo
        title="Home"
        image="https://say-their-names.fra1.cdn.digitaloceanspaces.com/assets/cover.png"
        description="Our aim is to build an open-source platform that raises awareness of the injustice and often forgotten names of racial inequality"
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
