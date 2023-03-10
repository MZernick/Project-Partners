import React, { useState } from "react";
import NavTabs from "../components/NavTabs";
import { useQuery } from "@apollo/client";
import { SEARCH_USER, SEARCH_EMAIL, SEARCH_PERSONALITY } from "../utils/queries";

// from all users query, filter to match a certain field. 
  // use dropdown to select field
  // start with personality
  // test mapping all users as a card similar to thoughts on activity 26
const UserSearch = () => {
const [searchText, setSearchText] = useState('');

const { loading, data } = useQuery(SEARCH_USER);

const users = data?.users || [];

return (
  <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {users &&
          users.map((user) => (
            <div key={user._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {user.username} <br />
                  {/* <span> {user.email}</span>
                  <span> {user.personality}</span>
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently part of {user.teams ? user.teams.length : 0} */}
                  {/* </span> */}
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
          )}
        </div>
      </div>
    </main>
)

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
//             <a class="btn btn-primary btn-block btn-squared">Add to a Team </a>
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
//             <a class="btn btn-primary btn-block btn-squared">Add to a Team </a>
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
