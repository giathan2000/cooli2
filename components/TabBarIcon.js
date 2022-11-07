import React from 'react'
import Colors from '../constants/Colors'
import { Icon } from 'react-native-elements'

export default class TabBarIcon extends React.Component {
  render() {
    const { name, focused } = this.props
    return (
      <Icon
        name={name}
        size={35}
        style={{ marginBottom: -3 }}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    )
  }
}
