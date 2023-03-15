import React, { useEffect, useState } from 'react';

import NavTabs from '../components/NavTabs';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import '../styles/Profile.css'
import Avatar from '@mui/material/Avatar';
import auth from '../utils/auth';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import Pairings from '../components/Pairings';
import { Box } from '@mui/system';
//profile query here- are we adding pairs/partners/favorites or just seeing partners in the their teamsview?
import { QUERY_SINGLE_USER_WITH_COMPATIBILITY } from '../utils/queries';
import ProfileTeamList from '../components/ProfileTeams';
import { REMOVE_USER } from '../utils/mutations';
import { UPDATE_USER } from '../utils/mutations';

const Profile = () => {
    AOS.init();
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

  // Model Box
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    personality: ''
  })
  useEffect(() => {
    if (!loading) {
      setFormData({
        email: user.email,
        username: user.username,
        personality: user.personality
      })
    }
  }, [loading])

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const [updateUser, { error }] = useMutation(UPDATE_USER)

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updateUser({
        variables: {
          userId: userId,
          username: formData.username,
          email: formData.email,
          personality: formData.personality
        }
      });
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }

    setFormData({
      email: '',
      username: '',
      personality: ''
    })
  }

  console.log(formData)

  if (loading) {
    return (
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <CircularProgress color="inherit" />
      </Box>
    )
  }

  if (!userId) {
    return (
      <Navigate to="/" />
    );
  }
  if (userId !== auth.getProfile().data._id) {
    return (
      <div>
        <div><NavTabs /></div>
        <div className="profileContainer">
          <div className="profile-box">
            <Avatar
              sx={{ width: 112, height: 112 }}>{user.username}</Avatar>
            <h2 className='profileName'>{user.username}</h2>
            <p id="personalityType">{user.personality} </p>
            <p id="email">{user.email}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div><NavTabs /></div>
      <div className="profileContainer">
        <h2 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" id="welcomeBack">Welcome back, {user.username}</h2>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" className="profile-box">
          <Avatar
            sx={{ width: 112, height: 112 }}>{user.username}</Avatar>
          <h2 className='profileName'>{user.username}</h2>
          <p id="personalityType">{user.personality} </p>
          <p id="pemail">{user.email}</p>
          {/* <div className="commentBox">
            <p id="newComment">you are awesome</p>
            <p id="newComment">you are okay</p>
            <p id="newComment">you stink</p>
          </div> */}
          <Button className='delete-btn' sx={{ color: 'white', borderRadius: '15px' }} onClick={handleClickOpen}>Update My Account</Button>
          {/* <FormControl > */}
          <form onSubmit={handleFormSubmit}>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Update Your Profile</DialogTitle>
              <DialogContent>
                <TextField
                  onChange={(event, value) => setFormData({ ...formData, email: event.target.value })}
                  defaultValue={formData.email}
                  autoFocus
                  margin="dense"
                  id="email-update"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  onChange={(event, value) => setFormData({ ...formData, username: event.target.value })}
                  defaultValue={formData.username}
                  autoFocus
                  margin="dense"
                  id="username"
                  label="Username"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                {/* <InputLabel id="personality">Personality</InputLabel> */}
                <Select
                  labelId="personality"
                  id="personality"
                  value={formData.personality}
                  onChange={(event, value) => setFormData({ ...formData, personality: event.target.value })}
                >
                  <MenuItem value="ENFJ">ENFJ</MenuItem>
                  <MenuItem value="ENFP">ENFP</MenuItem>
                  <MenuItem value="ENTJ">ENTJ</MenuItem>
                  <MenuItem value="ENTP">ENTP</MenuItem>
                  <MenuItem value="ESFJ">ESFJ</MenuItem>
                  <MenuItem value="ESFP">ESFP</MenuItem>
                  <MenuItem value="ESTJ">ESTJ</MenuItem>
                  <MenuItem value="ESTP">ESTP</MenuItem>
                  <MenuItem value="INFJ">INFJ</MenuItem>
                  <MenuItem value="INFP">INFP</MenuItem>
                  <MenuItem value="INTJ">INTJ</MenuItem>
                  <MenuItem value="INTP">INTP</MenuItem>
                  <MenuItem value="ISFJ">ISFJ</MenuItem>
                  <MenuItem value="ISFP">ISFP</MenuItem>
                  <MenuItem value="ISTJ">ISTJ</MenuItem>
                  <MenuItem value="ISTP">ISTP</MenuItem>
                </Select>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type='submit' onClick={handleFormSubmit}>Update</Button>
              </DialogActions>
            </Dialog>
          </form>
          {/* </FormControl> */}
          {/* <button onClick={async () => {
            edit = true
            console.log(edit)
            // window.location.reload(true);
          }}>Update My Account</button> */}
          <button className='delete-btn' onClick={async () => {
            await removeUser();
            auth.logout();
            navigate("/");
          }}>Delete My Account</button>
          <div className="userAndTeamBox">
            <div className="userBox1">
              {/* <div>
                <p>iamauser</p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="space"></div>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" className="team-box">
          <h2 id="yourTeams">Your Teams</h2>
          <ProfileTeamList user={user} />
        </div>
      </div>
    </div>
  )
};

export default Profile;



