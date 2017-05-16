import React from 'react';
import {render} from 'react-dom';
import store, {history} from './redux/store';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

import Home from './containers/home/Home.jsx';
import Devices from './containers/devices/Devices.jsx';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/devices" component={Devices}/>
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('app')
);
