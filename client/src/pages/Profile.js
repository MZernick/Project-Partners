import React from 'react';

import NavTabs from '../components/NavTabs';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import '../styles/Profile.css'
import Avatar from '@mui/material/Avatar';
import auth from '../utils/auth';
// import Pairings from '../components/Pairings';

//profile query here- are we adding pairs/partners/favorites or just seeing partners in the their teamsview?
import { QUERY_SINGLE_USER_WITH_COMPATIBILITY } from '../utils/queries';
import ProfileTeamList from '../components/ProfileTeams';
import { REMOVE_USER } from '../utils/mutations';

const Profile = () => {
  let { userId } = useParams();
  if (userId === "me") { userId = auth.getProfile().data._id }
  console.log(userId);
  const navigate = useNavigate();
  const [removeUser] = useMutation(REMOVE_USER, {
    variables: { userId },
  });
  const { loading, data } = useQuery(
    QUERY_SINGLE_USER_WITH_COMPATIBILITY,
    {
      variables: { userId: userId },
    }
  );
  console.log(userId);
  console.log(auth.getProfile().data._id);

  const user = data?.user || data?.me || {};
  console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userId) {
    return (
      <Navigate to="/" />
    );
  }

  return (
    <div>
      <div><NavTabs /></div>
      <div className="profileContainer">
        <div className="profile-box">
          <Avatar
            sx={{ width: 112, height: 112 }}>{user.username}</Avatar>
          <h2 className='profileName'>{user.username}</h2>
          <p id="personalityType">{user.personality} </p>
          {/* <div className="commentBox">
            <p id="newComment">you are awesome</p>
            <p id="newComment">you are okay</p>
            <p id="newComment">you stink</p>
          </div> */}
          <button onClick={async () => {
            await removeUser();
            auth.logout();
            navigate("/");
          }}>Delete User</button>
          <div className="userAndTeamBox">
            <div className="userBox1">
              {/* <div>
                <p>iamauser</p>
              </div> */}
            </div>    
         </div>
        </div>
        <div className="space"></div>
        <div className="team-box">
              <h2 id="yourTeams">Your Teams</h2>
              <ProfileTeamList user={user} />
        </div>
      </div>
    </div>
  )
};

export default Profile;



