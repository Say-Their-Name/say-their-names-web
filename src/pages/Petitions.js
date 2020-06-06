import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "../components/common/Spinner";
import Petition from "../components/ui/petition/Petition";
import { Wrapper } from "../components/ui/petition/styles";
import config from "../utils/config";

const { apiBaseUrl } = config;

const Petitions = () => {
  const [petitions, setPetitions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await axios.get(`${apiBaseUrl}/petitions`);
        setPetitions(res.data.data);
        window.scrollTo(0, 0);
      } catch (error) {
        // set error and show error page
      } finally {
        setLoading(false);
      }
    };
    fetchDonations();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner height="80vh" />
      ) : (
        <>
          <Wrapper>
            <h2>PETITIONS</h2>
            {petitions.map((petition) => (
              <Petition
                key={petition.id}
                id={petition.id}
                title={petition.title}
                description={petition.description}
                link={petition.link}
                img={petition.image_url}
                type={petition.type.type}
                path="sign"
              />
            ))}
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Petitions;
