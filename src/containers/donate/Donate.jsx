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

        <div className="donate__info">
          <p>If you’ve spent any time around the Omni team, there’s one thing you will notice: <strong>we love <a href="http://opensource.org/docs/osd" target="_blank">open source</a>, and we love the community.</strong></p>
          <p><a href="/source" onClick={this.handleNavRoute.bind(this, 'internal', '/source')}>Everyone here</a> does this out of their own spare time, oftentimes at the detriment to their personal time and lives, and receive nothing in return other than the satisfaction of a job well done.
          However, as anyone involved in an independent project can tell you, the very tools used to bring the downloads and services to you, well frankly they tend to cost money.</p>
          <p>With that being said, we know that there are those out there who would love to donate to this project to help cover costs, provide devices to developers, and to help facilitate new services and features. So to help connect those dots, we are providing a few ways to donate to the OmniROM project:</p>
        </div>

        <div className="donate__button-container">
          <a href="http://paypal.me/omnirom" target="_blank" className="donate__button">Donate</a>
        </div>
        <table className="donate__crypto-table">
          <tbody>
            <tr>
              <th>LTC:</th>
              <td>LaS4P1Nff8eG7p5fmQ9fGuFPovZuUGyhEm</td>
            </tr>
            <tr>
              <th>BTC:</th>
              <td>18Q3SJUkz1jxNrrWxjLWNR8i8Ppj185CCk</td>
            </tr>
            <tr>
              <th>ETC:</th>
              <td>0x4e49D75F444E26532fd3D903D8e1F21c9559F0F6</td>
            </tr>
          </tbody>
        </table>
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
