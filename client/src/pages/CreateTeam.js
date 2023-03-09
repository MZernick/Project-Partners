import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavTabs from '../components/NavTabs';
import { useMutation, useQuery } from '@apollo/client';
import { SEARCH_USER } from '../utils/queries';
import { QUERY_ME } from '../utils/queries';
import { QUERY_SINGLE_USER } from '../utils/queries';
import '../styles/CreateTeam.css'
import { ADD_TEAM } from '../utils/mutations';
import { getCompatibilityandUsername } from '../utils/helpers';
import auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
// import { Params } from 'react-router-dom';

const CreateTeam = () => {

// const { _id } = useParams();

    const { loading, data } = useQuery(SEARCH_USER);
    const userList = data?.users || [];
    const userArr = userList.map((user) => {
      return [{username: user.username, personality: user.personality}]
    })
    
     const usernameArr = []
    //   userList.map((user) => {
    //     usernameArr.push({label:`${user.username} ${user.personality}`}) //add in the rating after the name
    //   // return [user.username]
    // })
    // console.log(usernameArr)
    // const { userId } = useParams();

 
    // const userId= auth.getProfile().data._id
  // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  // const { loading1, data1 } = useQuery(
  //   singleuserId ? QUERY_SINGLE_USER: QUERY_ME,
  //   {
  //     variables: { userId: singleuserId },
  //   }
  // );

  // console.log()

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  // const user = data1?.me || data1?.user || {};
  //   console.log(user)
    // const {loading1, data1 } = useQuery(QUERY_ME);
    // const user = data1?.me || {};

    // console.log(user)


console.log(auth.getProfile().data._id)
   

    const {data1} = useQuery(QUERY_SINGLE_USER, {
      variables: {userId: auth.getProfile().data._id}   
    });

    const userdata= data1?.user || {};
  // console.log(data1)
    // loading1 ? console.log('loading...') : 
    console.log(userdata)


    // const { loading1, data1 } = useQuery(QUERY_ME);
    // const loggedInUser = data1?.username || [];

    // console.log(loggedInUser)
    // console.log(userArr)
    // const addMemberBtn = (event) => {
    //   event.preventDefault();
    //   newmember = event.value.target
    //   console.log(newmember)

    // }
const user1 = {
  username: "john",
      personality: "ENTJ",
      compatibility: [
        {
          type: "INFP",
          rating: 100
        },
        {
          type: "ENFP",
          rating: 80
        },
        {
          type: "INFJ",
          rating: 80
        },
        {
          type: "ENFJ",
          rating: 80
        },
        {
          type: "INTJ",
          rating: 80
        },
        {
          type: "ENTJ",
          rating: 80
        },
        {
          type: "INTP",
          rating: 100
        },
        {
          type: "ENTP",
          rating: 80
        },
        {
          type: "ISFP",
          rating: 60
        },
        {
          type: "ESFP",
          rating: 60
        },
        {
          type: "ISTP",
          rating: 60
        },
        {
          type: "ESTP",
          rating: 60
        },
        {
          type: "ISFJ",
          rating: 60
        },
        {
          type: "ESFJ",
          rating: 60
        },
        {
          type: "ISTJ",
          rating: 60
        },
        {
          type: "ESTJ",
          rating: 60
        }
      ]
    }



    userList.map(user => {
      return usernameArr.push(getCompatibilityandUsername(user1, user))
    })

    // console.log(usernameArr)

    const [users, setUsers] = useState([]);
  
    const [addTeam, { error } ] = useMutation(ADD_TEAM);    

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        members: ''
      });
      let navigate = useNavigate();
  

 const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addTeam({
        variables: { ...formData },
      });
      console.log(data)
      // navigate('/me');
    } catch (err) {
      console.error(err);
    }

    setFormData({
        title: '',
        description: '',
        members: ''
    });

  };     

  // const ref = useRef(null);

//   const [items, setItems] = useState([]);
//   const [input, setInput] = useState('');
  
//   const handleDropdownChange =(e) => {
//     setInput(e.target.value);
//   };

// const handleDropdownClick = (e) => {
//   e.preventDefault()
//   setItems([...items, input]);
//   setInput('');
//   // ref.current.focus()
// };

  // const [input, setItems]

    return(
        <main>
          <NavTabs/>
            <div className='card'>
                <h1 className="headers">Create a New Team</h1>
                <div className="underline"></div>
                <div className="container">
                <form className="form">
                    <label for="title">Team Title:</label>
                    <input 
                    id="title"
                    type="text"
                    placeholder='Team Title Here....'  
                    className="form-input"
                    onChange={ handleInputChange }
                    value={formData.title}>
                    </input>
                    <div className="form-border"></div>
                    <label for="description">Description:</label>
                    <input 
                    id="description" 
                    type="text"  
                    placeholder='Description Here....'  
                    className="form-input"
                    onChange={ handleInputChange }
                    value={formData.description}>
                    </input>
                    <div className="form-border"></div>
                    {/* <form className="form" onSubmit={ handleFormSubmit }> */}
                      {/* <label for="members">Members:</label> */}
                      {/* <ul className="list">
                      {items.map(item => <li>{item}</li>)}
                      </ul> */}
                       {/* <div className="inline"> */}
                      {/* add in a map to create list elements based on who you've */}
                      {loading ? (
                          <div>Loading...</div>
                           ) : (
                            <Stack className="stack">
                            <Autocomplete
                            // ref={ref}
                            multiple
                            // onChangeText={handleDropdownChange}
                            // value={input}
                            getOptionLabel={(option) => `${option.username} ${option.rating}`}
                            // disablePortal
                            // onChange={ handleInputChange }
                            id="user-autocomplete"
                            options={usernameArr}
                            className="usersearch"
                            renderInput={(params) => <TextField {...params} variant="standard" label="Add Member..." />}
                          />
                           </Stack>  
                        // <select name="members" onChange={handleInputChange}>
                        //   {userList.map((user) => {
                        //     return (
                        //  <option key={user._id} value={user.username}>
                        //     {user.username}
                        //   </option>
                        // );
                        
                      //     })}
                      // </select>
                      )}
                     
                     
                        {/* <input id="members" type="text" placeholder='Add New Member...' className="s-form-input"></input> */}
                        {/* <button onClick={handleDropdownClick} type="submit" className="s-btn">Add Member</button> */}
                      {/* </div>  
                    </form> */}
                    
                    {/* <div>
                      <form onSubmit={handleSearchSubmit}>
                        <input type="text" placeholder="Search users" onChange={handleSearch} />
                        <button type="submit">Search</button>
                      </form>
                      {renderUsers()}
                    </div> */}
                    {/* <form>

                    </form>
                    <input 
                    id="members" 
                    type="text" 
                    start 
                    className="form-input"
                    placeholder='Enter Members Here'
                    value={formData.members}>
                    </input> */}
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
        </main>
    )
}

export default CreateTeam