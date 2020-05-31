import React from "react";
import { Link } from "react-router-dom";

const PersonDetail = ({ person }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? person.image.url
      : process.env.REACT_APP_BACKEND_URL + person.image.url;
  return (
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          {/* Remove this */}
          <h2>This is a personDetail page</h2>
          <img src={imageUrl} alt={person.image.url} height="100" />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {person.name}
          </p>
        </div>
      </div>
  );
};

export default PersonDetail;
