import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ride from './src/Ride.js';
import RideList from './src/RideList.js';
import db from './src/db.js';

export default function App() {

  const [rides, setRides] = useState({});

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) {
        setRides(snap.val());
        console.log("loaded this: ", snap.val());
      } 
    }
    db.on('value', handleData, error => alert(error));
    console.log("here is rides", rides);
    return () => { db.off('value', handleData); };
  }, []);

  console.log("rides: ", rides);
  
  return (
    <View style={styles.container}>
      <Text>Welcome to Chairlift!</Text>
      <RideList ridesState={{rides, setRides}}></RideList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
