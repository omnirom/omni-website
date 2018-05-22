import './_privacy.scss';
import React, {Component} from 'react';
import Page from '../page/Page.jsx';

export class Privacy extends Component {
  render() {
    return (
      <Page contentClassName="privacy" constrain={true}>
        <h1 className="privacy__page-title">Privacy Policy</h1>

        <div className="privacy__section">
          <div className="privacy__section-text">
            <p>
              Your privacy is very important to us at OmniROM. Our Privacy Policy explains how we get, use, and store your information. Please take a moment to get familiar with our privacy practices.
            </p>
            <p>
              OmniROM provides an after-market operating system ("custom ROM") based on the Android Open Source Project as well as additional applications for various mobile devices.
            </p>
          </div>
        </div>

        <div className="privacy__section">
          <h3 className="privacy__section-title">Information we have</h3>
          <div className="privacy__section-text">
            <ul>
              <p>
                <li>
                  Information we store from the contributions to our code review platform (Gerrit)
                  <ul>
                    <li>Email addresses for registration and to facilitate review</li>
                    <li>IP addresses, SSH activity, and API access are logged for rate limiting, diagnostics or to prevent abuse.</li>
                  </ul>
                </li>
              </p>
              <p>
              <li>
                Information we store from bug reports
                <ul>
                  <li>Email addresses for registration to our bug tracking platform (JIRA)</li>
                  <li>IP addresses are logged for rate limiting, diagnostics or to prevent abuse.</li>
                </ul>
              </li>
              </p>
              <p>
              <li>
                Information we store from downloads of ROM files
                <ul>
                  <li>IP addresses, information about the user's browser are logged for statistics purposes, rate limiting, diagnostics or to prevent abuse.</li>
                </ul>
              </li>
              </p>
              <p>
              <li>
                Additional information you may provide to us
                <ul>
                  <li>Bug reports submitted to assist in providing support may contain Personally Identifiable Information (PII). While we will do our best to prevent the collection of this information from processes within our control, your usage and submission of this data may contain PII and you should take steps to sanitize and validate this data prior to submission.</li>
                </ul>
              </li>
              </p>
            </ul>
          </div>
        </div>

        <div className="privacy__section">
          <h3 className="privacy__section-title">Website</h3>
          <div className="privacy__section-text">
            <p>
              As with most websites, we gather some information automatically and store it in log files. This information includes Internet Protocol (IP) addresses, browser type (and version) and language (the so-called "User-Agent"), date/time stamp, and the requested URL.
            </p>
            <p>
              We collect statistics information regarding user activities on our website and from our other products and services by analysing access log data. This information is aggregated and used to help us provide more useful information to our users, to understand which parts of our website, products, and services are of most interest, and for general system diagnostics. Aggregated data is considered non-personal information for the purposes of this Privacy Policy.
            </p>
            <p>
              We do not knowingly collect personal information from children under 13 except where a parent has set up an account for their child and provided OmniROM with verified parental consent. If we learn that we have collected the personal information of a child under 13 without first receiving verifiable parental consent we will take steps to delete the information as soon as possible.
            </p>
          </div>
        </div>

        <div className="privacy__section">
          <h3 className="privacy__section-title">Information we may share</h3>
          <div className="privacy__section-text">
            <p>
              We do not share your information with companies, organizations, or individuals outside of OmniROM unless one of the following circumstances applies:
            </p>
            <p>
              <ul>
                <li>
                  With your consent (submission of bug reports to our bug tracking platform is considered consent)
                </li>
                <li>
                  When legally required.
                </li>
              </ul>
            </p>
            <p>
              We will share the information we have with entities outside of OmniROM if we have a good faith or belief that access, use, preservation, or disclosure of the information is necessary to:
            </p>
            <p>
              <ul>
                <li>
                  meet any applicable law, regulation, legal process or enforceable governmental request.
                </li>
                <li>
                  detect, prevent, or otherwise address fraud, security, or technical issues.
                </li>
                <li>
                  protect against harm to the rights, property, or safety of OmniROM, our users, or the public as required or permitted by law.
                </li>
              </ul>
            </p>
            <p>
              We will update this privacy policy as needed so that it is current, accurate, and as clear as possible. For any privacy related inquiries, forward your questions to <a href="mailto:privacy@omnirom.org?Subject=Privacy Inquiry">privacy@omnirom.org</a>.
            </p>
          </div>
        </div>
      </Page>
    );
  }
}

export default Privacy;
