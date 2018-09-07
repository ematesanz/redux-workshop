import React, { Component } from 'react';
import './MyIp.css';

class MyIp extends Component {

    state = {
        ip: null
    }

    componentDidMount() {
        const url = 'https://api.ipify.org?format=json';
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState(data));
    }

    render() {
        const { ip } = this.state;
        return ip ? <div>IP: {ip}</div> : <div>Loading...</div>
    }

};

export default MyIp;
