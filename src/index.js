import React from 'react';
import {render} from 'react-dom';
import store from './redux/store';
import {Provider} from 'react-redux';

import BpComponent from './components/bp-component/BpComponent.jsx';

render(
  <Provider store={store}>
    <BpComponent
      buttonText={"Toggle Title"}
      headingTitle={"Boilerplate"}
      subHeading={"Start with something rather than nothing!"}
      titleToggleText={"Base Dish"}
    />
  </Provider>, document.getElementById('app')
);
