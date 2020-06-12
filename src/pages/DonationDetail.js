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

const getSocialCopy = (donationDetails) => {
  let socialCopy;
  if (donationDetails.person) {
    socialCopy = `'We remember ${donationDetails.person.full_name}. Join me in donating to their memorial fund, and supporting their family’s fight for justice. 
#SayTheirNames #BlackLivesMatter #${donationDetails.person.full_name.replace(/\s+/g, '')}`;
  } else {
    socialCopy = `The movement goes on. Join me in supporting ${donationDetails.fund} and let’s fuel the campaign for justice together. #BlackLivesMatter #SayTheirNames`;
  }

  return socialCopy;
};

const DonationDetail = ({ match }) => {
  const { id } = match.params;
  const [donationDetails, setDonationDetails] = useState([]); // this will hold the profles list fetched from the API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/donations/${id}`);
        setDonationDetails(response.data.data);
      } catch (err) {
        setError('Error occured');
        // set error and show error page
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
        longMessage="Unable to load donation detail"
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
            title={donationDetails.title}
            description={donationDetails.description}
            image={donationDetails.banner_img_url}
          />
          <BackNavigation
            text="BACK TO DONATIONS"
            link={donationDetails.link}
            longText="Donate now to end racial inequality on minorities"
            linkText="DONATE NOW"
            backLink="/donations"
            external
          />
          <Container>
            <ActionDetailsHeader
              socialCopy={getSocialCopy(donationDetails)}
              title={donationDetails.title}
              link={donationDetails.link}
              bannerImageUrl={donationDetails.banner_img_url}
              action="DONATE NOW"
            />
            <ActionDetailsContent
              description={donationDetails.description}
              outcome={donationDetails.outcome}
              outcomeImageUrl={donationDetails.outcome_img_url}
              hashTags={donationDetails.hash_tags}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default DonationDetail;

DonationDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
};
