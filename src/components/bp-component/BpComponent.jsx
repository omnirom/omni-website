import './bp.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {toggleText} from './bpReducer';

export class BpComponent extends Component {
  toggle() {
    this.props.toggleText();
  }

  render() {
    const {
      buttonText,
      headingTitle,
      subHeading,
      titleToggleText,
      toggleState
    } = this.props;
    const title = toggleState ? headingTitle : titleToggleText;

    return (
      <div className="bp">
        <h1 className="bp__heading">{title}</h1>
        <p className="bp__subheading">{subHeading}</p>
        <button
          className="bp__text-toggle"
          onClick={this.toggle.bind(this)}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

BpComponent.propTypes = {
  buttonText: PropTypes.string,
  headingTitle: PropTypes.string,
  subHeading: PropTypes.string,
  titleToggleText: PropTypes.string,
  toggleState: PropTypes.bool,
  toggleText: PropTypes.func
};

function mapStateToProps(state) {
  return {
    toggleState: state.bpReducer.toggleState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleText: bindActionCreators(toggleText, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BpComponent);
