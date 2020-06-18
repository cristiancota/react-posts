import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {

  render() {
    return (
      <div className="post col-lg-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h3>{this.props.title}</h3>
            <p>{this.props.body}</p>
            <Link to={"/post/" + this.props.id}>Read more</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
