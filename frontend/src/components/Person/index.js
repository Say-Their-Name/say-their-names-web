import React from "react";
import { Link } from "react-router-dom";

const Person = ({ person }) => {
  console.log(person);
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? person.image.url
      : process.env.REACT_APP_BACKEND_URL + person.image.url;
  return (
    <Link to={`/people/${person.id}`} className="uk-link-reset">
      <div className="person-container">
          <div className="person-img" role="img" aria-label={'Photo of ' + person.name}
                style={{backgroundImage: 'url(' + imageUrl + ')'}}/>
          <h2 className="person-name">{person.name}</h2>
          <h3 className="person-subtitle">{person.deathDate}</h3>
      </div>
    </Link>
  );
};

export default Person;
