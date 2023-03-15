import React from 'react';
import '../../styles/Nav.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ProLogo from '../../styles/PP_logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createTheme } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';

function NavTabs({ currentPage }) {
  AOS.init();


  function handleLogOut(){
    localStorage.setItem('hasVisited', "")
    auth.logout()
  };


const theme = createTheme({
  palette: {
    primary: {
      main: '#e63947',
    },
    secondary: {
      main: '#1D3557',
    },
  },
});

  return (
    <nav>
      <ul className="nav">
        <li className="logoPlaceholder">
          <img src={ProLogo} alt="ProPairs logo" id="Logo" />
        </li>
        <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="tabOne">
          <Link id="nav-link"
            to={`/user/${auth.getProfile().data._id}`}
            activeclassname={'active'}
          >
            <HomeRoundedIcon theme={theme} fontSize="large" color="primary" id="icon1" /> Home
          </Link>
        </li>
        <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" >
          <Link id="nav-link"
            to={`/user/${auth.getProfile().data._id}/teams`}
          >
            <GroupsRoundedIcon theme={theme} fontSize="large" color="primary" id="icon2" /> My Teams
          </Link>
        </li>
        <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
          <Link id="nav-link"
            to="/users"
          >
            <SearchRoundedIcon theme={theme} fontSize="large" color="primary" id="icon3" /> Search
          </Link>
        </li>
        <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
          <Link id="nav-link"
            to="/createteam"
          >
            <AddCircleOutlineRoundedIcon theme={theme} fontSize="large" color="primary" id="icon4" /> Create Team
          </Link>
        </li>
        <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
          <Link id="nav-link"
            to={`/user/${auth.getProfile().data._id}`}
          >
            <AccountCircleRoundedIcon theme={theme} fontSize="large" color="primary" id="icon5" /> My Profile
          </Link>
        </li>
        <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
          <Link id="nav-link"
            to={`/`}
            onClick={handleLogOut}
          >
            <LogoutRoundedIcon theme={theme} fontSize="large" color="primary" id="icon5" /> Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;


