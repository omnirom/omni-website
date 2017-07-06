import './_donate.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {push} from 'react-router-redux';
import Page from '../page/Page.jsx';

export class Donate extends Component {
  handleNavRoute(routeType, route, event = false) {
    if (routeType === 'internal') {
      if (event) {
        event.preventDefault();
      }
      this.props.push(route);
    }
  }

  render() {
    return (
      <Page contentClassName="donate" constrain={true}>
        <h1 className="donate__page-title">Donate</h1>

        <p className="donate__info">
          If you’ve spent any time around the Omni team, there’s one thing you’ll notice: we love <a href="http://opensource.org/docs/osd" target="_blank">open source</a>, and we love the community. <a href="/source" onClick={this.handleNavRoute.bind(this, 'internal', '/source')}>Everyone here</a> does this out of their own spare time, oftentimes at the detriment to their personal time and lives, and receive nothing in return other than the satisfaction of a job well done. However, as anyone involved in an independent project can tell you, the very tools used to bring the <a href="/downloads" target="_blank">downloads</a> and services to you, well frankly they cost money. With that being said, we know that there are those out there who would love to donate to this project to help cover costs, provide devices to developers, and to help facilitate new services and features. So to help connect those dots, we are providing one way to donate to Omni (with more to come):
        </p>

        <div className="donate__button-container">
          <a href="http://paypal.me/omnirom" target="_blank" className="donate__button">Donate</a>
        </div>
      </Page>
    );
  }
}

Donate.propTypes = {
  push: PropTypes.func.isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    push: bindActionCreators(push, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Donate);
