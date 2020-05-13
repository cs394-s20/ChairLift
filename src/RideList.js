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
      <Container>
        <Content>
          <List>
          {

            rides.map(ride => (
                <ListItem> 
                  <Ride ride={ride}></Ride>
                </ListItem>   )
            ) 
          }   
          </List>
        </Content>
      </Container>
    )

}

export default RideList; 