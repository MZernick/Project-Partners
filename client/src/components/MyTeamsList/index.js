import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_TEAM } from '../../utils/mutations';
import { QUERY_ME, MY_TEAMS } from '../../utils/queries';
import MyTeamSubLst from '../MyTeamSubLst'
import { useNavigate } from 'react-router-dom';
import Pie from "../PercentageCircle";
import { getCompatibility, getCompatibilityandUsername, avg, indivTeamScores, myTeamScore, oneBigTeamScore, makeObjectListofOthers } from '../../utils/helpers'
import PairPie from '../TwoPairPie';

const MyTeamList = (props) => {
  console.log("this is in MyTeamsList index.js", props.focusTeam)
  const focusTeam = props.focusTeam;
  const members = focusTeam?.members;
  console.log(members)
  const navigate = useNavigate();

  if (!focusTeam) {
    return <h3>No Teams Yet</h3>;
  }

  return (

    <div className="team-card">
      <h1 className="myTeamHeaders">
        {focusTeam.title}
      </h1>
      <div className="team-underline"></div>
      {members.length < 3 && (
        <>
          <h2 className='member-name'>
            {members[0].username} &amp; {members[1].username}
          </h2>
          <div className='description-card'>

            <p className='descFont'>Overall Compatibility:</p>

            <PairPie percentage={members?.length && Math.round(oneBigTeamScore(members))} colour="#E63946" />
            <p className='descFont'>{focusTeam.description}</p>
          </div></>
      )}

      {members.length > 2 && (
        <>
          <div className='description-card'>

            <p className='descFont'>Overall Compatibility:</p>

            <Pie percentage={members?.length && Math.round(oneBigTeamScore(members))} colour="#E63946" />
            <p className='descFont'>{focusTeam.description}</p>
          </div>
          <div className='member-container'>
            {members?.map((member) => (
              <div className="member-box" key={member.username}>
                <h2 className='member-name' >{member.username}'s Team Score:</h2>
                <Pie percentage={Math.round(myTeamScore(members, member))} colour="#E63946" />
                <br />
                <ul className="comparisons" >
                  <MyTeamSubLst members={members} thisOne={member} />
                </ul>
              </div>
            ))}
          </div></>
      )}
      <div>
        <button className="team-btn"
          variant="contained"
          size="small"
          sx={{ margin: '2%', background: 'rgba(88,138,182,1)' }}
          onClick={() => navigate(`/${focusTeam._id}/editteam`)}
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