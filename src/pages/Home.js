import React, {
  useCallback, useEffect, useState, useRef
} from 'react';
import axios from 'axios';
import useSWR from 'swr';

import GetInvolved from '../components/ui/getInvolved/GetInvolved';
import ProfileList from '../components/ui/profileList/ProfileList';
import Spinner from '../components/common/Spinner';
import Pagination from '../components/pagination/Pagination';
import config from '../utils/config';

const { apiBaseUrl } = config;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const { data = { data: [], meta: {} } } = useSWR(
    `/people?page=${currentPage}`,
    async () => {
      const response = await axios.get(`${apiBaseUrl}/people?page=${currentPage}`);
      // This prevents a quick flash of the loader when using the cache or on super fast connections
      setTimeout(() => {
        if (!response.data) setLoading(true);
      }, 100);
      if (response.data) {
        setLoading(false);
      }
      return response.data;
    }
  );

  const { data: profiles, meta: paginationData } = data;

  const profileListRef = useRef(null);

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const handleDataChange = useCallback(() => {
    if (profiles.length > 0) {
      window.scrollTo(0, profileListRef.current.offsetTop ?? 0);
    }
  }, [profiles.length]);

  useEffect(() => {
    handleDataChange();
  }, [data, handleDataChange]);

  const renderError = () => (
    <p>Domething went wrong. Please, reload the page.</p>
  );

  return (
    <div className="App">
      <GetInvolved />
      <div ref={profileListRef}>
        {loading ? (
          <Spinner height="40vh" />
        ) : (
          <>
            {profiles
              ? <ProfileList profiles={profiles} />
              : renderError()}
          </>
        )}
      </div>
      <Pagination currentPage={currentPage} updateCurrentPage={updateCurrentPage} paginationData={paginationData} />
    </div>
  );
};
export default Home;
