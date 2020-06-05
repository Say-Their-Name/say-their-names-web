import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "../components/common/Spinner";
import Petition from "../components/ui/petition/Petition";
import { Wrapper } from "../components/ui/petition/styles";
import config from "../utils/config";

const { apiBaseUrl } = config;

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPetitions = async () => {
      try {
        const res = await axios.get(`${apiBaseUrl}/donations`);
        setDonations(res.data.data);
        window.scrollTo(0, 0);
      } catch (error) {
        // set error and show error page
      } finally {
        setLoading(false);
      }
    };
    fetchPetitions();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner height="80vh" />
      ) : (
        <>
          <Wrapper>
            <h1>DONATIONS</h1>
            {donations.map((donation) => (
              <Petition
                key={donation.id}
                title={donation.title}
                description={donation.description}
                link={donation.link}
                img={donation.image_url}
                type={donation.type.type}
              />
            ))}
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Donations;
