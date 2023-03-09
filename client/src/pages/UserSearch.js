import React, { useState } from "react";
import NavTabs from '../components/NavTabs';
import { useQuery } from '@apollo/client';
import { SEARCH_USER } from '../utils/queries';

function UserSearch() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    
  const { loading, error, data } = useQuery(SEARCH_USER, {
    variables: { search: searchTerm },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops...an error has occured. </p>;
  
  
    const handleSearch = (event) => {
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
              <p>{user.compatibility}</p>
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
  