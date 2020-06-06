import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import ActionDetailsHeader from '../components/ui/actionDetailsHeader/ActionDetailsHeader';
import BackNavigation from '../components/backNavigation/BackNavigation';
import ActionDetailsContent from '../components/ui/actionDetailsContent/ActionDetailsContent';
import Container from '../components/common/Container';
import Spinner from '../components/common/Spinner';
import config from '../utils/config';

const { apiBaseUrl } = config;

const PetitionDetail = ({ match }) => {
  const { id } = match.params;
  const [petitionDetails, setDonationDetail] = useState([]); // this will hold the profles list fetched from the API
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/donations/${id}`);
        setDonationDetail(response.data.data);
        window.scrollTo(0, 0);
      } catch (error) {
        // set error and show error page
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner height="95vh" />
      ) : (
        <>
          <BackNavigation
            text="BACK TO PETITIONS"
            link={petitionDetails.link}
            longText="Sign now to end Police brutality on minorities"
            linkText="SIGN THIS PETITION"
            backLink="/petitions"
            external
          />
          <Container>
            <ActionDetailsHeader
              title={petitionDetails.title}
              link={petitionDetails.link}
              bannerImageUrl={petitionDetails.banner_img_url}
              action="SIGN THIS PETITION"
            />
            <ActionDetailsContent
              description={petitionDetails.description}
              outcome={petitionDetails.outcome}
              outcomeImageUrl={petitionDetails.outcome_img_url}
              hashTags={petitionDetails.hash_tags}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default PetitionDetail;


PetitionDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
};
