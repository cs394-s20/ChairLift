import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ride from './src/Ride.js';
import RideList from './src/RideList.js';
import db from './src/db.js';
import {Header, Title} from 'native-base';

export default function App() {

  const [rides, setRides] = useState({});

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
        <Title>Welcome to Chairlift!</Title>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    backgroundColor: '#D7DAE5',
    width: "100%"
  }
});
