import React, {Component} from 'react';

const MenuContext = React.createContext();

class MenuProvider extends Component {

  state = {
    activeIndex: 1
  }

  render() {
    return (
      <MenuContext.Provider value={{
          activeIndex: this.state.activeIndex,
          updateIndex: (index) => this.setState({activeIndex: index})
        }}>
        {this.props.children}
      </MenuContext.Provider>
    )
  }
}


const MenuConsumer = MenuContext.Consumer;

export { MenuProvider, MenuConsumer };
