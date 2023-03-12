import React from 'react';
import { useMutation } from '@apollo/client';
//be sure to create the mutations for this--done
import { REMOVE_TEAM } from '../../utils/mutations';

//be sure to create the query for this--done
import { QUERY_ME, MY_TEAMS } from '../../utils/queries';

import{getCompatibility, getCompatibilityandUsername, avg, indivTeamScores, myTeamScore, oneBigTeamScore} from '../../utils/helpers'


const MyTeamList = (props) => {
  
  console.log(props.focusTeam)
  const focusTeam = props.focusTeam;
  const members = focusTeam.members;
  console.log(members)
  
  // const [removeTeam, { error }] = useMutation(REMOVE_TEAM, {
  //   update(cache, { data: { removeTeam } }) {
  //     try {
  //       cache.writeQuery({
  //         query: MY_TEAMS,
  //         data: { teams: removeTeam },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  // const handleRemoveTeam = async (team) => {
  //   try {
  //     const { data } = await removeTeam({
  //       variables: { team },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  
  // if (!teams) {
  //   return <h3>No Teams Yet</h3>;
  // }

  return (
    
    <div>
      <h1 className="headers">
            {focusTeam.title}
            </h1>
          <div className="underline-title"></div>
          <p>{focusTeam.description}</p>
          <h2>Overall Compatibility: {Math.round(oneBigTeamScore(members))}%</h2>
          <div className="container">
          <h2>By team member:</h2>
              <ul className="list-group">
                {members.map((member) => (
                <li className="list-group-item" key={member.username}>
                  <div className="members-username"><h3>{member.username}'s Team Score: {Math.round(myTeamScore(members, member))}%</h3> </div>
                </li>
                ))} 
              </ul>
          </div>
    </div>
  );
};

export default MyTeamList;