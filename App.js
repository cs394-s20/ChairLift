import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ride from './src/Ride.js';
import RideList from './src/RideList.js';
import AddRideModal from './src/AddRideModal.js';
import db from './src/db.js';
import {Header, Title, Button, Icon} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


function HomeScreen({ navigation }) {
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
        <Button style={styles.addRideModal} onPress={() => navigation.navigate('AddRideModal')}>
          <Text><Icon type="FontAwesome" name="plus" /><Icon type="FontAwesome" name="car" /></Text>
        </Button>
        {/* <AddRideModal ridesState={{rides, setRides}} addRideModalVisibleState = {{ addRideModalVisible, setAddRideModalVisible}}/>  */}
      </Header>
      <View style={styles.container}>
        <RideList style={styles.backdrop} ridesState={{rides, setRides}}></RideList>
      </View>
    </View>
  )
}

function AddRide() {
  return (
  <Text>Add a ride Here</Text>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddRideModal" component={AddRideModal} options={{ title: 'Add a New Ride' }} />
      </Stack.Navigator>
    </NavigationContainer>
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
    // width: "10%",
    position: 'absolute',
    right: 16,
    backgroundColor:"#484848"
  }
});
