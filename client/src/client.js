import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

/**
 * Create a new, very simple Apollo Client
 */

const link = new HttpLink({ uri: 'http://localhost:4000/' });
const cache = new InMemoryCache();

const client = new ApolloClient({ link, cache });

export default client;
