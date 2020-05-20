import React, { Component, useState, useEffect} from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body, Item, Input, DatePicker, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import db from './db.js';
import firebase from 'firebase/app';
import 'firebase/database';

const AddRideModal = ({ ridesState }) => {

  const updateJSON = () => {
    var newItemKey = db.push().key;
    var item = {
      "departDate": startDate,
      "departTime": departTime, 
      "desc": desc,
      "endLoc": resort,
      "name": name,
      "phoneNum": phoneNum,
      "returnDate": endDate,
      "returnTime": returnTime,
      "seatsLeft": seatsLeft,
      "startLoc": departLoc
    };

    console.log(item);
    const newDB = firebase.database().ref("rides/" + newItemKey).set(item);
    return;
  }

    const getCurrentDate = () => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
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
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [departLoc, setDepartLoc] = useState("");
    const [departTime, setDepartTime] = useState("");
    const [resort, setResort] = useState("");
    const [returnTime, setReturnTime] = useState("");
    const [desc, setDesc] = useState("");
    const [seatsLeft, setSeatsLeft] = useState("");

    return (
      <Container>
          <View style={styles.centeredView}>
            <Text style={styles.details} >Add Ride</Text>
              <Item>
                <Input placeholder='Name' onChangeText={(name) => {setName(name)}}/>
              </Item>
              <Item>
                <Input placeholder='Phone Number' onChangeText={(num) => {setPhoneNum(num)}}/>
              </Item>
              <Item>
                <Input placeholder='Departure Location' onChangeText={(loc) => {setDepartLoc(loc)}}/>
              </Item>
              
              <DatePicker
                defaultDate={new Date(2020, 5, 18)}
                minimumDate={new Date(2020, 5, 18)}
                maximumDate={new Date(2021, 5, 18)}
                placeHolderText="Select departure date"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={(startDate) => {setStartDate(startDate)}}
                >
              </DatePicker>
              <Item>
                <Input placeholder='Departure Time' onChangeText={(departTime) => {setDepartTime(departTime)}}/>
              </Item>
              <Item>
                <Input placeholder='Resort' onChangeText={(resort) => {setResort(resort)}}/>
              </Item>
              <DatePicker
                defaultDate={new Date(2020, 5, 18)}
                minimumDate={new Date(2020, 5, 18)}
                placeHolderText="Select return date"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={(endDate) => {setEndDate(endDate)}}
                >
              </DatePicker>
              <Item>
                <Input placeholder='Return Time' onChangeText={(returnTime) => {setReturnTime(returnTime)}}/>
              </Item>
              <Item>
                <Input placeholder='Trip Description' onChangeText={(desc) => {setDesc(desc)}}/>
              </Item>
              <Item>
                <Input placeholder='Number of Available Seats' onChangeText={(num) => {setSeatsLeft(num)}}/>
              </Item>

              <Button onPress = { () => updateJSON()}>
                <Text>Add Ride</Text>
              </Button>
            </View>
          </Container>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
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