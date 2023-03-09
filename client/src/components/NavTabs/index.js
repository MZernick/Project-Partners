import React from 'react';
import '../../styles/Nav.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav>
    <ul className="nav">
      <li>
        <a id="nav-link"
          href="/"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li >
        <a id="nav-link"
          href="/me"
          onClick={() => handlePageChange('Profile')}
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </a>
      </li>
      <li>
        <a id="nav-link"
          href="/user/:userId/teams"
          onClick={() => handlePageChange('MyTeams')}
          className={currentPage === 'MyTeams' ? 'nav-link active' : 'nav-link'}
        >
          My Teams
        </a>
      </li>
      <li>
        <a id="nav-link"
          href="/users"
          onClick={() => handlePageChange('UserSearch')}
          className={currentPage === 'UserSearch' ? 'nav-link active' : 'nav-link'}
        >
          Search Users
          </a>
          </li><li>
        <a id="nav-link"
          href="/createteam"
          onClick={() => handlePageChange('CreateTeam')}
          className={currentPage === 'CreateTeam' ? 'nav-link active' : 'nav-link'}
        >
        Create Team
        </a>
      </li>
    </ul>
    </nav>
  );
}

export default NavTabs;


