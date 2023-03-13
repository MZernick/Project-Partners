import React from 'react';
import '../../styles/Nav.css';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav>
    <ul className="nav">
      <li id="logoPlaceholder">
        <p>
          INSERT LOGO HERE
        </p>
      </li>
      <li>
        <a id="nav-link"
          href="/"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          {/* <HomeRoundedIcon fontSize="large" id="icon1" /> */}
        </a>
      </li>
      <li>
        <a id="nav-link"
          href="/user/:userId/teams"
          onClick={() => handlePageChange('MyTeams')}
          className={currentPage === 'MyTeams' ? 'nav-link active' : 'nav-link'}
        >
           {/* <GroupsRoundedIcon fontSize="large" id="icon2"/> */}
        </a>
      </li>
      <li>
        <a id="nav-link"
          href="/users"
          onClick={() => handlePageChange('UserSearch')}
          className={currentPage === 'UserSearch' ? 'nav-link active' : 'nav-link'}
        >
           {/* <SearchRoundedIcon fontSize="large" id="icon3"/> */}
          </a>
          </li>
          <li>
        <a id="nav-link"
          href="/createteam"
          onClick={() => handlePageChange('CreateTeam')}
          className={currentPage === 'CreateTeam' ? 'nav-link active' : 'nav-link'}
        >
         {/* <AddCircleOutlineRoundedIcon fontSize="large" id="icon4"/> */}
        </a>
      </li>
      <li >
        <a id="nav-link"
          href="/user/:userId"
          onClick={() => handlePageChange('Profile')}
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
           {/* <AccountCircleRoundedIcon fontSize="large" id="icon5"/> */}
        </a>
      </li>
    </ul>
    </nav>
  );
}

export default NavTabs;


