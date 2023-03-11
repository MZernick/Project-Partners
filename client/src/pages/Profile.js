import React from 'react';

import NavTabs from '../components/NavTabs';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../styles/Profile.css'
import Avatar from '@mui/material/Avatar';
import auth from '../utils/auth';
// import Pairings from '../components/Pairings';

//profile query here- are we adding pairs/partners/favorites or just seeing partners in the their teamsview?
import { QUERY_SINGLE_USER_WITH_COMPATIBILITY, MY_TEAMS } from '../utils/queries';
import ProfileTeamList from '../components/ProfileTeams';

const Profile = () => {
  // const { userId } = useParams();
  const { loading, data } = useQuery(
     QUERY_SINGLE_USER_WITH_COMPATIBILITY,
    {
      variables: {userId: auth.getProfile().data._id} ,
    }
  );

  // 
  // const {} =useQuery(MY_TEAMS);
  //const teams = data?.teams || [];

const user = data?.me || data?.user || {};
console.log(user);

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
     <Avatar 
     sx={{ width: 112, height: 112 }}>{user.username}</Avatar>
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


  <ProfileTeamList user={user}/>
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

