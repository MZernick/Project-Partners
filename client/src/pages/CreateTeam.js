import React from "react";
const { User } = require('server\models\User.js');
import { Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import NavTabs from '../components/NavTabs';


const createTeam = () =>{
// handle user search: state for search field data
    const [searchInput, setSearchInput] = useState('');

// create state to hold search result values
  const [userIds, setUserIds] = useState(getUserIds());

    // handle  button click to add to team
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if(!searchInput) {
            return false;
          }

          try {
// PLACEHOLDER NEEDS UPDATE: "searchUsers" does not exist yet. Create call function that searches backend for the email enterred.
            const response = await searchUsers(searchInput);
            if (!response.ok) {
                throw new Error('something went wrong!');
              }
          
          
          const { users } = await resonse.json();

          const searchResult = users.map((user) => ({
          username: user.username,      
          email: user.email,
          personality: user.personality,
          combatibility: user.combatibility
          })
          )
          setUserIds(searchResult);
          setSearchInput('');
        } catch (err) {
            console.error(err);
          }
      };

    return (
        <>
         <NavTabs/>
        <div>
            <h1>
            Model a team to see compatibility.
        </h1>
        {/* Display a user and their personality */}
        <Container>
          <h1>Search for project partners!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a user by email'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>

        <Container>


         <div key={User._id} className="box">
         <p className="subtitle">{User.username}</p>
         <p>{User.personality}</p>
         <button>Add to team</button>
        
       </div>
       </Container>
       </div>
       </>
    )
}

export default createTeam; 