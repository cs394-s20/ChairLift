import React, { Component, useState, useEffect} from 'react';
import Ride from './Ride.js';
import db from './db.js';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Card } from 'native-base';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: '100%',
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
//   }));



const RideList = ({dataState}) => {
    var rides = [];
    if (dataState.data.rides) {
        var temp = Object.values(dataState.data.rides);
        for (var i=0; i<temp.length; i++){
          if (temp[i].seatsLeft > 0){
            rides.push(temp[i]);
          }
        }
    }

    return (
      <Container style={styles.container}>
        <Content>
          <List>
          {
          rides.map((ride,index) => (
              <ListItem key={index} style={styles.item}> 
                <Ride ride={ride}></Ride>
              </ListItem>   )
          ) 
          }   
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

export default RideList; 

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();