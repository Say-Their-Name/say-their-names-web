import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '../profileDetails/styles';
import BackProfile from './styles';

const BackToProfiles = ({
  text,
  link,
  longText,
  linkText,
  backLink,
  backState,
  external
}) => {
  const [sticky, setSticky] = useState('static');
  const [donationsDisplay, setDonationsDisplay] = useState('none');

  useEffect(() => {
    const onScroll = window.addEventListener(
      'scroll',
      () => {
        const scrollHeight = window.scrollY < 100 ? 'static' : 'sticky';
        const scrollHeightDisplay = window.scrollY < 100 ? 'none' : 'flex';
        setSticky(scrollHeight);
        setDonationsDisplay(scrollHeightDisplay);
      },
      false
    );
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  return (
    <BackProfile style={{ position: sticky, top: 0 }}>
      <Link to={{ pathname: backLink, state: backState }}>
        <i className="fas fa-chevron-left" />
        <p>{text}</p>
      </Link>
      {link && (
        <div className="donate" style={{ display: donationsDisplay }}>
          <p>{longText}</p>
          {external ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button width="100px" padding="0.8rem">
                <button type="button">{linkText}</button>
              </Button>
            </a>
          ) : (
            <Link to={link}>
              <Button width="100px" padding="0.8rem">
                <button type="button">{linkText}</button>
              </Button>
            </Link>
          )}
        </div>
      )}
    </BackProfile>
  );
};

export default BackToProfiles;

BackToProfiles.defaultProps = {
  external: false,
  backState: {},
  link: ''
};
BackToProfiles.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  longText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  backLink: PropTypes.string.isRequired,
  backState: PropTypes.shape({}),
  external: PropTypes.bool
};
