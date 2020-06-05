import React from "react";
import PropTypes from "prop-types";
import { Card, LinkButton, CardContent, Image, ImageDiv, Type } from "./styles";

const Petition = ({ id, title, description, img, type, path }) => {
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
        <LinkButton href={`/${path}/${id}`}>FIND OUT MORE</LinkButton>
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
  path: PropTypes.string,
};

Petition.defaultProps = {
  path: "donate",
};

export default Petition;
