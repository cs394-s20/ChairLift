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

const RideList = ({ridesState}) => {

    var rides = [];
    if (ridesState.rides) {
        rides = Object.values(ridesState.rides);
    }

    return (
      <Container style={styles.container}>
        <Content>
          <List>
          {
          rides.map(ride => (
              <ListItem style={styles.item}> 
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