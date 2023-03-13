import React from 'react';
import { useMutation } from '@apollo/client';
//be sure to create the mutations for this--done
import { REMOVE_TEAM } from '../../utils/mutations';

//be sure to create the query for this--done
import { QUERY_ME, MY_TEAMS } from '../../utils/queries';

import { getCompatibility, getCompatibilityandUsername, avg, indivTeamScores, myTeamScore, oneBigTeamScore, makeObjectListofOthers } from '../../utils/helpers'

const MyTeamSubLst = (props) => {
  console.log("this is in MyTeamSubLst index.js",props.members)
  const members = props.members;
  console.log(members)

  if (!members) {
    return <h3>No Others Yet</h3>;
  }
  
  return (

    <div>
      <li>Dumbface with BOI</li>
      <li>Dumbface with BOI</li>
    </div>
  );
};

export default MyTeamSubLst;