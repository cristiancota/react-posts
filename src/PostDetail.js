import React, { Component } from 'react';

class PostDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      post : {},
      comments : []
    }
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
    .then(res=>res.json())
    .then(data=> this.setState({post:data}));

    fetch('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id+'/comments')
    .then(res=>res.json())
    .then(data=> this.setState({comments:data}));
  }

  render() {
    const comments = this.state.comments.map(comment=>(
      <div key={comment.id}>
        <p>{comment.body}</p>
        <p>Por: {comment.email}</p>
      </div>
    ));

    return (
      <div className="post-detail">
        <div className="card">
          <div style={{
            height : '350px',
            background: 'url(https://images.unsplash.com/photo-1508749627231-ce8a002264e9?ixlib=rb-0.3.5…EyMDd9&s=489d758…&auto=format&fit=crop&w=1350&q=80)',
            'backgroundSize': 'cover',
            'backgroundPosition': '50%'
            }}>
          </div>
          <div className="card-body">
            <h1 className="text-center">{this.state.post.title}</h1>
            <p>{this.state.post.body}</p>
          </div>
        </div>

        <div>
          {comments}
        </div>
      </div>
    );
  }
}

export default PostDetail;
