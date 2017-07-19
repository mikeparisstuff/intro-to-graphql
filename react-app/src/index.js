import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

/**
 * Create the apollo client instance for all data fetching needs. 
 * 
 * We also create a custom network interface which lets us configure how queries 
 * are sent over HTTP, or replace entirely with a custom transport e.g. Websockets :)
 */
const client = new ApolloClient({
  dataIdFromObject: o => o.__typename + o.id,
  networkInterface: createNetworkInterface({
    uri: 'http://127.0.0.1:5000',
  }),
});

/**
 * Next we add an <ApolloProvider /> component to the root of the component tree.
 * Apollo is pluggable. We can provide our own redux store to customize behavior
 * via the `store` prop.
 */
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root')
);
registerServiceWorker();
