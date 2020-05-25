// Loading.js
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
// import firebase from 'react-native-firebase'
import firebase from 'firebase/app';

export default class Loading extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(
        console.log("hi")
        )
      }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})