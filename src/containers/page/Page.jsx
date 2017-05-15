import './_page.scss';
import logo from '../../images/omnirom_logo.png';
import bannerBg from '../../images/woods.jpg';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleNavDrawer } from './pageReducer';
import Navigation from '../../components/navigation/Navigation.jsx';
import Banner from '../../components/banner/Banner.jsx';

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
    const {navDrawerState} = this.props;

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
        <div className="page__content">
          <Banner
            bgImageUrl={bannerBg}
            centerImageUrl={logo}
            heading="Omni"
            subHeading="innovation, new features, transparency, community, and freedom"
          />

        <div className="page__split-details">
          <div className="page__split-details-col">
            <h2 className="page__split-details-heading">About Omni</h2>
            <p>Omni isn’t better, just different. It’s another option for the billion Android users out there. Android (vs. iOS and every other mobile OS) has thrived on options as well as the gigantic, talented development community that has emerged to build those options. That’s the beauty of Android – that you can pick and choose from a smorgasbord of devices with varying features and functionality.</p>
            <p>Omni is a chance to get involved, no matter who you are. Developers, whether you’ve been developing apps for a week, or ROM features for 3 years, you’re welcome. Users, we know you want to help out, and now you can - we encourage all levels of contribution, from code to reporting bugs to squashing bugs to (what developer's tend to hate) documentation.</p>
          </div>
          <div className="page__split-details-col">
            <h2 className="page__split-details-heading">Get Involved</h2>
            <p>The core of Omni is the community, and we recognize that everyone has a role to play. So we have a number of ways for you to get involved:</p>
            <p><a href="http://github.com/omnirom" target="_blank">Github</a> – our codebase where we build from.</p>
            <p><a href="http://gerrit.omnirom.org" target="_blank">Gerrit</a> – view our project at the code level with the ability to see what’s merged, what’s open and what’s in review.</p>
            <p><a href="http://forum.xda-developers.com/forumdisplay.php?f=2601" target="_blank">Forum</a> – participate in general discussion, Q&A, and Features Development on XDA. Also find device-specific builds in their relevant forums on <a href="http://forum.xda-developers.com/">XDA</a></p>
            <p><a href="http://webchat.freenode.net/?channels=omnirom" target="_blank">IRC</a> – get involved with Omni in realtime on IRC Freenode:</p>
            <ul>
              <li>General discussion in <strong>#omnirom</strong></li>
              <li>Developer discussion in <strong>#omni</strong></li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
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
