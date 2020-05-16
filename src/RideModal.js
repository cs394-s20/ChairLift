import React, { Component, useState, useEffect} from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body } from 'native-base';

const RideModal = ({ modalVisibleState, rideObj }) => {
    console.log("rideObj:", rideObj);
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleState.modalVisible}>

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Card transparent>
                    <CardItem style={styles.cardItems}>
                        <Body style={styles.profile}>
                            <Text><Icon type="FontAwesome" name="user"/></Text>
                            <Text>{rideObj.ride.name} <Icon style = {styles.star} type="FontAwesome" name="star"/><Icon style = {styles.star} type="FontAwesome" name="star"/><Icon style = {styles.star} type="FontAwesome" name="star"/></Text>
                        </Body>
                        <Body>
                            <Text>Honda Accord, white</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card transparent>
                    <CardItem style={styles.cardItems}>
                        <Body>
                            <Text>Departure: {rideObj.ride.departTime}, {rideObj.ride.departDate}</Text>
                        </Body>
                        <Body>
                            <Text>Return: {rideObj.ride.departTime}, {rideObj.ride.departDate}</Text>
                        </Body>
                    </CardItem>
                    <CardItem style={styles.cardItems}>
                        <Body>
                            <Text>Seats Remaining: {rideObj.ride.seatsLeft} </Text>
                        </Body>
                    </CardItem>
                    <CardItem style={styles.cardItems}>
                        <Body>
                            <Text>Note: {rideObj.ride.desc}</Text>
                        </Body>
                        <Body>
                            <Text><Icon style={styles.phone} type="FontAwesome" name="phone" /> {rideObj.ride.phoneNum}</Text>
                        </Body>
                    </CardItem>
                </Card>
  
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#19647E" }}
                onPress={() => {
                  modalVisibleState.setModalVisible(!modalVisibleState.modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Back</Text>
              </TouchableHighlight>
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
      top: 60,
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
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    cardItems: {
        width: "110%",
        backgroundColor:"#EDF0F5",
    },
    phone: {
        fontSize: 18
    },
    star: {
        fontSize: 18
    }
  });
  
  export default RideModal;