import React, { Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body, Button } from 'native-base';
import RideModal from './RideModal';
import db from './db.js';
import firebase from 'firebase/app';
import 'firebase/database';

const MyRide = ({ride, dataState}) => {
    var passengers = []
    if(ride.requested){
      passengers = Object.keys(ride.requested).map(function(key) {
        return [String(key), ride.requested[key]];
      });}
    const data = dataState.data
    const [modalVisible, setModalVisible] = useState(false);
    const model_ride = {'ride': ride}

    return (
      <View style={styles.container}>
        <RideModal modalVisibleState = { { modalVisible, setModalVisible } } rideObj = {model_ride}></RideModal>
        <CardItem header bordered style={styles.cardItems}>
          <Body>
          <Text style={styles.title}>
            {ride.name}
          </Text> 
          <Text> (0.5 mi away) <Icon style={styles.arrow} type="FontAwesome" name="arrow-right" /> {ride.endLoc}</Text> 
          </Body>
          
        </CardItem>
        <CardItem style={styles.cardItems}>
          <Body>
            <Text>
              Departure: {ride.departTime}, {ride.departDate}
            </Text>
          </Body>
          <Body>
            <Text>
              Return: {ride.departTime}, {ride.departDate}
            </Text>
          </Body>
        </CardItem>
        <CardItem style={styles.cardItems}>
          <Body>
            <Text>Seats Remaining: {ride.seatsLeft} </Text>
          </Body>
          
          <TouchableOpacity style={styles.moreInfoBtn} onPress={() => {setModalVisible(true)}}>
              <Text><Icon style={styles.plus} type="FontAwesome" name="plus" /></Text>
          </TouchableOpacity>
        </CardItem>
        <CardItem style={styles.cardItems}>
            <Body>
                <Text>Note: {ride.desc}</Text>
            </Body>
        </CardItem>
        <CardItem>
          <Body>
          <Text>Passengers: </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
          {
            passengers.map( passenger => (
                <Text>
                  {data.users[passenger[0]].profile.name + " " + data.users[passenger[0]].profile.phoneNum}
                </Text>
              
            ))
          }
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



export default MyRide;