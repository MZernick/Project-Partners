import React from 'react';
import { useMutation } from '@apollo/client';
//be sure to create the mutations for this--done
import { REMOVE_TEAM } from '../../utils/mutations';

import '../../styles/Profile.css'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

//be sure to create the query for this--done
import { QUERY_SINGLE_USER_WITH_COMPATIBILITY } from '../../utils/queries';

const ProfileTeamList = ({ user, isLoggedInUser = false }) => {
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

  if (!user.teams) {
    return <h3>No Teams Yet</h3>;
  }

  return (
    <div>
      <div>
        {user.teams &&
          user.teams.map((team) => (
            <div className="team1Container">
            <h3 id="team1" key={team}>
              {team.title}
              </h3>
            <div id="teamInfoContainer">
            <Stack direction="row" spacing={2}>
              <Avatar>H</Avatar>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            </Stack>
            </div>
            <div className="infoBox1">
            <p>JOSH GRAPH HERE</p>
            </div>
          </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default ProfileTeamList;

                  {/* {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveTeam(teams)}
                    >
                      X
                    </button>
                  )} */}