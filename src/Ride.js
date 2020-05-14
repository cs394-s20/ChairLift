import React, { Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body } from 'native-base';

const Ride = (rideObj) => {
    return (
      <Card style={styles.container}>
        <CardItem header bordered style={styles.cardItems}>
          <Text style={styles.title}>
            {rideObj.ride.name}    </Text> 
          <Text>{rideObj.ride.startLoc} (0.5 mi away) <Icon style={styles.arrow} type="FontAwesome"                   name="arrow-right" /> {rideObj.ride.endLoc}</Text> 
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
            <Text>Note: {rideObj.ride.desc} </Text>
          </Body>
          <Body>
            <Text>
            <Icon style={styles.phone} type="FontAwesome" name="phone" /> {rideObj.ride.phoneNum}
            </Text>
          </Body>
        </CardItem>
      </Card> 
        
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
  phone: {
    fontSize: 18
  },
  cardItems: {
    backgroundColor:"#EDF0F5"
    
  }
});



export default Ride;