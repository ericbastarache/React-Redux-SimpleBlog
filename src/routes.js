import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsCreate from './components/posts_create';
import PostsShow from './components/posts_show';

export default (
<Route path="/" component={App}>
  <IndexRoute component={PostsIndex} />
  <Route path="posts/create" component={PostsCreate} />
  <Route path="posts/:id" component={PostsShow} />
</Route>
);
