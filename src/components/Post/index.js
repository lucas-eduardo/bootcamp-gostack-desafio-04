import React, { Component } from 'react';

import './styles.css';

import img1 from '../../assets/img1.png';

import Commet from '../Comment';

class Post extends Component {
  render() {
    const { name, avatar } = this.props.author;
    return (
      <>
        <div className="post">
          <div className="post-owner">
            <div className="post-owner-img">
              <img src={avatar} />
            </div>
            <div className="post-owner-data">
              <p className="post-owner-data-name">{name}</p>
              <br />
              <p className="post-owner-data-date">{this.props.datePost}</p>
            </div>
          </div>
          <div className="post-owner-description">
            <p>
              {this.props.description}
            </p>
          </div>
          <div className="post-partition"></div>
          <Commet comments={this.props.comments} />
        </div>
      </>
    )
  }
}

export default Post;