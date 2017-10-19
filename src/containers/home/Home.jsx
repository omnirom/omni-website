import './_home.scss';
import logo from '../../images/omni_circle_logo_small.png';
import bannerBg from '../../images/omni_nebula.jpg';
import React, {Component} from 'react';
import Page from '../page/Page.jsx';
import Banner from '../../components/banner/Banner.jsx';

export class Home extends Component {
  render() {
    return (
      <Page contentClassName="home">
        <Banner
          bgImageUrl={bannerBg}
          centerImageUrl={logo}
          heading="#GetOmnified"
          subHeading="It's all about innovation, new features, transparency, community and freedom"
        />
        <div className="home__split-details">
          <div className="home__split-details-col">
            <h2 className="home__split-details-heading">About Omni</h2>
            <p>OmniROM is our Android custom ROM variant, feature-packed but always with <strong>stability as #1 priority</strong> in mind.</p>
            <p>Based on the Android Open Source Project (AOSP) and enriched by our developers with lots of custom enhancements, OmniROM has set out to give you a great Android experience on your mobile.</p>
            <p><strong>Omni isn’t better, just different.</strong></p>
            <p> It’s another option for the billion Android users out there. Android (vs. iOS and every other mobile OS) has thrived on options as well as the gigantic, talented development community that has emerged to build those options. That’s the beauty of Android – that you can pick and choose from a smorgasbord of devices with varying features and functionality.</p>
            <p><strong>Omni is a chance to get involved, no matter who you are.</strong></p>
            <p>Developers, whether you’ve been developing apps for a week, or ROM features for 3 years, you’re welcome. Users, we know you want to help out, and now you can - we encourage all levels of contribution, from code to reporting bugs to squashing bugs to (what developer's tend to hate) documentation.</p>
          </div>
          <div className="home__split-details-col">
            <h2 className="home__split-details-heading">Get Involved</h2>
            <p>The core of Omni is the community, and we recognize that everyone has a role to play. So we have a number of ways for you to get involved:</p>
            <p><a href="http://github.com/omnirom" target="_blank">Github</a> – our codebase where we build from.</p>
            <p><a href="http://gerrit.omnirom.org" target="_blank">Gerrit</a> – view our project at the code level with the ability to see what’s merged, what’s open and what’s in review.</p>
            <p><a href="http://forum.xda-developers.com/forumdisplay.php?f=2601" target="_blank">Forum</a> – participate in general discussion, Q&A, and Features Development on XDA. Also find device-specific builds in their relevant forums on <a href="http://forum.xda-developers.com/">XDA</a></p>
            <p><a href="http://webchat.freenode.net/?channels=omnirom" target="_blank">IRC</a> – get involved with Omni in realtime on IRC Freenode:</p>
            <ul>
              <li>General discussion in <strong>#omnirom</strong></li>
              <li>Developer discussion in <strong>#omni</strong></li>
            </ul>
          </div>
        </div>
      </Page>
    );
  }
}

export default Home;
