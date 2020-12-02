import { gql } from 'apollo-angular';

export const freelancersQuery = gql`
  query freelancers {
    freelancers {
      id
      displayName
    }
  }
`;
