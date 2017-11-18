import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from './containers/Posts';
import Post from './components/Post';

const Routes = () => (
  <Switch>
    <Route exact path='/posts' component={Posts} />
    <Route path='/posts/:id' component={Post} />
  </Switch>
);

export default Routes;
