import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ride from './Ride.js';
import RideList from './RideList.js';
import AddRideModal from './AddRideModal.js';
import MyRides from './MyRides.js';
import Profile from './Profile.js';
import db from './db.js';
import {Header, Title, Button, Icon, Container} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import firebase from 'firebase/app';
import 'firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// ****************************************
// @ MARGOT + AMRO + AVA 
// access user info via db like this! firebase.database().ref("users/" + userID + "/profile")
// pass user state into your component and userID = user.uid
// ****************************************

function HomeScreen({ navigation, route }) {
  const [user, setUser] = useState(null);

  const [data, setData] = useState({});

    useEffect(() => {
        const handleData = snap => {
          if (snap.val()) {
            setData(snap.val());
          } 
        }
        db.on('value', handleData, error => alert(error));
        return () => { db.off('value', handleData); };
      }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(authUser => {
        setUser(authUser);
        });
  }, []);

  return (
    <View style={styles.main}>
      <Header style={styles.header}>
        <Title style={styles.title}>Chairlift</Title>
      </Header>
      <Button onPress={() => firebase.auth().signOut()}><Text>Sign Out</Text></Button>
      <View style={styles.container}>
        <RideList style={styles.backdrop} dataState={{data, setData}}></RideList>
      </View>
    </View>
  )
}

function AddRide() {
  return (
  <Text>Add a ride Here</Text>
  )
}

export default function Main() {
  const [test, setTest] = useState("hello");
  

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  
  return (
    <Container>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="AddRideModal" component={AddRideModal} options={{ title: 'Add a New Ride' }}/>
          <Tab.Screen name="My Rides" component={MyRides}/>
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </Container>

  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 32,
     color: "#EDF0F5"

  },

  header: {
    backgroundColor: '#19647E',
    width: "100%"
  }, 

  addRideModal: {
    // width: "10%",
    position: 'absolute',
    right: 16,
    backgroundColor:"#484848"
  }
});