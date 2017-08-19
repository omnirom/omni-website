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
          <h2 className="source__section-title">Contributors</h2>
          <div className="source__section-image">
            <img src={android} />
          </div>
          <div className="source__section-text">
            Below is a list of contributors to Omni that is automatically generated from merged Gerrit change requests. If you would like to contribute, make sure you check out our <a href="http://docs.omnirom.org/Getting_Involved" target="_blank">Getting Involved</a>, <a href="http://docs.omnirom.org/Gerrit_Rules" target="_blank">Gerrit Rules</a>, and <a href="http://docs.omnirom.org/Contributing_code" target="_blank">Contributing Code</a> pages. We will update this list on a regular basis, so look to see this list grow!

            <p>**automatically generated list**</p>
          </div>
        </div>
      </Page>
    );
  }
}

export default Source;
