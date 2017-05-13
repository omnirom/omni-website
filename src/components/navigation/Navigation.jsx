import './_nav.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Navigation extends Component {
  render() {
    const {links} = this.props;

    return (
      <ul className="nav">
        {
          links.map((link, index) => (
            <li className="nav__list-item" key={index}>
              <a className="nav__item-link" href={link.url}>{link.label}</a>
            </li>
          ))
        }
      </ul>
    );
  }
}

Navigation.propTypes = {
  links: PropTypes.array
};

export default Navigation;
