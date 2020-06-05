import React from 'react';
import PropTypes from 'prop-types';
import {
  PetitionCard, PetitionLink, CardContent, Image, ImageDiv
} from './styles';

const Petition = ({
  title, description, link, img
}) => {
  const imgAlt = `Petition: ${title}`;
  return (
    <PetitionCard>
      <ImageDiv>
        <Image src={img} alt={imgAlt} />
      </ImageDiv>
      <CardContent>
        <h2>{title}</h2>
        <p>{description}</p>
        <PetitionLink href={link}>FIND OUT MORE</PetitionLink>
      </CardContent>
    </PetitionCard>
  );
};

Petition.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.string
};

Petition.defaultProps = {
  title: 'title',
  description: 'description',
  link: 'link',
  img: 'image_url'
};

export default Petition;
