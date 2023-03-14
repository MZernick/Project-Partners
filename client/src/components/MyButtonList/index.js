import React from 'react';
import { useMutation } from '@apollo/client';
//be sure to create the mutations for this--done
import { REMOVE_TEAM } from '../../utils/mutations';
import Button from '@mui/material/Button';

//be sure to create the query for this--done
import { QUERY_SINGLE_USER_WITH_COMPATIBILITY } from '../../utils/queries';

const MyButtonList = ({ teams, isLoggedInUser = false }) => {
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
  console.log(teams);
  if (!teams) {
    return <h3>No Teams Yet</h3>;
  }

  return (
    <div>
      <div>
        {/* Need a way to set the state of these buttons to get the right team. */}
        <ul>{teams &&
          teams.map((team) => (
            <div key={team.title}>
              <li>
                <Button className = 'focus-btn'
                        sx={{margin: '2%'}}
                        size="large"
                        variant="contained"
                        onClick={() => setSelectedTeam(selectedTeam +1)}>
                  {team.title}
                </Button>
              </li>
              </div>
            
          ))}
        </ul>  
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default MyButtonList;