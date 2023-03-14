import React from 'react';
import { useMutation } from '@apollo/client';
//be sure to create the mutations for this--done
import { REMOVE_TEAM } from '../../utils/mutations';
//be sure to create the query for this--done
import { QUERY_ME, MY_TEAMS } from '../../utils/queries';
import MyTeamSubLst from '../MyTeamSubLst'
import Pie from "../PercentageCircle";
import { getCompatibility, getCompatibilityandUsername, avg, indivTeamScores, myTeamScore, oneBigTeamScore, makeObjectListofOthers } from '../../utils/helpers'

const MyTeamList = (props) => {
  console.log("this is in MyTeamsList index.js", props.focusTeam)
  const focusTeam = props.focusTeam;
  const members = focusTeam?.members;
  console.log(members)

  if (!focusTeam) {
    return <h3>No Teams Yet</h3>;
  }

  return (

    <div className="team-card">
      <h1 className="myTeamHeaders">
        {focusTeam.title}
      </h1>
      <div className="underline-title"></div>
      <p className='smallFont'>{focusTeam.description}</p>
      <h2 className='bigFont'>Overall Compatibility:</h2>
      <Pie percentage={members?.length && Math.round(oneBigTeamScore(members))} colour="#E63946" />
      <div className='member-container'>
        {members?.map((member) => (
          <div className="member-box">
            <li className="list-group-item" key={member.username}>
              <h3 className='member-name'>{member.username}'s Team Score:
                {Math.round(myTeamScore(members, member))}%
                <br /></h3>
              <div>
                <ul className="list-group-item-sub" key={member.username} >
                  <MyTeamSubLst members={members} thisOne={member} />
                </ul>
              </div>
            </li>
          </div>
        ))}
      </div>
      <div>
        <button className="team-btn"
          variant="contained"
          size="small"
          sx={{ margin: '2%', background: 'rgba(88,138,182,1)' }}
          onClick={() => navigate(`/${team._id}/editteam`)}
        >
          Update
        </button>
        <button onClick={() => navigate(`/createteam`)}
          className="team-btn"
          rel="noreferrer" target="_blank">Create New Team</button>
        <button onClick={() => navigate(`/users`)} className="team-btn" rel="noreferrer" target="_blank">Search Users</button>
      </div>
    </div>
  );
};

export default MyTeamList;