import React, { useState } from "react";
import NavTabs from "../components/NavTabs";
import { useQuery } from "@apollo/client";
import { SEARCH_USER } from "../utils/queries";
// import auth from "../utils/auth";
import Button from 'react-bootstrap/Button';
import '../styles/UserSearch.css'


const UserSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("personality"); // set default filter to personality
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { loading, data } = useQuery(SEARCH_USER);
  const [noResultMsg, setNoResultMsg] = useState("");

  const users = data?.users || [];
  console.log(users);

  function handleSubmit() {
    let listarray = [];


    console.log(searchText);
    console.log(filter);
    if (filter === "personality") {
      listarray = users.filter((user) => user.personality.toLowerCase() === searchText);
    } else if (filter === "email") {
      listarray = users.filter((user) => user.email.toLowerCase() === searchText);
    } else if (filter === "username") {
      listarray = users.filter((user) => user.username.toLowerCase() === searchText);
    } else {
      listarray = [];
    }
    setFilteredUsers(listarray);
    // if array is empty, no results found is rendered in place of cards.
    if (listarray.length == 0) {
      setNoResultMsg("No results found");
    }

  }
  console.log(filteredUsers);

  return (
    <div>
      <NavTabs />
      <main>
        <div className="search-page" >
          <div className="column">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <div className="search-card" >
                  <div className="container">
                    <div className="headers">
                      <div className="form">
                        <label htmlFor="filter">Search By:</label>
                        <select
                          className="form-select pform-input"
                          id="filter"
                          onChange={(e) => setFilter(e.target.value)}
                        >
                          <option value="personality">Personality Type</option>
                          <option value="email">Email</option>
                          <option value="username">Username</option>

                        </select>

                        <div className="headers" >
                          <label htmlFor="search"></label>
                          <input
                            type="text"
                            className="form-control form-input"
                            id="search"
                            placeholder={`Find a ${filter}`}
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value.toLowerCase())}
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                          />
                        </div>
                        <button className="search-btn"
                          type="submit"
                          onClick={() => handleSubmit()
                          }
                        >Submit</button>
                      </div>
                      <div >
                        {filteredUsers.length > 0 ? filteredUsers.map((user) => (
                          <div key={user._id} >
                            <div className="user-container">
                              <h2 className="profileName">
                                {user.username}</h2>
                              <br />
                              <span className="profileName">{user.email}</span>
                              <br />
                              <span className="pType">{user.personality}</span>
                              <br />
                              <span className="profileName" >
                                Current team(s): {user.teams ? user.teams.length : 0}
                              </span>
                              <br />
                              <button className="viewuser-btn" href={`user/${user._id}`}>View Profile</button>

                            </div>
                          </div>
                        )) : <h1>{noResultMsg}</h1>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>



        </div>
      </main>
    </div>
  );
};

export default UserSearch;

// function UserSearch() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [matchedUsers, setMatchedUsers] = useState([]);

//   //   const  data1 = useQuery(SEARCH_USER);
//   //   const userList = data1?.users||[];
//   //   const userEmailArray = userList.map((users)=> {
//   //   return users.email
//   // })
//   // setTimeout(() => {
//   //   console.log(data1.data);
//   // }, "3000");

//   // console.log(userEmailArray);

//   // const { loading, error, data } = useQuery(SEARCH_EMAIL, {
//   //   variables: { email: searchTerm },
//   // })
//   // setTimeout(() => {
//   //     console.log({ loading, error, data });
//   //   }, "3000");

//   // const { loading, error, data } = useQuery(SEARCH_EMAIL, {
//   //   variables: { email: 'abtest@email.com' },
//   // });
//   // if (loading) return <p>Loading...</p>;
//   // if (error) return <p>Oops...an error has occured. </p>;

//   // setTimeout(() => {
//   //   console.log(data.searchEmail);
//   // }, "3000");

//    const { loading, error, data } = useQuery(SEARCH_PERSONALITY, {
//     variables: { personality: searchTerm },
//   });
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Oops...an error has occured. </p>;

//   setTimeout(() => {
//     console.log(data.searchPersonality);
//   }, "3000");

//   const handleInputChange = (e) => {
//     // if(null){
//     //   return;
//     // }
// const { search, value } = e.target;

//    return search == '' ? 'Please enter something to search.' : setSearchTerm(value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//       const { loading, error, data } = useQuery(SEARCH_PERSONALITY, {
//       variables: { email: searchTerm },
//     });
//     if (loading) return <p>Loading...</p>;
//     if (error) return
//     <p>Oops...an error has occured. {console.log("userQuery", searchTerm)} </p>;
//     setMatchedUsers(data.searchPersonality);
//     setTimeout(() => {
//         console.log(data.searchPersonality);
//       }, "3000");

//       const renderUsers = () => {
//     if (matchedUsers.length === 0) {
//       console.log("in renderUsers", searchTerm);
//       return <div>No users found</div>;
//     }

//     return (
//       <div className="user-cards-container">
//         {matchedUsers.map((data) => (
//           <div key={data.searchPersonality.id} className="user-card">
//             <h2>{data.searchPersonality.username}</h2>
//             <p>{data.searchPersonality.email}</p>
//             <p>{data.searchPersonality.personality}</p>
//             <a className="btn btn-primary btn-block btn-squared">Add to a Team </a>
//           </div>
//         ))}
//       </div>
//     );
//   };

//     return (
//       <div className="user-cards-container">
//         {matchedUsers.map((data) => (
//           <div key={data.searchPersonality.id} className="user-card">
//             <h2>{data.searchPersonality.username}</h2>
//             <p>{data.searchPersonality.email}</p>
//             <p>{data.searchPersonality.personality}</p>
//             <a className="btn btn-primary btn-block btn-squared">Add to a Team </a>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <NavTabs />
//       <form onSubmit={handleFormSubmit}>
//         <input
//         type="text"
//         name="search"
//         placeholder="Search users"
//         value={searchTerm}
//         onChange={handleInputChange} />
//         <button type="submit">Search</button>
//       </form>
//       {renderUsers()}
//     </div>
//   );
// }

// export default UserSearch;
