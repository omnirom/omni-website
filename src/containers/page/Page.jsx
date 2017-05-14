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

  socialMediaButtons = [
    {
      url: 'https://plus.google.com/communities/102450203113748251717',
      label: 'google',
      anchorClassname: 'social-media-button social-media-button__google',
      target: '_blank'
    },
    {
      url: 'https://twitter.com/omni_rom',
      label: 'twitter',
      anchorClassname: 'social-media-button social-media-button__twitter',
      target: '_blank'
    },
    {
      url: 'http://paypal.me/omnirom',
      label: 'paypal',
      anchorClassname: 'social-media-button social-media-button__paypal',
      target: '_blank'
    },
    {
      url: 'https://gerrit.omnirom.org/',
      label: 'gerrit',
      anchorClassname: 'social-media-button social-media-button__gerrit',
      target: '_blank'
    },
    {
      url: 'https://github.com/omnirom',
      label: 'github',
      anchorClassname: 'social-media-button social-media-button__github',
      target: '_blank'
    },
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

            <Navigation
              links={this.socialMediaButtons}
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
