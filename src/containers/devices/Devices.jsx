import './_devices.scss';
import React, { Component } from 'react';
import Page from '../page/Page.jsx';
import defaultPhone from '../../images/phones/default_phone_omni.png';
import honorv10 from '../../images/phones/honorv10_berkeley.png';
import mi5 from '../../images/phones/mi5.png';
import mi6 from '../../images/phones/mi6_sagit.png';
import mido from '../../images/phones/redminote4_mido.png';
import miMix2 from '../../images/phones/mimix2.png';
import motoG4Plus from '../../images/phones/motog4plus_athene.png';
import motoG5Plus from '../../images/phones/motog5plus_potter.png';
import nexus5x from '../../images/phones/nexus5x.png';
import onePlus from '../../images/phones/opo.png';
import onePlus3t from '../../images/phones/op3t.png';
import onePlus5 from '../../images/phones/op5.png';
import onePlus5t from '../../images/phones/op5t.png';
import kenzo from '../../images/phones/redminote3_kenzo.png';
import robin from '../../images/phones/ether.png';
import tabs2 from '../../images/phones/tabs2.png';
import xperiaX from '../../images/phones/xperiaxsuzu.png';
import xperiaXCompact from '../../images/phones/xperiaxcompact.png';
import xperiaXzKagura from '../../images/phones/xperiaxz_kagura.png';
import xperiaXzsKeyaki from '../../images/phones/xperiaxzs_keyaki.png';
import axios from "axios";

export class Devices extends Component {
    state = {
        deviceList: []
    };

    componentDidMount() {
        let d = {};
        d['model'] = "All Devices";
        d['make'] = "All Manufactures";
        d['state'] = "official";
        d['pageUrl'] = "https://dl.omnirom.org/";
        d['image'] = defaultPhone;
        this.setState({
            ...this.state,
            deviceList: [...this.state.deviceList, d]
        });

        this.loadGithubRepos("android-10");
    }

    loadGithubRepos = (branch) => {
        axios
            .get("https://gerrit.omnirom.org/projects/?b=" + branch + "&p=android_device", {
            })
            .then(response => {
                let magic = ")]}'";
                let repos = response.data.substring(magic.length);
                let s = JSON.parse(repos)
                for (var repo in s) {
                    let url = "https://raw.githubusercontent.com/omnirom/" + repo + "/android-10"
                    this.loadDevice(url);
                }
            })
            .catch(error => {
                console.log("loadGithubRepos", error);
            });
    }

    loadDevice = (url) => {
        axios
            .get(url + "/meta/config.json", {
            })
            .then(response => {
                let device = response.data;
                let d = device;
                d['image'] = url + "/" + device['image']
                this.setState({
                    ...this.state,
                    deviceList: [...this.state.deviceList, d]
                });
            })
            .catch(error => {
                console.log("loadDevice", error);
            });
    }

    render() {
        return (
            <Page contentClassName="devices" >
                <h1>Supported Devices</h1>
                <div className="devices__list">
                    {this.state.deviceList.map((device, index) => {
                        return (
                            <a href={device.pageUrl} target="_blank" className="devices__device" key={index}>
                                <img src={device.image} className="devices__device-image" width="250" height="250" />
                                <h3 className="devices__device-title">{device.model}</h3>
                                <h3 className="devices__device-subtitle">{device.state}</h3>
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
