import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import PortfolioContainer from "./components/PortfolioContainer";
import './App.css';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

function App() {
return (
    <ApolloProvider client={client}>
      <div>
      <PortfolioContainer />;
      </div>
    </ApolloProvider>
  ); 
}
export default App;

