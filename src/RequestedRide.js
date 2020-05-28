import React, { Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body, Button } from 'native-base';
import RideModal from './RideModal';
import db from './db.js';
import firebase from 'firebase/app';
import 'firebase/database';

const RequestedRide = (rideObj, userObj) => {

    return (
      <View style={styles.container}>
        <CardItem header bordered style={styles.cardItems}>
          <Body>
          <Text style={styles.title}>
              {/* have to change the name to passenger's name */}
            Passenger Name
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
        <CardItem style={styles.cardItems}>
            <Body>
                <Text>Note: {rideObj.ride.desc}</Text>
            </Body>
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



export default RequestedRide;