import React from 'react';

import { makeObjectListofOthers } from '../../utils/helpers'

const MyTeamSubLst = (props) => {
  console.log("this is in MyTeamSubLst index.js", props.members)
  const members = props.members;
  console.log(members)
  const thisOne = props.thisOne;
  const others = makeObjectListofOthers(members, thisOne)
  console.log(others)

  if (!members) {
    return <h3>No Others Yet</h3>;
  }

  return (

    <div>
      {others?.map(other => (
        <li className='smallFont' key={thisOne.username + other.username}> {thisOne.username} & {other.username}:
          <p className='pRating'>{other.rating}% </p></li>
      ))}
    </div>
  );
};

export default MyTeamSubLst;