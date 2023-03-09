import React from "react";

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../styles/MyTeam.css'

import TeamList from '../components/TeamsList';
import NavTabs from '../components/NavTabs';

import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
//IMPORT ALL TEAMS QUERY

const MyTeam = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );
  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see your teams page. Use the navigation
  //       links above to sign up or log in!
  //     </h4>
  //   );
  // }
  return (
    <div>
      <div className="signup-page">
        <NavTabs />
      </div>
      <div className='column'>
        <div className="allteam-card">
          <h1 className="headers">My Teams</h1>
          <div className="underline-title"></div>
          <div className="container">
          Team names
          {user.teams?.length > 0 && (
            <h4 className="allteam-title"> 
            <TeamList teams={user.teams}/> 
            </h4>
            
          )}
          </div>
        </div>
      </div>
      <div>
        <div className="team-card">
          <h1 className="headers">
            {/* {teams.title} */}
            Title</h1>
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
        </div>
      </div>
    </div>
  )
}

export default MyTeam;