import React, { Component, useState, useEffect} from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body, Item, Input, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import db from './db.js';
import firebase from 'firebase/app';
import 'firebase/database';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RequestedRide from './RequestedRide.js'

const TabDriver = ({dataState, userState}) => {
    const checkRides = () => {
        const driverID = userState.user.currentUser.uid;
        console.log("dataState: ", dataState);
        if (dataState.data.users[driverID]) {
            if (dataState.data.users[driverID].driverRides) {
                console.log(dataState.data.users[driverID].driverRides)
                const driverrides = dataState.data.users[driverID].driverRides;
                console.log(driverrides);
                var rides = Object.values(driverrides);
                return (
                    rides.map((ride,index) => (
                    <ListItem key={index} style={styles.item}> 
                    {console.log(ride)}
                        <RequestedRide ride={ride}></RequestedRide>
                    </ListItem>   ))
                );
            }
        }
        else {
            console.log("no rides");
            return (<ListItem><Text>No listed rides</Text></ListItem>);
        }
    }
    return (
        <Container style={styles.container}>
            <Content>
            <List>
                {checkRides()}   
            </List>
            </Content>
      </Container>
        
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#b2b9bf"
  
    },
    item: {
      borderBottomWidth: 0,
      paddingBottom: 2,
      backgroundColor: "transparent"
    }
  });


export default TabDriver;