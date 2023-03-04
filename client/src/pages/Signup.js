import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { ADD_PROFILE } from '../utils/mutations';

// import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    personality: '',
  });
//   const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);

//     try {
//       const { data } = await addProfile({
//         variables: { ...formState },
//       });

//     //   Auth.login(data.addProfile.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {/* {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : ( */}
              <form>
              <label for="username"> Enter Username:</label>
                <input
                  id="username"
                  className="form-input"
                  placeholder="Your username"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <label for="email"> Enter Email:</label>
                <input
                  id="email"
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <label for="password">Enter Password:</label>
                <input
                  id="password"
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
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
                <option value={formState.personality}>INTJ</option>
                <option value={formState.personality}>INTP</option>
                <option value={formState.personality}>ENTJ</option>
                <option value={formState.personality}>ENTP</option>
                <option value={formState.personality}>INFJ</option>
                <option value={formState.personality}>INFP</option>
                <option value={formState.personality}>ENFJ</option>
                <option value={formState.personality}>ENFP</option>
                <option value={formState.personality}>ISTJ</option>
                <option value={formState.personality}>ISFJ</option>
                <option value={formState.personality}>ESTJ</option>
                <option value={formState.personality}>ESFJ</option>
                <option value={formState.personality}>ISTP</option>
                <option value={formState.personality}>ISFP</option>
                <option value={formState.personality}>ESTP</option>
                <option value={formState.personality}>ESFP</option> 
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
            {/* )} */}

            {/* {error && ( */}
              {/* <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;