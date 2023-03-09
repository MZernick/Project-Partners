import React from 'react';

import NavTabs from '../components/NavTabs';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../styles/Profile.css'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

// import Pairings from '../components/Pairings';

//profile query here- are we adding pairs/partners/favorites or just seeing partners in the their teamsview?
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';

const Profile = () => {
  const { userId } = useParams();

  // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const user = data?.me || data?.user || {};

  // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
  //   return <Navigate to="/me" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div><NavTabs/></div>
      <div class="profileContainer">
  <div class="profile-box">
    <Avatar>h</Avatar>
  <h2 className='profileName'>{user.username}</h2>
      <p id="personalityType">{user.personality} </p>
  <div class="commentBox">
    <p id="newComment">you are awesome</p>
    <p id="newComment">you are okay</p>
    <p id="newComment">you stink</p>
  </div>
  
  </div>
  <div class="team-box">
  <h2 id="yourTeams">Your Teams</h2>
  <div class="team1Container">
    <h3 id="team1">team1</h3>
    <AvatarGroup>

    </AvatarGroup>
    <div class="infoBox1">
    <p>JOSH GRAPH HERE</p>
    </div>
  </div>
  <div class="team2Container">
    <h3 id="team2">team2</h3>
    <AvatarGroup>
        
    </AvatarGroup>
    <div class="infoBox2">
    <p>JOSH GRAPH HERE</p>
    </div>
  </div>
  <div class="team3Container">
    <h3 id="team3">team3</h3>
    <AvatarGroup>
        
    </AvatarGroup>
    <div class="infoBox3">
    <p>JOSH GRAPH HERE</p>
    </div>
  </div>
  </div>
</div>

    </div>
  );
};

export default Profile;

{/* MIGHT ADD PAIRINGS TO PROFILE
<div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
<Pairings userId={user._id} />
</div> */}
