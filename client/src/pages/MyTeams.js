import React from "react";

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import TeamList from '../components/TeamsList';
import NavTabs from '../components/NavTabs';

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const MyTeam = () => {
    const { userId } = useParams();

    const { loading, data } = useQuery(
      userId ? QUERY_SINGLE_PROFILE : QUERY_ME,
      {
        variables: { userId: userId },
      }
    );
    const user = data?.me || data?.user || {};
  
    const profile = data?.me || data?.user || {};
    if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
        return <Navigate to="/me" />;
      }
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (!user?.name) {
        return (
          <h4>
            You need to be logged in to see your teams page. Use the navigation
            links above to sign up or log in!
          </h4>
        );
      }
    return (
        <div>
          <NavTabs/>
            <h1>MyTeams:</h1>
            {user.teams?.length > 0 && (
        <TeamList
          teams={user.teams}
          isLoggedInUser={!userId && true}
        />
      )}
        </div>
    )
}

export default MyTeam;