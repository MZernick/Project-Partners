import React from 'react';
import { useMutation, useState } from '@apollo/client';
import { REMOVE_TEAM } from '../../utils/mutations';
import Button from '@mui/material/Button';

import { QUERY_SINGLE_USER_WITH_COMPATIBILITY } from '../../utils/queries';

const MyButtonList = ({ teams, setSelectedTeam, setFocusTeam, isLoggedInUser = false }) => {
  const [removeTeam, { error }] = useMutation(REMOVE_TEAM, {
    update(cache, { data: { removeTeam } }) {
      try {
        cache.writeQuery({
          query: QUERY_SINGLE_USER_WITH_COMPATIBILITY,
          data: { user: removeTeam },
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

  //function to get team index from button click event and set selectedTeam index number


  console.log("this is in MyButtonList as teams: ", teams);
  if (!teams) {
    return <h3>No Teams Yet</h3>;
  }

  return (
    <div>
      <ul className='no-padding'>{teams &&
        teams.map((team, i) => (
          <li key={team.title}>
            <Button className='team-btn'
              sx={{ margin: '2%' }}
              size="large"
              variant="contained"
              onClick={() => setFocusTeam(team)}>
              {team.title}
            </Button>
          </li>
        ))}
      </ul>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default MyButtonList;