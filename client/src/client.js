import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

/**
 * Create a new, very simple Apollo Client
 */

// const link = new HttpLink({ uri: 'http://localhost:4000/' });
const link = new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' });
const cache = new InMemoryCache();

const client = new ApolloClient({ link, cache });

/**
 * gql is a Graphql tag that translates strings to something the client can understand.
 */

const query = gql`
  {
    characters {
      results {
        id
        name
      }
    }
  }
`;

client.query({ query }).then((result) => console.log(result));

export default client;
