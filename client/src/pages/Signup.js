import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/Signup.css'

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const redirect = useNavigate();
  const [signupState, setSignupState] = useState({
    username: '',
    email: '',
    password: '',
    personality: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  
    const [loginState, setLoginState] = useState({
      email: '',
      password: '',
    });

const [login, { error: error1, data: data1 }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleSignupChange = (event) => {
    const { name, value } = event.target;

    setSignupState({
      ...signupState,
      [name]: value,
    });
  };
  const handleLoginChange = (event) => {
    const { name, value } = event.target;

    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(loginState);
    try {
      const { data } = await login({
        variables: { ...loginState },
      });

      Auth.login(data.login.token);
      redirect("/me");
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setLoginState({
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
      redirect("/me");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div className="signup-page">
        <div className="column">
          <div className="signup-card">
            <div>
              <div className="headers">
                <h4>Sign Up</h4>
                <div className="underline-title"></div>
              </div>
              <div className="container">
                {data ? (
                  <p>
                    Success! You may now head{" "}
                    <Link to="/">back to the homepage.</Link>
                  </p>
                ) : (
                  <form className="form" onSubmit={handleSignup}>
                    <label htmlFor="username"> Enter Username:</label>
                    <input
                      id="username"
                      className="form-input"
                      placeholder="Your username"
                      name="username"
                      type="text"
                      value={signupState.name}
                      onChange={handleSignupChange}
                    />
                    <div className="form-border"></div>
                    <label htmlFor="email"> Enter Email:</label>
                    <input
                      id="email"
                      className="form-input"
                      placeholder="Your email"
                      name="email"
                      type="email"
                      value={signupState.email}
                      onChange={handleSignupChange}
                    />
                    <div className="form-border"></div>
                    <label htmlFor="password">Enter Password:</label>
                    <input
                      id="password"
                      className="form-input password-signup"
                      placeholder="******"
                      name="password"
                      type="password"
                      value={signupState.password}
                      onChange={handleSignupChange}
                    />
                    <div className="form-border"></div>
                    <input type="checkbox" onClick={showPassword} /> Show
                    Password
                    <label htmlFor="personality-type">
                      Input your Myers-Briggs Personality Type Here:
                    </label>
                    <select
                      id="personality-type"
                      className="form-input"
                      placeholder="Pick Personality Type"
                      name="personality"
                      value={signupState.personality}
                      onChange={handleSignupChange}
                    >
                      <option value={null}>Enter Type</option>
                      <option value="ENFJ">ENFJ</option>
                      <option value="ENFP">ENFP</option>
                      <option value="ENTJ">ENTJ</option>
                      <option value="ENTP">ENTP</option>
                      <option value="ESFJ">ESFJ</option>
                      <option value="ESFP">ESFP</option>
                      <option value="ESTJ">ESTJ</option>
                      <option value="ESTP">ESTP</option>
                      <option value="INFJ">INFJ</option>
                      <option value="INFP">INFP</option>
                      <option value="INTJ">INTJ</option>
                      <option value="INTP">INTP</option>
                      <option value="ISFJ">ISFJ</option>
                      <option value="ISFP">ISFP</option>
                      <option value="ISTJ">ISTJ</option>
                      <option value="ISTP">ISTP</option>
                    </select>
                    <div className="form-border"></div>
                    <button
                      className="btn btn-block btn-info signup-btn"
                      style={{ cursor: "pointer" }}
                      type="submit"
                    >
                      Submit
                    </button>
                    <p>
                      <label>
                        Don't know your personality type? Take this quick quiz:
                      </label>{" "}
                      <a
                        id="ptest"
                        rel="noreferrer"
                        href="https://www.16personalities.com/free-personality-test"
                        target="_blank"
                      >
                        16personalites.com
                      </a>
                    </p>
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
        <div className="column">
          <div className="login-card">
            <div>
              <div className="headers">
                <h4>Login</h4>
                <div className="underline-title"></div>
              </div>
              <div className="container">
                {data1 ? (
                  <p>
                    Success! You may now head{" "}
                    <Link to="/">back to the homepage.</Link>
                  </p>
                ) : (
                  <form className="form" onSubmit={handleLogin}>
                    <input
                      className="form-input"
                      placeholder="Your email"
                      name="email"
                      type="email"
                      value={loginState.email}
                      onChange={handleLoginChange}
                    />
                    <div className="form-border"></div>
                    <input
                      className="form-input"
                      placeholder="******"
                      name="password"
                      type="password"
                      value={loginState.password}
                      onChange={handleLoginChange}
                    />
                    <div className="form-border"></div>
                    <button
                      className="btn btn-block btn-info login-btn"
                      style={{ cursor: "pointer" }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                )}

                {error1 && (
                  <div className="my-3 p-3 bg-danger text-white">{error}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;

