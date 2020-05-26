import React, { Component, useState, useEffect} from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body, Item, Input, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import db from './db.js';
import firebase from 'firebase/app';
import 'firebase/database';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddRideModal = ({ route, navigation }) => {

  const { userState } = route.params;

  const updateJSON = (userState) => {
    var newItemKey = db.push().key;
    var item = {
      "departDate": JSON.stringify(departDate).substring(1,11),
      "departTime": JSON.stringify(departTime).substring(12,17), 
      "desc": desc,
      "endLoc": resort,
      "name": name,
      "phoneNum": phoneNum,
      "returnDate": JSON.stringify(returnDate).substring(1,11),
      "returnTime": JSON.stringify(returnTime).substring(12,17),
      "seatsLeft": seatsLeft,
      "startLoc": departLoc
    };

    //push to rides
    firebase.database().ref("rides/" + newItemKey).set(item);

    //push to users driverRides
    firebase.database().ref("users/" + userState.user.currentUser.uid + "/driverRides/" + newItemKey).set(item);    

    navigation.navigate('Home');
    return;
  }

    const getCurrentDate = () => {
      var date = new Date().getDate();
      var month = new Date().getMonth();
      var year = new Date().getFullYear();
      return new Date(year, month, date);
    }

    const getMaxDate = () => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear() + 1;
      return new Date(year, month, date);
    }

    var maxDate = getMaxDate();
    var currDate = getCurrentDate();
    const [departDate, setDepartDate] = useState(currDate);
    const [returnDate, setReturnDate] = useState(currDate);
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [departLoc, setDepartLoc] = useState("");
    const [departTime, setDepartTime] = useState(currDate);
    const [resort, setResort] = useState("");
    const [returnTime, setReturnTime] = useState(currDate);
    const [desc, setDesc] = useState("");
    const [seatsLeft, setSeatsLeft] = useState("");
    const [mode, setMode] = useState('date');
    const [showDeptDate, setShowDeptDate] = useState(false);
    const [showReturnDate, setShowReturnDate] = useState(false);
    const [showDeptTime, setShowDeptTime] = useState(false);
    const [showReturnTime, setShowReturnTime] = useState(false);


    const onChangeDeptDate = (event, selectedDate) => {
      setDepartDate(selectedDate);
    };

    const onChangeReturnDate = (event, selectedDate) => {
      setReturnDate(selectedDate);
    };

    const onChangeDeptTime = (event, selectedTime) => {
      console.log('dept time', selectedTime);
      setDepartTime(selectedTime);
    };

    const onChangeReturnTime = (event, selectedTime) => {
      setReturnTime(selectedTime);
    };

    const showDatepicker = (picker) => {
      if(picker === 'dept'){
        setShowDeptDate(!showDeptDate);

      }else{
        setShowReturnDate(!showReturnDate);
      }
    };

    const showTimepicker = (picker) => {
      if(picker === 'dept'){
        setShowDeptTime(!showDeptTime);

      }else{
        setShowReturnTime(!showReturnTime);
      }
    };



    return (
      <Container>
        <Content>
              <Item>
                <Input placeholder='Name' onChangeText={(name) => {setName(name)}}/>
              </Item>
              <Item>
                <Input placeholder='Phone Number' onChangeText={(num) => {setPhoneNum(num)}}/>
              </Item>
              <Item>
                <Input placeholder='Departure Location' onChangeText={(loc) => {setDepartLoc(loc)}}/>
              </Item>

              <View>
                <View style = {styles.pickerView}>
                    <Button style = {styles.pickerButton} onPress={() => showDatepicker('dept')} title="Show date picker!"><Text style = {styles.pickerText}>Depart Date: {JSON.stringify(departDate).substring(1,11)}</Text></Button>
                </View>
                <View>
                  {showDeptDate && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      timeZoneOffsetInMinutes={0}
                      value={departDate}
                      mode={'date'}
                      is24Hour={true}
                      display="default"
                      onChange={onChangeDeptDate}
                    />
                  )}
                </View>
                <View style = {styles.pickerView}>
                  <Button style = {styles.pickerButton} onPress={() => showTimepicker('dept')} title="Show time picker!"><Text style = {styles.pickerText}>Depart Time: {JSON.stringify(departTime).substring(12,17)} </Text></Button>
                </View>
                <View>
                  {showDeptTime && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      timeZoneOffsetInMinutes={0}
                      value={departTime}
                      mode={'time'}
                      is24Hour={true}
                      display="default"
                      onChange={onChangeDeptTime}
                    />
                  )}
                </View>

              </View>

              {/*<Item>
                <Input placeholder='Departure Time' onChangeText={(departTime) => {setDepartTime(departTime)}}/>
              </Item>*/}

              <Item>
                <Input placeholder='Resort' onChangeText={(resort) => {setResort(resort)}}/>
              </Item>

              <View>
                <View style = {styles.pickerView}>
                  <Button style = {styles.pickerButton} onPress={() => showDatepicker('return')} title="Show date picker!"><Text style = {styles.pickerText}>Return Date: {JSON.stringify(returnDate).substring(1,11)}</Text></Button>
                </View>
                <View>
                  {showReturnDate && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      timeZoneOffsetInMinutes={0}
                      value={returnDate}
                      mode={'date'}
                      is24Hour={true}
                      display="default"
                      onChange={onChangeReturnDate}
                    />
                  )}
                </View>
                <View style = {styles.pickerView}>
                  <Button style = {styles.pickerButton} onPress={() => showTimepicker('return')} title="Show time picker!"><Text style = {styles.pickerText}>Return Time: {JSON.stringify(returnTime).substring(12,17)}</Text></Button>
                </View>
                <View>
                  {showReturnTime && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      timeZoneOffsetInMinutes={0}
                      value={returnTime}
                      mode={'time'}
                      is24Hour={true}
                      display="default"
                      onChange={onChangeReturnTime}
                    />
                  )}
                </View>
              </View>
              {/*<Item>
                <Input placeholder='Return Time' onChangeText={(returnTime) => {setReturnTime(returnTime)}}/>
              </Item>*/}

              <Item>
                <Input placeholder='Trip Description' onChangeText={(desc) => {setDesc(desc)}}/>
              </Item>
              <Item>
                <Input placeholder='Number of Available Seats' onChangeText={(num) => {setSeatsLeft(num)}}/>
              </Item>
              <Button style={styles.centeredView} onPress = { () => updateJSON(userState)}>
                <Text style={styles.text} >Add Ride</Text>
              </Button>
              
              </Content>
          </Container>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      marginTop: 10,
      justifyContent: "center",
      backgroundColor: '#19647E'
    },
    text: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold"
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      top: '11%',
      height: "100%",
      width: "100%",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    closeButton: {
      backgroundColor: "#FFFFFF",
      left: '50%',
      bottom: '2%',
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    cardItems: {
        width: "110%",
        backgroundColor:"#EDF0F5",
    },
    phone: {
        marginTop: '5%',
        fontSize: 13
    },
    phoneIcon: {
        fontSize: 18,
    },
    driverName: {
      fontSize: 18,
      marginBottom: '5%',
    },
    star: {
        fontSize: 15,
    },
    user: {
      marginRight: '-30%'
    },
    userIcon: {
      fontSize: 60,
    },
    details: {
      fontSize: 22,
      marginBottom: '-5%',
      fontWeight: 'bold',
    },
    car: {
      marginRight: '-10%'
    },
    arrow: {
    fontSize: 10
    },
    textBox: {
      width: "100%"
    },
    pickerButton: {
      backgroundColor: "white",
      marginLeft: '2%',
    },
    pickerText: {
      fontSize: 16,
      color: "black"
    },
    pickerView: {
      borderColor: "#D3D3D3",
      borderStyle: "solid",
      borderBottomWidth: 1
    }
  });
  
  export default AddRideModal;