import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledNavigationLinks } from './styles';

const NavigationItem = ({ name, path }) => {
  const location = useLocation();
  let active = '';

  if (path === '/' && path === location.pathname) {
    active = 'active';
  }

  if (path === '/donations' && location.pathname.includes('donate')) {
    active = 'active';
  }

  if (path === '/petitions' && location.pathname.includes('sign')) {
    active = 'active';
  }

  if (path !== '/' && location.pathname.includes(path)) {
    active = 'active';
  }

  return (
    <StyledNavigationLinks>
      <Link to={path} className={active}>
        {name}
      </Link>
    </StyledNavigationLinks>
  );
};

export default NavigationItem;

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
