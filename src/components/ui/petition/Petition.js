import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, LinkButton, CardContent, Image, ImageDiv, Type
} from './styles';

const Petition = ({
  title, description, link, img, type
}) => {
  const imgAlt = `Image for ${title}`;
  const upperType = type.toUpperCase();
  return (
    <Card>
      <ImageDiv>
        <Type>{upperType}</Type>
        <Image src={img} alt={imgAlt} />
      </ImageDiv>
      <CardContent>
        <h2>{title}</h2>
        <p>{description}</p>
        <LinkButton href={link} target="_blank">
          FIND OUT MORE
        </LinkButton>
      </CardContent>
    </Card>
  );
};

Petition.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.string,
  type: PropTypes.string
};

Petition.defaultProps = {
  title: 'title',
  description: 'description',
  link: 'link',
  img: 'image_url',
  type: 'Victim'
};

export default Petition;
