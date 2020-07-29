import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import useSWR from 'swr';
import config from '../../utils/config';


import {
  StyledNavigation,
  StyledNavigationLogo,
  StyledNavigationLinkContainer
} from './styles';
import NavigationItem from './NavigationItem';
import Logo from '../../assets/logo.png';
import SearchBar from '../searchBar/SearchBar';


const navRoutes = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Donations',
    path: '/donations'
  },
  {
    name: 'Petitions',
    path: '/petitions'
  },
  {
    name: 'About',
    path: '/about'
  }
];

const { apiBaseUrl } = config;

const Navigation = () => {
  const [victims, setVictims] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await axios.get(`${apiBaseUrl}/people`);
      const victimData = await res.data.data;
      setVictims(victimData);
    }
    loadData();
  }, []);

  return (
    <StyledNavigation className="navbar">
      <StyledNavigationLogo className="navbar__logo">
        <Link to="/">
          <img src={Logo} alt="Say Their Names Logo" />
          <h4>SAY THEIR NAMES</h4>
        </Link>
      </StyledNavigationLogo>

      <StyledNavigationLinkContainer>
        {navRoutes.map((route) => (
          <NavigationItem key={route.name} name={route.name} path={route.path} />
        ))}
      </StyledNavigationLinkContainer>

      <SearchBar victims={victims} />

    </StyledNavigation>
  );
};

export default Navigation;
