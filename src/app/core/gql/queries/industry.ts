import { gql } from 'apollo-angular';

export const industryQuery = gql`
  query industries($id: Int!, $includeSpecialities: Boolean) {
    industry(id: $id, includeSpecialities: $includeSpecialities) {
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
