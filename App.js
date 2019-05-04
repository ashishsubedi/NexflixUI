import React from 'react';
import {
  StyleSheet,
  Text,
  View,
 
} from 'react-native';
//import { Constants } from 'expo';
import AppContainer from './src/screens/AppContainer';
export default class App extends React.Component {

  render() {
    return (
        <AppContainer/>
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  // statusBar: {
  //   backgroundColor: "#C2185B",
  //   height: Constants.statusBarHeight,
  // },
});
