import gql from "graphql-tag";

const PEOPLE_QUERY = gql`
  query People {
    people {
      id
      name
      image {
        url
      }
      deathDate
    }
  }
`;

export default PEOPLE_QUERY;
