import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import MyTeam from './pages/MyTeams';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreateTeam from './pages/CreateTeam';
import Signup from './pages/Signup';
import UserSearch from './pages/UserSearch';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
return (
    <ApolloProvider client={client}>
      <Router>
      <div >
      <div >
        <Routes>
          <Route 
                path="/" 
                element={<Home/>}/>
          <Route 
                path="/signup" 
                element={<Signup />} 
              />
          <Route 
                path="/me"
                element={<Profile />}
              />
          <Route 
                path="/user/:userId/teams" 
                element={<MyTeam />}
              />
          <Route path="/jointeam" 
                element={<CreateTeam />}
              />
        </Routes>
      </div>
      </div>
      </Router>
    </ApolloProvider>
  ); 
}
export default App;

