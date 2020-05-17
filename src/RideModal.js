import React, { Component, useState, useEffect} from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const RideModal = ({ modalVisibleState, rideObj }) => {
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleState.modalVisible}>

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.details} >Ride Details</Text>
            <TouchableHighlight
                style={styles.closeButton}
                onPress={() => {
                  modalVisibleState.setModalVisible(!modalVisibleState.modalVisible);
                }}
              >
                <Icon type="FontAwesome" name="remove"/>
              </TouchableHighlight>
                <Card transparent>
                    <CardItem style={styles.cardItems}>
                        <Grid>
                          <Col style = {styles.user}>
                            <Text><Icon style = {styles.userIcon} type="FontAwesome" name="user"/></Text>
                            <Text style={styles.phone}>
                              <Icon style={styles.phoneIcon} type="FontAwesome" name="phone" />
                              <Text>{rideObj.ride.phoneNum}</Text>
                            </Text>
                          </Col>
                          <Col>
                            <Text style={styles.driverName}>
                              {rideObj.ride.name} 
                            </Text>
                            <Text>
                              <Icon style = {styles.star} type="FontAwesome" name="star"/><Icon style = {styles.star} type="FontAwesome" name="star"/><Icon style = {styles.star} type="FontAwesome" name="star"/>
                            </Text>
                          </Col>
                        </Grid>
                      <Body style = {styles.car}>
                          <Text>Honda Accord, white</Text>
                      </Body>
                    </CardItem>
                </Card>
                <Card transparent>
                    <CardItem style={styles.cardItems}>
                      <Body>
                      <Text> (0.5 mi away) <Icon style={styles.arrow} type="FontAwesome" name="arrow-right" /> {rideObj.ride.endLoc}</Text> 
                      </Body>
                    </CardItem>
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
                    </CardItem>
                </Card>
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
  });
  
  export default RideModal;