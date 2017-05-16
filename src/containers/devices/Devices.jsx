import './_devices.scss';
import React, {Component} from 'react';
import Page from '../page/Page.jsx';

export class Devices extends Component {
  render() {
    return (
      <Page contentClassName="devices">
        <h1>Devices</h1>
      </Page>
    );
  }
}

export default Devices;
