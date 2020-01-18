import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'

import Login from './Login'
import Apps from './screens/Apps'


export default createBottomTabNavigator({
  Login: {
      screen: Login,
      navigationOptions: {
        tabBarLabel: 'LOGIN',
        
      }
    }
  },
  )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
