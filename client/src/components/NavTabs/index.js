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

function NavTabs({ currentPage }) {
  AOS.init();
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
            <HomeRoundedIcon fontSize="large" id="icon1" /> Home
          </Link>
        </li>
        <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" >
          <Link id="nav-link"
            to={`/user/${auth.getProfile().data._id}/teams`}
          >
            <GroupsRoundedIcon fontSize="large" id="icon2" /> My Teams
          </Link>
        </li>
        <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
          <Link id="nav-link"
            to="/users"
          >
            <SearchRoundedIcon fontSize="large" id="icon3" /> Search
          </Link>
        </li>
        <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
          <Link id="nav-link"
            to="/createteam"
          >
            <AddCircleOutlineRoundedIcon fontSize="large" id="icon4" /> Create Team
          </Link>
        </li>
        <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
          <Link id="nav-link"
            to={`/user/${auth.getProfile().data._id}`}
          >
            <AccountCircleRoundedIcon fontSize="large" id="icon5" /> My Profile
          </Link>
        </li>
        <li data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
          <Link id="nav-link"
            to={`/`}
            onClick={() => auth.logout()}
          >
            <LogoutRoundedIcon fontSize="large" id="icon5" /> Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;


