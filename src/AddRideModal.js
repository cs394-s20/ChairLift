import React, { Component, useState, useEffect} from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body, Item, Input } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const AddRideModal = ({ ridesState, addRideModalVisibleState }) => {
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
                <Input placeholder='First Name'/>
              </Item>
              <Item>
                <Input placeholder='Last Name'/>
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