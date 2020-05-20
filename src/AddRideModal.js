import React, { Component, useState, useEffect} from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body, Item, Input, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import db from './db.js';
import firebase from 'firebase/app';
import 'firebase/database';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddRideModal = ({ ridesState, navigation }) => {

  const updateJSON = () => {
    var newItemKey = db.push().key;
    var item = {
      "departDate": departDate,
      "departTime": departTime, 
      "desc": desc,
      "endLoc": resort,
      "name": name,
      "phoneNum": phoneNum,
      "returnDate": returnDate,
      "returnTime": returnTime,
      "seatsLeft": seatsLeft,
      "startLoc": departLoc
    };

    const newDB = firebase.database().ref("rides/" + newItemKey).set(item);

    navigation.navigate('Home');
    return;
  }

    const getCurrentDate = () => {
      var date = new Date().getDate();
      var month = new Date().getMonth();
      var year = new Date().getFullYear();
      console.log(date, month, year);
      return new Date(year, month, date);
    }

    const getMaxDate = () => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear() + 1;
      console.log(date, month, year);
      return new Date(year, month, date);
    }

    var maxDate = getMaxDate();
    var currDate = getCurrentDate();
    const [departDate, setDepartDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [departLoc, setDepartLoc] = useState("");
    const [departTime, setDepartTime] = useState("");
    const [resort, setResort] = useState("");
    const [returnTime, setReturnTime] = useState("");
    const [desc, setDesc] = useState("");
    const [seatsLeft, setSeatsLeft] = useState("");
    const [mode, setMode] = useState('date');
    const [showDept, setShowDept] = useState(false);
    const [showReturn, setShowReturn] = useState(false);

    const onChangeDeptDate = (event, selectedDate) => {
      selectedDate = JSON.stringify(selectedDate);
      selectedDate = selectedDate.substring(1,11);
      setDepartDate(selectedDate);
    };

    const onChangeReturnDate = (event, selectedDate) => {
      selectedDate = JSON.stringify(selectedDate);
      selectedDate = selectedDate.substring(1,11);
      setReturnDate(selectedDate);
    };

    const onChangeDeptTime = (event, selectedTime) => {
      selectedTime = JSON.stringify(selectedTime);
      selectedTime = selectedTime.substring(1,11);
      setDepartTime(selectedTime);
    };

    const onChangeReturnTime = (event, selectedTime) => {
      selectedTime = JSON.stringify(selectedTime);
      selectedTime = selectedTime.substring(1,11);
      setReturnTime(selectedTime);
    };

    const showMode = (currentMode,picker) => {
      setShow(true);
      setMode(currentMode);
    };

    const showDatepicker = (picker) => {
      if(picker === 'dept'){
        setShowDept(true);

      }else{
        setShowReturn(true);
      }

      setMode('date');
    };

    const showTimepicker = (picker) => {
      if(picker === 'dept'){
        setShowDept(true);

      }else{
        setShowReturn(true);
      }

      setMode('time');
    };

    return (
      <Container>
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
                <View>
                  <Button onPress={() => showDatepicker('dept')} title="Show date picker!"><Text>{departDate}</Text></Button>
                </View>
                <View>
                  <Button onPress={() => showTimepicker('dept')} title="Show time picker!"><Text>Departure Time</Text></Button>
                </View>
                {showDept && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={currDate}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChangeDeptDate}
                  />
                )}
              </View>
              
              {/*<View><Button onPress={showDatepicker} title="Departure Date"><Text>Departure Date</Text></Button>
              {("dep") && (
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={currDate}
                  mode={'date'}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
              </View>

              <View><Button onPress={showDatepicker} title="Departure Time"><Text>Departure Time</Text></Button>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={currDate}
                  mode={'time'}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
              </View>*/}

              {/*<Item>
                <Input placeholder='Departure Time' onChangeText={(departTime) => {setDepartTime(departTime)}}/>
              </Item>*/}

              <Item>
                <Input placeholder='Resort' onChangeText={(resort) => {setResort(resort)}}/>
              </Item>

              <View>
                <View>
                  <Button onPress={() => showDatepicker('return')} title="Show date picker!"><Text>Return Date</Text></Button>
                </View>
                <View>
                  <Button onPress={() => showTimepicker('return')} title="Show time picker!"><Text>Return Time</Text></Button>
                </View>
                {showReturn && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={currDate}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChangeDeptTime}
                  />
                )}
              </View>

              {/*<View><Button onPress={showDatepicker} title="Departure Date"><Text>Return Date</Text></Button>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={currDate}
                  mode={'date'}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
              </View>

              <View><Button onPress={showDatepicker} title="Return Time"><Text>Return Time</Text></Button>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={currDate}
                  mode={'time'}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
              </View>*/}
              
              {/*<Item>
                <Input placeholder='Return Time' onChangeText={(returnTime) => {setReturnTime(returnTime)}}/>
              </Item>*/}

              <Item>
                <Input placeholder='Trip Description' onChangeText={(desc) => {setDesc(desc)}}/>
              </Item>
              <Item>
                <Input placeholder='Number of Available Seats' onChangeText={(num) => {setSeatsLeft(num)}}/>
              </Item>
              <Button style={styles.centeredView} onPress = { () => updateJSON()}>
                <Text style={styles.text} >Add Ride</Text>
              </Button>
              
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
  });
  
  export default AddRideModal;