import React, { Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body, Button } from 'native-base';
import RideModal from './RideModal';
import db from './db.js';
import firebase from 'firebase/app';
import 'firebase/database';

const Ride = (rideObj) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
      firebase.auth().onAuthStateChanged(authUser => {
          setUser(authUser);
          });
    }, []);


    const updateJSON = () => {
            
      var item = rideObj.ride;

      const userID = user.uid ;

      if(!("requested" in item)){
        var newRequest = {[userID]: "pending"};
        item["requested"] = newRequest;
      }else{
        var newRequest = {[userID]: "pending"};

        item.requested = {...item.requested, ...newRequest} ;
      }

      const driver = item.driverID;      
      firebase.database().ref("users/" + driver + "/driverRides/" + item.rideID).set(item);
      // adding to passenger rides in firebase???
      //firebase.database().ref("users/" + userID + "/passengerRides/" + item.rideID).set(item);

    };

    return (
      <View style={styles.container}>
        <RideModal modalVisibleState = { { modalVisible, setModalVisible } } rideObj = {rideObj}></RideModal>
        <CardItem header bordered style={styles.cardItems}>
          <Body>
          <Text style={styles.title}>
            {rideObj.ride.name}    
            </Text> 
          <Text> (0.5 mi away) <Icon style={styles.arrow} type="FontAwesome" name="arrow-right" /> {rideObj.ride.endLoc}</Text> 
          </Body>
          <Body>
          <Button style={styles.request} onPress={() => updateJSON()}>
                <Text style={styles.requestText}>Request</Text>
          </Button>
          </Body>
          
        </CardItem>
        <CardItem style={styles.cardItems}>
          <Body>
            <Text>
              Departure: {rideObj.ride.departTime}, {rideObj.ride.departDate}
            </Text>
          </Body>
          <Body>
            <Text>
              Return: {rideObj.ride.departTime}, {rideObj.ride.departDate}
            </Text>
          </Body>
        </CardItem>
        <CardItem style={styles.cardItems}>
          <Body>
            <Text>Seats Remaining: {rideObj.ride.seatsLeft} </Text>
          </Body>
          
          <TouchableOpacity style={styles.moreInfoBtn} onPress={() => {setModalVisible(true)}}>
              <Text><Icon style={styles.plus} type="FontAwesome" name="plus" /></Text>
          </TouchableOpacity>
        </CardItem>
      </View>
        
    )
}

// <style>
// @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300&display=swap');
// </style>

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor:"#EDF0F5"
  },
  title: {
    fontWeight:"bold",
    fontSize: 16
  },
  arrow: {
    fontSize: 10
  },
  cardItems: {
    backgroundColor:"#EDF0F5"
  },
  plus: {
    fontSize: 20
  },
  moreInfoBtn: {
    alignItems: 'flex-end',
    marginRight: 6,
    marginBottom: 6
  },
  request: {
    position: 'absolute',
    right: -6,
    backgroundColor:"#19647E",
    //#0fbf61
    padding: 10
  },
  requestText: {
    color:"white",
    fontWeight:"bold"
  }
  
});



export default Ride;