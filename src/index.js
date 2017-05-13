import React from 'react';
import {render} from 'react-dom';
import store from './redux/store';
import {Provider} from 'react-redux';

import Page from './containers/page/Page.jsx';

render(
  <Provider store={store}>
    <Page />
  </Provider>, document.getElementById('app')
);
