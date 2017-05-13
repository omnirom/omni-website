import './_page.scss';
import logo from '../../images/omnirom_logo.png';
import React, {Component} from 'react';

export class Page extends Component {
  render() {
    return (
      <div className="page">
        <div className="page__header">
          <div className="page__header-contain">
            <a className="page__header-logo" href="#">
              <img src={logo} className="page__header-logo-image" />
              OmniRom
            </a>
          </div>
        </div>
        <div className="page__content">
          <h1>Content</h1>
        </div>
      </div>
    );
  }
}

Page.propTypes = {};

export default Page;
