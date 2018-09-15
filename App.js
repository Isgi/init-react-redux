
import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingScreen from './src/screens/SettingScreen';
import store from './src/redux/store';

const Root = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home'
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile'
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      title: 'Setting'
    }
  }
}, {
  initialRouteName: 'Setting'
});

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App;