import React, { Component } from 'react';

import './styles.css';

class Comment extends Component {
  render() {
    const comments = this.props.comments;
    return (
      <>
        {comments.map(comment => (
          <div key={comment.id} className="comment-content-user">
            <div className="comment-content-user-img">
              <img src={comment.author.avatar} />
            </div>
            <div className="comment-content-user-reply">
              <strong>{comment.author.name}</strong>: {comment.content}
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default Comment;