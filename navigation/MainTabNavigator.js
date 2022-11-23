import React from 'react'
import {
  createBottomTabNavigator
} from 'react-navigation-tabs'
import {  createStackNavigator } from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TopPicksScreen from '../screens/TopPicksScreen'
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
  },
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: { 
    activeTintColor: '#fa7373',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="local-fire-department"
      
    />
  ),
}

const TopPicksStack = createStackNavigator(
  {
    TopPicks: TopPicksScreen,
  },
  {
    headerMode: 'none',
  },
)

TopPicksStack.navigationOptions = {
  tabBarLabel: 'TopPicks',
  tabBarOptions: { 
    activeTintColor: '#fa7373',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon  focused={focused} name="trending-up" />
  ),
}

const MessagesStack = createStackNavigator(
  {
    Messages: MessagesScreen,
  },
  {
    headerMode: 'none',
  },
)

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarOptions: { 
    activeTintColor: '#fa7373',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon  focused={focused} name="message" />
  ),
}

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    headerMode: 'none',
    
  },
)

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarOptions: { 
    activeTintColor: '#fa7373',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon  focused={focused} name="account-circle" />
  ),
}

export default createBottomTabNavigator({
  HomeStack,
  TopPicksStack,
  MessagesStack,
  ProfileStack,
})
