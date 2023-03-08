import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Signup.css'

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [signupState, setSignupState] = useState({
    name: '',
    email: '',
    password: '',
    personality: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
const [userState, setUserState] = useState({ email: '', password: '' });
const [login, { error1, data1 }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignupState({
      ...signupState,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(userState);
    try {
      const { data } = await login({
        variables: { ...userState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserState({
      email: '',
      password: '',
    });
  };

  // submit form
  const handleSignup = async (event) => {
    event.preventDefault();
    console.log(signupState);

    try {
      const { data } = await addUser({
        variables: { ...signupState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='row'>
      <div className='column'>
      <div class="signup-card">
        <div>
          <div class="headers">
          <h4>Sign Up</h4>
          <div class="underline-title"></div>
          </div>
          <div class="container">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form class="form" onSubmit={handleSignup}>
              <label for="username"> Enter Username:</label>
                <input
                  id="username"
                  className="form-input"
                  placeholder="Your username"
                  name="name"
                  type="text"
                  value={signupState.name}
                  onChange={handleChange}
                />
                <div class="form-border"></div>
                <label for="email"> Enter Email:</label>
                <input
                  id="email"
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={signupState.email}
                  onChange={handleChange}
                />
                <div class="form-border"></div>
                <label for="password">Enter Password:</label>
                <input
                  id="password"
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={signupState.password}
                  onChange={handleChange}
                />
                <div class="form-border"></div>
                <label for="personality-type">Input your Myers-Briggs Personality Type Here:</label>
                <select
                  id="personality-type"
                  className="form-input"
                  placeholder="Pick Personality Type"
                  name="personality"
                  value={signupState.personality}
                  onChange={handleChange}
                >
                <option value="INTJ">INTJ</option>
                <option value="INTP">INTP</option>
                <option value="ENTJ">ENTJ</option>
                <option value="ENTP">ENTP</option>
                <option value="INFJ">INFJ</option>
                <option value="INFP">INFP</option>
                <option value="ENFJ">ENFJ</option>
                <option value="ENFP">ENFP</option>
                <option value="ISTJ">ISTJ</option>
                <option value="ISFJ">ISFJ</option>
                <option value="ESTJ">ESTJ</option>
                <option value="ESFJ">ESFJ</option>
                <option value="ISTP">ISTP</option>
                <option value="ISFP">ISFP</option>
                <option value="ESTP">ESTP</option>
                <option value="ESFP">ESFP</option> 
                </select>
                <div class="form-border"></div>
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit" class="signup-btn"
                >
                  Submit
                </button>
                <p>
                  <label>Don't know your personality type? Take this quick quiz:</label> <a id="ptest" rel="noreferrer" href="https://www.16personalities.com/free-personality-test" target="_blank">16personalites.com</a></p>
              </form>
             )} 

            {error && ( 
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )} 
          </div>
        </div>
      </div>
      </div>
      <div className='column'>
      <div class="login-card" >
        <div >
          <div class="headers">
          <h4 >Login</h4>
          <div class="underline-title"></div>
          </div>
          <div class="container" >
            {data1 ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form class="form" onSubmit={handleLogin}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={userState.email}
                  onChange={handleChange}
                />
                <div class="form-border"></div>
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={userState.password}
                  onChange={handleChange}
                />
                <div class="form-border"></div>
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit" class="login-btn"
                >
                  Submit
                </button>
              </form>
            )}

            {error1 && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Signup;

