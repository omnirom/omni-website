import React from 'react';
import {render} from 'react-dom';
import store, {history} from './redux/store';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

import Home from './containers/home/Home.jsx';
import Devices from './containers/devices/Devices.jsx';
import Source from './containers/source/Source.jsx';
import Donate from './containers/donate/Donate.jsx';
import Privacy from './containers/privacy/Privacy.jsx';
import NotFound from './containers/404/NotFound.jsx';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/devices" component={Devices}/>
        <Route path="/source" component={Source}/>
        <Route path="/donate" component={Donate}/>
        <Route path="/privacy" component={Privacy}/>
        <Route component={NotFound}/>
      </Switch>
    </ConnectedRouter>
  </Provider>, document.getElementById('app')
);
