import React from "react";
import { useParams } from "react-router";
import PersonDetail from "../../components/PersonDetail";
import Query from "../../components/Query";
import PERSON_DETAIL_QUERY from "../../queries/personDetail/personDetail";

const PersonDetailContainer = () => {
  let { id } = useParams();

  return (
    <Query query={PERSON_DETAIL_QUERY} id={id}>
      {({ data: { person } }) => {
        return (
          <div>
            <div className="uk-section">
              <div className="uk-container uk-container-large">
                <PersonDetail person={person} />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default PersonDetailContainer;
