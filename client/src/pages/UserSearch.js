import React, { useState } from "react";
import NavTabs from '../components/NavTabs';
import { useQuery } from '@apollo/client';
import { SEARCH_USER, SEARCH_EMAIL } from '../utils/queries';

function UserSearch() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

  const {loading1, data1} = useQuery (SEARCH_USER);
  const userList = data1?.users||[];
const userEmailArray = userList.map((user)=> {
  return user.email
});

console.log(userEmailArray);

  // const { loading, error, data } = useQuery(SEARCH_EMAIL, {
  //   variables: { email: searchTerm },
  // });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops...an error has occured. </p>;
  
  
    const handleSearch = (event) => {
      // if(null){
      //   return;
      // }
      setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
      };
  
    const renderUsers = () => {
      if (users.length === 0) {
        return <div>No users found</div>;
      }
  
      return (
        <div className="user-cards-container">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <h2>{user.username}</h2>
              <p>{user.email}</p>
              <p>{user.personality}</p>
              {/* <p>{user.compatibility.rating}</p> */}
              <a class='btn btn-primary btn-block btn-squared'>Add to a Team </a>
            </div>
          ))}
        </div>
      );
    };
  
    return (
      <div>
        <NavTabs/>
        <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search users" onChange={handleSearch} />
        <button type="submit">Search</button>
      </form>
      {renderUsers()}

    </div>
    
  );
}
  
  export default UserSearch;
  