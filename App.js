import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ride from './src/Ride.js';
import RideList from './src/RideList.js';
import AddRideModal from './src/AddRideModal.js';
import db from './src/db.js';
import {Header, Title, Button} from 'native-base';

export default function App() {

  const [rides, setRides] = useState({});
  const [addRideModalVisible, setAddRideModalVisible] = useState(false);


  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) {
        setRides(snap.val());
      } 
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);
  
  return (
    <View style={styles.main}>
      <Header style={styles.header}>
        <Title style={styles.title}>Chairlift</Title>
        <Button style={styles.addRideModal} onPress={() => {setAddRideModalVisible(true)}}>
          <Text>Add Ride</Text>
        </Button>
        <AddRideModal ridesState={{rides, setRides}} addRideModalVisibleState = {{ addRideModalVisible, setAddRideModalVisible}}/> 
      </Header>
      <View style={styles.container}>
        <RideList style={styles.backdrop} ridesState={{rides, setRides}}></RideList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 32,
     color: "#EDF0F5"

  },

  header: {
    backgroundColor: '#19647E',
    width: "100%"
  }, 

  addRideModal: {
    width: "100%",
    backgroundColor:"#EDF0F5"
  },
});
