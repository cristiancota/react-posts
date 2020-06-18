import React, { Component } from 'react';
import './App.css';
import Post from './Post.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts : []
    }
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=> this.setState({posts:data}))
  }

  render() {

    const postItems = this.state.posts.map(post=>(
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    ))

    return (
      <div className="App row">
        {postItems}
      </div>
    );
  }
}

export default App;
