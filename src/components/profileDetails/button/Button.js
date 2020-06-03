import React from 'react';
import { Link } from 'react-router-dom';

import BackProfile from './styles';

const Button = () => (
  <BackProfile>
    <Link to="/">
      <button type="button">BACK TO PROFILES</button>
    </Link>
  </BackProfile>
);

export default Button;
