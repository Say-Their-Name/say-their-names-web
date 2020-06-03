import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import GetInvolved from "../components/ui/getInvolved/GetInvolved";
import ProfileList from "../components/ui/profileList/ProfileList";
import Spinner from "../components/common/Spinner";
import Pagination from "../components/pagination/Pagination";
import config from "../utils/config";

const { apiBaseUrl } = config;

const Home = () => {
  const [profiles, setProfiles] = useState([]); // this will hold the profles list fetched from the API
  const [loading, setLoading] = useState(true);
  const [paginationData, setPaginationData] = useState({});

  const fetchdata = useCallback(async (page = 1) => {
    try {
      const response = await axios.get(`${apiBaseUrl}/people?page=${page}`);
      setPaginationData(response.data.meta);
      setProfiles(response.data.data);
      window.scrollTo(0, 0);
    } catch (error) {
      // toast(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  return (
    <div className="App">
      <GetInvolved />
      {loading ? (
        <Spinner height="40vh" />
      ) : (
        <>
          <ProfileList profiles={profiles} />
          <Pagination paginationData={paginationData} fetchdata={fetchdata} />
        </>
      )}
    </div>
  );
};
export default Home;
