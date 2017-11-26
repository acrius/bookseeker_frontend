import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsRoutes from './posts/routes';
import Posts from './posts/containers/Posts';
import ConfirmEmail from './auth/containers/ConfirmEmail';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Posts} />
    <Route path='/posts' component={PostsRoutes} />
    <Route path='/confirm-email/:key/' component={ConfirmEmail} />
  </Switch>);

export default Routes;
