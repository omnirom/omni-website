import './_nav.scss';
import './_social-media-button.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Navigation extends Component {
  handleClick(routeType, event) {
    const {handleNavRoute} = this.props;

    if (routeType === 'internal') {
      handleNavRoute(routeType, event.target.getAttribute('href').slice(1), event);
    }
  }

  render() {
    const {links} = this.props;

    return (
      <ul className={`${this.props.hasOwnProperty('listClassname') ? this.props.listClassname : ''} nav`}>
        {
          links.map((link, index) => (
            <li className="nav__list-item" key={index}>
              <a
                className={`${link.hasOwnProperty('anchorClassname') ? link.anchorClassname : ''} nav__item-link`}
                href={link.url}
                target={link.target || '_self'}
                onClick={this.handleClick.bind(this, link.routeType)}
              >{link.label}</a>
            </li>
          ))
        }
      </ul>
    );
  }
}

Navigation.propTypes = {
  handleNavRoute: PropTypes.func,
  links: PropTypes.array,
  listClassname: PropTypes.string,
  push: PropTypes.func
};

export default Navigation;
