import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import db from './src/db.js';

export default function App() {

  useEffect(() => {
    console.log("hello in useeffect");
    const handleData = snap => {
      if (snap.val()) console.log(snap.val());
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);
  
  console.log("this is app");

  return (
    <View style={styles.container}>
      <Text>Welcome to Chairlift! pls work</Text>
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
