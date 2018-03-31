import './_notfound.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {push} from 'react-router-redux';
import Page from '../page/Page.jsx';
import omni404 from '../../images/omni404.png';

export class NotFound extends Component {
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
      <Page contentClassName="notfound" constrain={true}>
	      <h1 className="notfound__page-title">Page Not Found</h1>
        <div className="notfound__info">
          <p>Whoops ... this page does not even exist yet!</p>
        </div>
        <div className="notfound__section-image">
          <img src={omni404} />
        </div>
      </Page>
    );
  }
}

NotFound.propTypes = {
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
)(NotFound);
