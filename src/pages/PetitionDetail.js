import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Seo from '../components/common/Seo';
import ActionDetailsHeader from '../components/ui/actionDetailsHeader/ActionDetailsHeader';
import BackNavigation from '../components/backNavigation/BackNavigation';
import ActionDetailsContent from '../components/ui/actionDetailsContent/ActionDetailsContent';
import Container from '../components/common/Container';
import NotFound from './notFound/NotFound';
import Spinner from '../components/common/Spinner';
import config from '../utils/config';

const { apiBaseUrl } = config;

const getSocialCopy = (petitionDetails) => {
  let socialCopy;
  if (petitionDetails.person) {
    socialCopy = `Help bring justice to ${petitionDetails.person.full_name} by signing this petition and put pressure on the authorities to do the right thing. If we show up in numbers, we can win. 
#SayTheirNames #BlackLivesMatter #${petitionDetails.person.full_name.replace(/\s+/g, '')}`;
  } else {
    socialCopy = 'Sign this petition to demand policy change and bring media attention to to how many of us want action #BlackLivesMatter #SayTheirNames';
  }

  return socialCopy;
};

const PetitionDetail = ({ match }) => {
  const { id } = match.params;
  const [petitionDetails, setDonationDetail] = useState([]); // this will hold the profles list fetched from the API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/petitions/${id}`);
        setDonationDetail(response.data.data);
      } catch (err) {
        // set error and show error page
        setError('Error Occured');
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, [id]);

  if (error) {
    return (
      <NotFound
        message="Oops!!! Something went wrong"
        longMessage="Unable to load petition detail"
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
            title={petitionDetails.title}
            description={petitionDetails.description}
            image={petitionDetails.banner_img_url}
          />
          <BackNavigation
            text="BACK TO PETITIONS"
            link={petitionDetails.link}
            longText="Sign now to end racial inequality on minorities"
            linkText="SIGN THIS PETITION"
            backLink="/petitions"
            external
          />
          <Container>
            <ActionDetailsHeader
              socialCopy={getSocialCopy(petitionDetails)}
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
