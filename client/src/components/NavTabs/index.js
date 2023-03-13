import React from 'react';
import '../../styles/Nav.css';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function NavTabs({ currentPage }) {
  return (
    <nav>
      <ul className="nav">
        <li id="logoPlaceholder">
          <p>
            INSERT LOGO HERE
          </p>
        </li>
        <li>
          <Link id="nav-link"
            to="/"
            activeclassname={'active'}
          >Home
            {/* <HomeRoundedIcon fontSize="large" id="icon1" /> */}
          </Link>
        </li>
        <li>
          <Link id="nav-link"
            to={`/user/${auth.getProfile().data._id}/teams`}
            className={currentPage === 'MyTeams' ? 'nav-link active' : 'nav-link'}
          >My Teams
            {/* <GroupsRoundedIcon fontSize="large" id="icon2" /> */}
          </Link>
        </li>
        <li>
          <Link id="nav-link"
            to="/users"
            className={currentPage === 'UserSearch' ? 'nav-link active' : 'nav-link'}
          >Search Users
            {/* <SearchRoundedIcon fontSize="large" id="icon3" /> */}
          </Link>
        </li>
        <li>
          <Link id="nav-link"
            to="/createteam"
            className={currentPage === 'CreateTeam' ? 'nav-link active' : 'nav-link'}
          >Create Team
            {/* <AddCircleOutlineRoundedIcon fontSize="large" id="icon4" /> */}
          </Link>
        </li>
        <li >
          <Link id="nav-link"
            to={`/user/${auth.getProfile().data._id}`}
            className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
          >My Profile
            {/* <AccountCircleRoundedIcon fontSize="large" id="icon5" /> */}
          </Link>
        </li>
        <li >
          <Link id="nav-link"
            to={`/`}
            onClick={() => auth.logout()}
            className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
          >Logout
            {/* <AccountCircleRoundedIcon fontSize="large" id="icon5" /> */}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;


