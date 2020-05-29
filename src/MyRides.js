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

const MyRides = ({route, navigation, initialState}) => {
    const [driverRides, setDriverRides] = useState(null);
    
    const [data, setData] = useState({});

    useEffect(() => {
        const handleData = snap => {
          if (snap.val()) {
            setData(snap.val());
          } 
        }
        db.on('value', handleData, error => alert(error));
        return () => { db.off('value', handleData); };
      }, []);

    return (
        <Container>
            <Content>
                <Tabs>
                    <Tab heading = "TabDriver">
                        <TabDriver dataState={{data, setData}}/>
                    </Tab>
                    <Tab heading = "TabPassenger">
                        <TabPassenger rides={{driverRides, setDriverRides}}/>
                    </Tab>
                </Tabs>
            </Content>
        </Container>
        
    )
}

export default MyRides;