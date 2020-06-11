import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Seo from '../components/common/Seo';
import Spinner from '../components/common/Spinner';
import Petition from '../components/ui/petition/Petition';
import Pagination from '../components/pagination/Pagination';
import Tabs from '../components/tabs/Tabs';
import { Wrapper } from '../components/ui/petition/styles';
import NotFound from './notFound/NotFound';
import config from '../utils/config';

const { apiBaseUrl } = config;

const Petitions = () => {
  const [petitions, setPetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [activeTab, setActiveTab] = useState();
  const [tabData, setTabData] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPetitions = async () => {
      const API_URL = `${apiBaseUrl}/petitions?page=${currentPage}`;

      try {
        const res = await axios.get(API_URL);
        setPetitions(res.data.data);
        setPaginationData(res.data.meta);
        window.scrollTo({ top: 0, behavior: 'auto' });
      } catch (err) {
        setError('Error occured');
        // set error and show error page
      } finally {
        setLoading(false);
      }
    };
    const fetchPetitionType = async () => {
      const API_URL = `${apiBaseUrl}/petition-types`;
      try {
        const res = await axios.get(API_URL);
        setTabData(res.data.data);
      } catch (err) {
        setError('Error occured');
      } finally {
        setLoading(false);
      }
    };
    fetchPetitions();
    fetchPetitionType();
  }, [currentPage]);

  if (error) {
    return (
      <NotFound
        message="Oops!!! Something went wrong"
        longMessage="Unable to load petitions"
      />
    );
  }

  return (
    <>
      {loading ? (
        <Spinner height="95vh" />
      ) : (
        <>
          <Seo
            title="Petitions"
            description="Petitions are another way to show the level of public support for the Black Lives Matter movement"
            image="https://say-their-names.fra1.cdn.digitaloceanspaces.com/assets/cover.png"
          />
          <Wrapper>
            {petitions.length === 0 && !loading ? (
              <h2 className="not-found">NO PETITIONS FOUND</h2>
            ) : (
              <h2>PETITIONS</h2>
            )}
            <p>
              Petitions are another way to show the level of public support for
              the Black Lives Matter movement.
            </p>
            <p>
              SAY THEIR NAMES online and demonstrate to those in power that the
              cause is important to you and you demand justice and change.
            </p>
            {petitions.length > 0 && !loading && (
              <Tabs
                locations={tabData.map((type) => type.type)}
                setState={setActiveTab}
                currentTab={activeTab}
              />
            )}
            {petitions
              .filter((petition) => (activeTab !== undefined
                ? petition.type.type === tabData[activeTab].type
                : petition))
              .map((petition) => (
                <Petition
                  key={petition.id}
                  id={petition.identifier}
                  title={petition.title}
                  description={petition.description}
                  link={petition.link}
                  img={petition.banner_img_url}
                  type={petition.type?.type}
                  path="sign"
                />
              ))}
            {petitions.filter((petition) => (activeTab !== undefined
              ? petition.type.type === tabData[activeTab].type
              : petition)).length > 0 && (
                <Pagination
                  paginationData={paginationData}
                  currentPage={paginationData.current_page}
                  updateCurrentPage={setCurrentPage}
                />
            )}
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Petitions;
