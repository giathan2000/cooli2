import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  
  SplashScreen,
  MainTabNavigator,
  RegisterScreen,
  LoginScreen

}, 
{
  initialRouteName : "SplashScreen"
}));