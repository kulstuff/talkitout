import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = {
    uri: 'https://talkitout-backend.herokuapp.com/graphql',
    headers: {
        'Content-Type': 'application/json'
    }
} 

const client = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: new InMemoryCache()
  });

ReactDOM.render(<App/>, document.getElementById('app'));