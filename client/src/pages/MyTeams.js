import React from "react";

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../styles/MyTeam.css';
import auth from '../utils/auth';
import MyTeamsList from '../components/MyTeamsList';
import NavTabs from '../components/NavTabs';
import { QUERY_SINGLE_USER_WITH_COMPATIBILITY, MY_TEAMS } from '../utils/queries';
//IMPORT ALL TEAMS QUERY

const MyTeam = () => {

  const { loading, data } = useQuery(
    MY_TEAMS,
    {
      variables: {userId: auth.getProfile().data._id},
    }
  );
  const teamsData = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(teamsData);
  console.log(teamsData.teams);

  if (!teamsData?._id) {
    return (
      <h4>
        You need to be logged in to see your teams page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }
  return (
    <div>
      <div >
        <NavTabs />
      </div>
      <div className="signup-page">
      <div className='column'>
        <div className="allteam-card">
          <h1 className="headers">My Teams</h1>
          <div className="underline-title"></div>
          <div className="container">
          {teamsData.teams[0].title}
          {teamsData.teams?.length > 0 && (
            <p className="allteam-title"> 
            </p>     
          )}
          </div>
        </div>
      </div>
      <div>
      {teamsData.teams?.length > 0 && (
        <div className="team-card">
         
            

           <MyTeamsList teams={teamsData}/> 
          <p>
                  <label>Don't have a team?</label> <a id="createteam" rel="noreferrer" href="/createteam" target="_blank">Create a Team</a></p>
        </div>)}
      </div>
    </div>
    </div>
  )
}

export default MyTeam;