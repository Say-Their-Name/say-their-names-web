import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  /* margin: 3rem; */

  @media (max-width: 700px) {
    margin: 1rem
  }
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node
};

Container.defaultProps = {
  children: null
};

export default Container;
