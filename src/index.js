import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PostDetail from './PostDetail';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';

const Index = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/post/:id" component={PostDetail} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
