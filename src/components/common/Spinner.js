import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import Color from '../../constants/Color';

const StyledSpinner = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => (
  <StyledSpinner>
    <Loader type="TailSpin" color={Color.PRIMARY} height={50} />
  </StyledSpinner>
);

export default Spinner;
