import React from 'react';
import PropTypes from 'prop-types';
import { PetitionCard, PetitionLink } from './styles';

const Petition = ({
  title, description, link
}) => (
  <PetitionCard>
    <div style={{ height: '40%', backgroundColor: 'black' }}>
      {/* <img src={imgUrl} alt={title} /> */}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between' }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <PetitionLink href={link}>FIND OUT MORE</PetitionLink>
    </div>
  </PetitionCard>
);

Petition.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
};

Petition.defaultProps = {
  title: 'title',
  description: 'description',
  link: 'link'
};

export default Petition;
