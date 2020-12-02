import { NgModule } from '@angular/core';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { environment } from '@environment';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { parse, stringify } from 'flatted';

const error = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      // eslint-disable-next-line no-console
      console.log(`[GraphQL error]: Message: ${message}`);
    });
  }

  if (networkError) {
    // eslint-disable-next-line no-console
    console.log(`[Network error]: ${networkError.message}`);
  }
});

// Because of https://github.com/apollographql/apollo-client/issues/1913
// I have added this Apollo Link
// It will run with each request to clean __typename or typename properties
// They are injected by Apollo in our variables during mutations which make them fail
// So, this is a workaround to clear them up during mutation call
// It will handle also the upload mutations as well
// Solution taken from https://stackoverflow.com/a/62348728
// It can be disabled in MemoryCache but this will affect apollo performance!

const cleanTypeName = new ApolloLink((operation, forward) => {
  const omitTypename = (key, value) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    key === '__typename' || key === 'typename' ? undefined : value;

  if (operation.variables && !operation.getContext().hasUpload) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    operation.variables = parse(stringify(operation.variables), omitTypename);
  }

  return forward(operation);
});

const createApollo = (httpLink: HttpLink): ApolloClientOptions<any> => ({
  link: ApolloLink.from([
    cleanTypeName,
    error,
    httpLink.create({ uri: environment.graphqlUrl }),
  ]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
});

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
