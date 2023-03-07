import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

const [addUser, { error1, data1 }] = useMutation(ADD_USER);
const [userState, setUserState] = useState({ email: '', password: '' });
const [login, { error, data }] = useMutation(LOGIN_USER);

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

    //   Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data1 ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form>
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
                <label for="personality-type">Input your Myers-Briggs Personality Type Here:</label>
                <select
                  id="personality-type"
                  className="form-input"
                  placeholder="Pick Personality Type"
                  name="personality"
                  onChange={handleChange}
                >
                <option value={signupState.personality}>INTJ</option>
                <option value={signupState.personality}>INTP</option>
                <option value={signupState.personality}>ENTJ</option>
                <option value={signupState.personality}>ENTP</option>
                <option value={signupState.personality}>INFJ</option>
                <option value={signupState.personality}>INFP</option>
                <option value={signupState.personality}>ENFJ</option>
                <option value={signupState.personality}>ENFP</option>
                <option value={signupState.personality}>ISTJ</option>
                <option value={signupState.personality}>ISFJ</option>
                <option value={signupState.personality}>ESTJ</option>
                <option value={signupState.personality}>ESFJ</option>
                <option value={signupState.personality}>ISTP</option>
                <option value={signupState.personality}>ISFP</option>
                <option value={signupState.personality}>ESTP</option>
                <option value={signupState.personality}>ESFP</option> 
                </select>
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
                <p>Don't know your personality type? Take this quick quiz: <a rel="noreferrer" href="https://www.16personalities.com/free-personality-test" target="_blank">16personalites.com</a></p>
              </form>
            )}

            {error1 && (
              <div className="my-3 p-3 bg-danger text-white">
                {error1.message}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleLogin}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={userState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={userState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
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
    </main>
  );
};

export default Signup;

