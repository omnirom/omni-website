import React, {Component} from 'react';

export class Page extends Component {
  render() {
    return (
      <div className="page">
        <div className="page__header">
          <a href="#">Omni</a>
        </div>
        <div className="page__content">
          <h1>Content</h1>
        </div>
      </div>
    );
  }
}

Page.propTypes = {};

export default Page;
