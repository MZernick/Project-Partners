import React from 'react';
import { useMutation } from '@apollo/client';
//be sure to create the mutations for this--done
import { REMOVE_TEAM } from '../../utils/mutations';

//be sure to create the query for this--done
import { QUERY_ME, MY_TEAMS } from '../../utils/queries';

import { makeObjectListofOthers } from '../../utils/helpers'

const MyTeamSubLst = (props) => {
  console.log("this is in MyTeamSubLst index.js",props.members)
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
      <li> {thisOne.username} & {other.username}: {other.rating} %</li>
      ))}
    </div>
  );
};

export default MyTeamSubLst;