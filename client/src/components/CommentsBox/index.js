import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useMutation } from '@apollo/client';
import { REMOVE_COMMENT } from '../../utils/mutations';
import auth from '../../utils/auth';


const CommentsBox = ({ user }) => {
  console.log(`This is ${user._id}`)
  const [removeComment, { error }] = useMutation(REMOVE_COMMENT)
  const handleRemoveComment = async (commentId) => {
    try {
      const { data } = await removeComment({
        variables: {
          userId: user._id,
          commentId: commentId
        }
      });
      window.location.reload(true)
    } catch (err) {
      console.error(err);
    }
  };

  let navigate = useNavigate();
  console.log(user.comments)
  return (
    <div className='commentsbox'>
      <h1>Comments</h1>
      {user.comments.map(comment => (
        <div className="eachComment" key={comment._id}>
          <p>{comment.commentBody}</p>
          <p><button
            className="commenter-btn"
            onClick={() => navigate(`/user/${comment.user[0]._id}`)}
          >
            {comment.user[0].username} at {comment.createdAt}
          </button>
            {/* {auth.getProfile().data._id} === {comment.user[0]._id ? <Button
                  size="small"
                  variant="contained"
                  sx={{ margin: '2%', background: '#E63946' }}
                  startIcon={<DeleteIcon />}
                  onClick={() => handleRemoveComment(comment._id)}
                  aria-label="delete">
                  Delete
                </Button> : ''} */}
            {((auth.getProfile().data._id === comment.user[0]._id || auth.getProfile().data._id === user._id) ? (
              <Button
                size="small"
                variant="contained"
                sx={{ margin: '2%', background: '#E63946' }}
                startIcon={<DeleteIcon />}
                onClick={() => handleRemoveComment(comment._id)}
                aria-label="delete">
                Delete
              </Button>
            ) : (
              ''
            )
            )}


          </p>

        </div>
      ))}
    </div>
  )
}

export default CommentsBox