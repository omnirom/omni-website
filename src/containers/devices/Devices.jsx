import './_devices.scss';
import React, {Component} from 'react';
import Page from '../page/Page.jsx';
import nexus5x from '../../images/phones/nexus5x.png';
import nexus6 from '../../images/phones/nexus6.png';
import nexus6p from '../../images/phones/nexus6p.png';
import nexus9 from '../../images/phones/nexus9.png';
import onePlus from '../../images/phones/opo.png';
import onePlus2 from '../../images/phones/op2.png';
import onePlus3t from '../../images/phones/op3t.png';
import oppo from '../../images/phones/oppofind7.png';
import seed from '../../images/phones/seed.png';
import xperiaX from '../../images/phones/xperiaxsuzu.png';
import xperiaXCompact from '../../images/phones/xperiaxcompact.png';
import xperiaZ3 from '../../images/phones/xperiaz3.png';
import robin from '../../images/phones/ether.png';
import leecozl1 from '../../images/phones/leecozl1.png';

export class Devices extends Component {
  devices = [
    {
      model: "Nexus 5X",
      make: "Google",
      image: nexus5x,
      pageUrl: "http://dl.omnirom.org/bullhead"
    },
    {
      model: "Nexus 6",
      make: "Google",
      image: nexus6,
      pageUrl: "http://dl.omnirom.org/shamu"
    },
    {
      model: "Nexus 6P",
      make: "Google",
      image: nexus6p,
      pageUrl: "http://dl.omnirom.org/angler"
    },
    {
      model: "Nexus 9",
      make: "Google",
      image: nexus9,
      pageUrl: "http://dl.omnirom.org/flounder"
    },
    {
      model: "One",
      make: "Oneplus",
      image: onePlus,
      pageUrl: "http://dl.omnirom.org/find7op"
    },
    {
      model: "2",
      make: "Oneplus",
      image: onePlus2,
      pageUrl: "http://dl.omnirom.org/oneplus2"
    },
    {
      model: "3/3T",
      make: "Oneplus",
      image: onePlus3t,
      pageUrl: "http://dl.omnirom.org/oneplus3"
    },
    {
      model: "Find 7",
      make: "Oppo",
      image: oppo,
      pageUrl: "http://dl.omnirom.org/find7"
    },
    {
      model: "Android One (seed)",
      make: "Google",
      image: seed,
      pageUrl: "http://dl.omnirom.org/seed"
    },
    {
      model: "Xperia X",
      make: "Sony",
      image: xperiaX,
      pageUrl: "http://dl.omnirom.org/suzu"
    },
    {
      model: "Xperia X Compact",
      make: "Sony",
      image: xperiaXCompact,
      pageUrl: "http://dl.omnirom.org/kugo"
    },
    {
      model: "Xperia Z3",
      make: "Sony",
      image: xperiaZ3,
      pageUrl: "http://dl.omnirom.org/leo"
    },
    {
      model: "Robin",
      make: "Nextbit",
      image: robin,
      pageUrl: "http://dl.omnirom.org/ether"
    },
    {
      model: "Le Pro 3",
      make: "Leeco",
      image: leecozl1,
      pageUrl: "http://dl.omnirom.org/zl1"
    }
  ]

  render() {
    return (
      <Page contentClassName="devices">
        <h1>Supported Devices</h1>
        <div className="devices__list">
          {this.devices.map((device, index) => {
            return (
              <a href={device.pageUrl} target="_blank" className="devices__device" key={index}>
                <img src={device.image} className="devices__device-image" />
                <h3 className="devices__device-title">{device.model}</h3>
                <span className="devices__device-subtitle">{device.make}</span>
              </a>
            );
          })}
        </div>
      </Page>
    );
  }
}

export default Devices;
