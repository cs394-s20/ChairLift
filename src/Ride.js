import React, { Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Card } from 'native-base';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       width: '100%'
//     },
//     name: {
//         fontWeight: "bold"
//     }
// }));

const Ride = (rideObj) => {
    return (
      <Card>
            <List>
              <ListItem>
                <Text>
                  {rideObj.ride.name} {rideObj.ride.startLoc} (0.5 mi away) --> {rideObj.ride.endLoc}
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Departure: {rideObj.ride.departTime}, {rideObj.ride.departDate}
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Return: {rideObj.ride.departTime}, {rideObj.ride.departDate}
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Contact: {rideObj.ride.phoneNum}
                </Text>
              </ListItem>
              <ListItem>
                  <Text> Note: {rideObj.ride.desc} </Text>
              </ListItem>
          </List>
            
        </Card> 
        
    )
}



export default Ride;