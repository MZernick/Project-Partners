import React, { useEffect, useState } from 'react';
import NavTabs from '../components/NavTabs'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { SINGLE_TEAM, QUERY_SINGLE_USER_WITH_COMPATIBILITY, SEARCH_USER } from '../utils/queries';
import '../styles/CreateTeam.css'
import { getCompatibilityandUsername } from '../utils/helpers';
import { UPDATE_TEAM } from '../utils/mutations';
import { useNavigate, useParams } from 'react-router-dom';
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';

const EditTeam = () => {
  // getting teamId from the URL
  const { teamId } = useParams();

  // getting the signle team based on the teamID from the URL
  const  data2 = useQuery(SINGLE_TEAM, {
    variables: {teamId: teamId}
  })

  // teamData that is returned
  const teamData = data2 || [];

  // Search for all users to run in the compatibility checker
  const { loading, data } = useQuery(SEARCH_USER);
  const userList = data?.users || [];

  // empty array that will hold all the user options that the user can choose from
  const userArr = [];

  // Search for the user who is logged in to run in the compatibility checker
  const data1 = useQuery(QUERY_SINGLE_USER_WITH_COMPATIBILITY, {
    variables: {userId: auth.getProfile().data._id}
  })
  // user data
  const user = data1 || [];

  // if the user data is done loading, run the compatibility checker for each user and the user logged in 
  if(data1.loading) {
    console.log('loading user')
  } else {
    console.log(user)
    userList.map(user => {
      return userArr.push(getCompatibilityandUsername(data1.data.user, user));
    })
  }

  // checking the userList has come in
  if(!loading) {
    console.log(userList)
    // console.log(userArr)
  } else {
    console.log('Loading Users...')
  }

  // Empty array to hld the team members already on your team
  const membersInTeam = []

  // when team data and user logged in data is done loading, run the compatibility checker on the members you already have in your team
  if(data2.loading || data1.loading) {
    console.log('loading team info')
  } 
  else {
    teamData.data.team.members.map(member => {
        return membersInTeam.push(getCompatibilityandUsername(data1.data?.user, member))
      })
  }



// itializing the formData
 const [formData, setFormData] = useState({
    title: '', 
    description: '' , 
    members: []
 })


//  will pre-populate the existing data in the team form after the team query has run
useEffect(() => {
  if(!data2.loading) {
    setFormData({
    title: teamData.data.team.title, 
    description: teamData.data.team.description, 
    members: teamData.data.team.members.map(member => member._id),
  })}
},[data2.loading])

  let navigate = useNavigate();

  const [updateTeam, { error }] = useMutation(UPDATE_TEAM);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)
    try {
      const { data } = await updateTeam({
        variables: {
          teamId: teamId,
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

 console.log(formData)

if(loading || data2.loading || data1.loading) {
    return(
      <Box sx={{ position:'absolute', top:'50%', left: '50%', transform:'translate(-50%, -50%)' }}>
      <CircularProgress color="inherit"  />
    </Box>
    )
}
    return(
      <main>
        <NavTabs />
        <div className='card'>
                <h1 className="headers">Edit Team</h1>
                <div className="underline"></div>
                <div className="container">
                <form className="form" onSubmit={handleFormSubmit}>
                    <label for="title">Team Title:</label>
                    <input 
                    name="title"
                    id="title"
                    type="text"
                    placeholder='Team Title Here....'  
                    className="form-input"
                    onChange={ handleInputChange }
                    value={formData.title}
                    >
                    </input>
                    <div className="form-border"></div>
                    <label for="description">Description:</label>
                    <input 
                    name="description"
                    id="description" 
                    type="text"  
                    placeholder='Description Here....'  
                    className="form-input"
                    onChange={ handleInputChange }
                    value={formData.description}
                    >
                    </input>
                    <div className="form-border"></div>  
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
                            onChange = { (event, newValue) => setFormData({...formData, members: [...newValue].map(item => item.value)})}
                            multiple
                            id="user-autocomplete"
                            defaultValue={membersInTeam}
                            getOptionLabel={(option) => `${option.username} ${option.rating}` }
                            options={userArr}
                            className="usersearch"
                            renderInput={(params) => <TextField {...params} variant="standard" label="Add Member..."/>}
                          />
                           </Stack> 
                      
                     <div className="form-border"></div>
                    <button
                    type='submit'
                    className='btn'
                    >
                        Update Team
                    </button>
                </form>
              </div>
        </div>
      </main>
    )
}
export default EditTeam