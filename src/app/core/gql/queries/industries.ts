import { gql } from 'apollo-angular';

export const industriesQuery = gql`
  query industries($includeSpecialities: Boolean) {
    industries(includeSpecialities: $includeSpecialities) {
      id
      name
      nameAr
      icon
      specialities {
        id
        name
        nameAr
      }
    }
  }
`;
