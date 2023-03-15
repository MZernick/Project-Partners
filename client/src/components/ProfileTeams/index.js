import React from 'react';
import { useMutation } from '@apollo/client';
//be sure to create the mutations for this--done
import { REMOVE_TEAM } from '../../utils/mutations';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../styles/Profile.css'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';

//be sure to create the query for this--done
import { QUERY_SINGLE_USER_WITH_COMPATIBILITY } from '../../utils/queries';

const ProfileTeamList = ({ user, isLoggedInUser = false }) => {

  const { userId } = useParams()
  const [removeTeam, { error }] = useMutation(REMOVE_TEAM)

  // const [removeTeam, { error }] = useMutation(REMOVE_TEAM, {
  //   update(cache, { data: { removeTeam } }) {
  //     try {
  //       cache.writeQuery({
  //         query: QUERY_SINGLE_USER_WITH_COMPATIBILITY,
  //         data: { user: removeTeam },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });
  let navigate = useNavigate();

  const handleRemoveTeam = async (team) => {
    try {
      const { data } = await removeTeam({
        variables: { teamId: team }
      });
      // navigate(`/user/${userId}`)
      window.location.reload(true)
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
            <div className="team1Container" key={team._id}>
              <Button
                className='titlebtn'
                sx={{ margin: '2%' }}
                size="large"
                variant="contained"
                onClick={() => navigate(`/user/${user._id}/teams`)}
              // onClick={(console.log(team))}
              >
                {team.title}
                {team.members.map(member => {
                  return (
                    <Stack direction="row" sx={{ padding: '2%' }} key={member.username}>
                      <Avatar sx={{ bgcolor: '#1D3557' }}> {` ${member.username.charAt(0)} `}</Avatar>
                    </Stack>
                  )
                })}
              </Button>
              <div className="buttons">
                <Button
                  variant="contained"
                  size="small"
                  sx={{ margin: '2%', background: 'rgba(88,138,182,1)' }}
                  onClick={() => navigate(`/${team._id}/editteam`)}
                >
                  Update
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ margin: '2%', background: '#E63946' }}
                  startIcon={<DeleteIcon />}
                  onClick={() => handleRemoveTeam(team._id)}
                  aria-label="delete">
                  Delete
                </Button>
              </div>

              {/* <div id="teamInfoContainer">
            <Stack direction="row" spacing={2}>
                <Avatar>H</Avatar>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            </Stack>
            </div> */}
              {/* <div className="infoBox1">
            <p>JOSH GRAPH HERE</p>
            </div> */}
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