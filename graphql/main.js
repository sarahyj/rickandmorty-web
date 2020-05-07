import gql from "graphql-tag";

export const LIST_CHARACTERS = gql`
  {
    characters {
      results {
        name
        id
        image
        status
        species
        gender
        origin {
          name
          dimension
        }
        location {
          name
        }
      }
    }
  }
`;
