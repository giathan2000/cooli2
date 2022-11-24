import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { Messages } from '../constants/Messages';
import TouchableScale from 'react-native-touchable-scale';

class MessagesScreen extends React.Component {
  componentDidMount = () => {
    console.log(Messages);
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {Messages.map((user, i) => (
            <ListItem
              key={i}
              bottomDivider
              style={{margin:3}}
              Component={TouchableScale}
              friction={80} //
              tension={100} // These props are passed to the parent component (here TouchableScale)
              activeScale={0.9} //
            >
              <Avatar rounded source={user.pic} size='large' />
              <ListItem.Content >
                <ListItem.Title style={styles.title}>{user.title}</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}>{user.message}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>

      </SafeAreaView>
    )
  }
}

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#3F3F3F',
  },
  subtitle: {
    color: '#A5A5A5',
  },
})

export default MessagesScreen
