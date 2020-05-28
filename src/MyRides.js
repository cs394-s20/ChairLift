import React, { Component, useState, useEffect} from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Container, Header, Content, List, ListItem, Card, CardItem, Icon, Body, Item, Input, Button, Tabs, Tab} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import db from './db.js';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabDriver from './TabDriver';
import TabPassenger from './TabPassenger';

const MyRides = ({route, navigation}) => {
    const { dataState } = route.params;
    const { userState } = route.params;
    const driverID = userState.user.currentUser.uid;
    const [driverRides, setDriverRides] = useState(null);

    if (dataState.data.users.driverID) {
        if (dataState.data.users.driverID.driverRides) {
             setDriverRides(dataState.data.users.driverID.driverRides);
        }
    }
    console.log("driverID", driverID);
    console.log(dataState.data.users.driverID);
    console.log(driverRides);
    return (
        <Container>
            <Content>
                <Tabs>
                    <Tab heading = "TabDriver">
                        <TabDriver rides={{driverRides, setDriverRides}} userObj={userState} />
                    </Tab>
                    <Tab heading = "TabPassenger">
                        <TabPassenger rides={{driverRides, setDriverRides}} userObj={userState}/>
                    </Tab>
                </Tabs>
            </Content>
        </Container>
        
    )
}

export default MyRides;