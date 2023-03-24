import React from 'react';
import { useNavigate, useParams } from "react-router-dom";


const CommentsBox = ({user}) => {
    let navigate = useNavigate();
    console.log(user.comments)
    return (
        <div className='commentsbox'>
            <h1>Comments</h1>
            {user.comments.map(comment => (
                <div className="eachComment"key={comment._id}>
                     <p><button
                        className="commenter-btn"
                        onClick={() => navigate(`/user/${comment.user[0]._id}`)}
                      >
                       {comment.user[0].username} at {comment.createdAt}
                      </button>
                     </p> 
                    <p>{comment.commentBody}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentsBox