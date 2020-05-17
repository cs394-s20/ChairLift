import React, { Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body } from 'native-base';
import RideModal from './RideModal';

const Ride = (rideObj) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <TouchableOpacity style={styles.container} onPress={() => {setModalVisible(true)}}>
        <RideModal modalVisibleState = { { modalVisible, setModalVisible } } rideObj = {rideObj}></RideModal>
        <CardItem header bordered style={styles.cardItems}>
          <Text style={styles.title}>
            {rideObj.ride.name}    
            </Text> 
          <Text> (0.5 mi away) <Icon style={styles.arrow} type="FontAwesome" name="arrow-right" /> {rideObj.ride.endLoc}</Text> 
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
            <Text>Seats Remaining: {rideObj.ride.seatsLeft} </Text>
        </CardItem>
      </TouchableOpacity>
        
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
    
  }
});



export default Ride;