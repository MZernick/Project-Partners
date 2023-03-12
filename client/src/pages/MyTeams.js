import React from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../styles/MyTeam.css';
import auth from '../utils/auth';
import MyTeamsList from '../components/MyTeamsList';
import TeamsList from "../components/TeamsList";
import NavTabs from '../components/NavTabs';
import { MY_TEAMS } from '../utils/queries';

const MyTeam = () => {

  const { loading, data } = useQuery(
    MY_TEAMS,
    {
      variables: { userId: auth.getProfile().data._id },
    }
  );
  const teamsData = data?.me || data?.user || {};
  console.log(teamsData);
  console.log(teamsData.teams);
  //selectedTeam  will be set by user click or default to 0;
  // const selectedTeam = 0;
  // const focusTeam = teamsData.teams[selectedTeam];
  // console.log(focusTeam);
  if (loading) {
    return <div>Loading...</div>;
  }

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
              <TeamsList teams={teamsData.teams} />
            </div>
          </div>
        </div>
        <div>
          {teamsData.teams?.length > 0 && (
            <div className="team-card">
              <MyTeamsList focusTeam={focusTeam} />
              <p>
                <label>Don't have a team?</label> <a id="createteam" rel="noreferrer" href="/createteam" target="_blank">Create a Team</a></p>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default MyTeam;