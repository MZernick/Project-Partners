import React, { useState, useEffect } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../styles/MyTeam.css';
import auth from '../utils/auth';
import MyTeamsList from '../components/MyTeamsList';
import MyButtonList from "../components/MyButtonList";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
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
  // setSelectedTeam(0)
  data?.user?.teams?.length && setFocusTeam(data?.user?.teams[selectedTeam]);
  
  // console.log(focusTeam); 

}, [loading, data])
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
    );
  }
  return (
    <div>
      <div >
        <NavTabs />
      </div>
      <div className="signup-page">
        {/* <div className='column'> */}
          <div className="allteam-card">
            <h1 className="headers">My Teams</h1>
            <div className="underline-title"></div>
            <div className="container">
              <MyButtonList teams={teamsData.teams} setFocusTeam={setFocusTeam}/>
            </div>
          </div>
        {/* </div> */}
        <div className="bottomContainer">
        <div className="team-cardContainer">
          {teamsData.teams?.length > 0 && (
            <div className="team-card">
              <MyTeamsList focusTeam={focusTeam} />
              <p id="dontHaveTeam">Don't have a team?</p>
              <a id="createTeam" rel="noreferrer" href="/createteam" target="_blank">Create a Team</a>
            </div>)}
        </div>
        <div className="goToSearchContainer">
            <div className="searchCard">
                <p id="dontHaveSearch">Need to search?</p>
                <a id="createSearch" rel="noreferrer" href="/createteam" target="_blank">Go to Search</a>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MyTeam;