import React, { Component, useState, useEffect} from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body, Item, Input, DatePicker } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const AddRideModal = ({ ridesState, addRideModalVisibleState }) => {

    const getCurrentDate = () => {

      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      return new Date(year, month, date);
    }
    var currDate = getCurrentDate();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={addRideModalVisibleState.addRideModalVisible}>

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.details} >Add Ride</Text>
            <TouchableHighlight
                style={styles.closeButton}
                onPress={() => {
                  addRideModalVisibleState.setAddRideModalVisible(!addRideModalVisibleState.addRideModalVisible);
                }}
              >
                <Icon type="FontAwesome" name="remove"/>
              </TouchableHighlight>
              <Item>
                <Input placeholder='Name'/>
              </Item>
              <Item>
                <Input placeholder='Phone Number'/>
              </Item>
              <Item>
                <Input placeholder='Departure Location'/>
              </Item>
              
              <DatePicker
                id="startDate"
                defaultDate={currDate}
                minimumDate={currDate}
                placeHolderText="Select departure date"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={(startDate) => {setStartDate(startDate)}}
                >
              </DatePicker>
              <Item>
                <Input placeholder='Departure Time'/>
              </Item>
              <Item>
                <Input placeholder='Resort'/>
              </Item>
              <DatePicker
                id="endDate"
                defaultDate={currDate}
                minimumDate={currDate}
                placeHolderText="Select return date"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={(endDate) => {setEndDate(endDate)}}
                >
              </DatePicker>
              <Item>
                <Input placeholder='Return Time'/>
              </Item>
              <Item>
                <Input placeholder='Trip Description'/>
              </Item>
              <Item>
                <Input placeholder='Number of Available Seats'/>
              </Item>
            </View>
          </View>
        </Modal>
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