import React from "react";

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../styles/MyTeam.css';
import auth from '../utils/auth';
import TeamList from '../components/TeamsList';
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
          {/* {teamsData.teams?.length > 0 && (
            <h4 className="allteam-title"> 
            <MyTeamsList teams={teamsData}/> 
            {teamsData.teams[0].title}
            </h4>
            
          )} */}
          </div>
        </div>
      </div>
      <div>
      {teamsData.teams?.length > 0 && (
        <div className="team-card">
          <h1 className="headers">
            Team Title</h1>
          <div className="underline-title"></div>
          <div className="container">
            <div className="members-username"></div>

            <ul className="list-group">
              {/* {teams.members.map(() => ( */}
              <li
              // className="list-group-item" key={teams.members.username}
              >
                {/* NOT REALLY SURE HOW TO STRUCTURE THIS */} Team Member
                {/* {teams.members.username} {teams.members.compatability} */}
              </li>
              {/* ))} */}
            </ul>

          </div>
          <p>
                  <label>Don't have a team?</label> <a id="createteam" rel="noreferrer" href="/createteam" target="_blank">Create a Team</a></p>
        </div>)}
      </div>
    </div>
    </div>
  )
}

export default MyTeam;