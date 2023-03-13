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
import ProLogo from '../../styles/PP_logo.png'

function NavTabs({ currentPage }) {
  return (
    <nav>
      <ul className="nav">
        <li className="logoPlaceholder">
          <img src={ProLogo} alt="ProPairs logo" id="Logo" />
        </li>
        <li>
          <Link id="nav-link"
            to="/"
            activeclassname={'active'}
          >
            <HomeRoundedIcon fontSize="large" id="icon1" />
          </Link>
        </li>
        <li>
          <Link id="nav-link"
            to={`/user/${auth.getProfile().data._id}/teams`}
          >
            <GroupsRoundedIcon fontSize="large" id="icon2" />
          </Link>
        </li>
        <li>
          <Link id="nav-link"
            to="/users"
          >
            <SearchRoundedIcon fontSize="large" id="icon3" />
          </Link>
        </li>
        <li>
          <Link id="nav-link"
            to="/createteam"
          >
            <AddCircleOutlineRoundedIcon fontSize="large" id="icon4" />
          </Link>
        </li>
        <li >
          <Link id="nav-link"
            to={`/user/${auth.getProfile().data._id}`}
          >
            <AccountCircleRoundedIcon fontSize="large" id="icon5" />
          </Link>
        </li>
        <li >
          <Link id="nav-link"
            to={`/`}
            onClick={() => auth.logout()}
          >
            <LogoutRoundedIcon fontSize="large" id="icon5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;


