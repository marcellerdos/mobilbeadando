
import React from 'react';

 

import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';

 
const TabScreen = createMaterialTopTabNavigator(
  {
    Kezdőlap: { screen: FirstPage },
    Boraink: { screen: SecondPage },
    Kapcsolat: { screen: ThirdPage },
    Facebook: { screen: FourthPage }
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#292929',   
      },
      labelStyle: {
        textAlign: 'center',
        fontSize:12
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);
 

const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#292929',
      },
      headerTintColor: '#FFFFFF',
      title: 'Erdős Pince',
    },
  },
});
export default createAppContainer(App);