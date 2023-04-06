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
import Avatarimage from '../styles/Profilemock1.png';
// import Pairings from '../components/Pairings';
import { Box } from '@mui/system';
import { QUERY_SINGLE_USER_WITH_COMPATIBILITY } from '../utils/queries';
import ProfileTeamList from '../components/ProfileTeams';
import { REMOVE_USER } from '../utils/mutations';
import { UPDATE_USER } from '../utils/mutations';
import CommentsBox from '../components/CommentsBox'
import TextareaAutosize from '@mui/base/TextareaAutosize';

import { ADD_COMMENT } from '../utils/mutations';
import { useAuth, upload } from '../firebase';
import {ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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

  const [commentData, setCommentData] = useState('')

  const [addComment, { error1 }] = useMutation(ADD_COMMENT)

  const handleCommentSubmit = async (event) => {
    event.preventDefault
    try {
      const { data } = await addComment({
        variables: {
          userId: userId,
          commenterId: auth.getProfile().data._id,
          commentBody: commentData
        }
      })
      window.location.reload(true);
    }
    catch (err) {
      console.log(err);
    }

    setCommentData('')
  }

  // update user form
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

// below is firebase method
// const currentUser = useAuth();
// const [photo, setPhoto] = useState(null);
// const [imgLoading, setImgLoading] = useState(false);
// const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");

// function handleChange(e) {
//   if (e.target.files[0]) {
//     setPhoto(e.target.files[0])
//   }
// }

// function handleClick() {
//   upload(photo, currentUser, setImgLoading);
// }


// useEffect(() => {
//   if (currentUser?.photoURL) {
//     setPhotoURL(currentUser.photoURL);
//   }
// }, [currentUser])

// Avatar image upload
// const [image, setImage] = useState(null);
// const [url, setUrl] = useState(null);

// const handleImageChange = (e) => {
//   if(e.target.files[0]) {
//     setImage(e.target.files[0]);
//   }
// }

// console.log(image);

// Submitting the avatar image request
// const handleSubmit = () => {
//   const imageRef = ref(storage, 'image');
//   uploadBytes(imageRef, image).then(() => {
//     getDownloadURL(imageRef).then((url) => {
//       setUrl(url);
//       localStorage.setItem('profilePicture', url); // Set the URL to local storage
//     }).catch(error => {
//       console.error(error.message, "error getting the image url. try again.");
//     });
//     setImage(null);
//   }).catch(error => {
//     console.log(error.message)
//   })
// };

  console.log(commentData)

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
              sx={{ width: 112, height: 112, bgcolor: '#1D3557' }}
              src={Avatarimage}>{user.username}</Avatar>
            <h2 className='profileName'>{user.username}</h2>
            <p id="personalityType">{user.personality} </p>
            <p id="pemail">{user.email}</p>
            <Button className='delete-btn' sx={{ color: 'white', borderRadius: '15px' }} onClick={handleClickOpen}>Add A comment</Button>
            <form onSubmit={handleCommentSubmit}>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ width: '50vw' }}>Add a comment for {user.username}</DialogTitle>
                <DialogContent>
                  <TextareaAutosize
                    minRows={10}
                    onChange={(event, value) => setCommentData(event.target.value)}
                    autoFocus
                    margin="dense"
                    id="commentBody"
                    label="Comment"
                    type="text"
                    style={{ width: '100%' }}
                    variant="standard"
                    placeholder='Enter Comment Here...'
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type='submit' onClick={handleCommentSubmit}>Post</Button>
                </DialogActions>
              </Dialog>
            </form>

          </div>
          <div>
            <CommentsBox user={user} />
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
            sx={{ width: 156, height: 156, bgcolor: '#1D3557' }}
            src={Avatarimage}>{user.username}</Avatar>
              {/* <TextField
              id="avatar"
              label="Avatar"
              onChange={handleChange} 
              type="file"
              margin="dense"
              fullWidth
              variant="standard"
              autoFocus/>
              <DialogActions>
              <Button disabled={imgLoading || !photo } onClick={handleClick}>Upload</Button>
              </DialogActions> */}
          <h2 className='profileName'>{user.username}</h2>
          <p id="personalityType">{user.personality} </p>
          <p id="pemail">{user.email}</p>
          <Button className='delete-btn' sx={{ color: 'white', borderRadius: '15px' }} onClick={handleClickOpen}>Update My Account</Button>
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
          <button className='delete-btn' onClick={async () => {
            await removeUser();
            auth.logout();
            navigate("/");
          }}>Delete My Account</button>
          {/* <div className="userAndTeamBox">
            <div className="userBox1">
            </div>
          </div> */}
        </div>
        <div className="space"></div>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" className="team-box">
          <h2 id="yourTeams">Your Teams</h2>
          <ProfileTeamList user={user} />
        </div>
        <div>
          <CommentsBox user={user} />
        </div>
      </div>
    </div>
  )
};

export default Profile;