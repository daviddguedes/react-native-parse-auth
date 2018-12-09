import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './Login';

const AuthNavigator = createStackNavigator({
   Login: {
      screen: LoginScreen
   }
});

export default createAppContainer(AuthNavigator);