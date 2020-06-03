import React, {useEffect} from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase/app';
import db from './db.js';

const Loading = ({navigation}) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {navigation.navigate(user ? 'Main' : 'SignUp')});
  }, []);

  return (
    <View>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  )
};

export default Loading;