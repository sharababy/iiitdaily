import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Screen1 from './components/Screen1.js'

// const RootStack = StackNavigator({
//     Home: {
//       screen: Screen1,
//     }, 
//   },
//   {
//     initialRouteName: 'Home',
//   });


export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Screen1 />
      </ScrollView>
    );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
