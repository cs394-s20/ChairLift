// Loading.js
import React, {useEffect} from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
// import firebase from 'react-native-firebase'
import firebase from 'firebase/app';
// require('firebase/auth')
// import 'firebase/auth';

const Loading = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(console.log("hello"));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Loading;