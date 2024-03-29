import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../styles/MyTeam.css';
import auth from '../utils/auth';
import MyTeamsList from '../components/MyTeamsList';
import MyButtonList from "../components/MyButtonList";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import NavTabs from '../components/NavTabs';
import { MY_TEAMS } from '../utils/queries';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyTeam = () => {
AOS.init();
  let navigate = useNavigate();
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
    if (teamsData) {
      setLoading(false);
    }

    data?.user?.teams?.length && setFocusTeam(data?.user?.teams[selectedTeam]);

    // console.log(focusTeam); 

  }, [loading, data])
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return (
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }
  return (
    <div>
      <div >
        <NavTabs />
      </div>
      <div className="teams-page">

        {/* <div className='column'> */}
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className="allteam-card">

          <h1 className="myTeamHeaders">My Teams</h1>
          <div className="team-underline"></div>
          <div className="container">
            <MyButtonList teams={teamsData.teams} setFocusTeam={setFocusTeam} />
          </div>
        </div>

        {/* </div> */}

          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" className="team-cardContainer">
            {teamsData.teams?.length > 0 && (
              <>
                <MyTeamsList focusTeam={focusTeam} />

              </>)}
          </div>

        </div>
      </div>
  )
}

export default MyTeam;