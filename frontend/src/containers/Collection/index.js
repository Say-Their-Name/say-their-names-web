import React from "react";
import Query from "../../components/Query";
import PEOPLE_QUERY from "../../queries/people/people";
import Person from "../../components/Person"

const People = ({ people }) => {
  return (
    <div>
      <div className="people-container">
        {people.map((person, i) => <Person person={person} key={`people__${people.id}`}/>)}
      </div>
  </div>
  );
};


const Collection = () => {
  return (
    <div>
      <div className="collection">
          <Query query={PEOPLE_QUERY}>
          {({ data: { people } }) => {
               return <People people={people} />;
          }}
          </Query>
        </div>
    </div>
  );
};

export default Collection;
