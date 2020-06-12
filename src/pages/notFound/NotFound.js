import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from '../../components/common/Container';
import {
  ContainerDiv,
  ImageCover,
  HomeButton,
  BoxContent,
  InnerContainer,
  ImageContainer
} from './style';
import BLM from '../../assets/blm.svg';

const NotFound = ({ message, longMessage }) => (
  <Container>
    <ContainerDiv>
      <InnerContainer>
        <BoxContent>
          <h1>404</h1>
          {' '}
          <br />
          <h4>{message || ' Page not found'}</h4>
        </BoxContent>
        <p>
          {longMessage
            || 'Not all those who wander are lost, but it seems you may have taken a wrong turn.'}
        </p>
        <HomeButton>
          <Link to="/">
            <button type="button">BACK TO HOME</button>
          </Link>
        </HomeButton>
      </InnerContainer>
      <ImageContainer>
        <ImageCover src={BLM} alt="not found  svg" />
      </ImageContainer>
    </ContainerDiv>
  </Container>
);

export default NotFound;

NotFound.propTypes = {
  message: PropTypes.string,
  longMessage: PropTypes.string
};

NotFound.defaultProps = {
  message: ' Page not found',
  longMessage:
    'Not all those who wander are lost, but it seems you may have taken a wrong turn.'
};
