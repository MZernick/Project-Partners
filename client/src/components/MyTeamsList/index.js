import React from 'react';
import { useMutation } from '@apollo/client';
//be sure to create the mutations for this--done
import { REMOVE_TEAM } from '../../utils/mutations';
//be sure to create the query for this--done
import { QUERY_ME, MY_TEAMS } from '../../utils/queries';
import {MyTeamSubLst} from '../MyTeamSubLst'
import { getCompatibility, getCompatibilityandUsername, avg, indivTeamScores, myTeamScore, oneBigTeamScore, makeObjectListofOthers } from '../../utils/helpers'

const MyTeamList = (props) => {
  console.log("this is in MyTeamsList index.js",props.focusTeam)
  const focusTeam = props.focusTeam;
  const members = focusTeam?.members;
  console.log(members)

  if (!focusTeam) {
    return <h3>No Teams Yet</h3>;
  }
  
  return (

    <div>
      <h1 className="headers">
        {focusTeam.title}
      </h1>
      <div className="underline-title"></div>
      <p>{focusTeam.description}</p>
      <h2>Overall Compatibility: {members?.length && Math.round(oneBigTeamScore(members))}%</h2>
      <div className="container">
        <h2>By team member:</h2>
        <ul className="list-group">
          {members?.map((member) => (
            <li className="list-group-item" key={member.username}>
              <div className="members-username"><h3>{member.username}'s Team Score: {Math.round(myTeamScore(members, member))}%</h3> </div>
              <div><ul className="list-group-item-sub" key={member.username} >
                <MyTeamSubLst members={members}/>
                </ul></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyTeamList;