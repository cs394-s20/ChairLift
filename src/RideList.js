import React, { Component, useState, useEffect} from 'react';
import Ride from './Ride.js';
import db from './db.js';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Card, Picker, Icon } from 'native-base';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: '100%',
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
//   }));

const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();
  return new Date(year, month, date);
}

const Rides = ({rides, resortFilter}) => {

  if (rides.filter(ride => resortFilter == "all" ? true : ride.endLoc == resortFilter).length == 0)
    return (
      <Content>
        <Text style={styles.noRides}> No rides found </Text>
      </Content>
    )
  else 
    return (
      <Content>
          <List>
          {
          rides.filter(ride => resortFilter == "all" ? true : ride.endLoc == resortFilter)
              .map((ride,index) => (
              <ListItem key={index} style={styles.item}> 
                <Ride ride={ride}></Ride>
              </ListItem>   )
          ) 
          }   
          </List>
        </Content>

    )

}

const RideList = ({dataState}) => {
    const [resortFilter, setResortFilter] = useState("all");
    var resortList = [];
    var rides = [];
    if (dataState.data.rides) {
        resortList = Object.values(dataState.data["resorts"]);
        var temp = Object.values(dataState.data.rides);
        for (var i=0; i<temp.length; i++){
          var departDateString = temp[i].departDate
          var departDate = new Date(departDateString)
          if (temp[i].seatsLeft > 0 && getCurrentDate() < departDate){
            rides.push(temp[i]);
          }
        }
    }

    const onChangeResort = (selectedResortFilter) => {
      setResortFilter(selectedResortFilter);
    };

    return (
      <Container style={styles.container}>
        <Picker mode="dropdown"
          iosIcon={<Icon name="arrow-down" />} placeholder="Select your resort"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={resortFilter}
          onValueChange={onChangeResort}
          >
            <Picker.Item label="All Resorts" value="all"/>
            {resortList.map(resort => (<Picker.Item label={resort} value={resort}/>))}
        </Picker>
        <Rides rides={rides} resortFilter={resortFilter}/>
      </Container>
    )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b2b9bf",
    width: "100%"

  },
  item: {
    borderBottomWidth: 0,
    paddingBottom: 2,
    backgroundColor: "transparent"
  },
  noRides: {
    marginLeft: 13
  }

});

export default RideList; 

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();