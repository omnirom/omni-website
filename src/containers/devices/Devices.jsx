import './_devices.scss';
import React, {Component} from 'react';
import Page from '../page/Page.jsx';
import elephoneTrunk from '../../images/phones/elephone_trunk.png';
import leecoZl1 from '../../images/phones/leecozl1.png';
import leecoX2 from '../../images/phones/leeco_x2.png';
import lenovoA6000 from '../../images/phones/lenovo_a6000.png';
import motoG4Plus from '../../images/phones/motog4plus_athene.png';
import motoXStyle from '../../images/phones/motoxstyleclark.png';
import motoZ from '../../images/phones/motoz_griffin.png';
import nexus5x from '../../images/phones/nexus5x.png';
import nexus6 from '../../images/phones/nexus6.png';
import nexus6p from '../../images/phones/nexus6p.png';
import nexus9 from '../../images/phones/nexus9.png';
import nexus10 from '../../images/phones/nexus10_manta.png';
import onePlus from '../../images/phones/opo.png';
import onePlus2 from '../../images/phones/op2.png';
import onePlus3t from '../../images/phones/op3t.png';
import onePlus5 from '../../images/phones/op5.png';
import oppo from '../../images/phones/oppofind7.png';
import kenzo from '../../images/phones/redmi3pro_kenzo.png';
import robin from '../../images/phones/ether.png';
import tabs2 from '../../images/phones/tabs2.png';
import seed from '../../images/phones/seed.png';
import xperiaX from '../../images/phones/xperiaxsuzu.png';
import xperiaXCompact from '../../images/phones/xperiaxcompact.png';
import xperiaXzKagura from '../../images/phones/xperiaxz_kagura.png';

export class Devices extends Component {
  devices = [
    {
      model: "One (find7op)",
      make: "Oneplus",
      image: onePlus,
      pageUrl: "http://dl.omnirom.org/find7op"
    },
    {
      model: "Find 7 (find7)",
      make: "Oppo",
      image: oppo,
      pageUrl: "http://dl.omnirom.org/find7"
    },
    {
      model: "2 (oneplus2)",
      make: "Oneplus",
      image: onePlus2,
      pageUrl: "http://dl.omnirom.org/oneplus2"
    },
    {
      model: "3/3T (oneplus3)",
      make: "Oneplus",
      image: onePlus3t,
      pageUrl: "http://dl.omnirom.org/oneplus3"
    },
    {
      model: "5 (oneplus5)",
      make: "Oneplus",
      image: onePlus5,
      pageUrl: "http://dl.omnirom.org/oneplus5"
    },
    {
      model: "Android One (seed)",
      make: "Google",
      image: seed,
      pageUrl: "http://dl.omnirom.org/seed"
    },
    {
      model: "Galaxy Tab S2 (gts210vewifi)",
      make: "Samsung",
      image: tabs2,
      pageUrl: "http://dl.omnirom.org/gts210vewifi"
    },
    {
      model: "Nexus 5X (bullhead)",
      make: "Google",
      image: nexus5x,
      pageUrl: "http://dl.omnirom.org/bullhead"
    },
    {
      model: "Nexus 6 (shamu)",
      make: "Google",
      image: nexus6,
      pageUrl: "http://dl.omnirom.org/shamu"
    },
    {
      model: "Nexus 6P (angler)",
      make: "Google",
      image: nexus6p,
      pageUrl: "http://dl.omnirom.org/angler"
    },
    {
      model: "Nexus 9 (flounder)",
      make: "Google",
      image: nexus9,
      pageUrl: "http://dl.omnirom.org/flounder"
    },
    {
      model: "Nexus 10 (manta)",
      make: "Google",
      image: nexus10,
      pageUrl: "http://dl.omnirom.org/manta"
    },
    {
      model: "LeMax 2 (x2)",
      make: "Leeco",
      image: leecoX2,
      pageUrl: "http://dl.omnirom.org/x2"
    },
    {
      model: "LePro 3 (zl1)",
      make: "Leeco",
      image: leecoZl1,
      pageUrl: "http://dl.omnirom.org/zl1"
    },
    {
      model: "Lenovo A6000 (a6000)",
      make: "Lenovo",
      image: lenovoA6000,
      pageUrl: "http://dl.omnirom.org/a6000"
    },
    {
      model: "Moto G4 Plus (athene)",
      make: "Motorola",
      image: motoG4Plus,
      pageUrl: "http://dl.omnirom.org/athene"
    },
    {
      model: "Moto Z (griffin)",
      make: "Motorola",
      image: motoZ,
      pageUrl: "http://dl.omnirom.org/griffin"
    },
    {
      model: "Moto X Style (clark)",
      make: "Motorola",
      image: motoXStyle,
      pageUrl: "http://dl.omnirom.org/clark"
    },
    {
      model: "Redmi 3 Pro (kenzo)",
      make: "Xiaomi",
      image: kenzo,
      pageUrl: "http://dl.omnirom.org/kenzo"
    },
    {
      model: "Robin (ether)",
      make: "Nextbit",
      image: robin,
      pageUrl: "http://dl.omnirom.org/ether"
    },
    {
      model: "Trunk (trunk)",
      make: "Elephone",
      image: elephoneTrunk,
      pageUrl: "http://dl.omnirom.org/trunk"
    },
    {
      model: "Xperia X (suzu)",
      make: "Sony",
      image: xperiaX,
      pageUrl: "http://dl.omnirom.org/suzu"
    },
    {
      model: "Xperia X Compact (kugo)",
      make: "Sony",
      image: xperiaXCompact,
      pageUrl: "http://dl.omnirom.org/kugo"
    },
    {
      model: "Xperia XZ (kagura)",
      make: "Sony",
      image: xperiaXzKagura,
      pageUrl: "http://dl.omnirom.org/kagura"
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
