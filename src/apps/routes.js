import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsRoutes from './posts/routes';
import Posts from './posts/containers/Posts';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Posts} />
    <Route path='/posts' component={PostsRoutes} />
  </Switch>);

export default Routes;
