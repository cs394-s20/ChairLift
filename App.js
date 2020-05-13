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
    <View style={styles.container}>
      <Header style={{width:"100%"}}>
      <Title>Welcome to Chairlift!</Title>
      </Header>
      <RideList style={styles.backdrop} ridesState={{rides, setRides}}></RideList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
