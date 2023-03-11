import React from 'react';
import { useMutation } from '@apollo/client';
//be sure to create the mutations for this--done
import { REMOVE_TEAM } from '../../utils/mutations';

//be sure to create the query for this--done
import { QUERY_ME, MY_TEAMS } from '../../utils/queries';

const MyTeamList = ({ teamsData, isLoggedInUser = false }) => {
  
  
  
  const [removeTeam, { error }] = useMutation(REMOVE_TEAM, {
    update(cache, { data: { removeTeam } }) {
      try {
        cache.writeQuery({
          query: MY_TEAMS,
          data: { teamsData: removeTeam },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveTeam = async (team) => {
    try {
      const { data } = await removeTeam({
        variables: { team },
      });
    } catch (err) {
      console.error(err);
    }
  };

  // if (!teamsData) {
  //   return <h3>No Teams Yet</h3>;
  // }

  return (
    <div>
      <h1 className="headers">
            Team Title</h1>
          <div className="underline-title"></div>
          <div className="container">
            <div className="members-username"></div>

            <ul className="list-group">
              {/* {teams.members.map(() => ( */}
              <li
              // className="list-group-item" key={teams.members.username}
              >
                {/* NOT REALLY SURE HOW TO STRUCTURE THIS */} Team Member
                {/* {teams.members.username} {teams.members.compatability} */}
              </li>
              {/* ))} */}
            </ul>
          </div>
    </div>
  );
};

export default MyTeamList;