import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, CardContent, Image, ImageDiv, Type
} from './styles';

const Petition = ({
  id, title, description, img, type, path
}) => {
  const imgAlt = `Image for ${title}`;
  const upperType = type ? type.toUpperCase() : null;
  return (
    <Card>
      <ImageDiv>
        {upperType ? (
          <Type>{upperType}</Type>
        ) : (
          <></>
        )}
        <Image src={img} alt={imgAlt} />
      </ImageDiv>
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/${path}/${id}`}>FIND OUT MORE</Link>
      </CardContent>
    </Card>
  );
};

Petition.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  path: PropTypes.string
};

Petition.defaultProps = {
  path: 'donate'
};

export default Petition;
