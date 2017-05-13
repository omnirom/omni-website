import './_page.scss';
import logo from '../../images/omnirom_logo.png';
import React, {Component} from 'react';
import Navigation from '../../components/navigation/Navigation.jsx';

export class Page extends Component {
  navItems = [
    {url: '#', label: 'About Omni'},
    {url: '#', label: 'Devices'},
    {url: '#', label: 'Source'},
    {url: '#', label: 'Wiki'},
    {url: '#', label: 'Blog'},
    {url: '#', label: 'Donate'}
  ]

  render() {
    return (
      <div className="page">
        <div className="page__header">
          <div className="page__header-contain">
            <a className="page__header-logo" href="#">
              <img src={logo} className="page__header-logo-image" />
              OmniRom
            </a>

            <Navigation
              links={this.navItems}
            />
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
