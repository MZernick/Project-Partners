import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import MyTeam from './pages/MyTeams';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreateTeam from './pages/CreateTeam';
import Signup from './pages/Signup';
import UserSearch from './pages/UserSearch';
import EditTeam from './pages/EditTeam';


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

  React.useEffect(() =>{
    //check if the user has visited site before
    const hasVisited = localStorage.getItem('hasVisited');
    if(!hasVisited){
      //if not, redirect to landing page and set "hasVisited" flag
      localStorage.setItem('hasVisited', true);
      window.location.href ='/#/landing';
    }
  }, []);

return (
    <ApolloProvider client={client}>
      <Router>
      <div >
      <div >
        <Routes>
          <Route 
                path="/landing" 
                element={<Home/>}/>
          <Route 
                path="/" 
                element={<Signup />} 
              />
          <Route 
                path="/user/:userId"
                element={<Profile />}
              />
          <Route 
                path="/user/:userId/teams" 
                element={<MyTeam />}
              />
          <Route 
                path="/users" 
                element={<UserSearch />}
                />
          <Route path="/createteam" 
                element={<CreateTeam />}
              />
        <Route path="/:teamId/editteam" 
                element={<EditTeam />}
              />
        <Route render={() => <h1>Wrong Page!</h1>} />
        </Routes>
      </div>
      </div>
      </Router>
    </ApolloProvider>
  ); 
}
export default App;

