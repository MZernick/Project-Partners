import React, { useState } from "react";
import NavTabs from "../components/NavTabs";
import { useQuery } from "@apollo/client";
import { SEARCH_USER, SEARCH_EMAIL, SEARCH_PERSONALITY } from "../utils/queries";

function UserSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedUsers, setMatchedUsers] = useState([]);

  //   const  data1 = useQuery(SEARCH_USER);
  //   const userList = data1?.users||[];
  //   const userEmailArray = userList.map((users)=> {
  //   return users.email
  // })
  // setTimeout(() => {
  //   console.log(data1.data);
  // }, "3000");

  // console.log(userEmailArray);

  // const { loading, error, data } = useQuery(SEARCH_EMAIL, {
  //   variables: { email: searchTerm },
  // })
  // setTimeout(() => {
  //     console.log({ loading, error, data });
  //   }, "3000");

  // const { loading, error, data } = useQuery(SEARCH_EMAIL, {
  //   variables: { email: 'abtest@email.com' },
  // });
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Oops...an error has occured. </p>; 
  
  // setTimeout(() => {
  //   console.log(data.searchEmail);
  // }, "3000");

   const { loading, error, data } = useQuery(SEARCH_PERSONALITY, {
    variables: { personality: searchTerm },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops...an error has occured. </p>; 
  
  setTimeout(() => {
    console.log(data.searchPersonality);
  }, "3000");
  
 


  const handleInputChange = (e) => {
    // if(null){
    //   return;
    // }
const { search, value } = e.target;
  
   return search == '' ? 'Please enter something to search.' : setSearchTerm(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
      const { loading, error, data } = useQuery(SEARCH_PERSONALITY, {
      variables: { email: searchTerm },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return 
    <p>Oops...an error has occured. {console.log("userQuery", searchTerm)} </p>;
    setMatchedUsers(data.searchPersonality);
    setTimeout(() => {
        console.log(data.searchPersonality);
      }, "3000");
      
      const renderUsers = () => {
    if (matchedUsers.length === 0) {
      console.log("in renderUsers", searchTerm);
      return <div>No users found</div>;
    } 
   
    return (
      <div className="user-cards-container">
        {matchedUsers.map((data) => (
          <div key={data.searchPersonality.id} className="user-card">
            <h2>{data.searchPersonality.username}</h2>
            <p>{data.searchPersonality.email}</p>
            <p>{data.searchPersonality.personality}</p>
            <a class="btn btn-primary btn-block btn-squared">Add to a Team </a>
          </div>
        ))}
      </div>
    );
  };

  



    return (
      <div className="user-cards-container">
        {matchedUsers.map((data) => (
          <div key={data.searchPersonality.id} className="user-card">
            <h2>{data.searchPersonality.username}</h2>
            <p>{data.searchPersonality.email}</p>
            <p>{data.searchPersonality.personality}</p>
            <a class="btn btn-primary btn-block btn-squared">Add to a Team </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <NavTabs />
      <form onSubmit={handleFormSubmit}>
        <input 
        type="text"
        name="search" 
        placeholder="Search users"
        value={searchTerm} 
        onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {renderUsers()}
    </div>
  );
}

export default UserSearch;
