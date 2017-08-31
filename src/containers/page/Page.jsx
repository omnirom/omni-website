import './_page.scss';
import logo from '../../images/omnirom_logo.png';
import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {push} from 'react-router-redux';
import classnames from 'classnames';
import { toggleNavDrawer } from './pageReducer';
import Navigation from '../../components/navigation/Navigation.jsx';

export class Page extends Component {
  navItems = [
    {url: '/', label: 'Home', routeType: 'internal'},
    {url: '/devices', label: 'Devices', routeType: 'internal'},
    {url: '/source', label: 'Source', routeType: 'internal'},
    {url: 'https://docs.omnirom.org', label: 'Wiki', target: '_blank'},
    {url: '#', label: 'Blog'},
    {url: '/donate', label: 'Donate', routeType: 'internal'}
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
    {
      url: 'http://jira.omnirom.org',
      label: 'jira',
      anchorClassname: 'social-media-button social-media-button__jira',
      target: '_blank'
    }
  ]

  handleNavRoute(routeType, route, event = false) {
    if (routeType === 'internal') {
      if (event) {
        event.preventDefault();
      }
      this.props.push(route);
    }
  }

  handleNavToggle() {
    this.props.toggleNavDrawer();
  }

  render() {
    const {
      children,
      contentClassName,
      navDrawerState,
      constrain
    } = this.props;
    const pageContentClassname = classnames({
      [`${contentClassName}`]: !_.isEmpty(contentClassName),
      "page__content": true,
      "page__content--constrained": constrain
    });
    const navOnClick = navDrawerState ? this.handleNavToggle.bind(this) : null;

    return (
      <div className="page">
        <div className={`page__header ${navDrawerState ? 'page__header--drawer-open' : ''}`}>
          <div className="page__header-contain">
            <a className="page__header-logo" href="/" onClick={this.handleNavRoute.bind(this, 'internal', '/')}>
              <img src={logo} className="page__header-logo-image" />
              OmniROM
            </a>

            <div className="page__nav-container">
              <Navigation
                links={this.navItems}
                handleNavRoute={this.handleNavRoute.bind(this)}
                navItemClick={navOnClick}
              />

              <Navigation
                links={this.socialMediaButtons}
                listClassname="social-nav"
                navItemClick={navOnClick}
              />
            </div>

            <button type="button" className="page__header-hamburger" onClick={this.handleNavToggle.bind(this)}>
              <span className="page__header-hamburger-line" />
              <span className="page__header-hamburger-line" />
              <span className="page__header-hamburger-line" />
            </button>
          </div>
        </div>
        <div className={pageContentClassname}>
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

Page.defaultProps = {
  constrain: false
};

Page.propTypes = {
  children: PropTypes.any,
  constrain: PropTypes.bool,
  contentClassName: PropTypes.string,
  navDrawerState: PropTypes.bool,
  push: PropTypes.func,
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
    push: bindActionCreators(push, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
