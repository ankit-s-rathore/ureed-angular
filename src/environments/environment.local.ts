import { environment as defaultEnvironment } from './environment.defaults';

export const environment = {
  ...defaultEnvironment,
  graphqlUrl: 'http://localhost:5000/graphql',
};
