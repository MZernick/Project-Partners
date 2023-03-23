import React, { useState } from 'react';
import NavTabs from '../components/NavTabs'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { SEARCH_USER, QUERY_SINGLE_USER_WITH_COMPATIBILITY } from '../utils/queries';
import '../styles/CreateTeam.css'
import { getCompatibilityandUsername } from '../utils/helpers';
import { ADD_TEAM_AND_MEMBERS } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CreateTeam = () => {
  AOS.init();
  // Search for all users by username
  const { loading, data } = useQuery(SEARCH_USER);
  const userList = data?.users || [];
  // console.log(userList)
  // array that hold options for adding new members
  const userArr = [];


  // searching for the single user logged in so we can run commpatibility
  const data1 = useQuery(QUERY_SINGLE_USER_WITH_COMPATIBILITY, {
    variables: { userId: auth.getProfile().data._id }
  })

  // waits until query is finished, then creates an array of users with thier rating to choose from 
  // if the user data is done loading, run the compatibility checker for each user and the user logged in 
  if (data1.loading) {
    console.log('loading user')
  } else {
    userList.map(user => {
      return userArr.push(getCompatibilityandUsername(data1.data.user, user));
    })
  }

  console.log(userArr)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    members: []
  })

  let navigate = useNavigate();

  const [addTeam, { error }] = useMutation(ADD_TEAM_AND_MEMBERS);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (formData.members.length < 2 || formData.members.length > 5){
      return
    }
    // console.log(formData)
    try {
      const { data } = await addTeam({
        variables: {
          userId: auth.getProfile().data._id,
          title: formData.title,
          description: formData.description,
          members: formData.members
        }
      });

      navigate(`/user/${auth.getProfile().data._id}`)
    } catch (err) {
      console.log(err);
    }

    setFormData({
      title: '',
      description: '',
      members: []
    })
  }

  // console.log(formData)
  return (
    <div>
      <div><NavTabs /></div>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className="bigContainer">
        <div className='card'>
          <h1 className="createheaders">Create a New Team</h1>
          <div className="underline"></div>
          <div className="container">
            <form className="createform" onSubmit={handleFormSubmit}>
              <label htmlFor="title" id="titleLabel">Title</label>
              <input
                name="title"
                id="title"
                type="text"
                placeholder='Team Title Here....'
                className="form-input"
                onChange={handleInputChange}
                value={formData.title}
              >
              </input>
              <div className="form-border"></div>
              <label htmlFor="description" id="descLabel">Description</label>
              <input
                name="description"
                id="description"
                type="text"
                placeholder='Description Here....'
                className="form-input"
                onChange={handleInputChange}
                value={formData.description}
              >
              </input>
              <div className="form-border"></div>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <Stack className="stack">
                  <Autocomplete
                    freeSolo
                    renderOption={(props, option) => (
                      <Box {...props}>
                        <div className='listels'>
                          {`${option.username}`}
                          <div className='spacing'></div>
                          <div className='rating'>
                            {`${option.rating}`}
                          </div>
                        </div>

                      </Box>
                    )}
                    onChange={(event, newValue) => setFormData({ ...formData, members: [auth.getProfile().data._id, ...newValue.map(item => item.value)] })}
                    multiple
                    id="user-autocomplete"
                 
                    getOptionLabel={(option) => `${option.username} ${option.rating}`}
                    options={userArr}
                    className="usersearch"
                    renderInput={(params) => <TextField {...params} variant="standard" label="Add Member..." />}
                  />
                </Stack>
              )}
              <div className="form-border"></div>
              <button
                type='submit'
                className='btn'
              >
                Add Team
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTeam