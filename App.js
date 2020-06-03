import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Ride from './src/Ride.js';
import RideList from './src/RideList.js';
import AddRideModal from './src/AddRideModal.js';
import Main from './src/Main'
import SignUp from './src/SignUp'
import Loading from './src/Loading'
import Login from './src/Login'
import db from './src/db.js';
import {Header, Title, Button, Icon} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';
import firebase from 'firebase/app';
import 'firebase/auth';

const App = createAppContainer(createSwitchNavigator(
  {
    Loading,
    SignUp,
    Main,
    Login
  },
  {
    initialRouteName: 'Loading'
  }
))
export default App