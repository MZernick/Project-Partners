import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MyTeams from './pages/MyTeams';
import JoinTeam from './pages/JoinTeam';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    if (currentPage === 'MyTeams') {
      return <MyTeams />;
    }
    if (currentPage === 'JoinTeam') {
        return <JoinTeam />;
      }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

