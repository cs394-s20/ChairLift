import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Ride from './src/Ride.js';
import RideList from './src/RideList.js';
import AddRideModal from './src/AddRideModal.js';
import db from './src/db.js';
import {Header, Title, Button, Icon} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import firebase from 'firebase/app';
import 'firebase/auth';

// const App = createAppContainer(createSwitchNavigator(
//   {
//     Loading,
//     SignUp,
//     Login,
//     Main
//   },
//   {
//     initialRouteName: 'Loading'
//   }
// ))
const Loading = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {console.log("hello")});
  }, []);

  return (
    <View>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  )
};

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={Loading} />
        {/* <Stack.Screen name="AddRideModal" component={AddRideModal} options={{ title: 'Add a New Ride' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}