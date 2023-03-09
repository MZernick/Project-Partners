import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
// import { SEARCH_USER } from '../utils/queries';
import '../styles/CreateTeam.css'
import { ADD_TEAM } from '../utils/mutations';


const CreateTeam = () => {
    // const { loading, data } = useQuery(SEARCH_USER);
    // const userList = data?.tech || [];
    // console.log(userList)
    // const [users, setUsers] = useState([]);
  
    // const [addTeam, { error } ] = useMutation(ADD_TEAM);    

    // const [formData, setFormData] = useState({
    //     title: '',
    //     description: '',
    //     members: ''
    //   });
    //   let navigate = useNavigate();
  

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

      navigate('/me');
    } catch (err) {
      console.error(err);
    }

    setFormData({
        title: '',
        description: '',
        members: ''
    });
  };     

    return(
        <main>
          <NavTabs/>
            <div className='card'>
                <h1 className="headers">Create a New Team</h1>
                <div className="underline"></div>
                <div className="container">
                <form className="form" onSubmit={handleFormSubmit}>
                    <label for="title">Team Title:</label>
                    <input 
                    id="title"
                    type="text"
                    placeholder='Team Title Here....'  
                    className="form-input"
                    value={formData.title}>
                    </input>
                    <div className="form-border"></div>
                    <label for="description">Description:</label>
                    <input 
                    id="description" 
                    type="text"  
                    placeholder='Description Here....'  
                    className="form-input"
                    value={formData.description}>
                    </input>
                    <div className="form-border"></div>
                    <form className="form">
                      <label for="members">Members:</label>
                      {/* add in a map to create list elements based on who you've */}
                      <ul className="list">
                        <li>Amanda</li>
                      </ul>
                      <div className="inline">
                        <input id="members" type="text" placeholder='Add New Member...' className="s-form-input"></input>
                        <button className="s-btn">Add Member</button>
                      </div>  
                    </form>
                    
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