import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledNavigationLinks } from './styles';

const NavigationItem = ({ name, path }) => {
  const location = useLocation();
  let active = '';
  // console.log(path, location);

  if (path !== '/' && location.pathname.includes(path)) {
    // console.log(path);
    active = 'active';
  }

  if (path === '/' && path === location.pathname) {
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
