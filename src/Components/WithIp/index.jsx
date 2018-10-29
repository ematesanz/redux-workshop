import React, { Component } from 'react';

class WithIp extends Component {

    state = {
        ip: null
    }

    componentDidMount() {
        const { ip } = this.state;
        const url = 'https://api.ipify.org?format=json';
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState(data));
    }

    render() {
        const { ip } = this.state;
        return  ip ? this.props.children(ip) : <div>Loading ip...</div>
    }

};

export default WithIp;
