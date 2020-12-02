import { gql } from 'apollo-angular';

export const freelancerQuery = gql`
  query freelancer($id: String) {
    freelancer(id: $id) {
      id
    }
  }
`;
