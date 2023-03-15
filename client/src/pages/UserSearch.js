import React, { useState } from "react";
import NavTabs from "../components/NavTabs";
import { useQuery } from "@apollo/client";
import { SEARCH_USER } from "../utils/queries";
import { useNavigate, useParams } from "react-router-dom";
// import auth from "../utils/auth";
// import Button from 'react-bootstrap/Button';

import '../styles/UserSearch.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const UserSearch = () => {
  AOS.init();
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("personality"); // set default filter to personality
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { loading, data } = useQuery(SEARCH_USER);
  const [noResultMsg, setNoResultMsg] = useState("");

  const users = data?.users || [];
  let navigate = useNavigate();
  console.log(users);

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
      <div>
        <NavTabs />
      </div>
      <main>
        <div className="search-page">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
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
                          <option value="personality">Personality Type</option>
                          <option value="email">Email</option>
                          <option value="username">Username</option>
                        </select>
                        <input
                          type="text"
                          className="search-input"
                          id="search"
                          placeholder={`Enter ${filter}`}
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
                      <span className="profileNameSearch">{user.email}</span>
                      <br />
                      <span className="pTypeSearch">{user.personality}</span>
                      <br />
                      <span className="profileNameSearch">
                        Current team(s): {user.teams ? user.teams.length : 0}
                      </span>
                      <br />
                      <button
                        className="viewuser-btnSearch"
                        onClick={navigate(`/user/${user._id}`)}
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
      </main>
    </div>
  );
};

export default UserSearch;
