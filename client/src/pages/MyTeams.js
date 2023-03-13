import React, { useState, useEffect } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../styles/MyTeam.css';
import auth from '../utils/auth';
import MyTeamsList from '../components/MyTeamsList';
import TeamsList from "../components/TeamsList";
import NavTabs from '../components/NavTabs';
import { MY_TEAMS } from '../utils/queries';

const MyTeam = () => {
  const [focusTeam, setFocusTeam] = useState({});
  const [teamsData, setTeamsData] = useState({});
  const [selectedTeam, setSelectedTeam] = useState(0);
  const [loading, setLoading] = useState(true);
  const { data } = useQuery(
    MY_TEAMS,
    {
      variables: { userId: useParams().userId },
    }
  );
  useEffect(() => {
  setTeamsData(data?.me || data?.user || {});
  console.log(data);
  // console.log(teamsData.teams);
  if (teamsData){
    setLoading(false);
  }
  // auth.getProfile().data._id "640f39aab4c41e776393b01c"
  
  //selectedTeam  will be set by user click or default to 0;
  setSelectedTeam(0)
  data?.user?.teams?.length && setFocusTeam(data?.user?.teams[selectedTeam]);
  
  // console.log(focusTeam); 

}, [loading, data])
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
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