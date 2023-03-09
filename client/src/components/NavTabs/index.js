import React from 'react';
import '../../styles/Nav.css';

// import Auth from '../utils/auth';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  // if (Auth.loggedIn()=== true)
  return (
    <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a id="nav-link"
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Profile"
          onClick={() => handlePageChange('Profile')}
          // Check to see if the currentPage is `Profile`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#MyTeams"
          onClick={() => handlePageChange('MyTeams')}
          // Check to see if the currentPage is `MyTeams`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'MyTeams' ? 'nav-link active' : 'nav-link'}
        >
          My Teams
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#UserSearch"
          onClick={() => handlePageChange('UserSearch')}
          // Check to see if the currentPage is `UserSearch`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'UserSearch' ? 'nav-link active' : 'nav-link'}
        ></a>
          Search Users
          <a
          href="#CreateTeam"
          onClick={() => handlePageChange('CreateTeam')}
          // Check to see if the currentPage is `JoinTeam`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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


