import { environment as defaultEnvironment } from './environment.defaults';

export const environment = {
  ...defaultEnvironment,
  production: true,
  log: true,
  graphqlUrl: 'https://graphql-pre.ureed.com/graphql',
};
