import './_source.scss';
import React, {Component} from 'react';
import Page from '../page/Page.jsx';
import embedClose from '../../images/embed-close.svg';
import android from '../../images/android.svg';

export class Source extends Component {
  render() {
    return (
      <Page contentClassName="source" constrain={true}>
        <h1 className="source__page-title">Source</h1>

        <div className="source__section">
          <h2 className="source__section-title">Code</h2>
          <div className="source__section-image">
            <img src={embedClose} />
          </div>
          <div className="source__section-text">
            Our source code is available on <a href="https://github.com/omnirom/" target="_blank">Github</a>! You can check out our <a href="http://gerrit.omnirom.org" target="_blank">Gerrit instance</a> for features and requests that have been submitted for review and discussion.
          </div>
        </div>

        <div className="source__section">
          <h2 className="source__section-title">Get Involved</h2>
          <div className="source__section-image">
            <img src={android} />
          </div>
          <div className="source__section-text">
            Omni exists because of the contributors to the project. If you would like to participate, make sure you check out our <a href="https://github.com/omnirom/Docs/blob/master/Contributing_code.md" target="_blank">Contributing Code</a> and <a href="https://github.com/omnirom/Docs/blob/master/Gerrit_rules.md" target="_blank">Gerrit Rules</a> pages. We will update this list on a regular basis, so look to see this list grow!
          </div>
        </div>
      </Page>
    );
  }
}

export default Source;
