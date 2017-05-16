import React from 'react';
import {render} from 'react-dom';
import store, {history} from './redux/store';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

import Home from './containers/home/Home.jsx';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact={true} path="/" component={Home}/>
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('app')
);
