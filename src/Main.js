import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ride from './Ride.js';
import RideList from './RideList.js';
import AddRideModal from './AddRideModal.js';
import MyRides from './MyRides.js';
import Profile from './Profile.js';
import db from './db.js';
import {Header, Title, Button, Icon, Container, Picker} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import firebase from 'firebase/app';
import 'firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Main() {
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

function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.main}>
      <Header style={styles.header}>
        <Title style={styles.title}>Chairlift</Title>
      </Header>
      <View style={styles.container}>
        <RideList style={styles.backdrop} dataState={{data, setData}}></RideList>
      </View>
    </View>
  )
}

function AddRideModalScreen({navigation, route}) {
  return (
  <AddRideModal navigation={navigation} userState={{user, setUser}} dataState={{data, setData}}>
  </AddRideModal>
  )
}

function MyRidesScreen({navigation, route}) {
  return (
  <MyRides dataState={{data, setData}}>
  </MyRides>
  )
}

function ProfileScreen({navigation, route}) {
  return (
  <Profile userState={{user, setUser}}>
  </Profile>
  )
}

  

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  
  return (
    <Container>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home'; //can be changed to react to clicks
            } 
              else if (route.name === 'AddRideModal') {
                iconName = focused ? 'plus' : 'plus';
              }

              else if (route.name === 'My Rides') {
                iconName = focused ? 'car' : 'car';
              }
            
              else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            }

            return <Icon type="FontAwesome" name={iconName} /> ;
          },
        })}
      >
          <Tab.Screen name="Home" component={HomeScreen}/>

          <Tab.Screen name="AddRideModal" component={AddRideModalScreen} options={{ title: 'Create Ride' }}/>
          <Tab.Screen name="My Rides" component={MyRidesScreen}/>
          <Tab.Screen name="Profile" component={ProfileScreen} />
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
    position: 'absolute',
    right: 16,
    backgroundColor:"#484848"
  }
});