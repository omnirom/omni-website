import './_page.scss';
import logo from '../../images/omnirom_logo.png';
import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleNavDrawer } from './pageReducer';
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

  handleNavToggle() {
    this.props.toggleNavDrawer();
  }

  render() {
    const {
      children,
      contentClassName,
      navDrawerState
    } = this.props;

    return (
      <div className="page">
        <div className={`page__header ${navDrawerState ? 'page__header--drawer-open' : ''}`}>
          <div className="page__header-contain">
            <a className="page__header-logo" href="#">
              <img src={logo} className="page__header-logo-image" />
              OmniRom
            </a>

            <div className="page__nav-container">
              <Navigation
                links={this.navItems}
              />

              <Navigation
                links={this.socialMediaButtons}
                listClassname="social-nav"
              />
            </div>

            <button type="button" className="page__header-hamburger" onClick={this.handleNavToggle.bind(this)}>
              <span className="page__header-hamburger-line" />
              <span className="page__header-hamburger-line" />
              <span className="page__header-hamburger-line" />
            </button>
          </div>
        </div>
        <div className={`${!_.isEmpty(contentClassName) ? contentClassName : ''} page__content`}>
          {children}
        </div>
        <div className="page__footer">
          <Navigation
            links={this.socialMediaButtons}
            listClassname="social-nav"
          />

          <p className="page__copyright">© 2013-17 OmniROM. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.any,
  contentClassName: PropTypes.string,
  navDrawerState: PropTypes.bool,
  toggleNavDrawer: PropTypes.func
};

function mapStateToProps(state) {
  return {
    navDrawerState: state.pageReducer.navDrawerState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleNavDrawer: bindActionCreators(toggleNavDrawer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
