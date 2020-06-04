import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../common/Container';
import StyledGetInvolved from './styles';
import BlackLivesMatterBanner from '../../../assets/black-lives-matter.svg';

const GetInvolved = () => (
  <Container>
    <StyledGetInvolved>
      <div className="image-container hover">
        <Link to="/donations">
          <img src={BlackLivesMatterBanner} alt="Black Lives Matter" />
        </Link>
      </div>

      <div className="details">
        <h1>Delayed justice is injustice</h1>
      </div>
    </StyledGetInvolved>
  </Container>
);

export default GetInvolved;
