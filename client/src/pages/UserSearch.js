import React, { useState } from "react";
import NavTabs from "../components/NavTabs";
import { useQuery } from "@apollo/client";
import { SEARCH_USER, QUERY_SINGLE_USER_WITH_COMPATIBILITY } from '../utils/queries';
import { getCompatibilityandUsername } from '../utils/helpers';
import { useNavigate, useParams } from "react-router-dom";
import auth from "../utils/auth";
// import Button from 'react-bootstrap/Button';

import '../styles/UserSearch.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { textAlign } from "@mui/system";



const UserSearch = () => {
  AOS.init();
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("all"); // set default filter
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { loading, data } = useQuery(SEARCH_USER);
  const [noResultMsg, setNoResultMsg] = useState("");

  const users = data?.users || [];
  let navigate = useNavigate();
  console.log(users);

  const userArr=[];
  const userList = data?.users || [];

  // searching for the single user logged in so we can run commpatibility
  const data1 = useQuery(QUERY_SINGLE_USER_WITH_COMPATIBILITY, {
    variables: { userId: auth.getProfile().data._id }
  })
  console.log(auth.getProfile().data._id )
  if (data1.loading) {
    console.log('loading user')
  } else {
    userList.map(user => {
      return userArr.push(getCompatibilityandUsername(data1.data.user, user));
    })
    console.log(userArr)
  }
  function handleSubmit() {
    let listarray = [];

    console.log(searchText);
    console.log(filter);
    if (filter === "personality") {
      listarray = users.filter(
        (user) => user.personality.toLowerCase() === searchText
      );
    } else if (filter === "email") {
      listarray = users.filter(
        (user) => user.email.toLowerCase() === searchText
      );
    } else if (filter === "username") {
      listarray = users.filter(
        (user) => user.username.toLowerCase() === searchText
      );
      
    } else if (filter === "all") {
      listarray = users.filter(
        (user) => 
          user.personality.toLowerCase() === searchText ||
          user.email.toLowerCase() === searchText ||
          user.username.toLowerCase() === searchText
      );
    } else {
      listarray = [];
    }

    const listarrayWithRatings = listarray.map(item => {
      const matchingItem = userArr.find(innerItem => innerItem.username === item.username);
      return {
        ...item,
        rating: matchingItem.rating
      };
    });

    setFilteredUsers(listarrayWithRatings);
    // if array is empty, no results found is rendered in place of cards.
    if (listarrayWithRatings.length == 0) {
      setNoResultMsg("No results found");
    }
  }
  // console.log(filteredUsers);
  // console.log(userArr);
  // const filteredUsernames = filteredUsers.map(user => user.username);


  // userArr.forEach(user => {
  //   if (filteredUsernames.includes(user.username)) {
  //     const compatibilityObj = filteredUsers.find(filteredUser => filteredUser.username === user.username).compatibility;
  //     const compatibility = compatibilityObj.find(obj => obj.value === user._id).rating;
  //     console.log(`Compatibility value for ${user.username}: ${compatibility}`);
  //   }
  // });
  
  return (
    <div>
      <div>
        <NavTabs />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="search-page">
          <div className="search-container">
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className="search-card" >
              <div className="headers-search">
                <h4>Search Users</h4>
                <div className="underline-title"></div>
                <div className="container">
                  <div className="search-form">
                    <label htmlFor="filter">Search By:</label>
                    <select
                      className="form-select pform-input"
                      id="filter"
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="all">All</option>
                      <option value="personality">Personality Type (ex. ENTP)</option>
                      <option value="email">Email</option>
                      <option value="username">Username</option>
                    </select>
                    <input
                      type="text"
                      className="search-input"
                      id="search"
                      placeholder={filter === "all" ? "Enter MBTI, email, or username" : `Enter ${filter}`}
                      value={searchText}
                      onChange={(e) =>
                        setSearchText(e.target.value.toLowerCase())
                      }
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    />
                    <div className="search-border"></div>
                    <button
                      className="search-btn"
                      type="submit"
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-container">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div key={user._id} className="user-box">
                  <h2 className="profileNameSearch">{user.username}</h2>
                  <br />
                  <span className="pTypeSearch">{user.personality}</span>
                  <br />
                  <span className="pTypeSearch" >Compatibility: {user.rating}%</span>
                  <br />
                  <span className="profileNameSearch">{user.email}</span>
                  <br />
                  <span className="profileNameSearch">
                    Current team(s): {user.teams ? user.teams.length : 0}
                  </span>
                  <br />
                  <button
                    className="viewuser-btnSearch"
                    onClick={() => navigate(`/user/${user._id}`)}
                  >
                    View Profile
                  </button>
                </div>
              ))
            ) : (
              <h1 className="userInfo">{noResultMsg}</h1>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
