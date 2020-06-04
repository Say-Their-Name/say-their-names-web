import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '../profileDetails/styles';
import BackProfile from './styles';

const BackToProfiles = ({
  text, link, longText, linkText, backLink
}) => {
  const [sticky, setSticky] = useState('static');
  const [donationsDisplay, setDonationsDisplay] = useState('none');

  useEffect(() => {
    const onScroll = document.addEventListener('scroll', () => {
      const scrollHeight = window.scrollY < 100 ? 'static' : 'sticky';
      const scrollHeightDisplay = window.scrollY < 100 ? 'none' : 'flex';
      setSticky(scrollHeight);
      setDonationsDisplay(scrollHeightDisplay);
    });
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  return (
    <BackProfile style={{ position: sticky, top: 0 }}>
      <Link to={backLink}>
        <i className="fas fa-chevron-left" />
        <p>{text}</p>
      </Link>

      <div className="donate" style={{ display: donationsDisplay }}>
        <p>{longText}</p>
        <Link to={link}>
          <Button width="100px" padding="0.8rem">
            <button type="button">{linkText}</button>
          </Button>
        </Link>
      </div>
    </BackProfile>
  );
};

export default BackToProfiles;

BackToProfiles.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  longText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  backLink: PropTypes.string.isRequired

};
