import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ride from './Ride.js';
import RideList from './RideList.js';
import AddRideModal from './AddRideModal.js';
import MyRides from './MyRides.js';
import db from './db.js';
import {Header, Title, Button, Icon, Container} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import firebase from 'firebase/app';
import 'firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Profile = ({userState}) => {
    const [user, setUser] = [userState.user, userState.setUser];
    let userID = null;
    let profileItem = null;

    if (user != null) {
        userID = firebase.auth().uid;
        profileItem = firebase.database().ref("users/" + userID + "/profile");
        console.log("user", user);
        return (
            <Container style={styles.container}>
                <View>
                    <Text>This is {user.displayName}'s profile page</Text>
                    <Text>{user.phoneNumber}</Text>
                    <Button light onPress={() => firebase.auth().signOut()}><Text>Sign Out</Text></Button>
                </View>
            </Container>
        )
    }
    else {
        return (
            <Container style={styles.container}>
                 <Text>Loading Profile Information...</Text>
            </Container>
           
        )
    }
    
}

const styles = StyleSheet.create({
    main: {
      flex: 1
    },
  
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }});

export default Profile;