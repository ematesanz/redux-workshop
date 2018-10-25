import React, { Component } from 'react';

const IPContext = React.createContext();

class IPProvider extends Component {

  state = {
    ip: "Loading..."
  };

  componentDidMount() {
    const { ip } = this.state;
    const url = 'https://api.ipify.org?format=json';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState(data));
  }

  render() {
    return (
      <IPContext.Provider value={{ip: this.state.ip}}>
        {this.props.children}
      </IPContext.Provider>
    )
  }
}

const IPConsumer = IPContext.Consumer;

export { IPProvider, IPConsumer };
