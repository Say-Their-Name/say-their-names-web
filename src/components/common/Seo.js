import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const Seo = ({ title, image, description }) => (
  <Helmet>
    <title>{`${title} | Say Their Names`}</title>
    <meta name="title" content={`${title} | Say Their Names`} />
    <meta name="description" content={description} />

    {/* Open Graph / Facebook - */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://saytheirnames.io" />
    <meta property="og:title" content={`${title} | Say Their Names`} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    {/* Twitter  */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://saytheirnames.io" />
    <meta property="twitter:title" content={`${title} | Say Their Names`} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
  </Helmet>
);

export default Seo;

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
