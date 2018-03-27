import './_banner.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Banner extends Component {
  render() {
    const {
      bgImageUrl,
      centerImageUrl,
      heading,
      subHeading
    } = this.props;
    const imageStyle = {
      "backgroundImage": `linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.7) 80%, #000), url(${bgImageUrl})`
    };

    return (
      <div className="banner" style={imageStyle}>
        <div className="banner__image">
          <img src={centerImageUrl} />
        </div>
        <h1 className="banner__heading">{heading}</h1>
        <p className="banner__sub-heading">{subHeading}</p>
      </div>
    );
  }
}

Banner.propTypes = {
  bgImageUrl: PropTypes.string,
  centerImageUrl: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string
};

export default Banner;
